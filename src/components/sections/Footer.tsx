import { ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/nonFerrousData';
import { EXACT_EIGHT_APPLICANT_OPTIONS } from '../../data/applicantTypesData';
import { SCHEDULE_X_PRODUCT_DETAILS } from '../../data/scheduleXData';
import { STATIC_ROUTES } from '../../data/seoRoutesData';
import { BrandLogo } from '../ui/BrandLogo';

interface FooterProps {
  isSubPage?: boolean;
  onNavigateHome?: (hash?: string) => void;
  onNavigateToApplicantPage?: (slug: string) => void;
  onNavigateToProductPage?: (slug: string) => void;
}

const HUB_AND_METAL_LINKS = [
  { label: 'Non-Ferrous Metal EPR Home', path: STATIC_ROUTES.hub },
  { label: 'Aluminium EPR Registration', path: STATIC_ROUTES.aluminium },
  { label: 'Copper EPR Registration', path: STATIC_ROUTES.copper },
  { label: 'Zinc EPR Registration', path: STATIC_ROUTES.zinc },
  { label: 'EPR Certificate & Calculator', path: STATIC_ROUTES.calculator },
  { label: 'Registration Fees & Process', path: STATIC_ROUTES.fees },
  { label: 'CPCB 64 FAQs Library', path: STATIC_ROUTES.faq },
  { label: 'Contact Compliance Desk', path: STATIC_ROUTES.contact },
];

/**
 * Quiet corporate footer linking all canonical hubs, 8 Applicant Types,
 * Schedule X directory & items, metal guides, and XML sitemap.
 */
export function Footer({
  onNavigateHome,
  onNavigateToApplicantPage,
  onNavigateToProductPage,
}: FooterProps) {
  const navigateInternal = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === STATIC_ROUTES.hub && onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      return;
    }
    if (onNavigateToProductPage) {
      e.preventDefault();
      onNavigateToProductPage(path);
    }
  };

  return (
    <footer className="border-t border-slate-800 bg-[#061326] text-slate-300">
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4 space-y-4">
            <a
              href={STATIC_ROUTES.hub}
              onClick={(e) => {
                if (onNavigateHome) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              aria-label="Back to EPR Bazaar Non-Ferrous Metal EPR Home"
            >
              <BrandLogo variant="light" />
            </a>
            <p className="text-sm leading-relaxed text-slate-300 max-w-md">
              {COMPANY_INFO.missionCopy}
            </p>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-200">{COMPANY_INFO.legalEntity}</p>
              <p>CIN: {COMPANY_INFO.cin}</p>
              <p>{COMPANY_INFO.address}</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
              Metals & Tools
            </h2>
            <ul className="mt-4 space-y-2 text-xs">
              {HUB_AND_METAL_LINKS.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => navigateInternal(e, item.path)}
                    className="text-slate-300 transition-colors hover:text-emerald-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
              Applicant Type SEO Pages
            </h2>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <a
                  href={STATIC_ROUTES.applicantDirectory}
                  onClick={(e) => navigateInternal(e, STATIC_ROUTES.applicantDirectory)}
                  className="font-semibold text-emerald-300 hover:underline"
                >
                  All Applicant Types Overview
                </a>
              </li>
              {EXACT_EIGHT_APPLICANT_OPTIONS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.slug}
                    onClick={(e) => {
                      if (onNavigateToApplicantPage) {
                        e.preventDefault();
                        onNavigateToApplicantPage(item.slug);
                      }
                    }}
                    className="text-slate-300 transition-colors hover:text-emerald-300"
                  >
                    {item.exactOptionLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white">
              Schedule X & Portal Links
            </h2>
            <ul className="mt-4 space-y-1.5 text-xs">
              <li>
                <a
                  href={STATIC_ROUTES.scheduleXDirectory}
                  onClick={(e) => navigateInternal(e, STATIC_ROUTES.scheduleXDirectory)}
                  className="font-semibold text-emerald-300 hover:underline"
                >
                  View All 18 Schedule X Products
                </a>
              </li>
              {SCHEDULE_X_PRODUCT_DETAILS.slice(0, 5).map((prod) => (
                <li key={prod.code}>
                  <a
                    href={prod.slug}
                    onClick={(e) => navigateInternal(e, prod.slug)}
                    className="text-slate-300 transition-colors hover:text-emerald-300"
                  >
                    Item {prod.code}: {prod.shortName}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 border-t border-white/10 pt-4 space-y-1.5 text-xs">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <a
                  href={COMPANY_INFO.mainWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-300 hover:underline"
                >
                  <span>eprbazaar.com</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <a
                  href={COMPANY_INFO.aboutWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-300 hover:underline"
                >
                  <span>About Us</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
                <a href="/sitemap.xml" className="text-slate-300 hover:text-emerald-300 hover:underline">
                  Sitemap
                </a>
              </div>
              <div className="pt-1 text-slate-400">
                {COMPANY_INFO.phoneDisplay} · {COMPANY_INFO.emailPrimary}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalEntity}. All rights reserved.
          </p>
          <p>
            Portal: nfm.eprbazaar.com · Independent CPCB EPR Compliance Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
