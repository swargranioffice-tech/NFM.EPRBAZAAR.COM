import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ShieldCheck } from 'lucide-react';
import {
  METAL_REGISTRATION_PAGES,
  STATIC_ROUTES,
  type MetalRegistrationPageData,
} from '../../data/seoRoutesData';
import { SCHEDULE_X_PRODUCT_DETAILS } from '../../data/scheduleXData';
import { EXACT_EIGHT_APPLICANT_OPTIONS } from '../../data/applicantTypesData';
import { SCHEDULE_XI_TARGETS } from '../../data/nonFerrousData';
import { SeoHead } from '../seo/SeoHead';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { ResilientImage } from '../ui/ResilientImage';
import { LeadEnquiryForm } from '../ui/LeadEnquiryForm';

interface MetalRegistrationPageProps {
  metalPage: MetalRegistrationPageData;
  onNavigateToPath: (path: string) => void;
}

/**
 * Dedicated SEO landing page for Aluminium, Copper, and Zinc EPR Registration
 * in India with filtered Schedule X products, Schedule XI & XIII targets,
 * applicant category links, eligible FAQPage schema, and enquiry capture.
 */
export function MetalRegistrationPage({
  metalPage,
  onNavigateToPath,
}: MetalRegistrationPageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  const metalLabel = metalPage.defaultMetalOption;
  const matchingProducts = SCHEDULE_X_PRODUCT_DETAILS.filter((p) =>
    p.metals.includes(metalLabel as 'Aluminium' | 'Copper' | 'Zinc')
  );

  return (
    <>
      <SeoHead
        title={metalPage.seoTitle}
        description={metalPage.seoDescription}
        canonicalPath={metalPage.slug}
        ogImage={metalPage.image}
        ogImageAlt={metalPage.imageAlt}
        serviceName={`${metalPage.defaultMetalOption} EPR Registration & Compliance in India`}
        pageFaqs={metalPage.faqs}
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: `${metalPage.defaultMetalOption} EPR Registration`, path: metalPage.slug },
        ]}
      />

      <section className="bg-[#0B1F3A] py-12 md:py-16 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToPath}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: `${metalPage.defaultMetalOption} EPR Registration` },
            ]}
          />

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Element {metalPage.atomicNumber} ({metalPage.symbol}) · CPCB Chapter VIII Scope
              </p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-white text-balance">
                {metalPage.h1}
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200 max-w-2xl">
                {metalPage.heroSummary}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#metal-enquiry"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#15803D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0"
                >
                  <span>Start {metalPage.defaultMetalOption} EPR Filing</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={STATIC_ROUTES.calculator}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToPath(STATIC_ROUTES.calculator);
                  }}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap shrink-0"
                >
                  Open EPR Target Calculator
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-lg border border-white/15 bg-[#122D52]">
                <ResilientImage
                  src={metalPage.image}
                  alt={metalPage.imageAlt}
                  width={metalPage.imageWidth}
                  height={metalPage.imageHeight}
                  loading="eager"
                  fetchPriority="high"
                  fallbackTitle={metalPage.metalName}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-8">
              <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-[#0B1F3A]">
                  Statutory Rules for {metalPage.metalName}
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  {metalPage.regulatoryHighlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-1 gap-4 rounded-md border border-slate-200 bg-[#F5F8F6] p-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Schedule XIII Start ({metalPage.scheduleXiiRecycledContent.startFy})
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold text-[#0B1F3A] tabular-nums">
                      {metalPage.scheduleXiiRecycledContent.startPercent}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Milestone ({metalPage.scheduleXiiRecycledContent.milestoneFy})
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold text-[#14532D] tabular-nums">
                      {metalPage.scheduleXiiRecycledContent.milestonePercent}
                    </p>
                  </div>
                  <p className="sm:col-span-2 text-xs text-slate-600 leading-relaxed">
                    {metalPage.scheduleXiiRecycledContent.notes}
                  </p>
                </div>
              </article>

              <article className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-[#0B1F3A]">
                  Who Requires {metalPage.defaultMetalOption} EPR Registration?
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
                  {metalPage.whoNeedsRegistration.map((entity) => (
                    <li key={entity} className="flex items-start gap-2.5">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                      <span>{entity}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] mb-3">
                    Schedule XI Recycling Targets Applicable to {metalPage.defaultMetalOption} Producers
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {SCHEDULE_XI_TARGETS.slice(0, 4).map((row) => (
                      <div key={row.financialYear} className="rounded border border-slate-200 bg-white p-3">
                        <p className="font-mono text-xs text-slate-500">{row.financialYear}</p>
                        <p className="mt-1 font-mono text-lg font-bold text-[#14532D] tabular-nums">
                          {row.recyclingTarget}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#0B1F3A]">
                      Schedule X Products Covered for {metalPage.defaultMetalOption} ({matchingProducts.length})
                    </h2>
                    <p className="mt-1 text-xs text-slate-600">
                      Only Schedule X listed items trigger EPR obligations—click any product to view its rules & exclusions.
                    </p>
                  </div>
                  <a
                    href={STATIC_ROUTES.scheduleXDirectory}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToPath(STATIC_ROUTES.scheduleXDirectory);
                    }}
                    className="text-xs font-semibold text-[#14532D] hover:underline whitespace-nowrap"
                  >
                    View all 18 Schedule X items
                  </a>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {matchingProducts.map((prod) => (
                    <a
                      key={prod.code}
                      href={prod.slug}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateToPath(prod.slug);
                      }}
                      className="flex items-start justify-between gap-3 rounded-md border border-slate-200 bg-white p-4 transition-colors hover:border-[#14532D] hover:bg-[#F5F8F6]"
                    >
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-[#14532D]">
                          Item {String(prod.code).padStart(2, '0')}
                        </span>
                        <p className="mt-0.5 text-sm font-semibold text-[#0B1F3A]">
                          {prod.shortName}
                        </p>
                        {prod.exclusions ? (
                          <p className="mt-1 text-[11px] text-amber-800">{prod.exclusions}</p>
                        ) : null}
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>

              <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-[#0B1F3A]">
                  Frequently Asked Questions · {metalPage.defaultMetalOption} EPR
                </h2>
                <div className="mt-4 divide-y divide-slate-200 border-t border-slate-200">
                  {metalPage.faqs.map((faq, idx) => {
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
                          <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </article>

              <div id="metal-enquiry">
                <LeadEnquiryForm
                  defaultMetalCategory={metalPage.defaultMetalOption}
                  pageSourceLabel={`Metal Page: ${metalPage.defaultMetalOption} EPR (${metalPage.slug})`}
                  heading={`Request ${metalPage.defaultMetalOption} EPR Registration Consultation`}
                  description={`Submit your ${metalPage.defaultMetalOption.toLowerCase()} SKU, scrap import, or recycling capacity details for manual CPCB compliance evaluation.`}
                  submitLabel={`Submit ${metalPage.defaultMetalOption} EPR Enquiry`}
                />
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
                <h2 className="font-display text-base font-bold text-[#0B1F3A]">
                  Regulated Metal Registration Pages
                </h2>
                <nav aria-label="Metal Registration Guides" className="mt-4 flex flex-col gap-2">
                  {METAL_REGISTRATION_PAGES.map((m) => {
                    const isCurrent = m.id === metalPage.id;
                    return (
                      <a
                        key={m.id}
                        href={m.slug}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigateToPath(m.slug);
                        }}
                        className={`rounded-md border px-3.5 py-2.5 text-xs font-semibold transition-colors ${
                          isCurrent
                            ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#14532D] hover:text-[#14532D]'
                        }`}
                      >
                        {m.defaultMetalOption} EPR Registration ({m.symbol})
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <h2 className="font-display text-base font-bold text-[#0B1F3A]">
                  Related CPCB Applicant Categories
                </h2>
                <nav aria-label="Related Applicant Types" className="mt-3 flex flex-col gap-2">
                  {EXACT_EIGHT_APPLICANT_OPTIONS.map((app) => (
                    <a
                      key={app.id}
                      href={app.slug}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigateToPath(app.slug);
                      }}
                      className="text-xs font-medium text-[#14532D] hover:underline"
                    >
                      {app.exactOptionLabel}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
