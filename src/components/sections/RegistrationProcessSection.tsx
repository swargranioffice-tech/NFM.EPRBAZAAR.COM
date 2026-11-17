import { ArrowRight, Check } from 'lucide-react';
import { REGISTRATION_STEPS } from '../../data/nonFerrousData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';

/**
 * 5-step CPCB Non-Ferrous Metal EPR Registration and compliance workflow.
 */
export function RegistrationProcessSection() {
  return (
    <SectionWrapper id="registration-process" labelledBy="registration-process-heading" tone="mist">
      <SectionHeader
        headingId="registration-process-heading"
        kicker="CPCB Portal Filing Workflow"
        title="5-Step Non-Ferrous Metal EPR Registration Process"
        description="From SKU-level Schedule X classification and SPCB consent verification to CPCB registration grant and annual return reconciliation."
      />

      <div className="space-y-4">
        {REGISTRATION_STEPS.map((step) => (
          <article
            key={step.stepNumber}
            className="grid grid-cols-1 gap-6 rounded-lg border border-slate-200 bg-white p-6 sm:p-7 lg:grid-cols-12 lg:items-start"
          >
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                <span className="font-mono text-sm font-bold text-[#14532D] tabular-nums">
                  Step {step.stepNumber}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{step.duration}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-bold text-[#0B1F3A]">
                {step.title}
              </h3>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>

            <div className="lg:col-span-4 border-t border-slate-100 pt-4 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pt-0 lg:pl-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Key Deliverables
              </p>
              <ul className="mt-2.5 space-y-2 text-sm text-slate-700">
                {step.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
            Need Accelerated CPCB Portal Onboarding?
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Our compliance desk prepares your complete Schedule X baseline and documentation dossier before filing.
          </p>
        </div>
        <a
          href="#contact-us"
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-[#14532D] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0"
        >
          <span>Start Registration Filing</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </SectionWrapper>
  );
}
