import { useEffect } from 'react';

interface JsonLdSchemaProps {
  id: string;
  schema: Record<string, unknown>;
}

/**
 * Reusable Schema.org JSON-LD component for rich search results
 * (Organization, Service, FAQPage, BreadcrumbList, HowTo).
 */
export function JsonLdSchema({ id, schema }: JsonLdSchemaProps) {
  useEffect(() => {
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    const script = existing ?? document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);

    if (!existing) {
      document.head.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [id, schema]);

  return null;
}
