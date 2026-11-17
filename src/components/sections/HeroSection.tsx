import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO, HERO_STATS } from '../../data/nonFerrousData';
import { ResilientImage } from '../ui/ResilientImage';

/**
 * Corporate hero split showcasing the primary H1 headline, regulatory context,
 * single dominant primary CTA, 16:9 visual asset, and 4-column KPI strip.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-white pt-10 pb-14 md:pt-14 md:pb-20 border-b border-slate-200"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="font-semibold text-[#14532D]">EPR Bazaar · CPCB Compliance Desk</span>
              <span aria-hidden="true">/</span>
              <span>MoEFCC Chapter VIII Rules</span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold leading-[1.12] tracking-tight text-[#0B1F3A] text-balance"
            >
              Non-Ferrous Metal Scrap EPR Registration in India
            </h1>

            <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-slate-600 max-w-xl">
              Mandatory Central Pollution Control Board (CPCB) registration, Schedule X product mapping,
              and verified EPR certificate procurement for Aluminium, Copper, and Zinc scrap obligations—managed
              end-to-end by {COMPANY_INFO.legalEntity}.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact-us"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#14532D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
              >
                <span>Request Compliance Assessment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#schedule-x-products"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition-colors hover:border-[#0B1F3A] hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
              >
                Check Schedule X Products
              </a>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <span>Headquarters: Kolkata, West Bengal</span>
              <span aria-hidden="true">·</span>
              <span>CIN: {COMPANY_INFO.cin}</span>
              <span aria-hidden="true">·</span>
              <span>Effective 1 April 2026</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[260px] overflow-hidden rounded-lg border border-slate-200 bg-[#0B1F3A]">
              <ResilientImage
                src="/src/assets/images/hero_non_ferrous_recycling_1794932712798.jpg"
                alt="Modern non-ferrous metal recycling and processing facility displaying sorted aluminium billets, copper wire coils, and zinc alloy ingots"
                width={960}
                height={536}
                loading="eager"
                fetchPriority="high"
                fallbackTitle="Non-Ferrous Metal Circular Processing"
                className="aspect-video w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="bg-white px-5 py-4">
              <p className="text-xs font-medium text-slate-500">{stat.label}</p>
              <p className="mt-1 font-display text-lg font-bold tracking-tight text-[#0B1F3A] tabular-nums">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-slate-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
