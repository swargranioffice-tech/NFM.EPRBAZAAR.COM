import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { COMPANY_INFO, METAL_DETAILS, type MetalDetail } from '../../data/nonFerrousData';
import { STATIC_ROUTES } from '../../data/seoRoutesData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';
import { ResilientImage } from '../ui/ResilientImage';

interface MetalScopeSectionProps {
  onNavigateToPath?: (path: string) => void;
}

const METAL_PAGE_LINKS: Record<MetalDetail['id'], { path: string; label: string }> = {
  aluminium: { path: STATIC_ROUTES.aluminium, label: 'Open Aluminium EPR Registration Page' },
  copper: { path: STATIC_ROUTES.copper, label: 'Open Copper EPR Registration Page' },
  zinc: { path: STATIC_ROUTES.zinc, label: 'Open Zinc EPR Registration Page' },
};

/**
 * Introduction to Non-Ferrous Metal EPR rules in India combined with
 * interactive metal-by-metal coverage for Aluminium, Copper, and Zinc.
 */
export function MetalScopeSection({ onNavigateToPath }: MetalScopeSectionProps) {
  const [selectedMetalId, setSelectedMetalId] = useState<MetalDetail['id']>('aluminium');
  const activeMetal = METAL_DETAILS.find((m) => m.id === selectedMetalId) ?? METAL_DETAILS[0];
  const activeMetalLink = METAL_PAGE_LINKS[activeMetal.id];

  return (
    <SectionWrapper id="about-non-ferrous-epr" labelledBy="about-epr-heading" tone="mist">
      <SectionHeader
        headingId="about-epr-heading"
        kicker="Regulatory Introduction & Metal Scope"
        title="India’s Statutory Framework for Aluminium, Copper, and Zinc Scrap"
        description="Notified by the Ministry of Environment, Forest and Climate Change (MoEFCC) under Chapter VIII of the Hazardous and Other Wastes (Management and Transboundary Movement) Amendment Rules, Non-Ferrous Metal EPR mandates formal CPCB tracking from April 1, 2026."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 mb-12">
        <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
          <h3 className="font-display text-xl font-bold text-[#0B1F3A]">
            Why Non-Ferrous Metal EPR Is Mandatory
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Non-ferrous metals retain metallurgical integrity across repeated recycling cycles, yet informal scrap
            recovery causes heavy energy loss, slag contamination, and supply-chain leakage. Under the amended rules,
            Producers, Brand Owners, and Importers of specified Schedule X finished products must register on the
            Central Pollution Control Board (CPCB) centralised portal and finance verifiable end-of-life recycling.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            {COMPANY_INFO.overviewCopy}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-[#0B1F3A] p-6 sm:p-8 text-white lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Statutory Mandate Summary
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">
              Dual Compliance Pillars
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>
                  <strong className="text-white">Schedule XI (Producers & Importers):</strong> Mandatory collection and
                  recycling targets starting at 10% in FY 2026–27 and scaling to 75% from FY 2032–33 onwards.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                <span>
                  <strong className="text-white">Schedule XIII (Manufacturers):</strong> Minimum domestically recycled
                  non-ferrous metal content in new goods beginning FY 2028–29 (10% Al, 20% Cu, 25% Zn by FY 2031–32).
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6 border-t border-white/15 pt-4 text-xs text-slate-300">
            Applies across India to domestic brand owners, importers, foundries, recyclers, and bulk consumers.
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-xl font-bold text-[#0B1F3A]">
              Regulated Metals Breakdown
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Select a metal stream to inspect scrap categories, Schedule X usage, and Schedule XIII targets.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Select Regulated Non-Ferrous Metal"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1 self-start"
          >
            {METAL_DETAILS.map((metal) => {
              const isSelected = metal.id === selectedMetalId;
              return (
                <button
                  key={metal.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedMetalId(metal.id)}
                  className={`min-h-[40px] rounded-md px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D] ${
                    isSelected
                      ? 'bg-[#14532D] text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#0B1F3A]'
                  }`}
                >
                  {metal.symbol} · {metal.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          aria-label={activeMetal.name}
          className="grid grid-cols-1 gap-8 rounded-lg border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12 lg:items-stretch"
        >
          <div className="lg:col-span-5">
            <div className="h-full overflow-hidden rounded-md border border-slate-200 bg-slate-100">
              <ResilientImage
                src={activeMetal.image}
                alt={activeMetal.imageAlt}
                width={960}
                height={717}
                loading="lazy"
                fallbackTitle={activeMetal.name}
                className="aspect-[4/3] w-full object-cover lg:h-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                <span className="font-mono font-semibold text-[#14532D]">
                  Atomic No. {activeMetal.atomicNumber} ({activeMetal.symbol})
                </span>
                <span aria-hidden="true">·</span>
                <span>Schedule X & XIII Regulated Metal</span>
              </div>

              <h4 className="mt-2 font-display text-2xl font-bold text-[#0B1F3A]">
                {activeMetal.name}
              </h4>

              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                {activeMetal.summary}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 border-t border-slate-200 pt-5">
                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                    Primary Scrap Streams
                  </h5>
                  <ul className="mt-2.5 space-y-2 text-sm text-slate-600">
                    {activeMetal.scrapSources.map((src) => (
                      <li key={src} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#14532D]" aria-hidden="true" />
                        <span>{src}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#0B1F3A]">
                    Schedule X Product Usage
                  </h5>
                  <ul className="mt-2.5 space-y-2 text-sm text-slate-600">
                    {activeMetal.scheduleXApplications.map((app) => (
                      <li key={app} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#0B1F3A]" aria-hidden="true" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 rounded-md border border-slate-200 bg-[#F5F8F6] p-4 sm:grid-cols-3">
              <div>
                <p className="text-xs text-slate-500">Recycled Input (FY 2028–29)</p>
                <p className="mt-0.5 font-mono text-lg font-bold text-[#0B1F3A] tabular-nums">
                  {activeMetal.recycledContentStart2028}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Milestone (FY 2031–32+)</p>
                <p className="mt-0.5 font-mono text-lg font-bold text-[#14532D] tabular-nums">
                  {activeMetal.recycledContentMilestone2031}
                </p>
              </div>
              <div className="sm:col-span-1">
                <p className="text-xs text-slate-500">Compliance Scope</p>
                <p className="mt-0.5 text-xs font-medium text-slate-700 leading-snug">
                  {activeMetal.complianceNote}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <a
                href={activeMetalLink.path}
                onClick={(e) => {
                  if (onNavigateToPath) {
                    e.preventDefault();
                    onNavigateToPath(activeMetalLink.path);
                  }
                }}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-[#14532D] bg-white px-4 py-2 text-xs font-semibold text-[#14532D] transition-colors hover:bg-[#14532D] hover:text-white"
              >
                <span>{activeMetalLink.label}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                {METAL_DETAILS.map((m) => (
                  <a
                    key={m.id}
                    href={METAL_PAGE_LINKS[m.id].path}
                    onClick={(e) => {
                      if (onNavigateToPath) {
                        e.preventDefault();
                        onNavigateToPath(METAL_PAGE_LINKS[m.id].path);
                      }
                    }}
                    className="font-medium text-slate-600 hover:text-[#14532D] hover:underline"
                  >
                    {m.name.split(' ')[0]} EPR
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
