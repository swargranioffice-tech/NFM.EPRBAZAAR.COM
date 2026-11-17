import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { LeadEnquiryForm } from './LeadEnquiryForm';

const POPUP_STORAGE_KEY = 'eprbazaar_nfm_popup_date';
const SUBMITTED_STORAGE_KEY = 'eprbazaar_nfm_submitted_date';

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function hasShownOrSubmittedToday(): boolean {
  try {
    const today = getTodayKey();
    return (
      localStorage.getItem(POPUP_STORAGE_KEY) === today ||
      localStorage.getItem(SUBMITTED_STORAGE_KEY) === today
    );
  } catch {
    return false;
  }
}

function markShownToday(): void {
  try {
    localStorage.setItem(POPUP_STORAGE_KEY, getTodayKey());
  } catch {
    // Ignore storage unavailability
  }
}

/**
 * Automatic B2B Lead Capture Modal triggered once per visitor per calendar day
 * via 8-second timer, desktop exit-intent, or mobile scroll threshold (~45%),
 * with an always-visible accessible close button and Escape key dismissal.
 */
export function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const triggeredRef = useRef(false);

  const triggerOpen = () => {
    if (triggeredRef.current || hasShownOrSubmittedToday()) return;
    triggeredRef.current = true;
    markShownToday();
    setIsOpen(true);
  };

  useEffect(() => {
    if (hasShownOrSubmittedToday()) return;

    // 1. 8-second dwell timer
    const timer = window.setTimeout(() => {
      triggerOpen();
    }, 8000);

    // 2. Desktop exit-intent (top edge mouseleave)
    const handleMouseLeave = (e: MouseEvent) => {
      if (window.innerWidth >= 1024 && e.clientY <= 12) {
        triggerOpen();
      }
    };

    // 3. Mobile scroll trigger (past 45% of document height)
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable > 0 && window.scrollY / scrollable >= 0.45) {
          triggerOpen();
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-enquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-slate-200 bg-[#0B1F3A] px-5 py-3.5 text-white">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
              CPCB Compliance Assistance · EPR Bazaar
            </p>
            <h2 id="popup-enquiry-title" className="font-display text-base font-bold text-white">
              Non-Ferrous Metal EPR Registration Assessment
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close enquiry popup"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/25 bg-[#122D52] text-white transition-colors hover:bg-white hover:text-[#0B1F3A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <LeadEnquiryForm
            compact
            pageSourceLabel={`Popup (${window.location.pathname})`}
            heading="Get Your CPCB Category & Schedule X Assessment"
            description="Complete this short form for manual CPCB applicant verification and EPR certificate planning."
            submitLabel="Request Callback"
          />
        </div>
      </div>
    </div>
  );
}
