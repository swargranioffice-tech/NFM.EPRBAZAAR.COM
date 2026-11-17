import { describe, expect, it } from 'vitest';
import { findApplicantById } from '../data/applicantTypesData';
import {
  findScheduleXProductBySlug,
  SCHEDULE_X_PRODUCT_DETAILS,
  SCHEDULE_X_SCOPE_DISCLAIMER,
  scheduleXData,
} from '../data/scheduleXData';

describe('scheduleXData module', () => {
  it('contains all 18 Schedule X products numbered sequentially 1 to 18', () => {
    expect(SCHEDULE_X_PRODUCT_DETAILS).toHaveLength(18);
    expect(scheduleXData).toBe(SCHEDULE_X_PRODUCT_DETAILS);

    const codes = SCHEDULE_X_PRODUCT_DETAILS.map((product) => product.code);
    expect(codes).toEqual(Array.from({ length: 18 }, (_, index) => index + 1));
  });

  it('has unique slugs, valid metals, complete metadata, and valid related applicant IDs', () => {
    const slugs = new Set<string>();

    for (const product of SCHEDULE_X_PRODUCT_DETAILS) {
      expect(slugs.has(product.slug)).toBe(false);
      slugs.add(product.slug);

      expect(product.slug.startsWith('/schedule-x-products/')).toBe(true);
      expect(product.slug.endsWith('/')).toBe(true);
      expect(product.metals.length).toBeGreaterThan(0);
      for (const metal of product.metals) {
        expect(['Aluminium', 'Copper', 'Zinc']).toContain(metal);
      }

      expect(product.applications.length).toBeGreaterThan(0);
      expect(product.examples.length).toBeGreaterThan(0);
      expect(product.cpcbRelevance.length).toBeGreaterThan(20);
      expect(product.faqs.length).toBeGreaterThan(0);

      expect(product.relatedApplicantIds.length).toBeGreaterThan(0);
      for (const applicantId of product.relatedApplicantIds) {
        expect(findApplicantById(applicantId)).toBeDefined();
      }
    }
  });

  it('preserves automobile-grade exclusions on Schedule X items 9, 10, 12, and 14 and includes scope disclaimer', () => {
    expect(SCHEDULE_X_SCOPE_DISCLAIMER.toLowerCase()).toContain('does not cover all metal products');

    for (const code of [9, 10, 12, 14]) {
      const item = SCHEDULE_X_PRODUCT_DETAILS.find((product) => product.code === code);
      expect(item).toBeDefined();
      const combinedText = `${item?.name} ${item?.exclusions ?? ''}`.toLowerCase();
      expect(combinedText).toContain('automobile');
    }
  });

  it('retrieves all 18 products via findScheduleXProductBySlug and handles prefix/slash variations', () => {
    for (const product of SCHEDULE_X_PRODUCT_DETAILS) {
      expect(findScheduleXProductBySlug(product.slug)?.code).toBe(product.code);
      expect(findScheduleXProductBySlug(product.slug.slice(0, -1))?.code).toBe(product.code);
      expect(findScheduleXProductBySlug(`/non-ferrous-metal-epr${product.slug}`)?.code).toBe(
        product.code
      );
    }

    expect(findScheduleXProductBySlug('/schedule-x-products/unknown-item/')).toBeUndefined();
    expect(findScheduleXProductBySlug('')).toBeUndefined();
  });
});
