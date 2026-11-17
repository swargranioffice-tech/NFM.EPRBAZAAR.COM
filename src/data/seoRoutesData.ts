import { EXACT_EIGHT_APPLICANT_OPTIONS } from './applicantTypesData';
import { SCHEDULE_X_PRODUCT_DETAILS } from './scheduleXData';
import type { ApplicantFaq } from './applicantTypesData';
import type { MetalCategoryOption } from '../components/ui/LeadEnquiryForm';

export const SITE_ORIGIN = (
  import.meta.env?.VITE_SITE_URL || 'https://nfm.eprbazaar.com'
).replace(/\/+$/, '');

export const STATIC_ROUTES = {
  hub: '/',
  applicantDirectory: '/applicant-types/',
  scheduleXDirectory: '/schedule-x-products/',
  aluminium: '/aluminium-epr-registration/',
  copper: '/copper-epr-registration/',
  zinc: '/zinc-epr-registration/',
  calculator: '/epr-certificate-calculator/',
  fees: '/registration-fees/',
  faq: '/non-ferrous-metal-epr-faq/',
  contact: '/contact/',
} as const;

export interface MetalRegistrationPageData {
  id: 'aluminium' | 'copper' | 'zinc';
  slug: string;
  metalName: string;
  defaultMetalOption: MetalCategoryOption;
  symbol: string;
  atomicNumber: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  heroSummary: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  regulatoryHighlights: string[];
  whoNeedsRegistration: string[];
  scheduleXiiRecycledContent: {
    startFy: string;
    startPercent: string;
    milestoneFy: string;
    milestonePercent: string;
    notes: string;
  };
  faqs: ApplicantFaq[];
}

