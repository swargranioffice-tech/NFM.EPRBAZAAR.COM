import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  labelledBy?: string;
  tone?: 'white' | 'mist' | 'navy';
  children: ReactNode;
  className?: string;
}

const TONE_CLASSES: Record<NonNullable<SectionWrapperProps['tone']>, string> = {
  white: 'bg-white text-slate-900',
  mist: 'bg-[#F5F8F6] text-slate-900 border-y border-slate-200/80',
  navy: 'bg-[#0B1F3A] text-white',
};

/**
 * Reusable semantic section wrapper providing accessible landmarks,
 * consistent vertical rhythm, and 1440px-ready max-width containment.
 */
export function SectionWrapper({
  id,
  labelledBy,
  tone = 'white',
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 md:py-24 ${TONE_CLASSES[tone]} ${className}`}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">{children}</div>
    </section>
  );
}
