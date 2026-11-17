declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __EPR_GA4_INITIALIZED__?: boolean;
  }
}

const GA4_ID_PATTERN = /^G-[A-Z0-9]{6,20}$/i;

export function getGa4MeasurementId(): string {
  const id = (import.meta.env?.VITE_GA4_MEASUREMENT_ID || '').trim();
  return GA4_ID_PATTERN.test(id) ? id : '';
}

export function getSearchConsoleToken(): string {
  return (import.meta.env?.VITE_GSC_VERIFICATION_TOKEN || '').trim();
}

export function ensureGa4Initialized(): void {
  const measurementId = getGa4MeasurementId();
  if (!measurementId || typeof window === 'undefined' || window.__EPR_GA4_INITIALIZED__) {
    return;
  }

  window.__EPR_GA4_INITIALIZED__ = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
    anonymize_ip: true,
  });

  const scriptId = 'eprbazaar-ga4-script';
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }
}

export function trackPageView(pagePath: string, pageTitle: string): void {
  const measurementId = getGa4MeasurementId();
  if (!measurementId || typeof window === 'undefined') return;
  ensureGa4Initialized();
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
      page_location: window.location.href,
    });
  }
}

export function trackEnquiryConversion(applicantType: string, metalCategory: string, pageSource: string): void {
  const measurementId = getGa4MeasurementId();
  if (!measurementId || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'epr_enquiry_submitted', {
    applicant_type: applicantType,
    metal_category: metalCategory,
    page_source: pageSource,
  });
}
