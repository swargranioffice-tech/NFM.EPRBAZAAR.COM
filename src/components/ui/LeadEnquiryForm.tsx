import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, MessageCircle, Copy, Check } from 'lucide-react';
import { EXACT_EIGHT_APPLICANT_OPTIONS } from '../../data/applicantTypesData';
import { INDIAN_STATES_AND_UTS } from '../../data/indianStates';
import { trackEnquiryConversion } from '../../utils/analytics';

export type MetalCategoryOption =
  | 'Aluminium'
  | 'Copper'
  | 'Zinc'
  | 'Mixed Non-Ferrous Metals'
  | 'Other/Not Sure';

export const METAL_CATEGORY_OPTIONS: MetalCategoryOption[] = [
  'Aluminium',
  'Copper',
  'Zinc',
  'Mixed Non-Ferrous Metals',
  'Other/Not Sure',
];

const WHATSAPP_TARGET_DIGITS = (
  import.meta.env?.VITE_WHATSAPP_REDIRECT_NUMBER || '917439103014'
).replace(/[^\d]/g, '') || '917439103014';

interface LeadEnquiryFormProps {
  defaultApplicantType?: string;
  defaultMetalCategory?: MetalCategoryOption;
  pageSourceLabel?: string;
  heading?: string;
  description?: string;
  submitLabel?: string;
  compact?: boolean;
  onSuccessSubmitted?: (enquiryId: string) => void;
}

interface FormFields {
  fullName: string;
  companyName: string;
  mobile: string;
  email: string;
  state: string;
  city: string;
  applicantType: string;
  metalCategory: MetalCategoryOption;
  quantity: string;
  enquiryDetails: string;
  consentAccepted: boolean;
  website: string; // Honeypot field for spam protection
}

interface SubmissionResult {
  enquiryId: string;
  submittedAt?: string;
  notificationStatus: 'sent' | 'failed' | 'provider_unconfigured' | 'queued' | 'whatsapp_handoff';
  message: string;
  whatsappUrl: string;
  formattedMessage: string;
  autoDiverting: boolean;
}

function formatEnquiryForWhatsApp(fields: FormFields, enquiryId: string, pageSource: string): string {
  return [
    '*EPR BAZAAR — Non-Ferrous Metal EPR Enquiry*',
    `Ref: ${enquiryId}`,
    `Name: ${fields.fullName.trim()}`,
    `Company: ${fields.companyName.trim()}`,
    `Mobile: ${fields.mobile.trim()}`,
    `Email: ${fields.email.trim()}`,
    `Location: ${fields.city.trim()}, ${fields.state.trim()}`,
    `Applicant Type: ${fields.applicantType}`,
    `Metal Category: ${fields.metalCategory}`,
    `Quantity: ${fields.quantity.trim()}`,
    `Page: ${pageSource}`,
    `Details: ${fields.enquiryDetails.trim() || 'Not specified'}`,
  ].join('\n');
}

function buildWhatsAppClickToChatUrl(formattedMessage: string): string {
  return `https://wa.me/${WHATSAPP_TARGET_DIGITS}?text=${encodeURIComponent(formattedMessage)}`;
}

/**
 * Unified B2B Lead Capture Form:
 * 1. Validates fields cleanly and persists via POST /api/enquiries when Node backend is active.
 * 2. Gracefully falls back if deployed as static bundle without dropping leads.
 * 3. Diverts directly to WhatsApp (+91 74391 03014) on top-level live browsers and provides
 *    an accessible one-click WhatsApp link + copyable summary inside embedded previews.
 */
