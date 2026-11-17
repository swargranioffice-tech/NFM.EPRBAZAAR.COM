import { describe, expect, it } from 'vitest';
import {
  CANONICAL_SITEMAP_ENTRIES,
  findMetalPageBySlug,
  findSEOPageBySlug,
  METAL_REGISTRATION_PAGES,
  SEO_ROUTES,
  SITE_ORIGIN,
  STATIC_ROUTES,
} from '../data/seoRoutesData';

describe('seoRoutesData module', () => {
  it('defines canonical subdomain origin and all static routes including SEO_ROUTES alias', () => {
    expect(SITE_ORIGIN).toMatch(/^https?:\/\//);
    expect(SEO_ROUTES).toBe(STATIC_ROUTES);
    expect(STATIC_ROUTES.hub).toBe('/');
    expect(STATIC_ROUTES.applicantDirectory).toBe('/applicant-types/');
    expect(STATIC_ROUTES.scheduleXDirectory).toBe('/schedule-x-products/');
    expect(STATIC_ROUTES.aluminium).toBe('/aluminium-epr-registration/');
    expect(STATIC_ROUTES.copper).toBe('/copper-epr-registration/');
    expect(STATIC_ROUTES.zinc).toBe('/zinc-epr-registration/');
    expect(STATIC_ROUTES.calculator).toBe('/epr-certificate-calculator/');
    expect(STATIC_ROUTES.fees).toBe('/registration-fees/');
    expect(STATIC_ROUTES.faq).toBe('/non-ferrous-metal-epr-faq/');
    expect(STATIC_ROUTES.contact).toBe('/contact/');
  });

  it('resolves Aluminium, Copper, and Zinc registration pages via findMetalPageBySlug and findSEOPageBySlug', () => {
    expect(METAL_REGISTRATION_PAGES).toHaveLength(3);

    expect(findMetalPageBySlug('/aluminium-epr-registration/')?.id).toBe('aluminium');
    expect(findSEOPageBySlug('/aluminium-epr-registration')?.id).toBe('aluminium');

    expect(findMetalPageBySlug('/copper-epr-registration/')?.id).toBe('copper');
    expect(findSEOPageBySlug('/copper-epr-registration')?.id).toBe('copper');

    expect(findMetalPageBySlug('/zinc-epr-registration/')?.id).toBe('zinc');
    expect(findSEOPageBySlug('/zinc-epr-registration')?.id).toBe('zinc');

    expect(findMetalPageBySlug('/unknown-metal/')).toBeUndefined();
  });

  it('produces 36 unique canonical sitemap URLs covering hub, applicants, products, metals, and utilities', () => {
    expect(CANONICAL_SITEMAP_ENTRIES).toHaveLength(36);

    const uniquePaths = new Set(CANONICAL_SITEMAP_ENTRIES.map((entry) => entry.path));
    expect(uniquePaths.size).toBe(36);

    for (const entry of CANONICAL_SITEMAP_ENTRIES) {
      expect(entry.path.startsWith('/')).toBe(true);
      expect(entry.path.endsWith('/')).toBe(true);
    }
  });
});
