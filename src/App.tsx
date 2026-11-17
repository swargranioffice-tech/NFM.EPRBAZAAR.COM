/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { SeoHead } from './components/seo/SeoHead';
import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MetalScopeSection } from './components/sections/MetalScopeSection';
import { ApplicantTypesSection } from './components/sections/ApplicantTypesSection';
import { ScheduleXSection } from './components/sections/ScheduleXSection';
import { TargetsAndCalculatorSection } from './components/sections/TargetsAndCalculatorSection';
import { RegistrationProcessSection } from './components/sections/RegistrationProcessSection';
import { CertificatesAndWhySection } from './components/sections/CertificatesAndWhySection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { ApplicantDetailPage } from './components/pages/ApplicantDetailPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { MetalRegistrationPage } from './components/pages/MetalRegistrationPage';
import {
  ApplicantDirectoryPage,
  CalculatorDirectoryPage,
  ContactDirectoryPage,
  FaqDirectoryPage,
  RegistrationFeesPage,
  ScheduleXDirectoryPage,
} from './components/pages/DirectoryPages';
import { LeadCapturePopup } from './components/ui/LeadCapturePopup';
import { findApplicantBySlug } from './data/applicantTypesData';
import { findScheduleXProductBySlug } from './data/scheduleXData';
import { findMetalPageBySlug, STATIC_ROUTES } from './data/seoRoutesData';
import { CPCB_64_FAQS } from './data/cpcbFaqsData';

function normalizePathname(rawPath: string): string {
  if (!rawPath || rawPath === '/' || rawPath === '/non-ferrous-metal-epr' || rawPath === '/non-ferrous-metal-epr/') {
    return '/';
  }
  const stripped = rawPath.startsWith('/non-ferrous-metal-epr/')
    ? rawPath.replace('/non-ferrous-metal-epr', '')
    : rawPath;
  return stripped.endsWith('/') ? stripped : `${stripped}/`;
}

export default function App() {
  const [pathname, setPathname] = useState<string>(() => normalizePathname(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPathname(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const activeApplicant = findApplicantBySlug(pathname);
  const activeProduct = activeApplicant ? undefined : findScheduleXProductBySlug(pathname);
  const activeMetalPage =
    activeApplicant || activeProduct ? undefined : findMetalPageBySlug(pathname);

  const isApplicantDirectory = pathname === STATIC_ROUTES.applicantDirectory;
  const isScheduleXDirectory = pathname === STATIC_ROUTES.scheduleXDirectory;
  const isCalculatorPage = pathname === STATIC_ROUTES.calculator;
  const isFeesPage = pathname === STATIC_ROUTES.fees;
  const isFaqPage = pathname === STATIC_ROUTES.faq;
  const isContactPage = pathname === STATIC_ROUTES.contact;

  const isSubPage = Boolean(
    activeApplicant ||
      activeProduct ||
      activeMetalPage ||
      isApplicantDirectory ||
      isScheduleXDirectory ||
      isCalculatorPage ||
      isFeesPage ||
      isFaqPage ||
      isContactPage
  );

  const navigateToPath = (slug: string) => {
    const normalized = normalizePathname(slug);
    if (normalizePathname(window.location.pathname) !== normalized) {
      window.history.pushState({}, '', normalized);
      setPathname(normalized);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = (hash?: string) => {
    const baseHubPath = STATIC_ROUTES.hub;
    if (normalizePathname(window.location.pathname) !== baseHubPath) {
      window.history.pushState({}, '', baseHubPath + (hash || ''));
      setPathname(baseHubPath);
    }
    if (hash && hash.startsWith('#')) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#0B1F3A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar
        currentPath={pathname}
        isSubPage={isSubPage}
        onNavigateToPath={navigateToPath}
        onNavigateHome={navigateHome}
      />

      <main id="main-content">
        {activeApplicant ? (
          <ApplicantDetailPage
            applicant={activeApplicant}
            onNavigateHome={navigateHome}
            onNavigateToApplicantPage={navigateToPath}
          />
        ) : activeProduct ? (
          <ProductDetailPage
            product={activeProduct}
            onNavigateHome={navigateHome}
            onNavigateToApplicantPage={navigateToPath}
            onNavigateToProductPage={navigateToPath}
          />
        ) : activeMetalPage ? (
          <MetalRegistrationPage
            metalPage={activeMetalPage}
            onNavigateToPath={navigateToPath}
          />
        ) : isApplicantDirectory ? (
          <ApplicantDirectoryPage onNavigateToPath={navigateToPath} />
        ) : isScheduleXDirectory ? (
          <ScheduleXDirectoryPage onNavigateToPath={navigateToPath} />
        ) : isCalculatorPage ? (
          <CalculatorDirectoryPage onNavigateToPath={navigateToPath} />
        ) : isFeesPage ? (
          <RegistrationFeesPage onNavigateToPath={navigateToPath} />
        ) : isFaqPage ? (
          <FaqDirectoryPage onNavigateToPath={navigateToPath} />
        ) : isContactPage ? (
          <ContactDirectoryPage onNavigateToPath={navigateToPath} />
        ) : (
          <>
            <SeoHead
              title="Non Ferrous Metal EPR Registration India | EPR Bazaar"
              description="CPCB Non Ferrous Metal EPR Registration for Aluminium, Copper & Zinc under Schedule X. Producer P4 & Recycler compliance by EPR Bazaar."
              canonicalPath={STATIC_ROUTES.hub}
              includeHowToSchema
              pageFaqs={CPCB_64_FAQS}
              breadcrumbs={[
                { name: 'EPR Bazaar Home', path: '/' },
                { name: 'Non-Ferrous Metal EPR Registration', path: STATIC_ROUTES.hub },
              ]}
            />
            <HeroSection />
            <MetalScopeSection onNavigateToPath={navigateToPath} />
            <ApplicantTypesSection onNavigateToApplicantPage={navigateToPath} />
            <ScheduleXSection onNavigateToProductPage={navigateToPath} />
            <TargetsAndCalculatorSection />
            <RegistrationProcessSection />
            <CertificatesAndWhySection />
            <FaqSection
              onNavigateToApplicantPage={navigateToPath}
              onNavigateToProductPage={navigateToPath}
            />
            <ContactSection />
          </>
        )}
      </main>

      <Footer
        isSubPage={isSubPage}
        onNavigateHome={navigateHome}
        onNavigateToApplicantPage={navigateToPath}
        onNavigateToProductPage={navigateToPath}
      />

      <LeadCapturePopup />
    </div>
  );
}
