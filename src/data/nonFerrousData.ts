export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface MetalDetail {
  id: 'aluminium' | 'copper' | 'zinc';
  symbol: string;
  name: string;
  atomicNumber: string;
  image: string;
  imageAlt: string;
  summary: string;
  scrapSources: string[];
  scheduleXApplications: string[];
  recycledContentStart2028: string;
  recycledContentMilestone2031: string;
  complianceNote: string;
}

export interface ApplicantCategory {
  id: string;
  title: string;
  shortLabel: string;
  scheduleRef: string;
  summary: string;
  whoMustRegister: string;
  obligations: string[];
  keyDocuments: string[];
  filingCadence: string;
}

export interface ScheduleXProduct {
  code: number;
  name: string;
  category: 'Packaging & Consumer' | 'Building & Architecture' | 'Electrical & Industrial' | 'Hardware & Mobility';
  metals: Array<'Aluminium' | 'Copper' | 'Zinc'>;
  exclusions?: string;
}

export interface RecyclingTargetRow {
  financialYear: string;
  recyclingTarget: string;
  compliancePhase: string;
  applicableRule: string;
}

export interface RecycledContentRow {
  metalType: string;
  fy2028_29: string;
  fy2029_30: string;
  fy2030_31: string;
  fy2031_32Onwards: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  id: string;
  category: 'Applicability' | 'Registration' | 'Targets & Certificates' | 'Penalties';
  question: string;
  answer: string;
}

export interface ExistingService {
  name: string;
  summary: string;
  url: string;
}

export const COMPANY_INFO = {
  brandName: 'EPR BAZAAR',
  legalEntity: 'Nyanvi Ecoclean Private Limited',
  cin: 'U38220WB2024PTC274770',
  mainWebsite: 'https://eprbazaar.com/',
  aboutWebsite: 'https://eprbazaar.com/about-us/',
  extensionUrl: 'https://nfm.eprbazaar.com/',
  address: '4th Floor, Saket Building, 44, Park St, Mullick Bazar, Park Street Area, Kolkata, West Bengal, 700016, India',
  phoneDisplay: '+91 74391 03014',
  phoneHref: 'tel:+917439103014',
  emailPrimary: 'info@eprbazaar.com',
  emailLegal: 'legal@eprbazaar.com',
  workingHoursWeekday: 'Monday – Friday: 9:00 AM – 6:00 PM',
  workingHoursSaturday: 'Saturday: 10:00 AM – 4:00 PM',
  networkCount: '490+',
  overviewCopy:
    'EPR Bazaar is India’s trusted B2B compliance and digital marketplace platform for Extended Producer Responsibility (EPR) management, operated as a division of Nyanvi Ecoclean Private Limited. We connect producers, importers, and brand owners (PIBOs) with a pan-India network of over 490+ verified recyclers and registered PROs to fulfill statutory CPCB targets transparently.',
  missionCopy:
    'To simplify and streamline Extended Producer Responsibility compliance for Indian businesses, making statutory environmental data management accessible, transparent, and completely accurate.',
  visionCopy:
    'To maintain a unified digital ecosystem for statutory environmental reporting, advancing a circular economy framework where scrap streams are tracked, verified, and funneled back into sustainable production.',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about-non-ferrous-epr', label: 'About Non-Ferrous Metals EPR', href: '#about-non-ferrous-epr' },
  { id: 'applicant-types', label: 'Applicant Types', href: '#applicant-types' },
  { id: 'schedule-x-products', label: 'Schedule X Products', href: '#schedule-x-products' },
  { id: 'registration-process', label: 'Registration Process', href: '#registration-process' },
  { id: 'epr-certificates', label: 'EPR Certificates', href: '#epr-certificates' },
  { id: 'cpcb-faqs', label: 'CPCB FAQs', href: '#cpcb-faqs' },
  { id: 'contact-us', label: 'Contact Us', href: '#contact-us' },
];

