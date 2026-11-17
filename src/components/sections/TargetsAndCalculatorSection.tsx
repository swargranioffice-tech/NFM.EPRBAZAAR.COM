import { useMemo, useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import {
  SCHEDULE_XI_TARGETS,
  SCHEDULE_XIII_TARGETS,
  type RecycledContentRow,
  type RecyclingTargetRow,
} from '../../data/nonFerrousData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';
import { DataTable, type TableColumn } from '../ui/DataTable';

const TARGET_RATE_BY_FY: Record<string, number> = {
  '2026–27': 0.1,
  '2027–28': 0.1,
  '2028–29': 0.3,
  '2029–30': 0.3,
  '2030–31': 0.5,
  '2031–32': 0.5,
  '2032–33 & onwards': 0.75,
};

const FY_START_YEAR: Record<string, number> = {
  '2026–27': 2026,
  '2027–28': 2027,
  '2028–29': 2028,
  '2029–30': 2029,
  '2030–31': 2030,
  '2031–32': 2031,
  '2032–33 & onwards': 2032,
};

const SCHEDULE_XI_COLUMNS: TableColumn<RecyclingTargetRow>[] = [
  { key: 'fy', header: 'Financial Year (Y)', mono: true, render: (r) => r.financialYear },
  { key: 'target', header: 'Q39 Target (%)', align: 'right', mono: true, render: (r) => r.recyclingTarget },
  { key: 'phase', header: 'Compliance Phase', render: (r) => r.compliancePhase },
  { key: 'rule', header: 'Statutory Basis', render: (r) => r.applicableRule },
];

const SCHEDULE_XIII_COLUMNS: TableColumn<RecycledContentRow>[] = [
  {
    key: 'metal',
    header: 'Non-Ferrous Metal',
    render: (r) => <span className="font-semibold text-[#0B1F3A]">{r.metalType}</span>,
  },
  { key: 'fy28', header: '2028–29', align: 'right', mono: true, render: (r) => r.fy2028_29 },
  { key: 'fy29', header: '2029–30', render: (r) => r.fy2029_30 },
  { key: 'fy30', header: '2030–31', render: (r) => r.fy2030_31 },
  { key: 'fy31', header: '2031–32 & onwards', align: 'right', mono: true, render: (r) => r.fy2031_32Onwards },
];

interface FeeFrameworkRow {
  entityCategory: string;
  feeBasis: string;
  portalVerification: string;
}

const Q60_FEE_FRAMEWORK: FeeFrameworkRow[] = [
  {
    entityCategory: 'Manufacturer',
    feeBasis: 'Scaled by Schedule X manufacturing & metal consumption slab (MT/annum)',
    portalVerification: 'Computed dynamically at CPCB portal challan step per Q60 schedule',
  },
  {
    entityCategory: 'Producer (P1, P2, P3, P4)',
    feeBasis: 'Scaled by annual Schedule X placement / P4 scrap import tonnage slab (MT)',
    portalVerification: 'Computed dynamically on CPCB portal based on declared Y-1 / Y-X tonnage',
  },
  {
    entityCategory: 'Refurbisher',
    feeBasis: 'Category-specific portal registration & processing slab',
    portalVerification: 'Payable online during CPCB portal registration & renewal',
  },
  {
    entityCategory: 'Collection Agent',
    feeBasis: 'Category-specific portal registration fee based on collection scale',
    portalVerification: 'Payable online via CPCB Non-Ferrous EPR portal payment gateway',
  },
  {
    entityCategory: 'Recycler',
    feeBasis: 'Scaled by SPCB CTO-approved installed recycling capacity (MT/annum)',
    portalVerification: 'Linked to CTO capacity & annual maintenance/processing rules',
  },
];

const FEE_COLUMNS: TableColumn<FeeFrameworkRow>[] = [
  {
    key: 'cat',
    header: 'CPCB Applicant Category',
    render: (r) => <span className="font-semibold text-[#0B1F3A]">{r.entityCategory}</span>,
  },
  { key: 'basis', header: 'Q60 Fee Basis', render: (r) => r.feeBasis },
  { key: 'verify', header: 'Portal Challan Verification', render: (r) => r.portalVerification },
];

/**
 * Interactive Non-Ferrous Metal EPR compliance tools covering:
 * - Q39 Schedule XI recycling targets & Historical (Y - X) target estimator
 * - Indicative QEPR = Qp × Cf calculator with CPCB-determined Cf input (never fabricated)
 * - Worked examples for Aluminium, Brass Mixed-Metal, and DC Motors
 * - Q60 Registration Fee framework, Returns, Importer obligations, Validity & EC refunds
 */
export function TargetsAndCalculatorSection() {
  const [activeTool, setActiveTool] = useState<'target' | 'qepr'>('target');

  // Tool 1: Producer Historical Target Estimator (Y - X)
  const [targetFy, setTargetFy] = useState<string>('2026–27');
  const [averageLifeX, setAverageLifeX] = useState<string>('5');
  const [historicalQty, setHistoricalQty] = useState<string>('500');

  // Tool 2: Indicative QEPR = Qp × Cf Calculator
  const [qeprMetal, setQeprMetal] = useState<'Aluminium' | 'Copper' | 'Zinc'>('Aluminium');
  const [qpTonnes, setQpTonnes] = useState<string>('100');
  const [cfFactor, setCfFactor] = useState<string>('1.00');

  const targetEstimate = useMemo(() => {
    const startYear = FY_START_YEAR[targetFy] ?? 2026;
    const xYears = Math.max(0, Math.min(50, Math.round(Number(averageLifeX) || 0)));
    const baseYearStart = startYear - xYears;
    const baseFyLabel = `${baseYearStart}–${String((baseYearStart + 1) % 100).padStart(2, '0')}`;
    const qty = Math.max(0, Number(historicalQty) || 0);
    const rate = TARGET_RATE_BY_FY[targetFy] ?? 0.1;

    return {
      baseFyLabel,
      xYears,
      ratePercent: Math.round(rate * 100),
      estimatedTargetMt: (qty * rate).toFixed(2),
    };
  }, [targetFy, averageLifeX, historicalQty]);

  const qeprEstimate = useMemo(() => {
    const qp = Math.max(0, Number(qpTonnes) || 0);
    const cf = Math.max(0, Number(cfFactor) || 0);
    return {
      qp: qp.toFixed(2),
      cf: cf.toFixed(2),
      qepr: (qp * cf).toFixed(2),
    };
  }, [qpTonnes, cfFactor]);

  return (
    <SectionWrapper id="recycling-targets" labelledBy="targets-heading" tone="white">
      <SectionHeader
        headingId="targets-heading"
        kicker="Interactive EPR Tools · Schedule XI, Schedule XIII & QEPR Formula"
        title="Non-Ferrous Metal EPR Targets, Calculators & Compliance Rules"
        description="Evaluate Q39 phased recycling targets, historical (Y − X) obligations based on product average life, indicative QEPR = Qp × Cf certificate yields, CPCB examples, registration fee framework (Q60), and enforcement rules."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
        <div className="space-y-8 lg:col-span-7">
          <div>
            <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-3">
              Q39 · Schedule XI Producer Recycling Targets
            </h3>
            <DataTable
              caption="Q39 Schedule XI phased non-ferrous metal recycling targets from FY 2026-27 to FY 2032-33 onwards"
              columns={SCHEDULE_XI_COLUMNS}
              rows={SCHEDULE_XI_TARGETS}
              rowKey={(row) => row.financialYear}
            />
            <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
              <strong className="text-[#0B1F3A]">Historical Sales & Average Life Formula:</strong>{' '}
              Annual EPR Target = Target % (Schedule XI) × Quantity of Schedule X products placed on
              the market in year <span className="font-mono font-semibold">(Y − X)</span>, where{' '}
              <span className="font-mono font-semibold">Y</span> is the assessment year and{' '}
              <span className="font-mono font-semibold">X</span> is the CPCB-prescribed average life
              (in years) of that product category.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-3">
              Schedule XIII · Manufacturer Minimum Recycled Content
            </h3>
            <DataTable
              caption="Schedule XIII minimum domestically recycled metal content requirements"
              columns={SCHEDULE_XIII_COLUMNS}
              rows={SCHEDULE_XIII_TARGETS}
              rowKey={(row) => row.metalType}
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-[#0B1F3A] p-6 sm:p-8 text-white lg:col-span-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-emerald-300">
              <Calculator className="h-5 w-5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Indicative EPR Calculators
              </span>
            </div>
            <span className="font-mono text-[11px] text-slate-300">Estimate Only</span>
          </div>

          <div
            role="tablist"
            aria-label="Select EPR Calculator Mode"
            className="mt-4 grid grid-cols-2 gap-1 rounded-md bg-[#061326] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTool === 'target'}
              onClick={() => setActiveTool('target')}
              className={`min-h-[40px] rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeTool === 'target'
                  ? 'bg-[#15803D] text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Producer Target (Y − X)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTool === 'qepr'}
              onClick={() => setActiveTool('qepr')}
              className={`min-h-[40px] rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeTool === 'qepr'
                  ? 'bg-[#15803D] text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              QEPR = Qp × Cf
            </button>
          </div>

          {activeTool === 'target' ? (
            <div className="mt-5 space-y-4">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Indicative Producer Recycling Target Estimator
                </h3>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Estimate annual recycling obligation from historical Schedule X product weight in
                  year (Y − X) using Q39 Schedule XI percentages.
                </p>
              </div>

              <div>
                <label htmlFor="calc-target-fy" className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Assessment Financial Year (Y)
                </label>
                <select
                  id="calc-target-fy"
                  value={targetFy}
                  onChange={(e) => setTargetFy(e.target.value)}
                  className="min-h-[44px] w-full rounded-md border border-white/20 bg-[#122D52] px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                >
                  {SCHEDULE_XI_TARGETS.map((row) => (
                    <option key={row.financialYear} value={row.financialYear}>
                      FY {row.financialYear} ({row.recyclingTarget})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="calc-avg-life" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Average Life X (Years)
                  </label>
                  <input
                    id="calc-avg-life"
                    type="number"
                    min="0"
                    max="50"
                    value={averageLifeX}
                    onChange={(e) => setAverageLifeX(e.target.value)}
                    className="min-h-[44px] w-full rounded-md border border-white/20 bg-[#122D52] px-3 py-2 font-mono text-sm text-white tabular-nums focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="calc-hist-qty" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Sales in (Y − X) (MT)
                  </label>
                  <input
                    id="calc-hist-qty"
                    type="number"
                    min="0"
                    step="0.5"
                    value={historicalQty}
                    onChange={(e) => setHistoricalQty(e.target.value)}
                    className="min-h-[44px] w-full rounded-md border border-white/20 bg-[#122D52] px-3 py-2 font-mono text-sm text-white tabular-nums focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="rounded-md border border-white/15 bg-[#061326] p-4 space-y-2.5">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-slate-300">Historical Base Year (Y − {targetEstimate.xYears})</span>
                  <span className="font-mono font-bold text-white tabular-nums">
                    FY {targetEstimate.baseFyLabel}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-slate-300">Q39 Schedule XI Rate</span>
                  <span className="font-mono font-bold text-emerald-300 tabular-nums">
                    {targetEstimate.ratePercent}%
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-t border-white/10 pt-2.5">
                  <span className="text-xs text-slate-200">Indicative EPR Target</span>
                  <span className="font-mono text-2xl font-bold text-white tabular-nums">
                    {targetEstimate.estimatedTargetMt} MT
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Indicative Certificate Calculator (QEPR = Qp × Cf)
                </h3>
                <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                  Enter verified recycled end-product quantity (Qp) and the official CPCB-determined
                  Conversion Factor (Cf) applicable to your process on the CPCB portal.
                </p>
              </div>

              <div>
                <label htmlFor="qepr-metal" className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Non-Ferrous Metal Stream
                </label>
                <select
                  id="qepr-metal"
                  value={qeprMetal}
                  onChange={(e) => setQeprMetal(e.target.value as 'Aluminium' | 'Copper' | 'Zinc')}
                  className="min-h-[44px] w-full rounded-md border border-white/20 bg-[#122D52] px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
                >
                  <option value="Aluminium">Aluminium & Alloys (Al)</option>
                  <option value="Copper">Copper & Alloys (Cu)</option>
                  <option value="Zinc">Zinc & Alloys (Zn)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="qepr-qp" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Recycled End-Product Qp (MT)
                  </label>
                  <input
                    id="qepr-qp"
                    type="number"
                    min="0"
                    step="0.5"
                    value={qpTonnes}
                    onChange={(e) => setQpTonnes(e.target.value)}
                    className="min-h-[44px] w-full rounded-md border border-white/20 bg-[#122D52] px-3 py-2 font-mono text-sm text-white tabular-nums focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="qepr-cf" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    CPCB Conversion Factor Cf
                  </label>
                  <input
                    id="qepr-cf"
                    type="number"
                    min="0"
                    step="0.01"
                    value={cfFactor}
                    onChange={(e) => setCfFactor(e.target.value)}
                    className="min-h-[44px] w-full rounded-md border border-white/20 bg-[#122D52] px-3 py-2 font-mono text-sm text-white tabular-nums focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="rounded-md border border-white/15 bg-[#061326] p-4 space-y-2.5">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-slate-300">Formula Applied ({qeprMetal})</span>
                  <span className="font-mono text-emerald-300 tabular-nums">
                    {qeprEstimate.qp} × {qeprEstimate.cf}
                  </span>
                </div>
                <div className="flex items-baseline justify-between border-t border-white/10 pt-2.5">
                  <span className="text-xs text-slate-200">Indicative QEPR Credits</span>
                  <span className="font-mono text-2xl font-bold text-white tabular-nums">
                    {qeprEstimate.qepr} MT
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex items-start gap-2 rounded-md border border-white/10 bg-[#061326]/70 p-3 text-[11px] leading-relaxed text-slate-300">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" aria-hidden="true" />
            <span>
              Calculations are indicative estimates only. Official Average Life (X) and Conversion
              Factors (Cf) are strictly determined by CPCB on the live portal—never assume fixed Cf
              values without checking CPCB SOPs.
            </span>
          </div>

          <a
            href="#contact-us"
            className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#15803D] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
          >
            Verify Exact Targets With EPR Bazaar
          </a>
        </div>
      </div>

      {/* CPCB Worked Examples: Aluminium, Brass Mixed-Metal, DC Motors */}
      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-[#0B1F3A] mb-4">
          CPCB Calculation Logic · Aluminium, Brass Mixed-Metal & DC Motor Examples
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
            <p className="font-mono text-xs font-semibold text-[#14532D]">Example 01 · Single Metal</p>
            <h4 className="mt-1.5 font-display text-lg font-bold text-[#0B1F3A]">
              Aluminium Recycling (QEPR = Qp × Cf)
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              A CPCB-registered Aluminium recycler processes used beverage cans or architectural
              extrusions into <span className="font-mono font-semibold text-[#0B1F3A]">Qp</span> metric
              tonnes of secondary aluminium ingots sold with GST invoices. Multiplying Qp by the
              CPCB-determined Aluminium conversion factor{' '}
              <span className="font-mono font-semibold text-[#0B1F3A]">Cf</span> yields Aluminium EPR
              certificates usable only against Aluminium obligations.
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
            <p className="font-mono text-xs font-semibold text-[#14532D]">Example 02 · Alloy Split</p>
            <h4 className="mt-1.5 font-display text-lg font-bold text-[#0B1F3A]">
              Brass Mixed-Metal (Copper + Zinc Alloy)
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              Brass components in sanitary fittings (Item 11) and electrical terminals (Item 12)
              are Copper-Zinc alloys. Compliance tracking segregates net{' '}
              <strong className="text-[#0B1F3A]">Copper</strong> and{' '}
              <strong className="text-[#0B1F3A]">Zinc</strong> constituent percentages so QEPR
              outputs and Producer offsets allocate accurately across Copper and Zinc ledgers
              without cross-metal substitution.
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
            <p className="font-mono text-xs font-semibold text-[#14532D]">Example 03 · Multi-Component</p>
            <h4 className="mt-1.5 font-display text-lg font-bold text-[#0B1F3A]">
              DC Motors (Schedule X Item 9 · Non-Auto)
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
              Non-automobile DC motors combine copper armature windings, brass commutator/brush
              fittings (Cu-Zn), aluminium housings, and ferrous steel cores. Only the non-ferrous
              fractions (Al, Cu, Zn) enter Schedule XI targets (using CPCB Average Life X) and
              corresponding Recycler QEPR certificate generation.
            </p>
          </article>
        </div>
      </div>

      {/* Q60 Registration Fees, Returns, Importer Obligations, Certificate Validity & EC */}
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-3">
            Q60 · CPCB Portal Registration Fee Framework
          </h3>
          <DataTable
            caption="Q60 CPCB Non-Ferrous Metal EPR Registration Fee Framework by Applicant Category"
            columns={FEE_COLUMNS}
            rows={Q60_FEE_FRAMEWORK}
            rowKey={(r) => r.entityCategory}
          />
          <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
            Exact INR fee brackets from Q60 of <span className="font-mono">FAQs_NFM.pdf</span> are
            verified directly against the live CPCB portal fee calculator at filing time rather than
            using unverified estimates.
          </p>
        </div>

        <div className="space-y-4 lg:col-span-5">
          <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-5">
            <h3 className="font-display text-base font-bold text-[#0B1F3A]">
              Half-Yearly & Annual Return Deadlines
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              <strong className="text-[#14532D]">Half-Yearly Return:</strong> Due by{' '}
              <span className="font-mono font-semibold">October 31</span> (April–September).
              <br />
              <strong className="text-[#14532D]">Annual Return:</strong> Due by{' '}
              <span className="font-mono font-semibold">June 30</span> following the close of the
              financial year.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-5">
            <h3 className="font-display text-base font-bold text-[#0B1F3A]">
              Importer Obligations (P3 vs P4) & Certificate Validity
            </h3>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              <strong className="text-[#0B1F3A]">Producer (P3):</strong> Stepped Schedule XI targets
              (10%–75%) on imported new Schedule X products.
              <br />
              <strong className="text-[#0B1F3A]">Producer (P4):</strong> Mandatory{' '}
              <span className="font-mono font-semibold text-[#14532D]">100% Y-1</span> obligation on
              imported used devices, used products, or non-ferrous scrap.
              <br />
              <strong className="text-[#0B1F3A]">Certificate Validity:</strong>{' '}
              <span className="font-mono font-semibold">2 years</span> from the end of the financial
              year generated.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#0B1F3A] p-5 text-white">
            <h3 className="font-display text-base font-bold text-white">
              Environmental Compensation (EC) & 3-Year Carry-Forward
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Unfulfilled targets carry forward up to 3 years (paying EC does not extinguish
              liability). Sliding-scale EC refunds apply upon delayed fulfillment:{' '}
              <span className="font-mono text-emerald-300 font-semibold">
                85% (Year 1) · 60% (Year 2) · 30% (Year 3) · Nil (After 3 Years)
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
