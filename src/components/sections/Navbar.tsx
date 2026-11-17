import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { STATIC_ROUTES } from '../../data/seoRoutesData';
import { BrandLogo } from '../ui/BrandLogo';

interface NavbarProps {
  currentPath: string;
  isSubPage?: boolean;
  onNavigateToPath: (path: string) => void;
  onNavigateHome: (hash?: string) => void;
}

const PRIMARY_NAV_LINKS = [
  { id: 'home', label: 'Home', href: STATIC_ROUTES.hub, isHash: false },
  {
    id: 'about-non-ferrous-epr',
    label: 'About Non-Ferrous Metals EPR',
    href: '/#about-non-ferrous-epr',
    hash: '#about-non-ferrous-epr',
    isHash: true,
  },
  { id: 'applicant-types', label: 'Applicant Types', href: STATIC_ROUTES.applicantDirectory, isHash: false },
  { id: 'schedule-x-products', label: 'Schedule X Products', href: STATIC_ROUTES.scheduleXDirectory, isHash: false },
  { id: 'registration-process', label: 'Registration Process', href: STATIC_ROUTES.fees, isHash: false },
  { id: 'epr-certificates', label: 'EPR Certificates', href: STATIC_ROUTES.calculator, isHash: false },
  { id: 'cpcb-faqs', label: 'CPCB FAQs', href: STATIC_ROUTES.faq, isHash: false },
  { id: 'contact-us', label: 'Contact Us', href: STATIC_ROUTES.contact, isHash: false },
];

/**
 * Responsive 3-zone corporate header linking all major Non-Ferrous Metal EPR
 * directory and service routes while preserving smooth home anchor navigation.
 */
export function Navbar({
  currentPath,
  onNavigateToPath,
  onNavigateHome,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const normalizedCurrent = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof PRIMARY_NAV_LINKS)[number]
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    if (item.isHash && item.hash) {
      onNavigateHome(item.hash);
      return;
    }
    if (item.href === STATIC_ROUTES.hub) {
      onNavigateHome();
      return;
    }
    onNavigateToPath(item.href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1380px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href={STATIC_ROUTES.hub}
          onClick={(e) => {
            e.preventDefault();
            onNavigateHome();
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14532D] rounded-sm shrink-0"
          aria-label="EPR Bazaar Non-Ferrous Metal EPR Home"
        >
          <BrandLogo variant="dark" />
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-700"
        >
          {PRIMARY_NAV_LINKS.map((item) => {
            const isActive = !item.isHash && normalizedCurrent === item.href;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, item)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#14532D] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14532D] ${
                  isActive ? 'font-bold text-[#14532D]' : ''
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={STATIC_ROUTES.contact}
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              onNavigateToPath(STATIC_ROUTES.contact);
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#14532D] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#166534] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F3A]"
          >
            Get EPR Registered
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex xl:hidden h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#0B1F3A] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden border-t border-slate-200 bg-white px-4 pb-6 pt-3 sm:px-6"
        >
          <nav aria-label="Mobile and Tablet Navigation" className="flex flex-col divide-y divide-slate-100">
            {PRIMARY_NAV_LINKS.map((item) => {
              const isActive = !item.isHash && normalizedCurrent === item.href;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`flex min-h-[44px] items-center justify-between py-2.5 text-sm transition-colors hover:text-[#14532D] ${
                    isActive ? 'font-bold text-[#14532D]' : 'font-medium text-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
          <div className="mt-4 pt-2 sm:hidden">
            <a
              href={STATIC_ROUTES.contact}
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                onNavigateToPath(STATIC_ROUTES.contact);
              }}
              className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#14532D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#166534]"
            >
              Get EPR Registered
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