export const HERO_STATS = [
  { label: 'Regulatory Enforcement', value: '1 April 2026', detail: 'MoEFCC Chapter VIII Notification' },
  { label: 'Regulated Metals', value: 'Al · Cu · Zn', detail: 'Aluminium, Copper, Zinc & Alloys' },
  { label: 'Schedule X Coverage', value: '18 Categories', detail: 'Specified Finished Product Families' },
  { label: 'Partner Ecosystem', value: '490+ Recyclers', detail: 'Pan-India Verified CPCB Network' },
];

export const METAL_DETAILS: MetalDetail[] = [
  {
    id: 'aluminium',
    symbol: 'Al',
    name: 'Aluminium & Alloys',
    atomicNumber: '13',
    image: '/src/assets/images/aluminium_scrap_ingots_1794932713226.jpg',
    imageAlt: 'Recycled high-grade aluminium ingots and extruded profiles stacked in an industrial processing plant',
    summary:
      'Primary driver of Schedule X compliance across beverage packaging, architectural extrusions, cookware, roofing, and transport components. Secondary aluminium recycling saves up to 95% energy compared to primary smelting.',
    scrapSources: [
      'Used beverage cans (UBC) and aerosol containers',
      'Architectural window frames, doors, ACP panels & facade profiles',
      'Industrial extrusion offcuts, foils, and electrical conductor scrap',
    ],
    scheduleXApplications: [
      'Cans for beverages & aerosols',
      'Packaging foils (food & pharma)',
      'Doors, windows, ACP & roofing sheets',
      'Aluminium alloy bicycles & cookware',
    ],
    recycledContentStart2028: '5%',
    recycledContentMilestone2031: '10%',
    complianceNote: 'Mandatory producer recycling starts at 10% in FY 2026–27; Schedule XIII domestic recycled content mandates begin FY 2028–29.',
  },
  {
    id: 'copper',
    symbol: 'Cu',
    name: 'Copper & Alloys',
    atomicNumber: '29',
    image: '/src/assets/images/copper_cathode_coils_1794932713106.jpg',
    imageAlt: 'Recycled bright copper wire coils and refined copper rods arranged on industrial racks',
    summary:
      'Critical non-ferrous metal in India’s electrical transmission, winding, plumbing, and HVAC infrastructure. CPCB portal tracks copper recovery from non-automobile cables, transformers, motors, and sanitary brass fittings.',
    scrapSources: [
      'Insulated conductor cables, busbars, and industrial copper strips',
      'End-of-life motor windings, pumps, alternators, and distribution transformers',
      'Sanitary brassware, valves, and centralised HVAC heat-exchanger coils',
    ],
    scheduleXApplications: [
      'Conductor cables, wires & strips',
      'Transformers, motors & alternators',
      'Electric generator sets & HVAC plants',
      'Sanitary ware & brass fittings',
    ],
    recycledContentStart2028: '5%',
    recycledContentMilestone2031: '20%',
    complianceNote: 'Automobile-grade cables, motors, and electrical fittings are explicitly excluded from Schedule X; industrial & building grades are fully covered.',
  },
  {
    id: 'zinc',
    symbol: 'Zn',
    name: 'Zinc & Alloys',
    atomicNumber: '30',
    image: '/src/assets/images/zinc_alloy_blocks_1794932713916.jpg',
    imageAlt: 'Refined silvery-blue zinc alloy ingots stacked on industrial pallets',
    summary:
      'Essential for corrosion-resistant galvanised roofing, die-cast hardware, brass alloy sanitary fittings, and apparel fasteners. Carries the highest Schedule XIII recycled-content mandate at 25% by FY 2031–32.',
    scrapSources: [
      'Galvanised roofing sheets and zinc-coated architectural panels',
      'Die-cast zinc alloy door handles, locks, and furniture hardware',
      'Zinc dross, ash, and brass alloy turnings from sanitary & apparel units',
    ],
    scheduleXApplications: [
      'Roofing & ceiling sheets',
      'Hardware, handles & furniture fittings',
      'Apparel buckles, zips & footwear trims',
      'Sanitary fixtures & die-cast toys',
    ],
    recycledContentStart2028: '5%',
    recycledContentMilestone2031: '25%',
    complianceNote: 'Manufacturers must source a minimum of 5% domestically recycled zinc starting FY 2028–29, scaling to 25% by FY 2031–32.',
  },
];