export const METAL_REGISTRATION_PAGES: MetalRegistrationPageData[] = [
  {
    id: 'aluminium',
    slug: STATIC_ROUTES.aluminium,
    metalName: 'Aluminium & Alloys',
    defaultMetalOption: 'Aluminium',
    symbol: 'Al',
    atomicNumber: '13',
    seoTitle: 'Aluminium EPR Registration India | CPCB Schedule X | EPR Bazaar',
    seoDescription:
      'CPCB Aluminium EPR Registration in India under Schedule X. Learn recycling targets, Schedule XIII recycled content, P4 scrap imports & EPR certificates.',
    h1: 'Aluminium EPR Registration & CPCB Scrap Compliance in India',
    heroSummary:
      'End-to-end CPCB Non-Ferrous Metal EPR compliance for Aluminium cans, packaging foils, architectural extrusions, ACP panels, utensils, alloy bicycles, non-auto conductors, and imported aluminium scrap.',
    image: '/src/assets/images/aluminium_scrap_ingots_1794932713226.jpg',
    imageAlt: 'Recycled secondary aluminium ingots and extruded aluminium sections sorted for furnace processing',
    imageWidth: 960,
    imageHeight: 717,
    regulatoryHighlights: [
      'Covers Aluminium and aluminium alloys across 16 of the 18 notified Schedule X finished product families.',
      'Producers (P1, P2, P3) follow Schedule XI stepped recycling targets from 10% (FY 2026–27) up to 75% (FY 2032–33 onwards).',
      'Producer (P4) entities importing aluminium scrap (UBC, Tense, Taint/Tabor, extrusions) or used aluminium products bear a 100% Y-1 EPR obligation.',
      'Domestic Manufacturers face Schedule XIII minimum recycled aluminium content starting at 5% in FY 2028–29 and reaching 10% by FY 2031–32.',
    ],
    whoNeedsRegistration: [
      'Beverage canners, pharma/food foil manufacturers, and branded cookware/utensil producers (P1 / P2)',
      'Aluminium extrusion mills supplying doors, windows, ACP sheets, and architectural partitions (Manufacturer / P1)',
      'Importers of aluminium products (P3) and secondary aluminium smelters importing UBC or extrusion scrap (P4)',
      'SPCB-authorized secondary aluminium ingot, billet, and de-ox aluminium smelters (Recycler)',
    ],
    scheduleXiiRecycledContent: {
      startFy: 'FY 2028–29',
      startPercent: '5%',
      milestoneFy: 'FY 2031–32 & onwards',
      milestonePercent: '10%',
      notes: 'Applies to domestically recycled aluminium input used by registered Manufacturers of Schedule X goods.',
    },
    faqs: [
      {
        question: 'Which aluminium products require Aluminium EPR Registration in India?',
        answer:
          'Aluminium EPR registration applies specifically to Schedule X items—such as beverage and aerosol cans, food/pharma packaging foils, doors, windows, shutters, ACP panels, partitions, utensils, furniture hardware, roofing sheets, non-auto motors/cables/transformers, and aluminium alloy bicycles.',
      },
      {
        question: 'Do importers of Aluminium scrap need Producer (P4) registration?',
        answer:
          'Yes. Any entity importing aluminium scrap (including UBC or industrial scrap) or used aluminium products falls under Producer (P4) and must fulfill a 100% Y-1 EPR recycling obligation via CPCB-registered recyclers.',
      },
      {
        question: 'Can Aluminium EPR targets be offset using Copper or Zinc EPR certificates?',
        answer:
          'No. CPCB EPR obligations and certificates are strictly metal-specific; Aluminium targets must be retired exclusively with Aluminium EPR Certificates.',
      },
    ],
  },
  {
    id: 'copper',
    slug: STATIC_ROUTES.copper,
    metalName: 'Copper & Alloys (Brass / Bronze)',
    defaultMetalOption: 'Copper',
    symbol: 'Cu',
    atomicNumber: '29',
    seoTitle: 'Copper EPR Registration India | CPCB Non Ferrous Metal | EPR Bazaar',
    seoDescription:
      'CPCB Copper EPR Registration for non-automobile cables, motors, transformers, brass sanitaryware, and imported copper scrap in India.',
    h1: 'Copper EPR Registration & Brass Alloy Compliance in India',
    heroSummary:
      'Complete CPCB registration, Bill of Materials metal reconciliation, and Copper EPR certificate management for electrical cables, motors, pumps, transformers, central HVAC plants, and brass sanitary fittings.',
    image: '/src/assets/images/copper_cathode_coils_1794932713106.jpg',
    imageAlt: 'Refined secondary copper wire coils and rods prepared in a CPCB-compliant metal facility',
    imageWidth: 960,
    imageHeight: 717,
    regulatoryHighlights: [
      'Covers pure Copper and Copper alloys (including Brass and Bronze in sanitary ware, hardware, and apparel trims).',
      'Items 9, 10, 12, and 14 explicitly exclude automobile-grade motors, cables, electrical fittings, and transformers.',
      'For mixed Copper-Zinc alloys such as Brass (e.g., 70% Copper / 30% Zinc), constituent weights generate and settle metal-matched Copper and Zinc obligations.',
      'Schedule XIII mandates a steep ramp-up to 20% minimum domestically recycled Copper input by FY 2031–32.',
    ],
    whoNeedsRegistration: [
      'Non-automotive power/industrial cable, wire, and copper strip manufacturers and brand owners',
      'Industrial electric motor, pump, transformer, generator set, and central HVAC plant OEMs & importers',
      'Brass sanitary ware, plumbing valve, and architectural hardware brand owners & foundries',
      'Importers of copper scrap (Berry, Birch/Cliff, insulated cable scrap) or used transformers/motors (Producer P4)',
    ],
    scheduleXiiRecycledContent: {
      startFy: 'FY 2028–29',
      startPercent: '5%',
      milestoneFy: 'FY 2031–32 & onwards',
      milestonePercent: '20%',
      notes: 'Manufacturers must source minimum domestically recycled copper input scaling to 20% from FY 2031–32.',
    },
    faqs: [
      {
        question: 'Are automotive wiring harnesses and starter motors covered under Copper EPR?',
        answer:
          'No. Schedule X Items 9, 10, 12, and 14 explicitly state "other than automobile grade". Non-automobile industrial, building, utility, and appliance grades are fully covered.',
      },
      {
        question: 'How is Brass (Copper-Zinc alloy) calculated for Copper EPR?',
        answer:
          'Under CPCB rules, alloys such as Brass are segregated by actual constituent percentage (for example, 70% Copper and 30% Zinc) so obligations and EPR certificates align with individual Copper and Zinc streams.',
      },
      {
        question: 'Can motor or transformer rewinding workshops register as Refurbishers?',
        answer:
          'Yes. Authorized facilities reconditioning used non-automobile motors, transformers, pumps, or central AC plants register under Refurbisher (Schedule XII) to issue Refurbishment Certificates.',
      },
    ],
  },
  {
    id: 'zinc',
    slug: STATIC_ROUTES.zinc,
    metalName: 'Zinc & Alloys',
    defaultMetalOption: 'Zinc',
    symbol: 'Zn',
    atomicNumber: '30',
    seoTitle: 'Zinc EPR Registration India | CPCB Schedule X Compliance | EPR Bazaar',
    seoDescription:
      'CPCB Zinc EPR Registration for galvanised roofing sheets, die-cast hardware, brass sanitaryware, apparel buckles, zips, toys & imported zinc scrap.',
    h1: 'Zinc EPR Registration & Schedule XIII Mandate Guide India',
    heroSummary:
      'Specialized CPCB Non-Ferrous Metal EPR compliance for Zinc roofing/ceiling coatings, die-cast furniture and door hardware, brass sanitary ware, apparel fasteners, zinc-alloy toys, and imported zinc scrap.',
    image: '/src/assets/images/zinc_alloy_blocks_1794932713916.jpg',
    imageAlt: 'Secondary zinc alloy blocks and ingots stacked on industrial facility pallets',
    imageWidth: 960,
    imageHeight: 717,
    regulatoryHighlights: [
      'Carries the highest Schedule XIII domestic recycled content mandate among all three metals: 25% by FY 2031–32.',
      'Applies both to pure Zinc applications (roofing sheets, die-castings) and Brass Copper-Zinc alloys (sanitary ware, hardware, buckles).',
      'Schedule XI Producer targets progress from 10% (FY 2026–27) to 75% (FY 2032–33 onwards) on Schedule X placement.',
      'Producer P4 importers of zinc scrap or die-cast scrap bear a 100% Y-1 EPR recycling obligation.',
    ],
    whoNeedsRegistration: [
      'Manufacturers and brands of zinc-coated roofing and ceiling sheets (Schedule X Item 8)',
      'Die-cast zinc alloy door handle, lock, knob, and furniture hardware producers and importers',
      'Sanitary ware brass fitting brands and apparel fastener (zipper, belt buckle, shoe trim) manufacturers',
      'Die-cast metal toy brands/importers and SPCB-authorized secondary zinc recovery units (Recyclers)',
    ],
    scheduleXiiRecycledContent: {
      startFy: 'FY 2028–29',
      startPercent: '5%',
      milestoneFy: 'FY 2031–32 & onwards',
      milestonePercent: '25%',
      notes: 'Highest domestic recycled-content mandate under Schedule XIII—requiring early recycler supply linkage.',
    },
    faqs: [
      {
        question: 'Why does Zinc carry a 25% Schedule XIII recycled content mandate by FY 2031–32?',
        answer:
          'MoEFCC set a 25% minimum domestically recycled content target for Zinc & alloys under Schedule XIII to drive circular recovery of zinc dross, die-cast hardware scrap, and galvanised sheets through SPCB-authorized domestic recyclers.',
      },
      {
        question: 'Do belt buckles, zippers, and metal shoe trims fall under Zinc EPR?',
        answer:
          'Yes. Schedule X Item 17 explicitly covers apparel products including belt buckles, zips, and footwear trims made from Zinc, Copper (brass), or Aluminium alloys.',
      },
      {
        question: 'Can a brand owner track only Zinc coating weight on roofing sheets?',
        answer:
          'Where non-ferrous zinc alloy or zinc sheet/coating constitutes a covered Schedule X roofing/ceiling product, the net non-ferrous metal weight placed on the market is declared per CPCB BOM methodology.',
      },
    ],
  },
];

