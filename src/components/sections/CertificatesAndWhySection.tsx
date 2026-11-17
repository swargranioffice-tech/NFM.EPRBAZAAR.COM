import { ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, EXISTING_EPR_SERVICES } from '../../data/nonFerrousData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';

const CERTIFICATE_PILLARS = [
  {
    index: '01',
    title: 'Recycler-Generated EPR Certificates',
    description:
      'CPCB-registered recyclers generate metal-specific digital EPR certificates strictly proportional to verified secondary Aluminium, Copper, or Zinc recovered and supplied to domestic manufacturers.',
  },
  {
    index: '02',
    title: 'Refurbishment Certificates (Schedule XII)',
    description:
      'Registered refurbishers extending the operational service life of eligible Schedule X electrical equipment—such as transformers, motors, pumps, and HVAC plants—issue refurbishment credits to defer end-of-life targets.',
  },
  {
    index: '03',
    title: '3-Year Target Rollover & EC Mitigation',
    description:
      'Unfulfilled annual recycling obligations carry forward for up to 3 years. Operating without CPCB registration or defaulting on targets attracts Environmental Compensation (EC), with diminishing refund slabs if cleared late.',
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    metric: '490+ Verified Partners',
    title: 'Pan-India Recycler & PRO Network',
    detail:
      'Direct digital access to CPCB-authorized non-ferrous metal recyclers across major industrial corridors for transparent EPR credit procurement.',
  },
  {
    metric: '100% Audit-Ready',
    title: 'End-to-End CPCB Portal & Return Management',
    detail:
      'From initial SKU applicability mapping and CTO review to quarterly data filings and annual Schedule XI/XIII reconciliation.',
  },
  {
    metric: 'Multi-Stream Desk',
    title: 'Unified EPR Compliance Under One Corporate Entity',
    detail: `Operated by ${COMPANY_INFO.legalEntity} (CIN: ${COMPANY_INFO.cin}), consolidating Plastic, E-Waste, Battery, Tyre, Used Oil, and Non-Ferrous Metal compliance.`,
  },
];

/**
 * Covers EPR Certificates mechanics, Why Choose EPR Bazaar proof points,
 * and cross-links to EPR Bazaar's broader statutory EPR service portfolio.
 */
export function CertificatesAndWhySection() {
  return (
    <>
      <SectionWrapper id="epr-certificates" labelledBy="epr-certificates-heading" tone="white">
        <SectionHeader
          headingId="epr-certificates-heading"
          kicker="EPR Credit Trading & Environmental Compensation"
          title="How Non-Ferrous Metal EPR Certificates Fulfill Your Targets"
          description="Producers satisfy Schedule XI obligations either by channelizing scrap to authorized recyclers or by procuring verified EPR Certificates directly on the CPCB centralised portal."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CERTIFICATE_PILLARS.map((pillar) => (
            <article
              key={pillar.index}
              className="flex flex-col justify-between rounded-lg border border-slate-200 bg-[#F5F8F6] p-6"
            >
              <div>
                <p className="font-mono text-xs font-bold text-[#14532D] tabular-nums">
                  {pillar.index}. Statutory Mechanism
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-[#0B1F3A]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-slate-200 bg-[#0B1F3A] p-6 sm:p-10 text-white">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-white/15 pb-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Why Choose EPR Bazaar
              </p>
              <h3 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Built for Industrial Accuracy & Transparent CPCB Compliance
              </h3>
            </div>
            <a
              href={COMPANY_INFO.aboutWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-emerald-200 whitespace-nowrap shrink-0"
            >
              <span>About {COMPANY_INFO.brandName}</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div key={item.title} className="rounded-md border border-white/15 bg-[#122D52]/70 p-5">
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-mono font-semibold">
                  <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{item.metric}</span>
                </div>
                <h4 className="mt-2.5 font-display text-base font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Other EPR Compliance Services at eprbazaar.com
              </p>
              <a
                href={COMPANY_INFO.mainWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-emerald-300 hover:underline whitespace-nowrap"
              >
                <span>Visit Main Platform</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {EXISTING_EPR_SERVICES.map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-md border border-white/10 bg-[#061326]/60 p-4 transition-colors hover:border-emerald-400/50 hover:bg-[#122D52]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-semibold text-white group-hover:text-emerald-300">
                      {service.name}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-emerald-300 shrink-0" aria-hidden="true" />
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{service.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
