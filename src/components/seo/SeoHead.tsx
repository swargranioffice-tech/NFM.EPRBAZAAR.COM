import { useEffect } from 'react';
import { COMPANY_INFO, REGISTRATION_STEPS } from '../../data/nonFerrousData';
import { SITE_ORIGIN } from '../../data/seoRoutesData';
import type { ApplicantFaq } from '../../data/applicantTypesData';
import { JsonLdSchema } from './JsonLdSchema';

export interface SeoBreadcrumbSchemaItem {
  name: string;
  path: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogImageAlt?: string;
  serviceName?: string;
  includeServiceSchema?: boolean;
  includeHowToSchema?: boolean;
  pageFaqs?: ApplicantFaq[];
  breadcrumbs?: SeoBreadcrumbSchemaItem[];
  breadcrumbLabel?: string;
}

function upsertMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function upsertLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let link = document.querySelector(selector) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    if (hreflang) link.hreflang = hreflang;
    document.head.appendChild(link);
  }
  link.href = href;
}

/**
 * Route-aware SEO head manager synchronizing unique titles, descriptions,
 * canonical URLs, India hreflang/geo metadata, OpenGraph/Twitter cards,
 * and eligible Schema.org JSON-LD.
 */
export function SeoHead({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/src/assets/images/hero_non_ferrous_recycling_1794932712798.jpg',
  ogImageAlt = 'EPR Bazaar Non-Ferrous Metal Scrap EPR Registration in India',
  serviceName = 'Non-Ferrous Metal Scrap EPR Registration in India',
  includeServiceSchema = true,
  includeHowToSchema = false,
  pageFaqs,
  breadcrumbs,
  breadcrumbLabel,
}: SeoHeadProps) {
  const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const canonicalUrl = `${SITE_ORIGIN}${normalizedPath}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_ORIGIN}${ogImage}`;

  useEffect(() => {
    document.title = title;
    upsertMetaTag('name', 'description', description);
    upsertMetaTag('name', 'robots', 'index, follow');
    upsertMetaTag('name', 'geo.region', 'IN');
    upsertMetaTag('name', 'geo.placename', 'India');

    upsertMetaTag('property', 'og:type', 'website');
    upsertMetaTag('property', 'og:locale', 'en_IN');
    upsertMetaTag('property', 'og:site_name', 'EPR Bazaar');
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:image', absoluteOgImage);
    upsertMetaTag('property', 'og:image:alt', ogImageAlt);

    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', absoluteOgImage);

    upsertLinkTag('canonical', canonicalUrl);
    upsertLinkTag('alternate', canonicalUrl, 'en-IN');
  }, [title, description, canonicalUrl, normalizedPath, absoluteOgImage, ogImageAlt]);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://eprbazaar.com/#organization',
    name: 'EPR Bazaar',
    legalName: COMPANY_INFO.legalEntity,
    url: COMPANY_INFO.mainWebsite,
    logo: `${SITE_ORIGIN}/assets/aistudio/epr_bazaar_logo__9ac2c6f9.jpeg`,
    email: COMPANY_INFO.emailPrimary,
    telephone: COMPANY_INFO.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, Saket Building, 44, Park St, Mullick Bazar, Park Street Area',
      addressLocality: 'Kolkata',
      addressRegion: 'West Bengal',
      postalCode: '700016',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    name: 'EPR Bazaar — Non-Ferrous Metal EPR India',
    url: `${SITE_ORIGIN}/`,
    inLanguage: 'en-IN',
    publisher: {
      '@id': 'https://eprbazaar.com/#organization',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: 'en-IN',
    isPartOf: {
      '@id': `${SITE_ORIGIN}/#website`,
    },
    about: {
      '@type': 'Thing',
      name: 'Non-Ferrous Metal Scrap Extended Producer Responsibility (EPR) India',
    },
  };

  const breadcrumbList =
    breadcrumbs && breadcrumbs.length > 0
      ? breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.path.startsWith('http')
            ? b.path
            : b.name === 'EPR Bazaar Home' || b.name === 'EPR Bazaar'
            ? COMPANY_INFO.mainWebsite
            : `${SITE_ORIGIN}${b.path}`,
        }))
      : [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'EPR Bazaar Home',
            item: COMPANY_INFO.mainWebsite,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Non-Ferrous Metal EPR',
            item: `${SITE_ORIGIN}/`,
          },
          ...(breadcrumbLabel
            ? [
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: breadcrumbLabel,
                  item: canonicalUrl,
                },
              ]
            : []),
        ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList,
  };

  const serviceSchema = includeServiceSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        provider: {
          '@id': 'https://eprbazaar.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        serviceType: 'CPCB Extended Producer Responsibility Registration & Certificate Compliance',
        description,
        url: canonicalUrl,
      }
    : null;

  const hasEligibleFaqs = Boolean(pageFaqs && pageFaqs.length > 0);
  const faqSchema = hasEligibleFaqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: pageFaqs!.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  const howToSchema = includeHowToSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '5-Step CPCB Non-Ferrous Metal Scrap EPR Registration Process',
        description:
          'Step-by-step CPCB portal registration workflow for Manufacturer, Producer (P1–P4), Refurbisher, Collection Agent, and Recycler under Schedule X.',
        step: REGISTRATION_STEPS.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.title,
          text: step.description,
        })),
      }
    : null;

  return (
    <>
      <JsonLdSchema id="schema-organization" schema={organizationSchema} />
      <JsonLdSchema id="schema-website" schema={websiteSchema} />
      <JsonLdSchema id="schema-webpage" schema={webPageSchema} />
      <JsonLdSchema id="schema-breadcrumb" schema={breadcrumbSchema} />
      {serviceSchema ? <JsonLdSchema id="schema-service" schema={serviceSchema} /> : null}
      {faqSchema ? <JsonLdSchema id="schema-faq" schema={faqSchema} /> : null}
      {howToSchema ? <JsonLdSchema id="schema-howto" schema={howToSchema} /> : null}
    </>
  );
}