export const APPLICANT_CATEGORIES: ApplicantCategory[] = [
  {
    id: 'producer',
    title: 'Producers (Brand Owners & Importers)',
    shortLabel: 'Producers',
    scheduleRef: 'Chapter VIII · Rule 34',
    summary:
      'Entities manufacturing and selling Schedule X products under their own brand, sellers marketing goods manufactured by others under their brand, and importers of Schedule X products or non-ferrous scrap.',
    whoMustRegister:
      'Domestic brand owners, OEM marketers, and importers bringing Schedule X non-ferrous metal products or regulated scrap into India.',
    obligations: [
      'Register on the CPCB Centralised Non-Ferrous Metal EPR Portal prior to commercial operations.',
      'Fulfill annual end-of-life recycling targets under Schedule XI (10% in FY 2026–27 scaling to 75% by FY 2032–33).',
      'Procure verified EPR Certificates from CPCB-registered recyclers or offset via approved refurbishment credits.',
      'File quarterly data uploads and annual compliance returns on the CPCB portal.',
    ],
    keyDocuments: [
      'PAN, GST Registration & Certificate of Incorporation / CIN',
      'IEC (Import Export Code) for importers of Schedule X goods or scrap',
      'Product-wise & metal-wise sales/import volume declarations (Al, Cu, Zn)',
      'Authorised signatory KYC & board resolution / authority letter',
    ],
    filingCadence: 'Annual Target Assessment & Quarterly Portal Return',
  },
  {
    id: 'manufacturer',
    title: 'Manufacturers of Schedule X Products',
    shortLabel: 'Manufacturers',
    scheduleRef: 'Chapter VIII & Schedule XIII',
    summary:
      'Entities manufacturing non-ferrous metal products, components, or semi-finished assemblies listed under Schedule X for supply to brand owners or industrial distribution.',
    whoMustRegister:
      'Foundries, rolling mills, extrusion plants, cable makers, and OEM component factories producing Schedule X items.',
    obligations: [
      'Obtain CPCB Centralised Portal registration as a Manufacturer.',
      'Declare raw material consumption split between primary and recycled Aluminium, Copper, and Zinc.',
      'Meet Schedule XIII minimum domestically recycled content thresholds starting FY 2028–29 (10% Al, 20% Cu, 25% Zn by FY 2031–32).',
      'Apply to CPCB for documented technical exemptions only where statutory quality standards prevent recycled input.',
    ],
    keyDocuments: [
      'Consent to Operate (CTO) from State Pollution Control Board (SPCB/PCC)',
      'Factory license, Udyam / MSME or Industrial Entrepreneur Memorandum',
      'GST, PAN, and annual raw material procurement ledgers',
      'Authorized signatory identity & geo-tagged plant details',
    ],
    filingCadence: 'Annual Recycled Content & Production Filing',
  },
  {
    id: 'recycler',
    title: 'Registered Non-Ferrous Recyclers',
    shortLabel: 'Recyclers',
    scheduleRef: 'Chapter VIII & Schedule XI',
    summary:
      'Authorized secondary metal smelters, shredders, and refining plants converting non-ferrous scrap into reusable Aluminium, Copper, or Zinc ingots, billets, or alloys.',
    whoMustRegister:
      'SPCB/PCC-authorized non-ferrous metal recycling facilities eligible to generate and trade EPR Certificates.',
    obligations: [
      'Register facility capacity and metal-specific recovery yields on the CPCB portal.',
      'Process traceable non-ferrous scrap in compliance with Hazardous & Other Wastes environmental safeguards.',
      'Generate EPR Certificates strictly proportional to verified recycled metal output sold to manufacturers/users.',
      'Maintain digital invoice trails, e-way bills, and pollution board compliance logs for periodic CPCB audits.',
    ],
    keyDocuments: [
      'Valid SPCB/PCC Consent to Operate (CTO) & Hazardous Waste Authorization',
      'Installed recycling capacity & furnace/smelting process flow diagram',
      'Geo-tagged plant photos, electricity bills & weighbridge calibration records',
      'GST, PAN, and verified sales/purchase invoice trail',
    ],
    filingCadence: 'Real-Time Certificate Issuance & Quarterly Audit Filing',
  },
  {
    id: 'refurbisher',
    title: 'Refurbishers (Life-Extension Units)',
    shortLabel: 'Refurbishers',
    scheduleRef: 'Schedule XII',
    summary:
      'Specialized enterprises restoring, repairing, and reconditioning used Schedule X industrial equipment—such as transformers, motors, pumps, alternators, and centralised HVAC plants—for extended service life.',
    whoMustRegister:
      'Commercial repair, rewinding, and reconditioning units handling eligible Schedule X industrial electrical equipment.',
    obligations: [
      'Register under the Refurbisher category on the CPCB Non-Ferrous EPR portal.',
      'Issue Refurbishment Certificates per Schedule XII to defer end-of-life recycling obligations accurately.',
      'Channel non-recoverable scrap components strictly to CPCB-registered recyclers.',
    ],
    keyDocuments: [
      'SPCB/PCC Consent or applicable municipal/industrial registration',
      'GST registration, PAN & workshop facility verification',
      'Equipment testing, rewinding, and quality certification records',
    ],
    filingCadence: 'Batch Certificate Generation & Annual Return',
  },
  {
    id: 'collection-agent',
    title: 'Collection Agents & Aggregators',
    shortLabel: 'Collection Agents',
    scheduleRef: 'Chapter VIII',
    summary:
      'Authorized intermediaries aggregating sorted non-ferrous scrap from commercial dismantlers, industrial units, and bulk consumers for verified delivery to registered recyclers.',
    whoMustRegister:
      'Organized scrap aggregators, dismantling intermediaries, and reverse-logistics operators supplying CPCB-registered recyclers.',
    obligations: [
      'Maintain transparent chain-of-custody records for collected Aluminium, Copper, and Zinc scrap.',
      'Route 100% of collected Schedule X scrap exclusively to CPCB-registered recyclers.',
      'Report inward and outward tonnage on the CPCB portal to validate EPR certificate traceability.',
    ],
    keyDocuments: [
      'GST registration, PAN & warehouse/yard lease or ownership proof',
      'Agreements or supply tie-ups with CPCB-registered recyclers',
      'Weighbridge and transport documentation',
    ],
    filingCadence: 'Monthly / Quarterly Scrap Movement Ledger',
  },
  {
    id: 'bulk-consumer',
    title: 'Bulk Consumers (>1,000 MT/Year)',
    shortLabel: 'Bulk Consumers',
    scheduleRef: 'Chapter VIII Obligations',
    summary:
      'Large enterprises, infrastructure operators, utilities, and e-retailers consuming over 1,000 metric tonnes of specified Schedule X non-ferrous products annually.',
    whoMustRegister:
      'Entities exceeding the 1,000 MT annual consumption threshold must register/report on the CPCB framework to document scrap handover.',
    obligations: [
      'Ensure end-of-life Schedule X metal scrap is handed over solely to registered collection agents or recyclers.',
      'Maintain annual procurement and scrap disposal manifests for CPCB inspection.',
      'Avoid informal or unregistered scrap auctioning that breaks EPR chain-of-custody.',
    ],
    keyDocuments: [
      'Corporate PAN, GST & annual non-ferrous procurement summary',
      'Scrap handover manifests and recycler receipts',
      'Authorised environmental compliance officer details',
    ],
    filingCadence: 'Annual Scrap Handover & Compliance Filing',
  },
];

