import { useState } from 'react';
import { Factory } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

/**
 * Core Web Vitals optimized image frame with explicit dimensions, async decoding,
 * lazy loading default for below-fold media, and corporate visual fallback.
 */
export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B1F3A] via-[#122D52] to-[#14532D] p-6 text-center text-white ${className}`}
      >
        <Factory className="h-8 w-8 text-emerald-300" aria-hidden="true" />
        <p className="font-display text-sm font-semibold tracking-tight text-white/90">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