export function LeadEnquiryForm({
  defaultApplicantType = EXACT_EIGHT_APPLICANT_OPTIONS[0].exactOptionLabel,
  defaultMetalCategory = 'Aluminium',
  pageSourceLabel,
  heading = 'Request Non-Ferrous Metal EPR Consultation',
  description = 'Share your product, import, or recycling details. Submitting records your enquiry and diverts directly to WhatsApp (+91 74391 03014).',
  submitLabel = 'Submit & Send via WhatsApp',
  compact = false,
  onSuccessSubmitted,
}: LeadEnquiryFormProps) {
  const [fields, setFields] = useState<FormFields>({
    fullName: '',
    companyName: '',
    mobile: '',
    email: '',
    state: 'West Bengal',
    city: '',
    applicantType: defaultApplicantType,
    metalCategory: defaultMetalCategory,
    quantity: '',
    enquiryDetails: '',
    consentAccepted: false,
    website: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setFields((prev) => ({
      ...prev,
      applicantType: defaultApplicantType,
    }));
  }, [defaultApplicantType]);

  useEffect(() => {
    setFields((prev) => ({
      ...prev,
      metalCategory: defaultMetalCategory,
    }));
  }, [defaultMetalCategory]);

  const validateClient = (): boolean => {
    const next: Partial<Record<keyof FormFields, string>> = {};
    if (fields.fullName.trim().length < 2) next.fullName = 'Full Name is required.';
    if (fields.companyName.trim().length < 2) next.companyName = 'Company Name is required.';
    const digits = fields.mobile.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) {
      next.mobile = 'Enter a valid 10–15 digit mobile number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = 'Enter a valid business email address.';
    }
    if (!fields.state.trim()) next.state = 'Select your state or union territory.';
    if (fields.city.trim().length < 2) next.city = 'Enter your city.';
    if (fields.quantity.trim().length < 1) {
      next.quantity = 'Enter estimated monthly or annual quantity (e.g., 50 MT/year).';
    }
    if (!fields.consentAccepted) {
      next.consentAccepted = 'Please confirm privacy and communication consent before submitting.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validateClient()) return;

    setIsSubmitting(true);
    const pageSource =
      pageSourceLabel ||
      `${window.location.pathname}${window.location.hash || ''}`;

    let enquiryId = `EPR-WA-${Date.now().toString(36).toUpperCase()}`;
    let submittedAt: string | undefined;
    let notificationStatus: SubmissionResult['notificationStatus'] = 'whatsapp_handoff';
    let backendMessage = 'Enquiry prepared for WhatsApp (+91 74391 03014).';

    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 4500);
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          ...fields,
          pageSource,
        }),
      });
      window.clearTimeout(timeout);

      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = (await response.json()) as {
          ok?: boolean;
          enquiryId?: string;
          submittedAt?: string;
          notificationStatus?: SubmissionResult['notificationStatus'];
          message?: string;
          error?: string;
          validationErrors?: Partial<Record<keyof FormFields, string>>;
        };

        if (!response.ok || !data.ok) {
          if (data.validationErrors) {
            setErrors(data.validationErrors);
            setServerError(data.error || 'Please review the highlighted fields.');
            setIsSubmitting(false);
            return;
          }
          if (response.status === 429) {
            setServerError(data.error || 'Too many submissions. Please try again in a few minutes.');
            setIsSubmitting(false);
            return;
          }
        } else {
          enquiryId = data.enquiryId || enquiryId;
          submittedAt = data.submittedAt;
          notificationStatus = data.notificationStatus || 'whatsapp_handoff';
          backendMessage = data.message || `Enquiry ${enquiryId} saved.`;
        }
      }
    } catch {
      // If hosted on static-only Apache/CDN without Node backend, proceed directly to WhatsApp handoff
    }

    try {
      const today = new Date().toISOString().slice(0, 10);
      localStorage.setItem('eprbazaar_nfm_submitted_date', today);
    } catch {
      // Ignore storage restrictions
    }

    const formattedMessage = formatEnquiryForWhatsApp(fields, enquiryId, pageSource);
    const whatsappUrl = buildWhatsAppClickToChatUrl(formattedMessage);

    let isTopLevelWindow = false;
    try {
      isTopLevelWindow = window.self === window.top;
    } catch {
      isTopLevelWindow = false;
    }

    setResult({
      enquiryId,
      submittedAt,
      notificationStatus,
      message: `${backendMessage} Click below if WhatsApp does not open automatically.`,
      whatsappUrl,
      formattedMessage,
      autoDiverting: isTopLevelWindow,
    });

    trackEnquiryConversion(fields.applicantType, fields.metalCategory, pageSource);
    if (onSuccessSubmitted) {
      onSuccessSubmitted(enquiryId);
    }

    setIsSubmitting(false);

    // On standalone live domain (not inside iframe preview), automatically divert to WhatsApp
    if (isTopLevelWindow) {
      window.setTimeout(() => {
        window.location.assign(whatsappUrl);
      }, 600);
    }
  };

  const handleCopyMessage = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.formattedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  if (result) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#14532D]" aria-hidden="true" />
          <div>
            <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
              Enquiry Ready · {result.enquiryId}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
              {result.autoDiverting
                ? 'Redirecting to WhatsApp (+91 74391 03014) with your enquiry details...'
                : result.message}
            </p>
            {result.submittedAt ? (
              <p className="mt-1 text-xs text-slate-500">
                Timestamp: {result.submittedAt} (IST) · Category: {fields.applicantType}
              </p>
            ) : null}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-[#F5F8F6] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D] mb-2">
            Pre-filled WhatsApp Payload (+91 74391 03014)
          </p>
          <pre className="whitespace-pre-wrap font-mono text-xs text-slate-700 leading-relaxed">
            {result.formattedMessage}
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={result.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#14532D] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>Open WhatsApp (+91 74391 03014)</span>
          </a>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0B1F3A] hover:bg-slate-50"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#14532D]" aria-hidden="true" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Copy Details</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setResult(null);
              setErrors({});
              setServerError(null);
            }}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50"
          >
            Edit / New Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold text-[#0B1F3A]">{heading}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>

      {serverError ? (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="lead-website-trap">Leave this field empty</label>
          <input
            id="lead-website-trap"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={(e) => setFields({ ...fields, website: e.target.value })}
          />
        </div>

        <div className={`grid grid-cols-1 gap-4 ${compact ? 'sm:grid-cols-2' : 'md:grid-cols-2'}`}>
          <div>
            <label htmlFor="lead-fullname" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              Full Name *
            </label>
            <input
              id="lead-fullname"
              type="text"
              required
              value={fields.fullName}
              onChange={(e) => setFields({ ...fields, fullName: e.target.value })}
              placeholder="Authorized contact name"
              className="min-h-[44px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            />
            {errors.fullName ? <p className="mt-1 text-xs text-red-700">{errors.fullName}</p> : null}
          </div>

          <div>
            <label htmlFor="lead-company" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              Company Name *
            </label>
            <input
              id="lead-company"
              type="text"
              required
              value={fields.companyName}
              onChange={(e) => setFields({ ...fields, companyName: e.target.value })}
              placeholder="Registered business entity"
              className="min-h-[44px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            />
            {errors.companyName ? <p className="mt-1 text-xs text-red-700">{errors.companyName}</p> : null}
          </div>

          <div>
            <label htmlFor="lead-mobile" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              Mobile *
            </label>
            <input
              id="lead-mobile"
              type="tel"
              required
              value={fields.mobile}
              onChange={(e) => setFields({ ...fields, mobile: e.target.value })}
              placeholder="+91 98XXXXXXXX"
              className="min-h-[44px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            />
            {errors.mobile ? <p className="mt-1 text-xs text-red-700">{errors.mobile}</p> : null}
          </div>

          <div>
            <label htmlFor="lead-email" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              Email *
            </label>
            <input
              id="lead-email"
              type="email"
              required
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
              placeholder="compliance@company.in"
              className="min-h-[44px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-700">{errors.email}</p> : null}
          </div>

          <div>
            <label htmlFor="lead-state" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              State *
            </label>
            <select
              id="lead-state"
              value={fields.state}
              onChange={(e) => setFields({ ...fields, state: e.target.value })}
              className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            >
              {INDIAN_STATES_AND_UTS.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {errors.state ? <p className="mt-1 text-xs text-red-700">{errors.state}</p> : null}
          </div>

          <div>
            <label htmlFor="lead-city" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              City *
            </label>
            <input
              id="lead-city"
              type="text"
              required
              value={fields.city}
              onChange={(e) => setFields({ ...fields, city: e.target.value })}
              placeholder="e.g. Kolkata, Mumbai, Delhi"
              className="min-h-[44px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            />
            {errors.city ? <p className="mt-1 text-xs text-red-700">{errors.city}</p> : null}
          </div>

          <div>
            <label htmlFor="lead-applicant-type" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              Applicant Type *
            </label>
            <select
              id="lead-applicant-type"
              value={fields.applicantType}
              onChange={(e) => setFields({ ...fields, applicantType: e.target.value })}
              className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            >
              {EXACT_EIGHT_APPLICANT_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.exactOptionLabel}>
                  {opt.exactOptionLabel}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="lead-metal-category" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              Metal Category *
            </label>
            <select
              id="lead-metal-category"
              value={fields.metalCategory}
              onChange={(e) =>
                setFields({ ...fields, metalCategory: e.target.value as MetalCategoryOption })
              }
              className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            >
              {METAL_CATEGORY_OPTIONS.map((metal) => (
                <option key={metal} value={metal}>
                  {metal}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="lead-quantity" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
            Monthly / Annual Quantity (MT) *
          </label>
          <input
            id="lead-quantity"
            type="text"
            required
            value={fields.quantity}
            onChange={(e) => setFields({ ...fields, quantity: e.target.value })}
            placeholder="e.g. 25 MT / Month or 300 MT / Year"
            className="min-h-[44px] w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
          />
          {errors.quantity ? <p className="mt-1 text-xs text-red-700">{errors.quantity}</p> : null}
        </div>

        <div>
          <label htmlFor="lead-details" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
            Enquiry Details
          </label>
          <textarea
            id="lead-details"
            rows={2}
            value={fields.enquiryDetails}
            onChange={(e) => setFields({ ...fields, enquiryDetails: e.target.value })}
            placeholder="Describe Schedule X products, HS codes, CPCB portal stage, or EPR certificate requirement..."
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
          />
        </div>

        <div>
          <label className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={fields.consentAccepted}
              onChange={(e) => setFields({ ...fields, consentAccepted: e.target.checked })}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#14532D] focus:ring-[#14532D]"
            />
            <span>
              I authorize EPR Bazaar (Nyanvi Ecoclean Private Limited) to record this compliance
              enquiry and open WhatsApp (+91 74391 03014) to transmit the details. Selection does not
              imply automatic legal eligibility determination.
            </span>
          </label>
          {errors.consentAccepted ? (
            <p className="mt-1 text-xs text-red-700">{errors.consentAccepted}</p>
          ) : null}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
          <p className="text-[11px] text-slate-500">
            Diverts on submit to EPR Bazaar WhatsApp (+91 74391 03014).
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#14532D] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534] disabled:opacity-60 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>{isSubmitting ? 'Preparing WhatsApp...' : submitLabel}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