export const SCHEDULE_X_PRODUCTS: ScheduleXProduct[] = [
  { code: 1, name: 'Cans for beverages, aerosols, and similar products', category: 'Packaging & Consumer', metals: ['Aluminium'] },
  { code: 2, name: 'Packaging foils for food, pharmaceuticals, and similar products', category: 'Packaging & Consumer', metals: ['Aluminium'] },
  { code: 3, name: 'Doors, windows, and shutters', category: 'Building & Architecture', metals: ['Aluminium', 'Zinc'] },
  { code: 4, name: 'Aluminium composite panels (ACP)', category: 'Building & Architecture', metals: ['Aluminium'] },
  { code: 5, name: 'Aluminium partitioning, grills, and similar products', category: 'Building & Architecture', metals: ['Aluminium'] },
  { code: 6, name: 'Utensils: cookware, canisters, storage, and similar products', category: 'Packaging & Consumer', metals: ['Aluminium', 'Copper'] },
  { code: 7, name: 'Furniture: tables, chairs, benches, ladders, doorknobs, handles & hardware', category: 'Building & Architecture', metals: ['Aluminium', 'Zinc', 'Copper'] },
  { code: 8, name: 'Roofing and ceiling sheets', category: 'Building & Architecture', metals: ['Aluminium', 'Zinc'] },
  { code: 9, name: 'Motors, pumps, alternators, and similar products', category: 'Electrical & Industrial', metals: ['Copper', 'Aluminium'], exclusions: 'Other than automobile grade' },
  { code: 10, name: 'Conductor cables, wires, and strips', category: 'Electrical & Industrial', metals: ['Copper', 'Aluminium'], exclusions: 'Other than automobile grade' },
  { code: 11, name: 'Sanitary ware and fittings', category: 'Building & Architecture', metals: ['Copper', 'Zinc'] },
  { code: 12, name: 'Electrical fittings', category: 'Electrical & Industrial', metals: ['Copper', 'Aluminium', 'Zinc'], exclusions: 'Other than automobile grade' },
  { code: 13, name: 'Aluminium alloy bicycles', category: 'Hardware & Mobility', metals: ['Aluminium'] },
  { code: 14, name: 'Transformers', category: 'Electrical & Industrial', metals: ['Copper', 'Aluminium'], exclusions: 'Other than automobile grade' },
  { code: 15, name: 'Electric generator sets', category: 'Electrical & Industrial', metals: ['Copper', 'Aluminium'] },
  { code: 16, name: 'Centralised air-conditioning plants', category: 'Electrical & Industrial', metals: ['Copper', 'Aluminium'] },
  { code: 17, name: 'Apparel products (belt buckles, zips, and footwear trims)', category: 'Hardware & Mobility', metals: ['Zinc', 'Copper', 'Aluminium'] },
  { code: 18, name: 'Toys containing non-ferrous metal components', category: 'Packaging & Consumer', metals: ['Zinc', 'Aluminium'] },
];

