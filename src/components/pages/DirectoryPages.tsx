import { ArrowRight, ExternalLink, FileCheck2, ShieldAlert } from 'lucide-react';
import { STATIC_ROUTES } from '../../data/seoRoutesData';
import { COMPANY_INFO } from '../../data/nonFerrousData';
import { CPCB_64_FAQS } from '../../data/cpcbFaqsData';
import { SeoHead } from '../seo/SeoHead';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { ApplicantTypesSection } from '../sections/ApplicantTypesSection';
import { ScheduleXSection } from '../sections/ScheduleXSection';
import { TargetsAndCalculatorSection } from '../sections/TargetsAndCalculatorSection';
import { RegistrationProcessSection } from '../sections/RegistrationProcessSection';
import { FaqSection } from '../sections/FaqSection';
import { ContactSection } from '../sections/ContactSection';
import { LeadEnquiryForm } from '../ui/LeadEnquiryForm';

interface SubDirectoryProps {
  onNavigateToPath: (path: string) => void;
}

export function ApplicantDirectoryPage({ onNavigateToPath }: SubDirectoryProps) {
  return (
    <>
      <SeoHead
        title="CPCB Non Ferrous Metal EPR Applicant Types | EPR Bazaar"
        description="Explore all 8 CPCB Non Ferrous Metal EPR Applicant Types including Manufacturer, Producer P1 to P4, Refurbisher, Collection Agent & Recycler."
        canonicalPath={STATIC_ROUTES.applicantDirectory}
        serviceName="CPCB Non-Ferrous Metal EPR Applicant Category Registration"
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'Applicant Types', path: STATIC_ROUTES.applicantDirectory },
        ]}
      />

      <section className="bg-[#0B1F3A] py-10 md:py-12 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToPath}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'Applicant Types' },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            CPCB Non-Ferrous Metal EPR Applicant Types (All 8 Categories)
          </h1>
          <p className="mt-3 text-base text-slate-200 max-w-3xl leading-relaxed">
            Compare statutory scopes across Manufacturer, Producers (P1–P4), Refurbisher, Collection Agent,
            and Recycler categories on the CPCB Centralised Non-Ferrous Metal EPR Portal.
          </p>
        </div>
      </section>

      <ApplicantTypesSection onNavigateToApplicantPage={onNavigateToPath} />
    </>
  );
}

export function ScheduleXDirectoryPage({ onNavigateToPath }: SubDirectoryProps) {
  return (
    <>
      <SeoHead
        title="Schedule X EPR Products Directory (18 Items) | EPR Bazaar"
        description="Complete Schedule X EPR Products list for Aluminium, Copper & Zinc under CPCB Non Ferrous Metal rules, including automobile-grade exclusions."
        canonicalPath={STATIC_ROUTES.scheduleXDirectory}
        serviceName="Schedule X Non-Ferrous Metal EPR Product Compliance"
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'Schedule X Products', path: STATIC_ROUTES.scheduleXDirectory },
        ]}
      />

      <section className="bg-[#0B1F3A] py-10 md:py-12 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToPath}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'Schedule X Products' },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Schedule X EPR Products Directory in India
          </h1>
          <p className="mt-3 text-base text-slate-200 max-w-3xl leading-relaxed">
            Review all 18 notified product families under Chapter VIII—each linked to its dedicated
            compliance brief, covered alloys, and statutory exclusions.
          </p>
        </div>
      </section>

      <ScheduleXSection onNavigateToProductPage={onNavigateToPath} />

      <section className="bg-white py-12 border-t border-slate-200">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <LeadEnquiryForm
            pageSourceLabel={`Schedule X Directory (${STATIC_ROUTES.scheduleXDirectory})`}
            heading="Request Schedule X SKU & HS Code Applicability Check"
            description="Unsure whether your product SKU or assembly is covered under Schedule X? Submit your details for a manual regulatory review."
          />
        </div>
      </section>
    </>
  );
}

