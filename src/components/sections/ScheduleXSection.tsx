import { useMemo, useState } from 'react';
import { ArrowRight, Info, Search } from 'lucide-react';
import {
  SCHEDULE_X_PRODUCT_DETAILS,
  SCHEDULE_X_SCOPE_DISCLAIMER,
} from '../../data/scheduleXData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';

type MetalFilter = 'All' | 'Aluminium' | 'Copper' | 'Zinc';

const FILTER_OPTIONS: MetalFilter[] = ['All', 'Aluminium', 'Copper', 'Zinc'];

interface ScheduleXSectionProps {
  onNavigateToProductPage: (slug: string) => void;
}

/**
 * Searchable and filterable directory of all 18 official Schedule X product
 * categories, linking each item to its dedicated SEO landing page.
 */
export function ScheduleXSection({ onNavigateToProductPage }: ScheduleXSectionProps) {
  const [metalFilter, setMetalFilter] = useState<MetalFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return SCHEDULE_X_PRODUCT_DETAILS.filter((product) => {
      const matchesMetal = metalFilter === 'All' || product.metals.includes(metalFilter);
      const matchesQuery =
        query === '' ||
        product.name.toLowerCase().includes(query) ||
        product.shortName.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        String(product.code).includes(query);
      return matchesMetal && matchesQuery;
    });
  }, [metalFilter, searchQuery]);

  return (
    <SectionWrapper id="schedule-x-products" labelledBy="schedule-x-heading" tone="mist">
      <SectionHeader
        headingId="schedule-x-heading"
        kicker="Schedule X Statutory Directory · 18 Covered Categories"
        title="Schedule X Non-Ferrous Metal Products & Dedicated Compliance Pages"
        description="Non-Ferrous Metal EPR does not cover all metal products—obligations apply strictly to these 18 notified Schedule X categories. Select any item to open its dedicated compliance page."
      />

      <div className="mb-6 flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-xs leading-relaxed text-slate-700">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#0B1F3A]" aria-hidden="true" />
        <p>{SCHEDULE_X_SCOPE_DISCLAIMER}</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-1 rounded-md bg-slate-100 p-1">
          {FILTER_OPTIONS.map((option) => {
            const active = metalFilter === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setMetalFilter(option)}
                className={`min-h-[38px] rounded px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D] ${
                  active
                    ? 'bg-[#0B1F3A] text-white'
                    : 'text-slate-700 hover:bg-white hover:text-[#0B1F3A]'
                }`}
              >
                {option === 'All' ? 'All Metals (18)' : option}
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-80">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <label htmlFor="schedule-x-search" className="sr-only">
            Search Schedule X products
          </label>
          <input
            id="schedule-x-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter e.g. cables, cans, toys, HVAC..."
            className="min-h-[42px] w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#14532D] focus:outline-2 focus:outline-[#14532D]/20"
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white p-10 text-center">
          <p className="font-display text-base font-semibold text-[#0B1F3A]">
            No Schedule X products matched "{searchQuery}"
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Clear your search or switch metal filters to view all 18 notified categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setMetalFilter('All');
              setSearchQuery('');
            }}
            className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#14532D] px-4 py-2 text-xs font-semibold text-white hover:bg-[#166534]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <a
              key={product.code}
              href={product.slug}
              onClick={(e) => {
                e.preventDefault();
                onNavigateToProductPage(product.slug);
              }}
              className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-[#14532D]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-[#14532D] tabular-nums">
                    Item {String(product.code).padStart(2, '0')}
                  </span>
                  <span>{product.category}</span>
                </div>

                <h3 className="mt-2.5 font-display text-base font-bold leading-snug text-[#0B1F3A] group-hover:text-[#14532D]">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-medium text-slate-700">
                    {product.metals.join(' · ')}
                  </span>
                  {product.exclusions ? (
                    <span className="ml-2 text-slate-500 italic">({product.exclusions})</span>
                  ) : null}
                </div>
                <span className="inline-flex items-center gap-1 font-semibold text-[#14532D] whitespace-nowrap">
                  <span>View Page</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