export const SCHEDULE_XI_TARGETS: RecyclingTargetRow[] = [
  { financialYear: '2026–27', recyclingTarget: '10%', compliancePhase: 'Phase 1 · Initial Adoption', applicableRule: 'Schedule XI · Producer EOL Obligation' },
  { financialYear: '2027–28', recyclingTarget: '10%', compliancePhase: 'Phase 1 · Initial Adoption', applicableRule: 'Schedule XI · Producer EOL Obligation' },
  { financialYear: '2028–29', recyclingTarget: '30%', compliancePhase: 'Phase 2 · Scale-Up', applicableRule: 'Schedule XI · Producer EOL Obligation' },
  { financialYear: '2029–30', recyclingTarget: '30%', compliancePhase: 'Phase 2 · Scale-Up', applicableRule: 'Schedule XI · Producer EOL Obligation' },
  { financialYear: '2030–31', recyclingTarget: '50%', compliancePhase: 'Phase 3 · Majority Recovery', applicableRule: 'Schedule XI · Producer EOL Obligation' },
  { financialYear: '2031–32', recyclingTarget: '50%', compliancePhase: 'Phase 3 · Majority Recovery', applicableRule: 'Schedule XI · Producer EOL Obligation' },
  { financialYear: '2032–33 & onwards', recyclingTarget: '75%', compliancePhase: 'Phase 4 · Steady-State Circularity', applicableRule: 'Schedule XI · Producer EOL Obligation' },
];