export function CalculatorDirectoryPage({ onNavigateToPath }: SubDirectoryProps) {
  return (
    <>
      <SeoHead
        title="Non Ferrous Metal EPR Certificate & Calculator | EPR Bazaar"
        description="Estimate CPCB Schedule XI recycling targets (10% to 75%) and QEPR = Qp x Cf EPR Certificate metrics for Aluminium, Copper, and Zinc."
        canonicalPath={STATIC_ROUTES.calculator}
        serviceName="Non-Ferrous Metal EPR Certificate & Target Calculation Support"
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'EPR Certificate & Calculator', path: STATIC_ROUTES.calculator },
        ]}
      />

      <section className="bg-[#0B1F3A] py-10 md:py-12 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToPath}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'EPR Certificate & Calculator' },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Non-Ferrous Metal EPR Certificate & Obligation Calculator
          </h1>
          <p className="mt-3 text-base text-slate-200 max-w-3xl leading-relaxed">
            Interactive Q39 Schedule XI recycling schedule, historical (Y − X) sales baseline tool,
            and indicative QEPR = Qp × Cf calculator for Aluminium, Copper, and Zinc.
          </p>
        </div>
      </section>

      <TargetsAndCalculatorSection />

      <section className="bg-white py-12 border-t border-slate-200">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <LeadEnquiryForm
            pageSourceLabel={`EPR Calculator Page (${STATIC_ROUTES.calculator})`}
            heading="Procure Verified Non-Ferrous Metal EPR Certificates"
            description="Connect with EPR Bazaar’s 490+ CPCB-registered recycler network for metal-matched Aluminium, Copper, and Zinc EPR certificate fulfillment."
          />
        </div>
      </section>
    </>
  );
}

const FEES_PAGE_FAQS = [
  {
    question: 'How does CPCB calculate registration fees under Q60 for Non-Ferrous Metal EPR?',
    answer:
      'CPCB portal registration and annual processing fee slabs (referenced in Q60 of the CPCB IPC-V FAQ framework) are linked dynamically to entity category (Manufacturer, Producer P1–P4, Refurbisher, Collection Agent, or Recycler) and annual Schedule X placement, import tonnage, or approved CTO recycling capacity.',
  },
  {
    question: 'What are the half-yearly and annual return deadlines on the CPCB portal?',
    answer:
      'Registered Producers, Manufacturers, Refurbishers, Collection Agents, and Recyclers file half-yearly compliance returns on or before October 31 and comprehensive annual returns on or before June 30 following the financial year.',
  },
  {
    question: 'What happens to Environmental Compensation (EC) if targets are cleared within 3 years?',
    answer:
      'Defaulting on annual targets triggers Environmental Compensation. Unfulfilled obligations carry forward for up to 3 years with diminishing EC refund slabs (85% in Year 1, 60% in Year 2, 30% in Year 3, and Nil thereafter) once shortfalls are retired.',
  },
];

