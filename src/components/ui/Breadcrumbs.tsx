import { ChevronRight } from 'lucide-react';

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbEntry[];
  onNavigate?: (path: string) => void;
  variant?: 'dark' | 'light';
}

/**
 * Semantic accessible breadcrumb trail matching BreadcrumbList structured data.
 */
export function Breadcrumbs({ items, onNavigate, variant = 'dark' }: BreadcrumbsProps) {
  const linkColor =
    variant === 'dark'
      ? 'text-emerald-300 hover:text-white hover:underline'
      : 'text-[#14532D] hover:text-[#0B1F3A] hover:underline';
  const separatorColor = variant === 'dark' ? 'text-slate-500' : 'text-slate-400';
  const currentColor = variant === 'dark' ? 'text-white font-medium' : 'text-[#0B1F3A] font-medium';

  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx > 0 ? (
                <ChevronRight className={`h-3.5 w-3.5 shrink-0 ${separatorColor}`} aria-hidden="true" />
              ) : null}
              {!isLast && item.href ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (onNavigate && item.href && item.href.startsWith('/')) {
                      e.preventDefault();
                      onNavigate(item.href);
                    }
                  }}
                  className={`transition-colors ${linkColor}`}
                >
                  {item.label}
                </a>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={currentColor}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