export function findMetalPageBySlug(pathname: string): MetalRegistrationPageData | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return METAL_REGISTRATION_PAGES.find((m) => m.slug === normalized);
}

export const findSEOPageBySlug = findMetalPageBySlug;


export interface SitemapUrlEntry {
  path: string;
  priority: string;
  changefreq: 'weekly' | 'monthly';
}

export const CANONICAL_SITEMAP_ENTRIES: SitemapUrlEntry[] = [
  { path: STATIC_ROUTES.hub, priority: '1.0', changefreq: 'weekly' },
  { path: STATIC_ROUTES.applicantDirectory, priority: '0.9', changefreq: 'weekly' },
  ...EXACT_EIGHT_APPLICANT_OPTIONS.map((a) => ({
    path: a.slug,
    priority: a.id === 'producer-p4' || a.id === 'recycler' ? '0.9' : '0.85',
    changefreq: 'monthly' as const,
  })),
  { path: STATIC_ROUTES.scheduleXDirectory, priority: '0.9', changefreq: 'weekly' },
  ...SCHEDULE_X_PRODUCT_DETAILS.map((p) => ({
    path: p.slug,
    priority: '0.8',
    changefreq: 'monthly' as const,
  })),
  { path: STATIC_ROUTES.aluminium, priority: '0.9', changefreq: 'monthly' },
  { path: STATIC_ROUTES.copper, priority: '0.9', changefreq: 'monthly' },
  { path: STATIC_ROUTES.zinc, priority: '0.9', changefreq: 'monthly' },
  { path: STATIC_ROUTES.calculator, priority: '0.85', changefreq: 'monthly' },
  { path: STATIC_ROUTES.fees, priority: '0.85', changefreq: 'monthly' },
  { path: STATIC_ROUTES.faq, priority: '0.9', changefreq: 'monthly' },
  { path: STATIC_ROUTES.contact, priority: '0.8', changefreq: 'monthly' },
];
