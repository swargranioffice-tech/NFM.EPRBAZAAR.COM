import { describe, expect, it } from 'vitest';
import {
  applicantTypesData,
  EXACT_EIGHT_APPLICANT_OPTIONS,
  findApplicantById,
  findApplicantBySlug,
  findApplicantTypeBySlug,
} from '../data/applicantTypesData';

const EXPECTED_EXACT_LABELS = [
  'Manufacturer',
  'Producer (P1) - Own Manufacturing & Own Branding',
  'Producer (P2) - Outsourced Manufacturing & Own Branding',
  'Producer (P3) - Imported Products',
  'Producer (P4) - Imported Used Devices or Products or Scrap of Non Ferrous Metals',
  'Refurbisher',
  'Collection Agent',
  'Recycler',
];

describe('applicantTypesData module', () => {
  it('contains all 8 exact CPCB applicant categories', () => {
    expect(EXACT_EIGHT_APPLICANT_OPTIONS).toHaveLength(8);
    expect(applicantTypesData).toBe(EXACT_EIGHT_APPLICANT_OPTIONS);

    const labels = EXACT_EIGHT_APPLICANT_OPTIONS.map((item) => item.exactOptionLabel);
    expect(labels).toEqual(EXPECTED_EXACT_LABELS);
  });

  it('has unique ids, slugs, legacySlugs, and complete required content per applicant', () => {
    const ids = new Set<string>();
    const slugs = new Set<string>();
    const legacySlugs = new Set<string>();

    for (const applicant of EXACT_EIGHT_APPLICANT_OPTIONS) {
      expect(ids.has(applicant.id)).toBe(false);
      expect(slugs.has(applicant.slug)).toBe(false);
      expect(legacySlugs.has(applicant.legacySlug)).toBe(false);
      ids.add(applicant.id);
      slugs.add(applicant.slug);
      legacySlugs.add(applicant.legacySlug);

      expect(applicant.slug.startsWith('/applicant-types/')).toBe(true);
      expect(applicant.slug.endsWith('/')).toBe(true);
      expect(applicant.seoTitle.length).toBeGreaterThan(10);
      expect(applicant.seoDescription.length).toBeGreaterThan(20);
      expect(applicant.applicability.whoFallsHere.length).toBeGreaterThan(0);
      expect(applicant.coveredProducts.items.length).toBeGreaterThan(0);
      expect(applicant.responsibilities.length).toBeGreaterThan(0);
      expect(applicant.registration.processOverview.length).toBeGreaterThan(0);
      expect(applicant.eprObligations.targetStructure.length).toBeGreaterThan(0);
      expect(applicant.documents.length).toBeGreaterThan(0);
      expect(applicant.returns.reportingItems.length).toBeGreaterThan(0);
      expect(applicant.faqs.length).toBeGreaterThan(0);
    }
  });

  it('retrieves each applicant via findApplicantBySlug and findApplicantTypeBySlug', () => {
    for (const applicant of EXACT_EIGHT_APPLICANT_OPTIONS) {
      expect(findApplicantBySlug(applicant.slug)?.id).toBe(applicant.id);
      expect(findApplicantTypeBySlug(applicant.slug)?.id).toBe(applicant.id);

      const withoutTrailingSlash = applicant.slug.slice(0, -1);
      expect(findApplicantBySlug(withoutTrailingSlash)?.id).toBe(applicant.id);

      const legacySubpath = `/non-ferrous-metal-epr${applicant.slug}`;
      expect(findApplicantBySlug(legacySubpath)?.id).toBe(applicant.id);

      expect(findApplicantBySlug(applicant.legacySlug)?.id).toBe(applicant.id);
    }
  });

  it('resolves special Producer P4 legacy URL and returns undefined for unknown slugs', () => {
    const p4 = findApplicantBySlug('/producer-p4-imported-scrap-non-ferrous-metals/');
    expect(p4?.id).toBe('producer-p4');
    expect(p4?.slug).toBe('/applicant-types/producer-p4/');

    expect(findApplicantBySlug('/applicant-types/non-existent/')).toBeUndefined();
    expect(findApplicantBySlug('')).toBeUndefined();
  });

  it('retrieves applicants by ID via findApplicantById', () => {
    for (const applicant of EXACT_EIGHT_APPLICANT_OPTIONS) {
      expect(findApplicantById(applicant.id)?.exactOptionLabel).toBe(applicant.exactOptionLabel);
    }
    expect(findApplicantById('unknown-category')).toBeUndefined();
  });
});
