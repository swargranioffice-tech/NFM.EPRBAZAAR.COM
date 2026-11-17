import { useMemo, useState } from 'react';
import { ArrowRight, ChevronDown, ExternalLink, Info, Search } from 'lucide-react';
import {
  CPCB_64_FAQS,
  CPCB_FAQ_CATEGORIES,
  CPCB_OFFICIAL_ATTRIBUTION,
  type CpcbFaqCategory,
} from '../../data/cpcbFaqsData';
import { findApplicantById } from '../../data/applicantTypesData';
import { SCHEDULE_X_PRODUCT_DETAILS } from '../../data/scheduleXData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';
import { LeadEnquiryForm } from '../ui/LeadEnquiryForm';

type CategoryFilter = 'All' | CpcbFaqCategory;

interface FaqSectionProps {
  onNavigateToApplicantPage: (slug: string) => void;
  onNavigateToProductPage: (slug: string) => void;
}

/**
 * Complete 64-question searchable CPCB Non-Ferrous Metal EPR FAQ repository
 * attributed to CPCB IPC-V Division with 9 category filters, numbered accordions,
 * related question jump links, internal links, official portal reference, and
 * embedded lead capture enquiry form.
 */
export function FaqSection({
  onNavigateToApplicantPage,
  onNavigateToProductPage,
}: FaqSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string>('q1');

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return CPCB_64_FAQS.filter((faq) => {
      const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesQuery =
        query === '' ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        `q${faq.number}` === query ||
        String(faq.number) === query;
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const jumpToQuestion = (qNumber: number) => {
    const targetFaq = CPCB_64_FAQS.find((f) => f.number === qNumber);
    if (!targetFaq) return;
    setSelectedCategory('All');
    setSearchQuery('');
    setOpenId(targetFaq.id);
    setTimeout(() => {
      const el = document.getElementById(`faq-item-${targetFaq.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  return (
    <SectionWrapper id="cpcb-faqs" labelledBy="cpcb-faqs-heading" tone="mist">
      <SectionHeader
        headingId="cpcb-faqs-heading"
        kicker="CPCB IPC-V Division Reference · All 64 Questions Published"
        title="CPCB Non-Ferrous Metal Scrap EPR FAQs (Q1–Q64)"
        description="Searchable 64-question regulatory reference organized across all nine CPCB compliance categories with cross-linked questions, registration guides, and Schedule X product pages."
      />

      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-5 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-[#14532D]">
              Source Attribution: {CPCB_OFFICIAL_ATTRIBUTION.division}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {CPCB_OFFICIAL_ATTRIBUTION.sourceNote}
            </p>
          </div>
          <a
            href={CPCB_OFFICIAL_ATTRIBUTION.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-md border border-[#0B1F3A] px-4 py-2 text-xs font-semibold text-[#0B1F3A] transition-colors hover:bg-[#0B1F3A] hover:text-white whitespace-nowrap shrink-0"
          >
            <span>Official CPCB Portal</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-start gap-2.5 border-t border-slate-100 pt-3 text-xs leading-relaxed text-slate-600">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
          <p>{CPCB_OFFICIAL_ATTRIBUTION.disclaimer}</p>
        </div>
      </div>

      {/* Search + Category Filter Controls */}
      <div className="mb-6 space-y-4 rounded-lg border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <label htmlFor="cpcb-faq-search" className="sr-only">
              Search all 64 CPCB FAQs
            </label>
            <input
              id="cpcb-faq-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Q1–Q64 by keyword, Q39, Q60, brass, P4, EC..."
              className="min-h-[42px] w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
            />
          </div>

          <p className="font-mono text-xs font-semibold text-[#0B1F3A] tabular-nums">
            Showing {filteredFaqs.length} of {CPCB_64_FAQS.length} Published Questions
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`min-h-[38px] rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === 'All'
                ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white'
                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:text-[#0B1F3A]'
            }`}
          >
            All Categories (64)
          </button>
          {CPCB_FAQ_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            const count = CPCB_64_FAQS.filter((f) => f.category === cat).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  const first = CPCB_64_FAQS.find((f) => f.category === cat);
                  if (first) setOpenId(first.id);
                }}
                className={`min-h-[38px] rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'border-[#0B1F3A] bg-[#0B1F3A] text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:text-[#0B1F3A]'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {filteredFaqs.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-10 text-center">
          <p className="font-display text-base font-bold text-[#0B1F3A]">
            No CPCB FAQs matched "{searchQuery}"
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#14532D] px-4 py-2 text-xs font-semibold text-white hover:bg-[#166534]"
          >
            Show All 64 Questions
          </button>
        </div>
      ) : (
        <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} id={`faq-item-${faq.id}`} className="px-5 py-4 sm:px-6 sm:py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="flex w-full items-start justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14532D]"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono font-bold text-[#14532D] tabular-nums">
                        Q{faq.number}
                      </span>
                      <span aria-hidden="true" className="text-slate-300">
                        ·
                      </span>
                      <span className="font-medium text-slate-500">{faq.category}</span>
                    </div>
                    <h3 className="mt-1 font-display text-base sm:text-[17px] font-bold text-[#0B1F3A]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#14532D]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen ? (
                  <div id={`${faq.id}-answer`} className="mt-3 space-y-3 pr-2 sm:pr-8">
                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
                      {faq.answer}
                    </p>

                    {(faq.relatedNumbers?.length ||
                      faq.relatedApplicantIds?.length ||
                      faq.relatedProductSlugs?.length) ? (
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-3 text-xs">
                        {faq.relatedNumbers && faq.relatedNumbers.length > 0 ? (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="font-semibold text-slate-500">Related Questions:</span>
                            {faq.relatedNumbers.map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => jumpToQuestion(num)}
                                className="font-mono font-semibold text-[#14532D] hover:underline"
                              >
                                Q{num}
                              </button>
                            ))}
                          </div>
                        ) : null}

                        {faq.relatedApplicantIds && faq.relatedApplicantIds.length > 0 ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-slate-500">Registration Pages:</span>
                            {faq.relatedApplicantIds.map((id) => {
                              const app = findApplicantById(id);
                              if (!app) return null;
                              return (
                                <a
                                  key={app.id}
                                  href={app.slug}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onNavigateToApplicantPage(app.slug);
                                  }}
                                  className="inline-flex items-center gap-0.5 font-semibold text-[#0B1F3A] hover:text-[#14532D] hover:underline"
                                >
                                  <span>{app.shortTitle}</span>
                                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                                </a>
                              );
                            })}
                          </div>
                        ) : null}

                        {faq.relatedProductSlugs && faq.relatedProductSlugs.length > 0 ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-slate-500">Schedule X Pages:</span>
                            {faq.relatedProductSlugs.map((slug) => {
                              const prod = SCHEDULE_X_PRODUCT_DETAILS.find((p) => p.slug === slug);
                              if (!prod) return null;
                              return (
                                <a
                                  key={prod.slug}
                                  href={prod.slug}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onNavigateToProductPage(prod.slug);
                                  }}
                                  className="inline-flex items-center gap-0.5 font-semibold text-[#14532D] hover:underline"
                                >
                                  <span>Item {prod.code}: {prod.shortName}</span>
                                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                                </a>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-10">
        <LeadEnquiryForm
          pageSourceLabel="CPCB FAQs Section (Q1–Q64)"
          heading="Have a Question Not Covered in Q1–Q64?"
          description="Submit your compliance query or product details for direct assistance from our CPCB regulatory desk."
          submitLabel="Ask Compliance Desk"
        />
      </div>
    </SectionWrapper>
  );
}