export const SCHEDULE_XIII_TARGETS: RecycledContentRow[] = [
  { metalType: 'Aluminium & its alloys', fy2028_29: '5%', fy2029_30: 'Progressive Step-Up', fy2030_31: 'Progressive Step-Up', fy2031_32Onwards: '10%' },
  { metalType: 'Copper & its alloys', fy2028_29: '5%', fy2029_30: 'Progressive Step-Up', fy2030_31: 'Progressive Step-Up', fy2031_32Onwards: '20%' },
  { metalType: 'Zinc & its alloys', fy2028_29: '5%', fy2029_30: 'Progressive Step-Up', fy2030_31: 'Progressive Step-Up', fy2031_32Onwards: '25%' },
];

export const REGISTRATION_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Schedule X Applicability & Metal Mass Audit',
    duration: 'Days 1–3',
    description:
      'We map your product SKUs, HS codes, and bill of materials against the 18 Schedule X categories and segregate Aluminium, Copper, and Zinc tonnage.',
    deliverables: ['SKU-level Schedule X applicability matrix', 'Historical sales/import weight baseline', 'Automobile-grade exclusion assessment'],
  },
  {
    stepNumber: '02',
    title: 'Statutory Documentation & SPCB Verification',
    duration: 'Days 4–8',
    description:
      'EPR Bazaar compiles and audits corporate KYC, GST, IEC, SPCB Consent to Operate (for Manufacturers/Recyclers), and metal procurement ledgers.',
    deliverables: ['CPCB-ready compliance dossier', 'Consent & capacity cross-check', 'Authorized signatory declaration pack'],
  },
  {
    stepNumber: '03',
    title: 'CPCB Centralised Portal Application Filing',
    duration: 'Days 9–12',
    description:
      'Submission of category-specific registration on the CPCB Centralised Non-Ferrous Metal EPR Portal with accurate annual target declarations.',
    deliverables: ['CPCB portal application acknowledgement', 'Fee challan reconciliation', 'Digital submission receipt'],
  },
  {
    stepNumber: '04',
    title: 'Query Resolution & Registration Certificate Grant',
    duration: 'Days 13–21',
    description:
      'Our regulatory specialists address CPCB scrutiny remarks promptly until the official EPR Registration Certificate is issued.',
    deliverables: ['Official CPCB EPR Registration Number', 'Active Producer / Recycler portal dashboard', 'Compliance calendar setup'],
  },
  {
    stepNumber: '05',
    title: 'EPR Certificate Offset & Annual Returns',
    duration: 'Ongoing Quarterly / Annual',
    description:
      'Continuous target tracking, procurement of verified EPR Certificates from our 490+ recycler network, and timely annual return submission.',
    deliverables: ['Verified EPR credit transfers', 'Schedule XI & XIII audit trail', 'Zero-penalty annual compliance report'],
  },
];

