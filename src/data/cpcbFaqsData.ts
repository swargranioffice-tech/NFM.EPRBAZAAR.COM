export type CpcbFaqCategory =
  | 'General EPR information'
  | 'Schedule X products'
  | 'Manufacturer and Producer'
  | 'Refurbisher'
  | 'Recycler and Collection Agent'
  | 'EPR certificates and calculations'
  | 'EPR targets and importers'
  | 'Returns, governance and enforcement'
  | 'Registration fees and administration';

export const CPCB_FAQ_CATEGORIES: CpcbFaqCategory[] = [
  'General EPR information',
  'Schedule X products',
  'Manufacturer and Producer',
  'Refurbisher',
  'Recycler and Collection Agent',
  'EPR certificates and calculations',
  'EPR targets and importers',
  'Returns, governance and enforcement',
  'Registration fees and administration',
];

export interface CpcbFaqEntry {
  number: number;
  id: string;
  category: CpcbFaqCategory;
  question: string;
  answer: string;
  relatedNumbers?: number[];
  relatedApplicantIds?: string[];
  relatedProductSlugs?: string[];
}

export const CPCB_OFFICIAL_ATTRIBUTION = {
  division: 'CPCB IPC-V Division (Central Pollution Control Board)',
  portalUrl: 'https://cpcb.nic.in/',
  sourceNote:
    'Structured reference compiled from Chapter VIII of the Hazardous and Other Wastes (Management and Transboundary Movement) Amendment Rules and CPCB IPC-V Division Non-Ferrous Metal EPR compliance guidance.',
  disclaimer:
    'Regulatory Disclaimer: Published for informational guidance on India’s Non-Ferrous Metal Scrap EPR regime. Verbatim PDF-specific fee schedules (Q60) and product-wise CPCB-determined conversion factors (Cf) must always be confirmed directly on the official CPCB Non-Ferrous Metal EPR portal and uploaded FAQs_NFM.pdf circulars prior to statutory filing.',
};

