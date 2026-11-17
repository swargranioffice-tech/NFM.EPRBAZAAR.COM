import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Info } from 'lucide-react';
import {
  SCHEDULE_X_PRODUCT_DETAILS,
  SCHEDULE_X_SCOPE_DISCLAIMER,
  type ScheduleXProductDetail,
} from '../../data/scheduleXData';
import { findApplicantById } from '../../data/applicantTypesData';
import { STATIC_ROUTES } from '../../data/seoRoutesData';
import { SeoHead } from '../seo/SeoHead';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { LeadEnquiryForm, type MetalCategoryOption } from '../ui/LeadEnquiryForm';

interface ProductDetailPageProps {
  product: ScheduleXProductDetail;
  onNavigateHome: (hash?: string) => void;
  onNavigateToApplicantPage: (slug: string) => void;
  onNavigateToProductPage: (slug: string) => void;
}

function getDefaultMetalCategory(metals: ScheduleXProductDetail['metals']): MetalCategoryOption {
  if (metals.length > 1) return 'Mixed Non-Ferrous Metals';
  return metals[0];
}

/**
 * Unique SEO landing page for each of the 18 Schedule X products with
 * descriptions, metal types, applications, examples, CPCB compliance relevance,
 * exact exclusions, related applicant types, FAQs, and enquiry CTA.
 */
export function ProductDetailPage({
  product,
  onNavigateHome,
  onNavigateToApplicantPage,
  onNavigateToProductPage,
}: ProductDetailPageProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  return (
    <>
      <SeoHead
        title={product.seoTitle}
        description={product.seoDescription}
        canonicalPath={product.slug}
        serviceName={`Schedule X Item ${product.code}: ${product.name} — EPR Compliance`}
        pageFaqs={product.faqs}
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'Schedule X Products', path: STATIC_ROUTES.scheduleXDirectory },
          { name: `Item ${product.code}: ${product.shortName}`, path: product.slug },
        ]}
      />

      <section className="bg-[#0B1F3A] py-12 md:py-16 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToProductPage}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'Schedule X Products', href: STATIC_ROUTES.scheduleXDirectory },
              { label: `Item ${String(product.code).padStart(2, '0')}: ${product.shortName}` },
            ]}
          />

          <div className="mt-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-emerald-300">
              <span>Schedule X · Item {String(product.code).padStart(2, '0')} of 18</span>
              <span aria-hidden="true">·</span>
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>Metals: {product.metals.join(', ')}</span>
            </div>

            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-white text-balance">
              {product.name}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-200 max-w-3xl">
              {product.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#product-enquiry"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#15803D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0"
            >
              <span>Enquire for Item {product.code} Compliance</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/non-ferrous-metal-epr/#recycling-targets"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome('#recycling-targets');
              }}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 whitespace-nowrap shrink-0"
            >
              View Schedule XI Targets
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-start gap-3 rounded-lg border border-slate-200 bg-[#F5F8F6] p-4 text-xs leading-relaxed text-slate-700">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
            <p>{SCHEDULE_X_SCOPE_DISCLAIMER}</p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <article className="rounded-lg border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                    Regulated Metal Composition
                  </p>
                  <h2 className="mt-1.5 font-display text-xl font-bold text-[#0B1F3A]">
                    Metal Types Covered
                  </h2>
                  <p className="mt-2 font-display text-lg font-bold text-[#14532D]">
                    {product.metals.join(' · ')} & Alloys
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Obligations are quantified on the net non-ferrous metal weight ({product.metals.join(', ')})
                    contained in the finished product, excluding non-metallic polymers or ferrous parts.
                  </p>
                </article>

                <article className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                    CPCB Statutory Boundary
                  </p>
                  <h2 className="mt-1.5 font-display text-xl font-bold text-[#0B1F3A]">
                    Exclusions & Scope Limits
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {product.exclusions
                      ? `CPCB Schedule X Exclusion: "${product.exclusions}". Automotive-grade parts are addressed separately and excluded from this Schedule X item.`
                      : 'Applies specifically to non-ferrous metal variants under Schedule X; ferrous-only (iron/steel) or polymer-only equivalents are excluded.'}
                  </p>
                </article>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <article className="rounded-lg border border-slate-200 bg-white p-6">
                  <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                    Industrial & Commercial Applications
                  </h2>
                  <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                    {product.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-lg border border-slate-200 bg-white p-6">
                  <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                    Covered Product Examples
                  </h2>
                  <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                    {product.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#0B1F3A]" aria-hidden="true" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <article className="rounded-lg border border-slate-200 bg-[#0B1F3A] p-6 sm:p-8 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  CPCB Compliance Relevance
                </p>
                <h2 className="mt-1.5 font-display text-2xl font-bold text-white">
                  EPR Registration, Targets & Certificate Obligations
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  {product.cpcbRelevance}
                </p>

                <div className="mt-6 border-t border-white/15 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                    Related CPCB Applicant Types for Item {product.code}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.relatedApplicantIds.map((id) => {
                      const applicant = findApplicantById(id);
                      if (!applicant) return null;
                      return (
                        <a
                          key={applicant.id}
                          href={applicant.slug}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigateToApplicantPage(applicant.slug);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-[#122D52] px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-emerald-300 hover:text-emerald-300"
                        >
                          <span>{applicant.shortTitle}</span>
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>

              <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-[#0B1F3A]">
                  Frequently Asked Questions · {product.shortName}
                </h2>
                <div className="mt-4 divide-y divide-slate-200 border-t border-slate-200">
                  {product.faqs.map((faq, idx) => {
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

              <div id="product-enquiry">
                <LeadEnquiryForm
                  defaultMetalCategory={getDefaultMetalCategory(product.metals)}
                  pageSourceLabel={`Schedule X Item ${product.code}: ${product.shortName} (${product.slug})`}
                  heading={`Enquire About Schedule X Item ${product.code} Compliance`}
                  description={`Submit your SKU and volume details for ${product.shortName} to receive CPCB applicability & registration guidance.`}
                  submitLabel="Submit Product EPR Enquiry"
                />
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
                <h2 className="font-display text-base font-bold text-[#0B1F3A]">
                  All 18 Schedule X Products
                </h2>
                <p className="mt-1 text-xs text-slate-600">
                  Navigate directly to any CPCB Schedule X product compliance guide.
                </p>
                <nav aria-label="Schedule X Products Directory" className="mt-4 flex flex-col gap-1.5">
                  {SCHEDULE_X_PRODUCT_DETAILS.map((item) => {
                    const isCurrent = item.code === product.code;
                    return (
                      <a
                        key={item.code}
                        href={item.slug}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigateToProductPage(item.slug);
                        }}
                        className={`rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
                          isCurrent
                            ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white font-semibold'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#14532D] hover:text-[#14532D]'
                        }`}
                      >
                        <span className="font-mono mr-1.5">
                          {String(item.code).padStart(2, '0')}.
                        </span>
                        {item.shortName}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
