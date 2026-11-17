import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, FileText, Info } from 'lucide-react';
import {
  EXACT_EIGHT_APPLICANT_OPTIONS,
  type ApplicantTypeDetail,
} from '../../data/applicantTypesData';
import { COMPANY_INFO } from '../../data/nonFerrousData';
import { STATIC_ROUTES } from '../../data/seoRoutesData';
import { SeoHead } from '../seo/SeoHead';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { LeadEnquiryForm } from '../ui/LeadEnquiryForm';

interface ApplicantDetailPageProps {
  applicant: ApplicantTypeDetail;
  onNavigateHome: (hash?: string) => void;
  onNavigateToApplicantPage: (slug: string) => void;
}

/**
 * Dedicated SEO page for each of the eight CPCB Applicant Types, including the
 * special Producer (P4) page at /producer-p4-imported-scrap-non-ferrous-metals/.
 */
export function ApplicantDetailPage({
  applicant,
  onNavigateHome,
  onNavigateToApplicantPage,
}: ApplicantDetailPageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  return (
    <>
      <SeoHead
        title={applicant.seoTitle}
        description={applicant.seoDescription}
        canonicalPath={applicant.slug}
        serviceName={`${applicant.exactOptionLabel} — Non-Ferrous Metal EPR Registration`}
        pageFaqs={applicant.faqs}
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'Applicant Types', path: STATIC_ROUTES.applicantDirectory },
          { name: applicant.shortTitle, path: applicant.slug },
        ]}
      />

      <section className="bg-[#0B1F3A] py-12 md:py-16 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToApplicantPage}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'Applicant Types', href: STATIC_ROUTES.applicantDirectory },
              { label: applicant.portalCode },
            ]}
          />

          <div className="mt-6 max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
              CPCB Centralised Portal Category · {applicant.portalCode}
            </p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-white text-balance">
              {applicant.exactOptionLabel}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200 max-w-3xl">
              {applicant.heroSummary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#category-enquiry"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#15803D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0"
            >
              <span>Request {applicant.shortTitle} Filing Assessment</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/non-ferrous-metal-epr/#schedule-x-products"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('#schedule-x-products');
              }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap shrink-0"
            >
              Browse Schedule X Products
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  01. Applicability & Statutory Definition
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#0B1F3A]">
                  When {applicant.shortTitle} Registration Applies
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                  {applicant.applicability.definition}
                </p>

                <h3 className="mt-6 text-sm font-bold text-[#0B1F3A]">
                  Typical Operational Entities Under This Category
                </h3>
                <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                  {applicant.applicability.whoFallsHere.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-start gap-2.5 rounded-md border border-slate-200 bg-[#F5F8F6] p-4 text-xs leading-relaxed text-slate-700">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
                  <p>{applicant.applicability.clarificationNote}</p>
                </div>
              </article>

              <article className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  02. Covered Products & Regulated Metals
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#0B1F3A]">
                  Covered Schedule X Products, Scrap & Alloys
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
                  {applicant.coveredProducts.summary}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                  {applicant.coveredProducts.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#14532D]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-600">
                  <strong className="text-[#0B1F3A]">Statutory Exclusion Note:</strong>{' '}
                  {applicant.coveredProducts.exclusions}
                </p>
              </article>

              <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  03. Statutory Responsibilities & CPCB Registration
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#0B1F3A]">
                  Core Responsibilities & Portal Registration Flow
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1F3A]">Key Responsibilities</h3>
                    <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
                      {applicant.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-md border border-slate-200 bg-[#F5F8F6] p-5">
                    <h3 className="text-sm font-bold text-[#0B1F3A]">
                      {applicant.registration.portalName}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Authority: {applicant.registration.authority}
                    </p>
                    <ol className="mt-3 space-y-2.5 text-sm text-slate-700">
                      {applicant.registration.processOverview.map((step, i) => (
                        <li key={step} className="flex items-start gap-2.5">
                          <span className="font-mono text-xs font-bold text-[#14532D] pt-0.5 tabular-nums">
                            0{i + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-slate-200 bg-[#0B1F3A] p-6 sm:p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  04. EPR Obligations & Certificate Compliance
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white">
                  {applicant.eprObligations.headline}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {applicant.eprObligations.targetStructure.map((rule) => (
                    <li key={rule} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-relaxed text-slate-300">
                  {applicant.eprObligations.certificateRule}
                </p>
              </article>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <article className="rounded-lg border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                    05. Required Documents
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-[#0B1F3A]">
                    CPCB Registration Checklist
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                    {applicant.documents.map((doc) => (
                      <li key={doc} className="flex items-start gap-2.5">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                    06. Periodic & Annual Returns
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-[#0B1F3A]">
                    CPCB Portal Filing Calendar
                  </h2>
                  <div className="mt-4 space-y-2.5 text-sm text-slate-700">
                    <p>
                      <strong className="text-[#0B1F3A]">Half-Yearly Return:</strong>{' '}
                      {applicant.returns.halfYearly}
                    </p>
                    <p>
                      <strong className="text-[#0B1F3A]">Annual Return:</strong>{' '}
                      {applicant.returns.annual}
                    </p>
                  </div>
                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Data Reconciled in Returns
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm text-slate-600">
                    {applicant.returns.reportingItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#14532D]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  07. Category-Specific CPCB FAQs
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#0B1F3A]">
                  Frequently Asked Questions · {applicant.shortTitle}
                </h2>
                <div className="mt-5 divide-y divide-slate-200 border-t border-slate-200">
                  {applicant.faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div key={faq.question} className="py-4">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                          className="flex w-full items-start justify-between gap-4 text-left"
                        >
                          <span className="font-display text-base font-bold text-[#0B1F3A]">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`mt-1 h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                              isOpen ? 'rotate-180 text-[#14532D]' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        {isOpen ? (
                          <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                            {faq.answer}
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </article>

              <div id="category-enquiry">
                <LeadEnquiryForm
                  defaultApplicantType={applicant.exactOptionLabel}
                  pageSourceLabel={`Applicant Page: ${applicant.exactOptionLabel} (${applicant.slug})`}
                  heading={`Start ${applicant.shortTitle} CPCB EPR Enquiry`}
                  description={`Request document verification, applicability review, and CPCB portal filing support for "${applicant.exactOptionLabel}".`}
                  submitLabel={`Submit ${applicant.shortTitle} Enquiry`}
                />
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
                <h2 className="font-display text-base font-bold text-[#0B1F3A]">
                  All Eight CPCB Applicant Pages
                </h2>
                <p className="mt-1 text-xs text-slate-600">
                  Switch between dedicated regulatory guides without automatic legal classification.
                </p>
                <nav aria-label="Applicant Type Pages" className="mt-4 flex flex-col gap-2">
                  {EXACT_EIGHT_APPLICANT_OPTIONS.map((item) => {
                    const isCurrent = item.id === applicant.id;
                    return (
                      <a
                        key={item.id}
                        href={item.slug}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigateToApplicantPage(item.slug);
                        }}
                        className={`rounded-md border px-3.5 py-2.5 text-xs font-semibold transition-colors ${
                          isCurrent
                            ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#14532D] hover:text-[#14532D]'
                        }`}
                      >
                        {item.exactOptionLabel}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6 text-sm space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                  EPR Bazaar Compliance Desk
                </p>
                <p className="font-display text-base font-bold text-[#0B1F3A]">
                  {COMPANY_INFO.legalEntity}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">{COMPANY_INFO.address}</p>
                <div className="border-t border-slate-100 pt-3 text-xs space-y-1 text-slate-700">
                  <p>Phone: {COMPANY_INFO.phoneDisplay}</p>
                  <p>Email: {COMPANY_INFO.emailPrimary}</p>
                  <p>CIN: {COMPANY_INFO.cin}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