export const CPCB_FAQS: FaqItem[] = [
  {
    id: 'faq-effective-date',
    category: 'Applicability',
    question: 'When did Non-Ferrous Metal Scrap EPR Rules take effect in India?',
    answer:
      'The Extended Producer Responsibility framework for non-ferrous metals—notified by MoEFCC under Chapter VIII of the Hazardous and Other Wastes (Management and Transboundary Movement) Amendment Rules—came into effect on April 1, 2026. FY 2026–27 marks the first mandatory compliance year with a 10% recycling target under Schedule XI.',
  },
  {
    id: 'faq-metals-covered',
    category: 'Applicability',
    question: 'Which metals and product categories fall under Non-Ferrous Metal EPR?',
    answer:
      'The rules regulate three primary non-ferrous metals and their alloys: Aluminium, Copper, and Zinc. However, EPR obligations apply specifically to the 18 finished product categories listed in Schedule X—ranging from beverage cans, packaging foils, doors/windows, ACP panels, and utensils to non-automobile conductor cables, motors, pumps, transformers, sanitary fittings, and central HVAC plants.',
  },
  {
    id: 'faq-auto-exclusion',
    category: 'Applicability',
    question: 'Are automobile-grade motors, cables, and electrical components covered under Schedule X?',
    answer:
      'No. Schedule X explicitly excludes automobile-grade motors, pumps, alternators, conductor cables, wires, strips, electrical fittings, and transformers (Items 9, 10, 12, and 14 specify "other than automobile grade"), as automotive components are addressed under End-of-Life Vehicles (ELV) frameworks.',
  },
  {
    id: 'faq-importers',
    category: 'Registration',
    question: 'Do importers of Schedule X finished goods or non-ferrous scrap need CPCB EPR registration?',
    answer:
      'Yes. Under the Producer definition, any entity importing Schedule X products or covered non-ferrous metal scrap for domestic sale or industrial use must register on the CPCB Centralised EPR Portal and fulfill Schedule XI recycling targets corresponding to the imported metal weight.',
  },
  {
    id: 'faq-bulk-consumer',
    category: 'Registration',
    question: 'What are the compliance duties for Bulk Consumers?',
    answer:
      'Enterprises, utilities, and e-retailers consuming more than 1,000 metric tonnes of specified Schedule X non-ferrous metal products annually qualify as Bulk Consumers. They must channel end-of-life metal scrap exclusively through CPCB-registered collection agents or recyclers and maintain verifiable disposal records.',
  },
  {
    id: 'faq-schedule-xi-vs-xiii',
    category: 'Targets & Certificates',
    question: 'What is the difference between Schedule XI and Schedule XIII targets?',
    answer:
      'Schedule XI applies to Producers (brand owners and importers) and mandates end-of-life collection and recycling targets starting at 10% in FY 2026–27 and rising to 75% by FY 2032–33. Schedule XIII applies to Manufacturers and mandates minimum domestically recycled metal content in new production starting FY 2028–29 (reaching 10% for Aluminium, 20% for Copper, and 25% for Zinc by FY 2031–32).',
  },
  {
    id: 'faq-epr-certificates',
    category: 'Targets & Certificates',
    question: 'How do EPR Certificates and Refurbishment Certificates work on the CPCB portal?',
    answer:
      'CPCB-registered Recyclers generate metal-specific EPR Certificates proportional to the actual Aluminium, Copper, or Zinc recovered and sold. Producers purchase and retire these certificates on the CPCB portal to satisfy their annual targets. Refurbishers registered under Schedule XII can also issue Refurbishment Certificates to account for extended product lifespans on eligible industrial equipment.',
  },
  {
    id: 'faq-penalties',
    category: 'Penalties',
    question: 'What happens if a Producer fails to meet annual targets or operates without EPR registration?',
    answer:
      'Operating without CPCB registration or defaulting on Schedule XI targets attracts Environmental Compensation (EC) levied by CPCB. Unfulfilled targets can be carried forward for up to 3 years, with partial EC refund mechanisms that reduce progressively if cleared in year 1, year 2, or year 3—after which EC is forfeited without waiving the underlying recycling liability.',
  },
];

export const EXISTING_EPR_SERVICES: ExistingService[] = [
  {
    name: 'Plastic Waste EPR',
    summary: 'End-to-end compliance for Plastic Waste Management (PWM) Rules, PIBO registration, and plastic credit certificates.',
    url: 'https://eprbazaar.com/',
  },
  {
    name: 'E-Waste EPR',
    summary: 'CPCB authorization, recycling target fulfillment, and audit pipelines for electrical and electronic equipment.',
    url: 'https://eprbazaar.com/',
  },
  {
    name: 'Battery Waste EPR',
    summary: 'Registration, collection tracking, and target filings under India’s Battery Waste Management Rules.',
    url: 'https://eprbazaar.com/',
  },
  {
    name: 'Tyre Waste EPR',
    summary: 'Comprehensive compliance and EPR certificate procurement for waste tyre regulations.',
    url: 'https://eprbazaar.com/',
  },
  {
    name: 'Used Oil EPR',
    summary: 'Safe, traceable, and CPCB-compliant used oil collection and re-refining target management.',
    url: 'https://eprbazaar.com/',
  },
  {
    name: 'Paper, Glass & C&D Waste EPR',
    summary: 'Packaging accountability, scrap verification, and Construction & Demolition waste compliance.',
    url: 'https://eprbazaar.com/',
  },
];
