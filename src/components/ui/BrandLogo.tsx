interface BrandLogoProps {
  variant?: 'dark' | 'light';
}

/**
 * Displays the official uploaded EPR Bazaar logo asset cleanly
 * across both light header and dark navy footer surfaces.
 */
export function BrandLogo({ variant = 'dark' }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-center shrink-0 ${
        variant === 'light' ? 'rounded-md bg-white px-2.5 py-1.5' : ''
      }`}
    >
      <img
        src="/assets/aistudio/epr_bazaar_logo__9ac2c6f9.jpeg"
        alt="EPR Bazaar – Non-Ferrous Metal Scrap EPR Compliance India"
        width={142}
        height={40}
        decoding="async"
        className="h-10 w-auto object-contain"
      />
    </span>
  );
}
