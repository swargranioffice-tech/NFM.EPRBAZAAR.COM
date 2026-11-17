import { useState } from 'react';
import { ArrowRight, Check, FileText, Info } from 'lucide-react';
import { EXACT_EIGHT_APPLICANT_OPTIONS } from '../../data/applicantTypesData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';
import { LeadEnquiryForm } from '../ui/LeadEnquiryForm';

interface ApplicantTypesSectionProps {
  onNavigateToApplicantPage: (slug: string) => void;
}

/**
 * Displays the exact eight CPCB Non-Ferrous Metal EPR Applicant Type options,
 * an interactive "Check Your Applicant Type" informational explorer (strictly without
 * automated legal eligibility determination), links to all 8 dedicated SEO pages,
 * and an embedded applicant verification enquiry form.
 */
export function ApplicantTypesSection({
  onNavigateToApplicantPage,
}: ApplicantTypesSectionProps) {
  const [selectedId, setSelectedId] = useState<string>(EXACT_EIGHT_APPLICANT_OPTIONS[0].id);
  const current =
    EXACT_EIGHT_APPLICANT_OPTIONS.find((item) => item.id === selectedId) ??
    EXACT_EIGHT_APPLICANT_OPTIONS[0];

  return (
    <SectionWrapper id="applicant-types" labelledBy="applicant-types-heading" tone="white">
      <SectionHeader
        headingId="applicant-types-heading"
        kicker="CPCB Portal Applicant Types · Check Your Applicant Type"
        title="Select From the Eight CPCB Non-Ferrous Metal EPR Categories"
        description="Explore all eight official CPCB portal applicant classifications below, inspect regulatory details, open the dedicated compliance page for each type, or submit an enquiry for professional category verification."
      />

      <div className="mb-8 rounded-lg border border-slate-200 bg-[#F5F8F6] p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
              Check Your Applicant Type
            </h3>
            <p className="mt-1 text-sm text-slate-600 max-w-3xl">
              Choose an applicant category below to review CPCB portal terminology, covered products,
              obligations, required documents, and return timelines.
            </p>
          </div>

          <div className="w-full lg:w-96 shrink-0">
            <label htmlFor="check-applicant-select" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
              Choose CPCB Applicant Type
            </label>
            <select
              id="check-applicant-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="min-h-[44px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-[#0B1F3A] focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            >
              {EXACT_EIGHT_APPLICANT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.exactOptionLabel}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 flex items-start gap-2.5 rounded-md border border-slate-200 bg-white p-3.5 text-xs leading-relaxed text-slate-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
          <p>
            <strong className="text-[#0B1F3A]">Informational Reference Only:</strong> Selecting an option
            in this tool does not automatically determine legal eligibility or statutory exemption.
            Final CPCB registration category applicability depends on your HS codes, Bill of Materials,
            manufacturing/outsourcing contracts, and import declarations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Eight CPCB Applicant Type Options"
          className="flex flex-col gap-2 lg:col-span-5"
        >
          {EXACT_EIGHT_APPLICANT_OPTIONS.map((option, index) => {
            const isActive = option.id === selectedId;
            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedId(option.id)}
                className={`flex min-h-[48px] items-start justify-between gap-3 rounded-md border px-4 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D] ${
                  isActive
                    ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white'
                    : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="text-sm font-semibold leading-snug">
                  0{index + 1}. {option.exactOptionLabel}
                </span>
                <span
                  className={`font-mono text-[11px] font-medium shrink-0 pt-0.5 ${
                    isActive ? 'text-emerald-300' : 'text-slate-500'
                  }`}
                >
                  {option.portalCode}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-label={current.exactOptionLabel}
          className="space-y-6 lg:col-span-7"
        >
          <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs font-semibold text-[#14532D]">
                CPCB Portal Category · {current.portalCode}
              </span>
              <span className="font-mono text-xs text-slate-500">{current.slug}</span>
            </div>

            <h3 className="mt-2 font-display text-2xl font-bold text-[#0B1F3A]">
              {current.exactOptionLabel}
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
              {current.applicability.definition}
            </p>

            <div className="mt-5 rounded-md border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                EPR Obligations Summary
              </p>
              <p className="mt-1 text-sm font-bold text-[#0B1F3A]">
                {current.eprObligations.headline}
              </p>
              <ul className="mt-2.5 space-y-2 text-sm text-slate-600">
                {current.eprObligations.targetStructure.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Key Documents
                </p>
                <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-slate-700">
                  {current.documents.slice(0, 4).map((doc) => (
                    <li key={doc} className="flex items-start gap-2">
                      <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  CPCB Returns Schedule
                </p>
                <div className="mt-2.5 space-y-2 text-xs leading-relaxed text-slate-700">
                  <p>
                    <strong className="text-[#0B1F3A]">Half-Yearly:</strong> {current.returns.halfYearly}
                  </p>
                  <p>
                    <strong className="text-[#0B1F3A]">Annual:</strong> {current.returns.annual}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <a
                href={current.slug}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToApplicantPage(current.slug);
                }}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#14532D] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
              >
                <span>Open Full {current.shortTitle} Compliance Page</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <span className="text-xs text-slate-500">
                Includes applicability, covered products, returns & FAQs
              </span>
            </div>
          </div>

          <LeadEnquiryForm
            compact
            defaultApplicantType={current.exactOptionLabel}
            pageSourceLabel={`Check Your Applicant Type (${current.shortTitle})`}
            heading={`Enquire About ${current.shortTitle} Registration`}
            description={`Share your business details for manual applicability verification under "${current.exactOptionLabel}".`}
            submitLabel="Request Category Review"
          />
        </div>
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h3 className="font-display text-base font-bold text-[#0B1F3A]">
            Dedicated SEO Compliance Pages for All Eight Applicant Types
          </h3>
          <span className="text-xs text-slate-500">Direct CPCB Category Guides</span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {EXACT_EIGHT_APPLICANT_OPTIONS.map((item) => (
            <a
              key={item.id}
              href={item.slug}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToApplicantPage(item.slug);
              }}
              className="group flex flex-col justify-between rounded-md border border-slate-200 bg-white p-4 transition-colors hover:border-[#14532D] hover:bg-[#F5F8F6]"
            >
              <div>
                <span className="font-mono text-[11px] font-semibold text-[#14532D]">
                  {item.portalCode}
                </span>
                <p className="mt-1 font-display text-sm font-bold text-[#0B1F3A] group-hover:text-[#14532D]">
                  {item.exactOptionLabel}
                </p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0B1F3A] group-hover:text-[#14532D]">
                <span>Read Full Guide</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
