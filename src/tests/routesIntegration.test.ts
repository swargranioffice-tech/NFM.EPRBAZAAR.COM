import { describe, expect, it } from 'vitest';
import { findApplicantBySlug } from '../data/applicantTypesData';
import { CPCB_64_FAQS } from '../data/cpcbFaqsData';
import { findScheduleXProductBySlug } from '../data/scheduleXData';
import {
  CANONICAL_SITEMAP_ENTRIES,
  findMetalPageBySlug,
  STATIC_ROUTES,
} from '../data/seoRoutesData';

function resolveRouteTarget(rawPath: string) {
  const applicant = findApplicantBySlug(rawPath);
  if (applicant) return { kind: 'applicant' as const, record: applicant };

  const product = findScheduleXProductBySlug(rawPath);
  if (product) return { kind: 'product' as const, record: product };

  const metal = findMetalPageBySlug(rawPath);
  if (metal) return { kind: 'metal' as const, record: metal };

  const staticKey = (Object.keys(STATIC_ROUTES) as Array<keyof typeof STATIC_ROUTES>).find(
    (key) => STATIC_ROUTES[key] === rawPath
  );
  if (staticKey) return { kind: 'static' as const, key: staticKey };

  return undefined;
}

describe('Cross-module sitemap & route slug integration', () => {
  it('resolves all 36 canonical sitemap URLs cleanly to an applicant, product, metal, or static route', () => {
    expect(CANONICAL_SITEMAP_ENTRIES).toHaveLength(36);

    for (const entry of CANONICAL_SITEMAP_ENTRIES) {
      const target = resolveRouteTarget(entry.path);
      expect(target, `Expected route target for ${entry.path}`).toBeDefined();
    }
  });

  it('resolves legacy /non-ferrous-metal-epr/* and slashless paths for every applicant and Schedule X slug', () => {
    const dynamicEntries = CANONICAL_SITEMAP_ENTRIES.filter(
      (entry) =>
        entry.path.startsWith('/applicant-types/') && entry.path !== STATIC_ROUTES.applicantDirectory
    );
    expect(dynamicEntries).toHaveLength(8);

    for (const entry of dynamicEntries) {
      expect(findApplicantBySlug(entry.path.slice(0, -1))).toBeDefined();
      expect(findApplicantBySlug(`/non-ferrous-metal-epr${entry.path}`)).toBeDefined();
    }

    const productEntries = CANONICAL_SITEMAP_ENTRIES.filter(
      (entry) =>
        entry.path.startsWith('/schedule-x-products/') &&
        entry.path !== STATIC_ROUTES.scheduleXDirectory
    );
    expect(productEntries).toHaveLength(18);

    for (const entry of productEntries) {
      expect(findScheduleXProductBySlug(entry.path.slice(0, -1))).toBeDefined();
      expect(findScheduleXProductBySlug(`/non-ferrous-metal-epr${entry.path}`)).toBeDefined();
    }
  });

  it('ensures every CPCB FAQ cross-link resolves via applicant and Schedule X retrieval functions', () => {
    let applicantLinksChecked = 0;
    let productLinksChecked = 0;

    for (const faq of CPCB_64_FAQS) {
      for (const productSlug of faq.relatedProductSlugs ?? []) {
        const matched = findScheduleXProductBySlug(productSlug);
        expect(matched, `Broken FAQ Q${faq.number} product link: ${productSlug}`).toBeDefined();
        productLinksChecked += 1;
      }
      for (const applicantId of faq.relatedApplicantIds ?? []) {
        const matched = findApplicantBySlug(`/applicant-types/${applicantId}/`);
        expect(matched, `Broken FAQ Q${faq.number} applicant slug: ${applicantId}`).toBeDefined();
        applicantLinksChecked += 1;
      }
    }

    expect(applicantLinksChecked).toBeGreaterThan(20);
    expect(productLinksChecked).toBeGreaterThan(10);
  });
});
