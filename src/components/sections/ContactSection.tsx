import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/nonFerrousData';
import { SectionWrapper } from '../ui/SectionWrapper';
import { SectionHeader } from '../ui/SectionHeader';
import { LeadEnquiryForm } from '../ui/LeadEnquiryForm';

/**
 * Corporate contact desk reusing verified EPR Bazaar address, phone, emails,
 * and working hours paired with the unified backend-connected LeadEnquiryForm.
 */
export function ContactSection() {
  return (
    <SectionWrapper id="contact-us" labelledBy="contact-us-heading" tone="white">
      <SectionHeader
        headingId="contact-us-heading"
        kicker="Compliance Consultation Desk"
        title="Speak With EPR Bazaar’s Non-Ferrous Metal Specialists"
        description="Schedule a Schedule X applicability review, CPCB portal registration assessment, or verified EPR certificate procurement consultation."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-col justify-between rounded-lg border border-slate-200 bg-[#F5F8F6] p-6 sm:p-8 lg:col-span-5">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#14532D]">
                Registered Corporate Office
              </p>
              <h3 className="mt-1.5 font-display text-xl font-bold text-[#0B1F3A]">
                {COMPANY_INFO.brandName}
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-600">
                A division of {COMPANY_INFO.legalEntity} · CIN: {COMPANY_INFO.cin}
              </p>
            </div>

            <div className="space-y-4 border-t border-slate-200 pt-5 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-medium text-[#0B1F3A] hover:text-[#14532D] hover:underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                <div className="space-y-1">
                  <div>
                    <span className="text-xs text-slate-500">General & Support: </span>
                    <a
                      href={`mailto:${COMPANY_INFO.emailPrimary}`}
                      className="font-medium text-[#0B1F3A] hover:text-[#14532D] hover:underline"
                    >
                      {COMPANY_INFO.emailPrimary}
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500">Legal & Statutory: </span>
                    <a
                      href={`mailto:${COMPANY_INFO.emailLegal}`}
                      className="font-medium text-[#0B1F3A] hover:text-[#14532D] hover:underline"
                    >
                      {COMPANY_INFO.emailLegal}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#14532D]" aria-hidden="true" />
                <div className="space-y-0.5 text-sm">
                  <p>{COMPANY_INFO.workingHoursWeekday}</p>
                  <p>{COMPANY_INFO.workingHoursSaturday}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500 leading-relaxed">
            Serving PIBOs, foundries, cable manufacturers, importers, and registered metal recyclers pan-India.
          </div>
        </div>

        <div className="lg:col-span-7">
          <LeadEnquiryForm
            pageSourceLabel="Contact Section (/#contact-us)"
            heading="Request EPR Consultation"
            description="Complete the fields below for CPCB registration, Schedule X SKU mapping, or EPR certificate procurement."
            submitLabel="Request EPR Consultation"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