export const CPCB_64_FAQS: CpcbFaqEntry[] = [
  // 1. General EPR information (Q1 - Q8)
  {
    number: 1,
    id: 'q1',
    category: 'General EPR information',
    question: 'What is Extended Producer Responsibility (EPR) for Non-Ferrous Metal Scrap in India?',
    answer:
      'Extended Producer Responsibility (EPR) for Non-Ferrous Metal Scrap is a statutory environmental framework notified by the Ministry of Environment, Forest and Climate Change (MoEFCC) under Chapter VIII of the Hazardous and Other Wastes (Management and Transboundary Movement) Amendment Rules. It makes Producers responsible for the environmentally sound collection, channelization, and recycling of specified Aluminium, Copper, and Zinc products at end of life.',
    relatedNumbers: [2, 3, 9],
    relatedApplicantIds: ['producer-p1', 'producer-p2', 'producer-p3', 'producer-p4'],
  },
  {
    number: 2,
    id: 'q2',
    category: 'General EPR information',
    question: 'From which date did the Non-Ferrous Metal Scrap EPR framework come into force?',
    answer:
      'The Non-Ferrous Metal Scrap EPR provisions under Chapter VIII came into force on April 1, 2026. FY 2026–27 is the first active compliance year for mandatory CPCB portal registration and Schedule XI recycling target fulfillment.',
    relatedNumbers: [1, 39, 53],
  },
  {
    number: 3,
    id: 'q3',
    category: 'General EPR information',
    question: 'Which non-ferrous metals are covered under these EPR rules?',
    answer:
      'The framework regulates three primary non-ferrous metals and their alloys: Aluminium (Al), Copper (Cu), and Zinc (Zn), including mixed-metal alloys such as brass (Copper-Zinc alloy) and die-cast zinc/aluminium alloys used in Schedule X products.',
    relatedNumbers: [9, 10, 42],
    relatedProductSlugs: ['/schedule-x-products/sanitary-ware-fittings/', '/schedule-x-products/beverage-aerosol-cans/'],
  },
  {
    number: 4,
    id: 'q4',
    category: 'General EPR information',
    question: 'Which authority administers the Non-Ferrous Metal EPR Portal and compliance?',
    answer:
      'The Central Pollution Control Board (CPCB)—through its IPC-V Division and centralised online EPR portal—administers registration, EPR certificate generation/trading, return filings, and enforcement in coordination with State Pollution Control Boards (SPCBs) and Pollution Control Committees (PCCs).',
    relatedNumbers: [55, 59, 64],
  },
  {
    number: 5,
    id: 'q5',
    category: 'General EPR information',
    question: 'Which stakeholder categories must register on the CPCB Non-Ferrous Metal EPR Portal?',
    answer:
      'Eight operational registration tracks exist across five stakeholder groups on the CPCB portal: Manufacturer, Producer (P1) - Own Manufacturing & Own Branding, Producer (P2) - Outsourced Manufacturing & Own Branding, Producer (P3) - Imported Products, Producer (P4) - Imported Used Devices or Products or Scrap of Non Ferrous Metals, Refurbisher, Collection Agent, and Recycler.',
    relatedNumbers: [17, 26, 31],
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'producer-p4', 'refurbisher', 'collection-agent', 'recycler'],
  },
  {
    number: 6,
    id: 'q6',
    category: 'General EPR information',
    question: 'Are Bulk Consumers required to register on the CPCB portal?',
    answer:
      'Bulk Consumers (entities or e-retailers consuming 1,000 metric tonnes or more of specified Schedule X non-ferrous metal products annually) have mandatory scrap-channelization obligations under the rules, requiring them to hand over end-of-life scrap strictly to CPCB-registered Collection Agents or Recyclers and maintain handover records.',
    relatedNumbers: [35, 54],
    relatedApplicantIds: ['collection-agent', 'recycler'],
  },
  {
    number: 7,
    id: 'q7',
    category: 'General EPR information',
    question: 'Are all metal products sold in India covered under Non-Ferrous Metal EPR?',
    answer:
      'No. Non-Ferrous Metal EPR does not cover all metal products. Ferrous metals (iron and steel) are excluded, and for Aluminium, Copper, and Zinc, Producer obligations apply specifically to the 18 product families listed under Schedule X, subject to explicit automobile-grade exclusions.',
    relatedNumbers: [9, 11, 12],
    relatedProductSlugs: ['/schedule-x-products/motors-pumps-alternators/'],
  },
  {
    number: 8,
    id: 'q8',
    category: 'General EPR information',
    question: 'Can an unregistered Producer, Manufacturer, Recycler, Refurbisher, or Collection Agent carry out business?',
    answer:
      'No. Under Chapter VIII, obligated entities cannot carry out business without obtaining registration on the CPCB centralised EPR portal, nor may registered entities deal with unregistered recyclers or collection agents for EPR compliance.',
    relatedNumbers: [56, 57],
  },

  // 2. Schedule X products (Q9 - Q16)
  {
    number: 9,
    id: 'q9',
    category: 'Schedule X products',
    question: 'What is Schedule X under the Non-Ferrous Metal EPR Amendment Rules?',
    answer:
      'Schedule X is the statutory schedule listing the 18 specific finished product categories containing Aluminium, Copper, Zinc, or their alloys that fall under mandatory Non-Ferrous Metal EPR compliance.',
    relatedNumbers: [7, 10, 11],
    relatedProductSlugs: ['/schedule-x-products/beverage-aerosol-cans/', '/schedule-x-products/conductor-cables-wires-strips/'],
  },
  {
    number: 10,
    id: 'q10',
    category: 'Schedule X products',
    question: 'Which packaging and consumer products are listed in Schedule X?',
    answer:
      'Schedule X covers beverage and aerosol cans (Item 1), packaging foils for food and pharmaceuticals (Item 2), utensils/cookware/canisters/storage (Item 6), apparel products including belt buckles, zips, and shoes (Item 17), and non-ferrous metal toys (Item 18).',
    relatedNumbers: [9, 13],
    relatedProductSlugs: ['/schedule-x-products/beverage-aerosol-cans/', '/schedule-x-products/packaging-foils/', '/schedule-x-products/utensils-cookware/', '/schedule-x-products/apparel-products-buckles-zips-shoes/', '/schedule-x-products/toys/'],
  },
  {
    number: 11,
    id: 'q11',
    category: 'Schedule X products',
    question: 'Which architectural, building, and hardware products are covered under Schedule X?',
    answer:
      'Building and hardware categories include doors, windows, and shutters (Item 3), aluminium composite panels (Item 4), aluminium partitioning and grills (Item 5), furniture including tables, chairs, benches, ladders, doorknobs, handles, and hardware (Item 7), roofing and ceiling sheets (Item 8), and sanitary ware and fittings (Item 11).',
    relatedNumbers: [9, 14],
    relatedProductSlugs: ['/schedule-x-products/doors-windows-shutters/', '/schedule-x-products/aluminium-composite-panels/', '/schedule-x-products/furniture-hardware/', '/schedule-x-products/sanitary-ware-fittings/'],
  },
  {
    number: 12,
    id: 'q12',
    category: 'Schedule X products',
    question: 'Which electrical, HVAC, and mobility products are covered under Schedule X?',
    answer:
      'Industrial and mobility items include non-automobile motors, pumps, and alternators (Item 9), non-automobile conductor cables, wires, and strips (Item 10), non-automobile electrical fittings (Item 12), aluminium alloy bicycles (Item 13), non-automobile transformers (Item 14), electric generator sets (Item 15), and centralised air-conditioning plants (Item 16).',
    relatedNumbers: [13, 14, 44],
    relatedProductSlugs: ['/schedule-x-products/motors-pumps-alternators/', '/schedule-x-products/conductor-cables-wires-strips/', '/schedule-x-products/transformers/', '/schedule-x-products/centralised-air-conditioning-plants/'],
  },
  {
    number: 13,
    id: 'q13',
    category: 'Schedule X products',
    question: 'Why do Schedule X Items 9, 10, 12, and 14 specify "other than automobile grade"?',
    answer:
      'Automobile-grade motors, pumps, alternators, conductor cables, wires, strips, electrical fittings, and transformers are explicitly excluded from Schedule X because automotive end-of-life metal recovery is governed under dedicated End-of-Life Vehicles (ELV) rules rather than general Schedule X Non-Ferrous EPR.',
    relatedNumbers: [7, 12],
    relatedProductSlugs: ['/schedule-x-products/motors-pumps-alternators/', '/schedule-x-products/electrical-fittings/'],
  },
  {
    number: 14,
    id: 'q14',
    category: 'Schedule X products',
    question: 'Are composite or multi-material Schedule X products (like ACP panels or insulated cables) weighed on gross weight or metal weight?',
    answer:
      'Non-Ferrous Metal EPR obligations apply to the non-ferrous metal weight (Aluminium, Copper, or Zinc) contained in the Schedule X product, excluding non-metallic polymers, PVC/XLPE cable insulation, mineral core fillers, or ferrous steel framing.',
    relatedNumbers: [15, 43],
    relatedProductSlugs: ['/schedule-x-products/aluminium-composite-panels/', '/schedule-x-products/conductor-cables-wires-strips/'],
  },
  {
    number: 15,
    id: 'q15',
    category: 'Schedule X products',
    question: 'Are residential split air conditioners covered under Item 16 (Centralised air-conditioning plants)?',
    answer:
      'No. Unitary domestic/commercial room air conditioners are regulated under the E-Waste (Management) Rules. Schedule X Item 16 specifically covers centralised air-conditioning plants such as chillers, AHUs, and central HVAC plant coils.',
    relatedNumbers: [12, 16],
    relatedProductSlugs: ['/schedule-x-products/centralised-air-conditioning-plants/'],
  },
  {
    number: 16,
    id: 'q16',
    category: 'Schedule X products',
    question: 'Are stainless steel utensils or mild-steel bicycles covered under Schedule X Items 6 and 13?',
    answer:
      'No. Stainless steel and mild steel are ferrous metals. Schedule X Item 6 covers utensils containing Aluminium, Copper, or their alloys (e.g., brass), and Item 13 specifically specifies "Aluminium alloy bicycles".',
    relatedNumbers: [3, 7],
    relatedProductSlugs: ['/schedule-x-products/utensils-cookware/', '/schedule-x-products/aluminium-alloy-bicycles/'],
  },

  // 3. Manufacturer and Producer (Q17 - Q25)
  {
    number: 17,
    id: 'q17',
    category: 'Manufacturer and Producer',
    question: 'Who qualifies as a Manufacturer on the CPCB Non-Ferrous Metal EPR Portal?',
    answer:
      'A Manufacturer is an entity engaged in manufacturing products, components, parts, or spares listed under Schedule X made of Aluminium, Copper, Zinc, or their alloys. Manufacturers supply OEMs/brand owners and carry Schedule XIII minimum recycled-content obligations starting FY 2028–29.',
    relatedNumbers: [18, 24, 25],
    relatedApplicantIds: ['manufacturer'],
  },
  {
    number: 18,
    id: 'q18',
    category: 'Manufacturer and Producer',
    question: 'Who falls under Producer (P1) - Own Manufacturing & Own Branding?',
    answer:
      'Producer (P1) covers an entity that manufactures Schedule X products (or components, parts, and spares) made of non-ferrous metals and their alloys in its own facility and offers them for sale under its own brand.',
    relatedNumbers: [19, 20, 39],
    relatedApplicantIds: ['producer-p1'],
  },
  {
    number: 19,
    id: 'q19',
    category: 'Manufacturer and Producer',
    question: 'Who falls under Producer (P2) - Outsourced Manufacturing & Own Branding?',
    answer:
      'Producer (P2) covers a brand owner that offers to sell under its own brand Schedule X products, components, or spares made of non-ferrous metals that are manufactured by third-party contract manufacturers or OEM suppliers.',
    relatedNumbers: [18, 22],
    relatedApplicantIds: ['producer-p2'],
  },
  {
    number: 20,
    id: 'q20',
    category: 'Manufacturer and Producer',
    question: 'Who falls under Producer (P3) - Imported Products?',
    answer:
      'Producer (P3) covers any entity that offers to sell imported new Schedule X products (or components, consumables, parts, and spares made of Aluminium, Copper, or Zinc) in India under either its own brand or the original overseas brand.',
    relatedNumbers: [21, 49, 50],
    relatedApplicantIds: ['producer-p3'],
  },
  {
    number: 21,
    id: 'q21',
    category: 'Manufacturer and Producer',
    question: 'Who falls under Producer (P4) - Imported Used Devices or Products or Scrap of Non Ferrous Metals?',
    answer:
      'Producer (P4) covers any entity that imports used devices, used products, or scrap of non-ferrous metals (Aluminium, Copper, Zinc, and their alloys) into India. P4 importers carry a distinct 100% preceding-year (Y-1) EPR recycling obligation.',
    relatedNumbers: [20, 50, 51],
    relatedApplicantIds: ['producer-p4'],
  },
  {
    number: 22,
    id: 'q22',
    category: 'Manufacturer and Producer',
    question: 'If an outsourced manufacturer is already CPCB-registered, must the P2 brand owner also register?',
    answer:
      'Yes. Under the rules, the contract manufacturer registers under Manufacturer to report production and Schedule XIII recycled content, while the brand owner registers under Producer (P2) to fulfill Schedule XI end-of-life recycling targets for branded sales.',
    relatedNumbers: [17, 19],
    relatedApplicantIds: ['manufacturer', 'producer-p2'],
  },
  {
    number: 23,
    id: 'q23',
    category: 'Manufacturer and Producer',
    question: 'What if an entity performs multiple roles (e.g., manufactures under own brand P1 AND imports finished goods P3)?',
    answer:
      'Entities conducting activities across multiple Producer sub-categories or operational roles (such as P1 + P3, or Recycler + P4 scrap importer) must declare all applicable tracks accurately on the CPCB portal so obligations are computed without omission.',
    relatedNumbers: [18, 20, 21],
  },
  {
    number: 24,
    id: 'q24',
    category: 'Manufacturer and Producer',
    question: 'What are the Schedule XIII minimum recycled content targets for Manufacturers?',
    answer:
      'Starting FY 2028–29, Manufacturers must use a minimum of 5% domestically recycled non-ferrous metal in new production across Aluminium, Copper, and Zinc, scaling progressively to 10% for Aluminium, 20% for Copper, and 25% for Zinc by FY 2031–32 onwards.',
    relatedNumbers: [17, 25],
    relatedApplicantIds: ['manufacturer'],
  },
  {
    number: 25,
    id: 'q25',
    category: 'Manufacturer and Producer',
    question: 'Can a Manufacturer seek exemption from Schedule XIII recycled content mandates for high-purity grades?',
    answer:
      'Yes. Where statutory quality standards or technical specifications prevent meeting Schedule XIII recycled metal percentages, the Manufacturer may submit a documented case-by-case exemption request to CPCB for evaluation.',
    relatedNumbers: [24],
    relatedApplicantIds: ['manufacturer'],
  },

  // 4. Refurbisher (Q26 - Q30)
  {
    number: 26,
    id: 'q26',
    category: 'Refurbisher',
    question: 'Who is classified as a Refurbisher under Non-Ferrous Metal EPR Rules?',
    answer:
      'A Refurbisher is an entity engaged in repairing, reconditioning, rewinding, or restoring used Schedule X non-ferrous metal products (such as motors, pumps, transformers, DG sets, or central HVAC plants) to extend their useful service life per Schedule XII.',
    relatedNumbers: [27, 28],
    relatedApplicantIds: ['refurbisher'],
    relatedProductSlugs: ['/schedule-x-products/motors-pumps-alternators/', '/schedule-x-products/transformers/'],
  },
  {
    number: 27,
    id: 'q27',
    category: 'Refurbisher',
    question: 'What is a Schedule XII Refurbishment Certificate and how does it affect Producer targets?',
    answer:
      'Registered Refurbishers issue Schedule XII Refurbishment Certificates on the CPCB portal for eligible equipment restored to working condition. These certificates defer the Producer’s end-of-life recycling obligation for the extended life duration rather than permanently waiving final recycling.',
    relatedNumbers: [26, 29],
    relatedApplicantIds: ['refurbisher'],
  },
  {
    number: 28,
    id: 'q28',
    category: 'Refurbisher',
    question: 'Which Schedule X products are eligible for refurbishment credit?',
    answer:
      'Repairable industrial and electrical equipment such as non-automobile motors, pumps, alternators, transformers, electric generator sets, and centralised air-conditioning plant units qualify for life-extension refurbishment.',
    relatedNumbers: [12, 26],
    relatedProductSlugs: ['/schedule-x-products/electric-generator-sets/', '/schedule-x-products/centralised-air-conditioning-plants/'],
  },
  {
    number: 29,
    id: 'q29',
    category: 'Refurbisher',
    question: 'How must a Refurbisher handle damaged windings or non-reusable scrap parts?',
    answer:
      'All residual non-ferrous scrap (such as burnt copper windings or cracked aluminium housings) generated during refurbishment must be transferred strictly to CPCB-registered Collection Agents or Recyclers with documented weight manifests.',
    relatedNumbers: [26, 31],
    relatedApplicantIds: ['refurbisher', 'recycler'],
  },
  {
    number: 30,
    id: 'q30',
    category: 'Refurbisher',
    question: 'Can a Refurbisher generate full EPR Recycling Certificates?',
    answer:
      'No. Only CPCB-registered Recyclers processing scrap into secondary metal/alloys generate EPR Recycling Certificates; Refurbishers issue Schedule XII Refurbishment Certificates.',
    relatedNumbers: [27, 31],
    relatedApplicantIds: ['refurbisher', 'recycler'],
  },

  // 5. Recycler and Collection Agent (Q31 - Q37)
  {
    number: 31,
    id: 'q31',
    category: 'Recycler and Collection Agent',
    question: 'Who is eligible to register as a Recycler on the CPCB Non-Ferrous EPR Portal?',
    answer:
      'Secondary non-ferrous metal smelters, refiners, shredders, and granulation facilities holding valid SPCB/PCC Consent to Operate (CTO) and Hazardous Waste Authorization (where applicable) that recover Aluminium, Copper, Zinc, or their alloys from scrap.',
    relatedNumbers: [32, 33, 38],
    relatedApplicantIds: ['recycler'],
  },
  {
    number: 32,
    id: 'q32',
    category: 'Recycler and Collection Agent',
    question: 'What are the core obligations of a CPCB-registered Recycler?',
    answer:
      'Recyclers must operate within SPCB/PCC air and waste emission norms, declare installed annual capacity by metal type, maintain traceable GST-backed inward scrap and outward secondary metal invoices, issue EPR Certificates proportional to verified output, and undergo periodic CPCB audits.',
    relatedNumbers: [31, 38, 55],
    relatedApplicantIds: ['recycler'],
  },
  {
    number: 33,
    id: 'q33',
    category: 'Recycler and Collection Agent',
    question: 'Can an informal or unregistered scrap melter issue EPR Certificates?',
    answer:
      'No. Only facilities with valid SPCB CTO and active CPCB Non-Ferrous EPR Portal registration can generate valid EPR Certificates.',
    relatedNumbers: [8, 31],
    relatedApplicantIds: ['recycler'],
  },
  {
    number: 34,
    id: 'q34',
    category: 'Recycler and Collection Agent',
    question: 'What is the role of a Collection Agent on the CPCB portal?',
    answer:
      'A Collection Agent aggregates, sorts, weighs, and transports non-ferrous metal scrap from Bulk Consumers, commercial generators, and municipal/industrial sources, channeling 100% of collected scrap exclusively to CPCB-registered Recyclers.',
    relatedNumbers: [35, 36, 37],
    relatedApplicantIds: ['collection-agent'],
  },
  {
    number: 35,
    id: 'q35',
    category: 'Recycler and Collection Agent',
    question: 'Why must Bulk Consumers route scrap through registered Collection Agents or Recyclers?',
    answer:
      'Entities consuming 1,000 MT or more of Schedule X products annually must ensure end-of-life scrap enters the formal EPR chain via registered Collection Agents or Recyclers rather than informal auctions.',
    relatedNumbers: [6, 34],
    relatedApplicantIds: ['collection-agent', 'recycler'],
  },
  {
    number: 36,
    id: 'q36',
    category: 'Recycler and Collection Agent',
    question: 'Can a Collection Agent generate or trade EPR Certificates?',
    answer:
      'No. Collection Agents cannot smelt scrap or generate EPR Certificates; they log verified inward/outward scrap transfers so Recyclers have documented scrap provenance.',
    relatedNumbers: [34, 38],
    relatedApplicantIds: ['collection-agent', 'recycler'],
  },
  {
    number: 37,
    id: 'q37',
    category: 'Recycler and Collection Agent',
    question: 'What documents must a Collection Agent maintain for scrap movement?',
    answer:
      'Collection Agents must maintain weighbridge slips, GST purchase and dispatch invoices, e-way bills, yard inventory logs, and supply agreements with CPCB-registered Recyclers.',
    relatedNumbers: [34, 54],
    relatedApplicantIds: ['collection-agent'],
  },

  // 6. EPR certificates and calculations (Q38 - Q45)
  {
    number: 38,
    id: 'q38',
    category: 'EPR certificates and calculations',
    question: 'What is the CPCB formula QEPR = Qp × Cf for generating EPR Certificates?',
    answer:
      'The quantity eligible for EPR Certificate generation (QEPR) by a registered Recycler is calculated using QEPR = Qp × Cf, where Qp is the verified quantity of recycled end-product (secondary Aluminium, Copper, or Zinc recovered and sold) and Cf is the CPCB-determined Conversion Factor accounting for metal recovery yield and process efficiency.',
    relatedNumbers: [40, 41, 42, 43],
    relatedApplicantIds: ['recycler'],
  },
  {
    number: 39,
    id: 'q39',
    category: 'EPR certificates and calculations',
    question: 'What are the Schedule XI phased EPR recycling targets from FY 2026–27 onwards?',
    answer:
      'Under Schedule XI (Q39), Producer recycling targets progress as: FY 2026–27 (10%), FY 2027–28 (10%), FY 2028–29 (30%), FY 2029–30 (30%), FY 2030–31 (50%), FY 2031–32 (50%), and FY 2032–33 and onwards (75%).',
    relatedNumbers: [46, 47, 48],
    relatedApplicantIds: ['producer-p1', 'producer-p2', 'producer-p3'],
  },
  {
    number: 40,
    id: 'q40',
    category: 'EPR certificates and calculations',
    question: 'Who determines the Conversion Factor (Cf) used in QEPR calculations?',
    answer:
      'Conversion Factors (Cf) are determined and notified exclusively by the CPCB (with Steering Committee approval) based on metal stream, alloy purity, and recycling process. Entities must use official CPCB-determined Cf values from the portal rather than arbitrary assumptions.',
    relatedNumbers: [38, 41],
  },
  {
    number: 41,
    id: 'q41',
    category: 'EPR certificates and calculations',
    question: 'How does the QEPR = Qp × Cf calculation apply to Aluminium scrap recycling?',
    answer:
      'For an Aluminium recycler producing Qp metric tonnes of verified secondary aluminium ingots or billets sold with GST invoices, QEPR equals Qp multiplied by the CPCB-notified Aluminium conversion factor Cf—yielding Aluminium EPR Certificates credit-matched to Aluminium Producer obligations.',
    relatedNumbers: [38, 40],
    relatedProductSlugs: ['/schedule-x-products/beverage-aerosol-cans/'],
  },
  {
    number: 42,
    id: 'q42',
    category: 'EPR certificates and calculations',
    question: 'How are mixed-metal alloys like Brass (Copper-Zinc alloy) calculated for EPR Certificates?',
    answer:
      'Because brass is an alloy of Copper and Zinc, mixed-metal recycling calculations segregate the recovered weight into constituent Copper and Zinc fractions (or apply CPCB-notified alloy conversion factors Cf) so Copper and Zinc EPR credits are allocated accurately without double-counting.',
    relatedNumbers: [3, 38, 43],
    relatedProductSlugs: ['/schedule-x-products/sanitary-ware-fittings/', '/schedule-x-products/electrical-fittings/'],
  },
  {
    number: 43,
    id: 'q43',
    category: 'EPR certificates and calculations',
    question: 'How is EPR calculated for mixed-metal industrial products such as DC Motors?',
    answer:
      'A non-automobile DC motor (Schedule X Item 9) contains copper armature/field windings, brass commutator/terminals (Cu-Zn), and an aluminium housing/end-shield alongside ferrous laminations. Only the non-ferrous Aluminium, Copper, and Zinc fractions count toward Non-Ferrous EPR targets and corresponding recycler QEPR outputs.',
    relatedNumbers: [13, 38, 42],
    relatedProductSlugs: ['/schedule-x-products/motors-pumps-alternators/'],
  },
  {
    number: 44,
    id: 'q44',
    category: 'EPR certificates and calculations',
    question: 'What is the validity period of a generated Non-Ferrous Metal EPR Certificate?',
    answer:
      'An EPR Certificate generated by a registered Recycler on the CPCB portal remains valid for 2 years from the end of the financial year in which it was generated. Unused certificates expire automatically after the 2-year window.',
    relatedNumbers: [38, 45],
  },
  {
    number: 45,
    id: 'q45',
    category: 'EPR certificates and calculations',
    question: 'Can a Producer use an Aluminium EPR Certificate to offset a Copper or Zinc EPR obligation?',
    answer:
      'No. EPR obligations and EPR Certificates are strictly metal-specific: Aluminium targets require Aluminium EPR Certificates, Copper targets require Copper EPR Certificates, and Zinc targets require Zinc EPR Certificates.',
    relatedNumbers: [3, 44],
  },

  // 7. EPR targets and importers (Q46 - Q52)
  {
    number: 46,
    id: 'q46',
    category: 'EPR targets and importers',
    question: 'How is a Producer’s annual EPR recycling target calculated using historical sales and average life?',
    answer:
      'For Producers (P1, P2, P3), the annual EPR target in financial year Y equals Target % (from Schedule XI) × Quantity (in MT) of Schedule X products placed on the market in year (Y − X), where X is the CPCB-determined Average Life of that specific product category.',
    relatedNumbers: [39, 47, 48],
    relatedApplicantIds: ['producer-p1', 'producer-p2', 'producer-p3'],
  },
  {
    number: 47,
    id: 'q47',
    category: 'EPR targets and importers',
    question: 'What does "Average Life (X)" mean in the (Y − X) EPR target formula?',
    answer:
      'Average Life (X) represents the CPCB-prescribed operational lifespan (in years) of each Schedule X product category—shorter for packaging like beverage cans/foils and longer for durable assets like doors, windows, cables, and transformers—so targets align with when products actually reach end of life.',
    relatedNumbers: [46, 48],
  },
  {
    number: 48,
    id: 'q48',
    category: 'EPR targets and importers',
    question: 'What if a Producer began operations recently and has no historical sales in year (Y − X)?',
    answer:
      'If an entity has been operating for fewer years than the prescribed average life X of its Schedule X product, CPCB guidelines govern how initial-year targets apply until the entity reaches the full (Y − X) historical cycle.',
    relatedNumbers: [46, 47],
  },
  {
    number: 49,
    id: 'q49',
    category: 'EPR targets and importers',
    question: 'What are the EPR obligations for importers of new Schedule X finished products (Producer P3)?',
    answer:
      'Importers of new Schedule X finished products, components, and spares register under Producer (P3) using their DGFT IEC and Bills of Entry, and meet Schedule XI stepped targets (10% in FY 2026–27 scaling to 75% by FY 2032–33) based on imported metal weights.',
    relatedNumbers: [20, 39, 50],
    relatedApplicantIds: ['producer-p3'],
  },
  {
    number: 50,
    id: 'q50',
    category: 'EPR targets and importers',
    question: 'What are the EPR obligations for importers of used devices, used products, or non-ferrous scrap (Producer P4)?',
    answer:
      'Importers under Producer (P4) face a 100% EPR recycling obligation equal to the full non-ferrous metal weight (Aluminium, Copper, Zinc) of used devices, used products, or metal scrap imported in the preceding financial year (Y − 1).',
    relatedNumbers: [21, 49, 51],
    relatedApplicantIds: ['producer-p4'],
  },
  {
    number: 51,
    id: 'q51',
    category: 'EPR targets and importers',
    question: 'Can a P4 scrap importer fulfill its 100% Y-1 obligation if the imported scrap is melted by a third-party recycler?',
    answer:
      'Yes, provided the imported scrap is supplied exclusively to a CPCB-registered Non-Ferrous Recycler and the corresponding metal-specific EPR Certificates generated from recycling are acquired and retired against the P4 importer’s Y-1 target on the CPCB portal.',
    relatedNumbers: [21, 50],
    relatedApplicantIds: ['producer-p4', 'recycler'],
  },
  {
    number: 52,
    id: 'q52',
    category: 'EPR targets and importers',
    question: 'Are exports of Schedule X products excluded from domestic Indian EPR targets?',
    answer:
      'EPR targets apply to Schedule X non-ferrous metal products placed on the Indian domestic market. Documented direct export volumes backed by Shipping Bills are excluded from domestic market placement calculations per CPCB portal verification.',
    relatedNumbers: [46, 49],
  },

  // 8. Returns, governance and enforcement (Q53 - Q58)
  {
    number: 53,
    id: 'q53',
    category: 'Returns, governance and enforcement',
    question: 'What are the deadlines for filing Half-Yearly and Annual Returns on the CPCB portal?',
    answer:
      'Registered entities must file Half-Yearly Returns on or before October 31 (covering April to September operations) and Annual Returns on or before June 30 following the close of the financial year.',
    relatedNumbers: [54, 55],
  },
  {
    number: 54,
    id: 'q54',
    category: 'Returns, governance and enforcement',
    question: 'What data must be reported in Half-Yearly and Annual Returns?',
    answer:
      'Producers report Schedule X sales/imports by metal weight and retired EPR Certificates; Manufacturers report primary vs. domestically recycled metal inputs; Recyclers report inward scrap, secondary metal output, and EPR Certificates generated/sold; Refurbishers report Schedule XII certificates; and Collection Agents report inward/outward scrap dispatch ledgers.',
    relatedNumbers: [53, 55],
  },
  {
    number: 55,
    id: 'q55',
    category: 'Returns, governance and enforcement',
    question: 'Who conducts audits and verification under Chapter VIII?',
    answer:
      'CPCB (or CPCB-authorized verification agencies) and SPCBs/PCCs conduct periodic digital invoice audits and physical plant inspections covering CTO capacity, electricity consumption, weighbridge logs, and GST/e-way bill trails.',
    relatedNumbers: [4, 32, 56],
  },
  {
    number: 56,
    id: 'q56',
    category: 'Returns, governance and enforcement',
    question: 'What is Environmental Compensation (EC) and when is it levied?',
    answer:
      'Environmental Compensation (EC) is a statutory monetary penalty levied by CPCB under the Environment (Protection) Act framework if an obligated entity operates without registration, defaults on annual EPR recycling targets, files false data, or trades invalid certificates.',
    relatedNumbers: [57, 58],
  },
  {
    number: 57,
    id: 'q57',
    category: 'Returns, governance and enforcement',
    question: 'How do the 3-year target carry-forward and sliding-scale EC refund rules work?',
    answer:
      'Paying Environmental Compensation does not waive the unfulfilled EPR target—targets carry forward for up to 3 years. If the entity fulfills its pending obligation later, EC is refunded on a sliding scale: 85% if cleared within 1 year, 60% within 2 years, 30% within 3 years, and Nil (0% refund) after 3 years.',
    relatedNumbers: [56, 58],
  },
  {
    number: 58,
    id: 'q58',
    category: 'Returns, governance and enforcement',
    question: 'Can CPCB suspend or cancel registration for non-compliance or false declarations?',
    answer:
      'Yes. Submitting fabricated invoices, inflating recycling output, or breaching SPCB Consent conditions exposes entities to suspension/cancellation of CPCB EPR registration, forfeiture of certificates, Environmental Compensation, and prosecution under Section 15 of the Environment (Protection) Act, 1986.',
    relatedNumbers: [55, 56],
  },

  // 9. Registration fees and administration (Q59 - Q64)
  {
    number: 59,
    id: 'q59',
    category: 'Registration fees and administration',
    question: 'How is registration submitted and tracked on the CPCB Non-Ferrous Metal EPR Portal?',
    answer:
      'Applications are filed online through the centralised CPCB Non-Ferrous Metal EPR portal using entity PAN/GSTIN login, selecting the exact Applicant Type(s), uploading required statutory documents, and remitting the applicable online application/registration fee.',
    relatedNumbers: [5, 60, 61],
  },
  {
    number: 60,
    id: 'q60',
    category: 'Registration fees and administration',
    question: 'How are CPCB registration and annual processing fees structured for Non-Ferrous Metal EPR (Q60)?',
    answer:
      'CPCB portal application and annual processing fees are structured by stakeholder category (Producer, Manufacturer, Recycler, Refurbisher, Collection Agent) and tiered by annual non-ferrous metal quantity or installed capacity (in MT/annum). Because verbatim Q60 rupee slabs from FAQs_NFM.pdf must be verified directly from the official CPCB portal fee schedule before payment, confirm exact fee amounts during live CPCB challan generation.',
    relatedNumbers: [59, 61, 62],
  },
  {
    number: 61,
    id: 'q61',
    category: 'Registration fees and administration',
    question: 'What documents are universally required across CPCB portal applications?',
    answer:
      'Core mandatory documents include Company PAN, GSTIN certificate, Certificate of Incorporation / CIN (or Partnership/Proprietorship proof), Authorized Signatory KYC & Authorization Letter, plus role-specific proofs such as IEC (for P3/P4 importers) and valid SPCB CTO/CTE (for Manufacturers, Recyclers, and Refurbishers).',
    relatedNumbers: [59, 62],
  },
  {
    number: 62,
    id: 'q62',
    category: 'Registration fees and administration',
    question: 'How are CPCB application scrutiny queries and deficiencies resolved?',
    answer:
      'If CPCB raises a query during application scrutiny (for example, mismatched CTO capacity, missing HS/Schedule X mapping, or incomplete KYC), the applicant receives a portal notice and must upload corrected documents/clarifications within the stipulated timeline to prevent rejection.',
    relatedNumbers: [59, 61],
  },
  {
    number: 63,
    id: 'q63',
    category: 'Registration fees and administration',
    question: 'Must an entity update its CPCB registration when adding new Schedule X products or expanding capacity?',
    answer:
      'Yes. Any material change in Schedule X product lines, brand additions, plant capacity under SPCB CTO, or import scope must be amended promptly on the CPCB EPR portal so target and certificate calculations remain accurate.',
    relatedNumbers: [59, 60],
  },
  {
    number: 64,
    id: 'q64',
    category: 'Registration fees and administration',
    question: 'Where can stakeholders access official CPCB circulars, SOPs, and portal notifications?',
    answer:
      'All authoritative amendments, Standard Operating Procedures (SOPs), Conversion Factor notifications, and portal user manuals are published by CPCB IPC-V Division on the official Central Pollution Control Board website (https://cpcb.nic.in/).',
    relatedNumbers: [4, 40, 60],
  },
];