export function RegistrationFeesPage({ onNavigateToPath }: SubDirectoryProps) {
  return (
    <>
      <SeoHead
        title="CPCB Non Ferrous Metal EPR Registration Fees & Process | EPR Bazaar"
        description="CPCB Non Ferrous Metal EPR registration fees framework (Q60), 5-step portal workflow, half-yearly & annual return due dates, and EC compliance."
        canonicalPath={STATIC_ROUTES.fees}
        serviceName="CPCB Non-Ferrous Metal EPR Portal Registration & Fee Filing"
        includeHowToSchema
        pageFaqs={FEES_PAGE_FAQS}
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'Registration Process & Fees', path: STATIC_ROUTES.fees },
        ]}
      />

      <section className="bg-[#0B1F3A] py-10 md:py-12 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToPath}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'Registration Fees & Process' },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            CPCB Non-Ferrous Metal EPR Registration Fees & Filing Calendar
          </h1>
          <p className="mt-3 text-base text-slate-200 max-w-3xl leading-relaxed">
            Understand Q60 portal registration fee structure, 5-step CPCB filing workflow,
            Producer P4 100% Y-1 obligations, return deadlines, and Environmental Compensation governance.
          </p>
        </div>
      </section>

      <RegistrationProcessSection />

      <section className="bg-white py-12 border-t border-slate-200">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 space-y-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
              <FileCheck2 className="h-5 w-5 text-[#14532D]" aria-hidden="true" />
              <h2 className="mt-3 font-display text-lg font-bold text-[#0B1F3A]">
                Q60 Fee Calculation Basis
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                CPCB portal fees depend on applicant category and tonnage placed, imported (P3/P4),
                or CTO-approved capacity. Challans are generated directly inside the official CPCB portal without fabricated fixed estimates.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
              <ArrowRight className="h-5 w-5 text-[#14532D]" aria-hidden="true" />
              <h2 className="mt-3 font-display text-lg font-bold text-[#0B1F3A]">
                Statutory Return Due Dates
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Half-Yearly Returns are due by <strong>October 31</strong> and Annual Audited Returns
                are due by <strong>June 30</strong> after close of each financial year.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-[#F5F8F6] p-6">
              <ShieldAlert className="h-5 w-5 text-[#0B1F3A]" aria-hidden="true" />
              <h2 className="mt-3 font-display text-lg font-bold text-[#0B1F3A]">
                Official CPCB Portal Challans
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Verify live fee schedules directly on{' '}
                <a
                  href="https://cpcb.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#14532D] hover:underline"
                >
                  <span>cpcb.nic.in</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>{' '}
                before submission.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-[#0B1F3A]">
              Fee & Governance FAQs
            </h2>
            <dl className="mt-4 divide-y divide-slate-200">
              {FEES_PAGE_FAQS.map((item) => (
                <div key={item.question} className="py-4">
                  <dt className="font-display text-base font-bold text-[#0B1F3A]">{item.question}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          <LeadEnquiryForm
            pageSourceLabel={`Registration Fees Page (${STATIC_ROUTES.fees})`}
            heading="Request CPCB Registration & Fee Filing Assistance"
            description={`Consult ${COMPANY_INFO.legalEntity} for document preparation, CTO/IEC checks, and fee challan verification.`}
          />
        </div>
      </section>
    </>
  );
}

export function FaqDirectoryPage({ onNavigateToPath }: SubDirectoryProps) {
  return (
    <>
      <SeoHead
        title="CPCB Non Ferrous Metal EPR FAQs (All 64 Questions) | EPR Bazaar"
        description="Search all 64 CPCB IPC-V Non Ferrous Metal EPR FAQ questions covering Schedule X, Producer P1-P4, Recycler certificates, Q39 targets & Q60 fees."
        canonicalPath={STATIC_ROUTES.faq}
        serviceName="CPCB Non-Ferrous Metal EPR Advisory & FAQ Guide"
        pageFaqs={CPCB_64_FAQS}
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'CPCB 64 FAQs', path: STATIC_ROUTES.faq },
        ]}
      />

      <section className="bg-[#0B1F3A] py-10 md:py-12 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToPath}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'CPCB 64 FAQs' },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            CPCB Non-Ferrous Metal Scrap EPR FAQs (Q1–Q64)
          </h1>
          <p className="mt-3 text-base text-slate-200 max-w-3xl leading-relaxed">
            Searchable repository of 64 regulatory questions organized across 9 CPCB compliance categories,
            attributed to CPCB IPC-V Division with direct links to registration and Schedule X pages.
          </p>
        </div>
      </section>

      <FaqSection
        onNavigateToApplicantPage={onNavigateToPath}
        onNavigateToProductPage={onNavigateToPath}
      />
    </>
  );
}

export function ContactDirectoryPage({ onNavigateToPath }: SubDirectoryProps) {
  return (
    <>
      <SeoHead
        title="Contact EPR Bazaar | Non Ferrous Metal EPR Compliance India"
        description="Contact EPR Bazaar (Nyanvi Ecoclean Private Limited) in Kolkata for CPCB Non Ferrous Metal EPR Registration, Producer P4 & EPR certificates."
        canonicalPath={STATIC_ROUTES.contact}
        includeServiceSchema={false}
        breadcrumbs={[
          { name: 'EPR Bazaar', path: '/' },
          { name: 'Non-Ferrous Metal EPR', path: STATIC_ROUTES.hub },
          { name: 'Contact Us', path: STATIC_ROUTES.contact },
        ]}
      />

      <section className="bg-[#0B1F3A] py-10 md:py-12 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Breadcrumbs
            variant="dark"
            onNavigate={onNavigateToPath}
            items={[
              { label: 'Non-Ferrous Metal EPR', href: STATIC_ROUTES.hub },
              { label: 'Contact Us' },
            ]}
          />
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Contact EPR Bazaar Compliance Desk
          </h1>
          <p className="mt-3 text-base text-slate-200 max-w-3xl leading-relaxed">
            Reach our Kolkata headquarters or submit an enquiry for CPCB Non-Ferrous Metal EPR
            registration, Schedule X SKU assessment, or recycler onboarding across India.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
