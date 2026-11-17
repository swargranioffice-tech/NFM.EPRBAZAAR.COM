interface SectionHeaderProps {
  headingId: string;
  kicker: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
}

/**
 * Reusable editorial section header with unboxed text kicker,
 * balanced headline typography, and controlled line measure.
 */
export function SectionHeader({
  headingId,
  kicker,
  title,
  description,
  tone = 'light',
  align = 'left',
}: SectionHeaderProps) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignment} mb-10 md:mb-12`}>
      <p
        className={`text-xs font-semibold tracking-wider uppercase ${
          isDark ? 'text-emerald-300' : 'text-[#14532D]'
        }`}
      >
        {kicker}
      </p>
      <h2
        id={headingId}
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance ${
          isDark ? 'text-white' : 'text-[#0B1F3A]'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-base sm:text-[17px] leading-relaxed max-w-2xl ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
