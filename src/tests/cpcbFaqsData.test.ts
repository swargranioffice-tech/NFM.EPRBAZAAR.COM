import { describe, expect, it } from 'vitest';
import { findApplicantById } from '../data/applicantTypesData';
import {
  CPCB_64_FAQS,
  CPCB_FAQ_CATEGORIES,
  CPCB_OFFICIAL_ATTRIBUTION,
} from '../data/cpcbFaqsData';
import { findScheduleXProductBySlug } from '../data/scheduleXData';

describe('cpcbFaqsData module', () => {
  it('publishes all 64 numbered CPCB FAQs in order from 1 to 64', () => {
    expect(CPCB_64_FAQS).toHaveLength(64);
    expect(CPCB_64_FAQS.map((faq) => faq.number)).toEqual(
      Array.from({ length: 64 }, (_, index) => index + 1)
    );
  });

  it('covers all 9 FAQ categories with unique IDs and non-empty questions and answers', () => {
    expect(CPCB_FAQ_CATEGORIES).toHaveLength(9);

    const ids = new Set<string>();
    const categoryCounts = new Map<string, number>();

    for (const faq of CPCB_64_FAQS) {
      expect(ids.has(faq.id)).toBe(false);
      ids.add(faq.id);
      expect(faq.id).toBe(`q${faq.number}`);

      expect(CPCB_FAQ_CATEGORIES).toContain(faq.category);
      categoryCounts.set(faq.category, (categoryCounts.get(faq.category) ?? 0) + 1);

      expect(faq.question.trim().length).toBeGreaterThan(10);
      expect(faq.answer.trim().length).toBeGreaterThan(20);
    }

    for (const category of CPCB_FAQ_CATEGORIES) {
      expect(categoryCounts.get(category) ?? 0).toBeGreaterThan(0);
    }
  });

  it('attributes source to CPCB IPC-V Division and includes official portal and disclaimer', () => {
    expect(CPCB_OFFICIAL_ATTRIBUTION.division).toContain('CPCB IPC-V Division');
    expect(CPCB_OFFICIAL_ATTRIBUTION.portalUrl).toBe('https://cpcb.nic.in/');
    expect(CPCB_OFFICIAL_ATTRIBUTION.disclaimer.length).toBeGreaterThan(20);
  });

  it('preserves valid cross-references to related FAQs, applicants, and Schedule X products', () => {
    for (const faq of CPCB_64_FAQS) {
      if (faq.relatedNumbers) {
        for (const num of faq.relatedNumbers) {
          expect(num).toBeGreaterThanOrEqual(1);
          expect(num).toBeLessThanOrEqual(64);
        }
      }
      if (faq.relatedApplicantIds) {
        for (const applicantId of faq.relatedApplicantIds) {
          expect(findApplicantById(applicantId)).toBeDefined();
        }
      }
      if (faq.relatedProductSlugs) {
        for (const productSlug of faq.relatedProductSlugs) {
          expect(findScheduleXProductBySlug(productSlug)).toBeDefined();
        }
      }
    }
  });

  it('includes statutory milestones such as effective date (Q2), QEPR formula (Q38), targets (Q39), examples (Q41-Q43), and fees (Q60)', () => {
    const q2 = CPCB_64_FAQS.find((f) => f.number === 2);
    const q38 = CPCB_64_FAQS.find((f) => f.number === 38);
    const q39 = CPCB_64_FAQS.find((f) => f.number === 39);
    const q42 = CPCB_64_FAQS.find((f) => f.number === 42);
    const q43 = CPCB_64_FAQS.find((f) => f.number === 43);
    const q60 = CPCB_64_FAQS.find((f) => f.number === 60);

    expect(q2?.answer).toContain('April 1, 2026');
    expect(q38?.answer).toContain('QEPR');
    expect(q39?.answer).toContain('10%');
    expect(q39?.answer).toContain('30%');
    expect(q39?.answer).toContain('50%');
    expect(q39?.answer).toContain('75%');
    expect(q42?.answer.toLowerCase()).toContain('brass');
    expect(q43?.answer.toLowerCase()).toContain('dc motor');
    expect(q60?.question.toLowerCase()).toContain('fee');
  });
});
