export interface ApplicantFaq {
  question: string;
  answer: string;
}

export interface ApplicantTypeDetail {
  id: string;
  exactOptionLabel: string;
  shortTitle: string;
  portalCode: string;
  slug: string;
  legacySlug: string;
  seoTitle: string;
  seoDescription: string;
  heroSummary: string;
  applicability: {
    definition: string;
    whoFallsHere: string[];
    clarificationNote: string;
  };
  coveredProducts: {
    summary: string;
    items: string[];
    exclusions: string;
  };
  responsibilities: string[];
  registration: {
    portalName: string;
    authority: string;
    processOverview: string[];
  };
  eprObligations: {
    headline: string;
    targetStructure: string[];
    certificateRule: string;
  };
  documents: string[];
  returns: {
    halfYearly: string;
    annual: string;
    reportingItems: string[];
  };
  faqs: ApplicantFaq[];
}

export const EXACT_EIGHT_APPLICANT_OPTIONS: ApplicantTypeDetail[] = [
  {
    id: 'manufacturer',
    exactOptionLabel: 'Manufacturer',
    shortTitle: 'Manufacturer',
    portalCode: 'Manufacturer',
    slug: '/applicant-types/manufacturer/',
    legacySlug: '/manufacturer-non-ferrous-metals-epr/',
    seoTitle: 'Manufacturer Non Ferrous Metal EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB EPR registration guide for Non-Ferrous Metal Manufacturers. Understand Schedule X covered products, Schedule XIII recycled content mandates, documents, and returns.',
    heroSummary:
      'Entities manufacturing non-ferrous metal products, semi-finished alloys, or components listed in Schedule X using Aluminium, Copper, or Zinc and their alloys.',
    applicability: {
      definition:
        'Under Chapter VIII of the Hazardous and Other Wastes (Management and Transboundary Movement) Amendment Rules, a Manufacturer is an entity engaged in manufacturing Schedule X products or components made of Aluminium, Copper, Zinc, or their alloys.',
      whoFallsHere: [
        'Domestic rolling mills, extrusion plants, foundries, and die-casting units producing Schedule X goods or components.',
        'Contract manufacturers supplying unbranded or OEM-branded Schedule X items to Producer (P2) brand owners.',
        'Cable, utensil, foil, sanitary fitting, and hardware manufacturing units using non-ferrous metals.',
      ],
      clarificationNote:
        'If your entity also sells Schedule X products under its own brand name directly to consumers or businesses, CPCB portal classification may additionally involve Producer (P1) registration.',
    },
    coveredProducts: {
      summary:
        'Manufacturing lines producing any of the 18 Schedule X product categories made of Aluminium, Copper, Zinc, or their alloys.',
      items: [
        'Aluminium beverage cans, aerosol cans, packaging foils, doors, windows, ACP panels, and roofing sheets',
        'Utensils, cookware, non-ferrous furniture hardware, ladders, and architectural grills',
        'Non-automobile copper/aluminium conductor cables, wires, strips, motors, pumps, and transformers',
        'Sanitary ware fittings, alloy bicycles, apparel buckles/zips, and non-ferrous toys',
      ],
      exclusions:
        'Items 9, 10, 12, and 14 of Schedule X explicitly exclude automobile-grade motors, cables, electrical fittings, and transformers.',
    },
    responsibilities: [
      'Obtain mandatory CPCB Centralised Non-Ferrous Metal EPR Portal registration prior to continuing or commencing manufacturing.',
      'Maintain segregated procurement ledgers distinguishing primary virgin metal from domestically recycled Aluminium, Copper, and Zinc inputs.',
      'Meet phased Schedule XIII minimum recycled content mandates starting FY 2028–29.',
      'Channel internal process scrap and rejected batches only to CPCB-registered Collection Agents or Recyclers.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB) in coordination with SPCB/PCC',
      processOverview: [
        'Create entity profile on the CPCB portal and select the Manufacturer category.',
        'Enter plant-level installed capacity, SPCB Consent to Operate (CTO) validity, and Schedule X product lines.',
        'Upload corporate KYC, GST, PAN, and authorized signatory credentials.',
        'Resolve any CPCB scrutiny observations and download the digital registration certificate.',
      ],
    },
    eprObligations: {
      headline: 'Schedule XIII Minimum Domestically Recycled Metal Content',
      targetStructure: [
        'FY 2028–29: Minimum 5% domestically recycled content across Aluminium, Copper, and Zinc inputs.',
        'FY 2029–30 to FY 2030–31: Progressive year-on-year scale-up per Schedule XIII.',
        'FY 2031–32 & onwards: 10% Aluminium, 20% Copper, and 25% Zinc minimum recycled metal input.',
      ],
      certificateRule:
        'Manufacturers procure recycled ingots/billets with verified trail from CPCB-registered recyclers; technical quality exemptions require formal CPCB application.',
    },
    documents: [
      'Company PAN, GSTIN certificate, and Certificate of Incorporation / Partnership Deed',
      'Valid SPCB/PCC Consent to Establish (CTE) and Consent to Operate (CTO)',
      'Factory License, Udyam / MSME / IEM registration certificate',
      'Product-wise annual production capacity & Schedule X metal consumption details',
      'Authorized signatory Aadhaar/PAN KYC and Board Resolution / Authorization Letter',
    ],
    returns: {
      halfYearly: 'Half-Yearly Return due on or before October 31 (covering April–September operations).',
      annual: 'Annual Return due on or before June 30 following the close of the financial year.',
      reportingItems: [
        'Total metric tonnes of Aluminium, Copper, and Zinc procured (primary vs. domestically recycled).',
        'Schedule X finished goods supplied to Producers (P2) or industrial buyers.',
        'Process scrap generated and handed over to registered recyclers.',
      ],
    },
    faqs: [
      {
        question: 'What is the difference between a Manufacturer and Producer (P1) on the CPCB portal?',
        answer:
          'A Manufacturer produces Schedule X goods or components (often supplying OEMs or brand owners) and carries Schedule XIII recycled-content obligations. A Producer (P1) manufactures and sells Schedule X products under its own brand, carrying Schedule XI end-of-life recycling targets.',
      },
      {
        question: 'When do Schedule XIII recycled content obligations start for Manufacturers?',
        answer:
          'While portal registration applies from April 1, 2026, mandatory minimum domestically recycled content percentages under Schedule XIII begin in FY 2028–29 at 5% and reach 10% (Aluminium), 20% (Copper), and 25% (Zinc) by FY 2031–32.',
      },
    ],
  },
  {
    id: 'producer-p1',
    exactOptionLabel: 'Producer (P1) - Own Manufacturing & Own Branding',
    shortTitle: 'Producer (P1)',
    portalCode: 'Producer (P1)',
    slug: '/applicant-types/producer-p1/',
    legacySlug: '/producer-p1-own-manufacturing-branding/',
    seoTitle: 'Producer P1 Non Ferrous Metal EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB EPR compliance for Producer (P1) - Own Manufacturing & Own Branding. Schedule XI recycling targets, Schedule X products, documents, and return filings.',
    heroSummary:
      'Entities that manufacture Schedule X non-ferrous metal products in their own facilities and place them on the Indian market under their own brand.',
    applicability: {
      definition:
        'On the CPCB EPR portal, Producer (P1) designates an entity that manufactures products (or components, parts, and spares) made of non-ferrous metals and their alloys in-house and offers them for sale under its own brand.',
      whoFallsHere: [
        'Branded cookware, utensil, beverage can, and aluminium foil manufacturers selling under proprietary brand names.',
        'Cable, wire, motor, transformer, pump, and sanitary hardware manufacturers branding their own factory output.',
        'Architectural extrusion and roofing sheet producers marketing finished Schedule X goods directly under their house brand.',
      ],
      clarificationNote:
        'If an entity manufactures some lines in-house and outsources others under its own brand, applicability across P1 and P2 streams should be verified prior to CPCB filing.',
    },
    coveredProducts: {
      summary:
        'All 18 finished product categories listed in Schedule X made from Aluminium, Copper, Zinc, or their alloys manufactured and branded in-house.',
      items: [
        'Branded beverage cans, aerosol containers, and food/pharma packaging foils',
        'Branded doors, windows, shutters, ACP panels, grills, and roofing/ceiling sheets',
        'Branded electrical conductor cables, wires, strips, motors, pumps, transformers, and DG sets',
        'Branded utensils, furniture hardware, sanitary fittings, alloy bicycles, and toys',
      ],
      exclusions:
        'Automobile-grade motors, pumps, alternators, conductor cables, electrical fittings, and transformers are excluded from Schedule X.',
    },
    responsibilities: [
      'Register as Producer (P1) on the CPCB Centralised Non-Ferrous Metal EPR Portal.',
      'Quantify annual metal weight (Al, Cu, Zn) placed on the domestic market across all branded Schedule X SKUs.',
      'Meet progressive Schedule XI recycling targets via authorized recycler channelization or CPCB EPR certificates.',
      'Submit timely half-yearly and annual returns reconciling sales tonnage and retired EPR certificates.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB)',
      processOverview: [
        'Select Producer (P1) - Own Manufacturing & Own Branding in the CPCB registration workflow.',
        'Declare manufacturing plant details, SPCB CTO records, and brand names.',
        'Input historical and current Schedule X product placement volumes by metal type.',
        'Submit corporate documents and complete CPCB scrutiny verification.',
      ],
    },
    eprObligations: {
      headline: 'Schedule XI Stepped End-of-Life Recycling Targets (10% to 75%)',
      targetStructure: [
        'FY 2026–27 & FY 2027–28: 10% of eligible non-ferrous metal weight placed on the market.',
        'FY 2028–29 & FY 2029–30: 30% mandatory recycling target.',
        'FY 2030–31 & FY 2031–32: 50% mandatory recycling target.',
        'FY 2032–33 & onwards: 75% steady-state recycling target.',
      ],
      certificateRule:
        'Targets are fulfilled by purchasing and retiring metal-matched EPR Certificates from CPCB-registered recyclers or Schedule XII refurbishment credits where eligible.',
    },
    documents: [
      'Company PAN, GSTIN, and Certificate of Incorporation / CIN',
      'Registered brand ownership / Trademark documentation',
      'Manufacturing unit SPCB/PCC Consent to Operate (CTO)',
      'Audited Schedule X product sales data segregated by Aluminium, Copper, and Zinc weight',
      'Authorized signatory KYC and Board Resolution',
    ],
    returns: {
      halfYearly: 'Half-Yearly Return due on or before October 31.',
      annual: 'Annual Return due on or before June 30 of the succeeding financial year.',
      reportingItems: [
        'Schedule X product-wise quantities placed on the market during the reporting window.',
        'Metal-wise EPR obligation calculation (Al, Cu, Zn).',
        'EPR Certificates and Refurbishment Certificates retired on the CPCB portal.',
      ],
    },
    faqs: [
      {
        question: 'Does Producer (P1) also need to meet Schedule XIII recycled content norms?',
        answer:
          'Because a P1 entity operates in-house manufacturing, its manufacturing operations must align with Schedule XIII recycled-content thresholds from FY 2028–29 in addition to fulfilling Schedule XI Producer recycling targets.',
      },
      {
        question: 'Can unfulfilled P1 targets be carried forward?',
        answer:
          'Shortfalls carry forward for up to 3 years alongside Environmental Compensation provisions on the CPCB portal; meeting annual targets on time avoids EC deposits.',
      },
    ],
  },
  {
    id: 'producer-p2',
    exactOptionLabel: 'Producer (P2) - Outsourced Manufacturing & Own Branding',
    shortTitle: 'Producer (P2)',
    portalCode: 'Producer (P2)',
    slug: '/applicant-types/producer-p2/',
    legacySlug: '/producer-p2-outsourced-manufacturing-branding/',
    seoTitle: 'Producer P2 Outsourced Brand EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB EPR guide for Producer (P2) - Outsourced Manufacturing & Own Branding. Learn brand-owner liabilities, Schedule XI targets, OEM mapping, and returns.',
    heroSummary:
      'Brand owners, marketing companies, and retail brands selling Schedule X non-ferrous metal products manufactured by third-party contract factories under their own brand.',
    applicability: {
      definition:
        'Producer (P2) covers any entity offering to sell under its own brand Schedule X products, components, parts, or spares made of non-ferrous metals that are manufactured by other domestic manufacturers or suppliers.',
      whoFallsHere: [
        'Consumer appliance, cookware, sanitaryware, and hardware brands using third-party contract manufacturers.',
        'Private-label retail chains and e-commerce brands selling branded aluminium cans, foils, utensils, or furniture.',
        'Electrical and HVAC brand owners procuring white-label motors, cables, or fittings for sale under their own label.',
      ],
      clarificationNote:
        'Even without owning a factory or SPCB Consent to Operate, the brand owner bears primary Schedule XI EPR liability for branded products placed on the market.',
    },
    coveredProducts: {
      summary:
        'Any Schedule X product containing Aluminium, Copper, or Zinc manufactured by a third party and marketed under your brand name.',
      items: [
        'Private-label cookware, canisters, foils, and beverage cans',
        'Branded outsourced doors, windows, hardware, handles, and sanitary fittings',
        'Outsourced electrical cables, wires, pumps, motors, and furniture assemblies',
        'Branded alloy bicycles, apparel buckles/zips, and toys',
      ],
      exclusions:
        'Automobile-grade cables, motors, alternators, electrical fittings, and transformers remain outside Schedule X.',
    },
    responsibilities: [
      'Register under Producer (P2) on the CPCB Non-Ferrous Metal EPR Portal.',
      'Declare all contract/OEM manufacturing partners supplying branded Schedule X goods.',
      'Track exact non-ferrous metal net weight across outsourced SKUs using supplier BOM certificates.',
      'Fulfill annual Schedule XI recycling targets by procuring verified EPR Certificates on the CPCB portal.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB)',
      processOverview: [
        'Select Producer (P2) - Outsourced Manufacturing & Own Branding on the CPCB portal.',
        'Map CPCB-registered or verified third-party Manufacturers supplying your branded products.',
        'Upload brand registrations, corporate KYC, and SKU metal-weight declarations.',
        'Obtain CPCB approval and track target ledger on the portal.',
      ],
    },
    eprObligations: {
      headline: 'Schedule XI Brand-Owner Recycling Targets (10% Scaling to 75%)',
      targetStructure: [
        'FY 2026–27 & FY 2027–28: 10% recycling target on branded Schedule X metal weight.',
        'FY 2028–29 & FY 2029–30: 30% recycling target.',
        'FY 2030–31 & FY 2031–32: 50% recycling target.',
        'FY 2032–33 & onwards: 75% recycling target.',
      ],
      certificateRule:
        'P2 brand owners discharge liabilities by purchasing metal-specific EPR Certificates from CPCB-registered recyclers via the online portal.',
    },
    documents: [
      'Company PAN, GSTIN, and Incorporation / Business Registration Certificate',
      'Brand ownership / Trademark registration or licensing documentation',
      'List of third-party OEM / contract manufacturers with GST & supply agreements',
      'SKU-wise Bill of Materials (BOM) certifying Aluminium, Copper, and Zinc weight per unit',
      'Authorized signatory KYC and authorization letter',
    ],
    returns: {
      halfYearly: 'Half-Yearly Return due by October 31.',
      annual: 'Annual Return due by June 30 following the financial year.',
      reportingItems: [
        'Procurement and branded sales volume of Schedule X products from OEMs.',
        'Metal-wise target reconciliation (Al, Cu, Zn).',
        'Retired EPR certificate IDs matching annual Schedule XI liability.',
      ],
    },
    faqs: [
      {
        question: 'If my contract manufacturer is registered with CPCB, do I still need P2 registration?',
        answer:
          'Yes. Under CPCB EPR rules, the Manufacturer registers for production/recycled-content tracking while the Brand Owner (P2) holds the statutory Schedule XI end-of-life recycling obligation for products sold under its brand.',
      },
      {
        question: 'What if I also import some SKUs while outsourcing others domestically?',
        answer:
          'Imported finished products fall under Producer (P3), whereas domestically outsourced branded products fall under Producer (P2). Your CPCB registration profile should reflect the exact scope of operations.',
      },
    ],
  },
  {
    id: 'producer-p3',
    exactOptionLabel: 'Producer (P3) - Imported Products',
    shortTitle: 'Producer (P3)',
    portalCode: 'Producer (P3)',
    slug: '/applicant-types/producer-p3/',
    legacySlug: '/producer-p3-imported-products/',
    seoTitle: 'Producer P3 Imported Products EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB EPR registration for Producer (P3) - Imported Products. Coverage for importers of Schedule X non-ferrous metal goods, IEC requirements, targets, and returns.',
    heroSummary:
      'Importers bringing new Schedule X finished products, assemblies, components, or spares made of Aluminium, Copper, or Zinc into India for sale under their own or original brand.',
    applicability: {
      definition:
        'Producer (P3) applies to any entity that offers to sell imported products (including components, consumables, parts, and spares) made of non-ferrous metals and their alloys under its own brand or the original overseas brand.',
      whoFallsHere: [
        'Indian subsidiaries, distributors, and trading houses importing Schedule X finished goods or machinery.',
        'Importers of packaging foils, beverage cans, architectural aluminium hardware, or sanitary fittings.',
        'Importers of non-automobile motors, pumps, alternators, cables, transformers, DG sets, or central HVAC plants.',
      ],
      clarificationNote:
        'Distinguish carefully between new imported products (P3) and imported used devices, used products, or non-ferrous metal scrap (which fall under Producer P4).',
    },
    coveredProducts: {
      summary:
        'All imported new finished products and spares listed across the 18 categories of Schedule X containing Aluminium, Copper, or Zinc.',
      items: [
        'Imported aluminium foils, cans, cookware, utensils, ACP panels, doors, windows, and hardware',
        'Imported non-automobile conductor cables, motors, pumps, transformers, and generator sets',
        'Imported centralised air-conditioning systems and brass/zinc sanitary fittings',
        'Imported alloy bicycles, apparel metal trims (buckles/zips), and toys',
      ],
      exclusions:
        'Automobile-grade motors, cables, electrical fittings, and transformers are excluded from Schedule X.',
    },
    responsibilities: [
      'Obtain Producer (P3) registration on the CPCB EPR portal prior to import clearance and domestic sale.',
      'Maintain HS-code and Bill of Entry logs quantifying net Aluminium, Copper, and Zinc weight imported.',
      'Fulfill Schedule XI recycling obligations corresponding to imported Schedule X products placed on the market.',
      'File accurate half-yearly and annual import reconciliation returns on the CPCB portal.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB)',
      processOverview: [
        'Select Producer (P3) - Imported Products on the CPCB EPR portal.',
        'Enter Import Export Code (IEC), GSTIN, and customs port/HS code summaries.',
        'Declare imported Schedule X product categories and supplier/manufacturer weight specifications.',
        'Complete CPCB verification and activate annual EPR target ledger.',
      ],
    },
    eprObligations: {
      headline: 'Schedule XI Import Recycling Targets (10% Scaling to 75%)',
      targetStructure: [
        'FY 2026–27 & FY 2027–28: 10% of imported Schedule X non-ferrous metal weight.',
        'FY 2028–29 & FY 2029–30: 30% recycling target.',
        'FY 2030–31 & FY 2031–32: 50% recycling target.',
        'FY 2032–33 & onwards: 75% recycling target.',
      ],
      certificateRule:
        'Importers under P3 fulfill targets by acquiring and retiring metal-matched EPR Certificates from CPCB-registered domestic recyclers.',
    },
    documents: [
      'Import Export Code (IEC) issued by DGFT',
      'Company PAN, GSTIN, and Certificate of Incorporation',
      'Customs Bills of Entry & HS Code import summary for Schedule X items',
      'Overseas supplier specification sheets / BOM confirming Al, Cu, Zn metal weight',
      'Authorized signatory KYC and authorization letter',
    ],
    returns: {
      halfYearly: 'Half-Yearly Return due by October 31.',
      annual: 'Annual Return due by June 30 following the close of the financial year.',
      reportingItems: [
        'Bill of Entry wise Schedule X import quantities and net non-ferrous metal weight.',
        'Domestic sales / distribution reconciliation.',
        'EPR certificates purchased and retired against Schedule XI obligations.',
      ],
    },
    faqs: [
      {
        question: 'Do I need P3 registration if I import products under the overseas OEM brand rather than my own brand?',
        answer:
          'Yes. Producer (P3) explicitly covers imported Schedule X products offered for sale under either the importer’s own brand or the original overseas brand.',
      },
      {
        question: 'What is the difference between Producer (P3) and Producer (P4)?',
        answer:
          'P3 covers imported new Schedule X products/components (subject to stepped Schedule XI targets starting at 10%). P4 covers imported used devices, used products, or scrap of non-ferrous metals (subject to a 100% Y-1 EPR obligation).',
      },
    ],
  },
  {
    id: 'producer-p4',
    exactOptionLabel: 'Producer (P4) - Imported Used Devices or Products or Scrap of Non Ferrous Metals',
    shortTitle: 'Producer (P4)',
    portalCode: 'Producer (P4)',
    slug: '/applicant-types/producer-p4/',
    legacySlug: '/producer-p4-imported-scrap-non-ferrous-metals/',
    seoTitle: 'Producer P4 Registration | Imported Scrap EPR India | EPR Bazaar',
    seoDescription:
      'Dedicated CPCB guide for Producer (P4) - Imported Used Devices or Products or Scrap of Non Ferrous Metals. Learn the 100% Y-1 EPR obligation, IEC documents & returns.',
    heroSummary:
      'Specialized CPCB compliance category for importers of used devices, second-hand non-ferrous metal products, or non-ferrous metal scrap (Aluminium, Copper, Zinc and alloys) entering India.',
    applicability: {
      definition:
        'Producer (P4) covers any entity that imports used devices, used products, or scrap of non-ferrous metals (Aluminium, Copper, Zinc, and their alloys) into India.',
      whoFallsHere: [
        'Metal recyclers, foundries, and secondary smelters directly importing non-ferrous metal scrap (Aluminium Tense/Taint/Tabor, Copper Berry/Birch/Cliff, Zinc die-cast scrap).',
        'Authorized scrap traders and industrial importers bringing imported non-ferrous scrap into India for domestic processing or supply.',
        'Entities importing used non-ferrous metal products, industrial assemblies, or used devices containing regulated metals.',
      ],
      clarificationNote:
        'Unlike P1–P3 stepped Schedule XI percentages, P4 importers carry a distinct 100% preceding-year (Y-1) EPR recycling obligation. Entities that both import scrap and operate a recycling plant must verify dual Recycler + Producer (P4) compliance requirements.',
    },
    coveredProducts: {
      summary:
        'Imported used devices, used Schedule X products, and imported scrap streams of Aluminium, Copper, Zinc, and their alloys.',
      items: [
        'Imported Aluminium scrap grades (UBC, extrusions, castings, turnings, foil scrap)',
        'Imported Copper scrap grades (bare bright wire, insulated cable scrap, brass/bronze alloy scrap)',
        'Imported Zinc scrap, dross, ash (permitted grades), and die-cast zinc alloy scrap',
        'Imported used non-ferrous industrial devices, motors, transformers, and assemblies',
      ],
      exclusions:
        'Hazardous waste import restrictions under other Schedules of the Hazardous & Other Wastes Rules (such as Basel Convention prior informed consent and prohibited waste streams) continue to apply independently.',
    },
    responsibilities: [
      'Register under Producer (P4) on the CPCB Centralised Non-Ferrous Metal EPR Portal before importing used products or metal scrap.',
      'Record every import consignment (Bill of Entry, HS code, gross and net Aluminium/Copper/Zinc tonnage) on the CPCB portal.',
      'Fulfill 100% EPR recycling obligation corresponding to the preceding financial year (Y-1) import quantity.',
      'Channelize imported scrap solely through CPCB-registered Recyclers or offset via verified EPR certificates.',
      'File half-yearly and annual P4 import and certificate reconciliation returns within statutory deadlines.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB) · MoEFCC Hazardous Waste Division',
      processOverview: [
        'Select Producer (P4) - Imported Used Devices or Products or Scrap of Non Ferrous Metals.',
        'Link DGFT Import Export Code (IEC), GSTIN, PAN, and warehouse/plant location.',
        'Declare historical (Y-1) and projected import volumes segregated by Aluminium, Copper, and Zinc.',
        'Submit customs/compliance documentation and obtain CPCB P4 Registration Certificate.',
      ],
    },
    eprObligations: {
      headline: '100% Preceding Year (Y-1) EPR Recycling Obligation',
      targetStructure: [
        'Obligation Formula: 100% of the weight of non-ferrous metals (Al, Cu, Zn) in used devices, used products, or scrap imported in the preceding financial year (Y-1).',
        'Metal-Specific Matching: Aluminium scrap imports require Aluminium EPR certificates; Copper requires Copper; Zinc requires Zinc.',
        'No Phase-In Discount: Unlike Schedule XI stepped percentages (10%–75%) for new products, P4 scrap/used-product imports carry full 100% Y-1 accountability.',
      ],
      certificateRule:
        'Fulfilled exclusively through verified recycling output and EPR Certificates generated on the CPCB portal by registered non-ferrous recyclers.',
    },
    documents: [
      'Import Export Code (IEC) and AD Code bank verification',
      'Company PAN, GSTIN, and Certificate of Incorporation / CIN',
      'Bills of Entry, Commercial Invoices, Packing Lists & Pre-Shipment Inspection Certificates (PSIC where applicable)',
      'SPCB Consent to Operate (CTO) & Hazardous Waste Passbook (if importer is also an actual user/recycler)',
      'Metal-wise Y-1 import summary certified by Chartered Accountant / Authorized Signatory',
      'Authorized signatory KYC and Board Resolution',
    ],
    returns: {
      halfYearly: 'Half-Yearly Return due on or before October 31 (tracking April–September scrap/used imports).',
      annual: 'Annual Return due on or before June 30 reconciling full-year Y-1 import tonnage against retired EPR certificates.',
      reportingItems: [
        'Consignment-level Bill of Entry date, HS code, and net weight of Al, Cu, Zn scrap or used devices imported.',
        'Supply / processing trail to CPCB-registered recyclers.',
        'EPR certificate retirement ledger proving 100% Y-1 target closure.',
      ],
    },
    faqs: [
      {
        question: 'Why does Producer (P4) have a 100% EPR obligation instead of starting at 10%?',
        answer:
          'Used devices, used products, and non-ferrous metal scrap imported into India enter the economy already at or near end-of-life. Therefore, MoEFCC and CPCB mandate a 100% EPR obligation based on the preceding year (Y-1) import quantity to ensure full domestic environmentally sound recycling.',
      },
      {
        question: 'If a CPCB-registered Recycler directly imports Aluminium or Copper scrap for melting, does it also need P4 registration?',
        answer:
          'Importers of non-ferrous metal scrap fall under the Producer (P4) definition. Dual-role entities (Recycler + Importer) should verify on the CPCB portal how their P4 import obligation reconciles with EPR certificates generated from their own registered recycling operations.',
      },
      {
        question: 'Does P4 apply to imported brass scrap or zinc alloy scrap?',
        answer:
          'Yes. Chapter VIII covers Aluminium, Copper, Zinc, and their alloys (such as brass, which is a Copper-Zinc alloy, and zinc die-cast alloys). Net constituent metal weights must be declared accurately.',
      },
    ],
  },
  {
    id: 'refurbisher',
    exactOptionLabel: 'Refurbisher',
    shortTitle: 'Refurbisher',
    portalCode: 'Refurbisher',
    slug: '/applicant-types/refurbisher/',
    legacySlug: '/refurbisher-non-ferrous-metals-epr/',
    seoTitle: 'Refurbisher Non Ferrous Metal EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB EPR registration for Refurbishers under Schedule XII. Extend life of motors, transformers, pumps, and HVAC plants, issue refurbishment certificates, and file returns.',
    heroSummary:
      'Authorized reconditioning, rewinding, and repair enterprises extending the functional lifespan of used Schedule X non-ferrous electrical and industrial equipment.',
    applicability: {
      definition:
        'A Refurbisher is any entity registered on the CPCB portal that refurbishes, repairs, or reconditions used Schedule X products to extend their useful life in accordance with Schedule XII guidelines.',
      whoFallsHere: [
        'Industrial electric motor, pump, and alternator rewinding and reconditioning workshops.',
        'Distribution transformer and electric generator set refurbishment facilities.',
        'Centralised air-conditioning plant and commercial HVAC compressor/chiller overhaul specialists.',
      ],
      clarificationNote:
        'Refurbishing must restore full operational functionality; dismantling for metal recovery without functional restoration constitutes Collection or Recycling, not Refurbishment.',
    },
    coveredProducts: {
      summary:
        'Repairable and reconditionable industrial and electrical Schedule X equipment containing significant Aluminium and Copper assemblies.',
      items: [
        'Motors, pumps, and alternators (non-automobile grade)',
        'Transformers (non-automobile grade)',
        'Electric generator sets',
        'Centralised air-conditioning plants and major non-ferrous heat-exchanger units',
      ],
      exclusions:
        'Single-use packaging (cans, foils) and automobile-grade electrical assemblies are outside Schedule XII refurbishment scope.',
    },
    responsibilities: [
      'Register under the Refurbisher category on the CPCB Centralised Non-Ferrous Metal EPR Portal.',
      'Test, repair, and certify refurbished equipment to meet safety and performance standards.',
      'Generate Schedule XII Refurbishment Certificates accurately reflecting deferred end-of-life metal weight.',
      'Send non-recoverable scrap parts (damaged windings, casings) strictly to CPCB-registered Recyclers.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB) & SPCB/PCC',
      processOverview: [
        'Select Refurbisher category on the CPCB EPR portal.',
        'Provide workshop address, testing infrastructure, and SPCB/municipal approvals.',
        'Declare types of Schedule X equipment handled and annual refurbishment capacity.',
        'Complete portal verification to gain authorization to issue Schedule XII certificates.',
      ],
    },
    eprObligations: {
      headline: 'Schedule XII Refurbishment Certificate Generation & Scrap Channelization',
      targetStructure: [
        'Refurbishers do not bear Producer recycling targets on incoming used equipment, provided equipment is genuinely refurbished and residual scrap is routed to registered recyclers.',
        'Refurbishment Certificates issued per Schedule XII help defer Producer end-of-life recycling obligations for the extended life period.',
      ],
      certificateRule:
        'Every Refurbishment Certificate must link to verifiable inward batch logs, quality test reports, and GST resale/service invoices.',
    },
    documents: [
      'Company/Workshop PAN, GSTIN, and Business Registration Certificate',
      'SPCB/PCC Consent or applicable industrial/municipal license',
      'Details of testing, rewinding, and reconditioning machinery',
      'Inward/outward equipment logbook & residual scrap handover agreements with registered Recyclers',
      'Authorized signatory KYC',
    ],
    returns: {
      halfYearly: 'Half-Yearly Return due on or before October 31.',
      annual: 'Annual Return due on or before June 30.',
      reportingItems: [
        'Quantity and non-ferrous metal weight of Schedule X equipment refurbished.',
        'Refurbishment Certificates issued and transferred on the CPCB portal.',
        'Residual copper/aluminium scrap handed over to registered Recyclers.',
      ],
    },
    faqs: [
      {
        question: 'Can a Refurbisher sell EPR Certificates like a Recycler?',
        answer:
          'Refurbishers issue Schedule XII Refurbishment Certificates (which defer Producer recycling targets for extended equipment life), whereas full EPR Recycling Certificates are generated only by CPCB-registered Recyclers.',
      },
      {
        question: 'What happens to burnt copper windings removed during motor or transformer refurbishment?',
        answer:
          'All non-reusable metal scrap generated during refurbishment must be transferred strictly to CPCB-registered Recyclers or Collection Agents with documented weight manifests.',
      },
    ],
  },
  {
    id: 'collection-agent',
    exactOptionLabel: 'Collection Agent',
    shortTitle: 'Collection Agent',
    portalCode: 'Collection Agent',
    slug: '/applicant-types/collection-agent/',
    legacySlug: '/collection-agent-non-ferrous-metals-epr/',
    seoTitle: 'Collection Agent Non Ferrous Metal EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB EPR registration for Collection Agents handling Aluminium, Copper, and Zinc scrap. Chain-of-custody rules, recycler tie-ups, documents, and return filings.',
    heroSummary:
      'Registered scrap aggregators, dismantling intermediaries, and reverse-logistics operators collecting non-ferrous metal scrap and channeling 100% to CPCB-registered Recyclers.',
    applicability: {
      definition:
        'A Collection Agent is an authorized intermediary registered on the CPCB portal to collect, sort, store, and transport non-ferrous metal scrap from Bulk Consumers, commercial generators, and municipal/industrial sources to registered Recyclers.',
      whoFallsHere: [
        'Organized metal scrap yards and B2B industrial scrap aggregators.',
        'Reverse-logistics networks collecting used beverage cans, demolition aluminium extrusions, and cable scrap.',
        'Authorized intermediaries procuring end-of-life Schedule X scrap from Bulk Consumers (>1,000 MT/year).',
      ],
      clarificationNote:
        'Collection Agents cannot smelt, refine, or generate EPR Certificates; they form the traceable aggregation bridge between scrap generators and registered Recyclers.',
    },
    coveredProducts: {
      summary:
        'End-of-life scrap from any of the 18 Schedule X categories containing Aluminium, Copper, Zinc, and their alloys.',
      items: [
        'Post-consumer aluminium cans, foils, window frames, ACP panels, and roofing sheets',
        'Decommissioned electrical cables, wires, motors, pumps, and transformers',
        'Sorted brass/copper sanitary scrap, zinc hardware, and industrial non-ferrous offcuts',
      ],
      exclusions:
        'Collection Agents must not mix hazardous chemical residues or unpermitted waste streams; smelting/melting requires separate Recycler registration.',
    },
    responsibilities: [
      'Register under the Collection Agent category on the CPCB Centralised Non-Ferrous Metal EPR Portal.',
      'Maintain digital weighbridge, GST invoice, and e-way bill records for every inward and outward scrap lot.',
      'Channelize 100% of collected Schedule X non-ferrous scrap exclusively to CPCB-registered Recyclers.',
      'Never divert regulated scrap to unregistered informal smelters or furnaces.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB)',
      processOverview: [
        'Create an account and select Collection Agent on the CPCB portal.',
        'Upload yard/warehouse storage details, GSTIN, PAN, and weighbridge capabilities.',
        'Link active supply agreements or MoUs with CPCB-registered Recyclers.',
        'Obtain CPCB Collection Agent authorization to log verified scrap transfers.',
      ],
    },
    eprObligations: {
      headline: '100% Traceable Channelization to Registered Recyclers',
      targetStructure: [
        'Collection Agents do not hold Producer recycling targets and cannot generate EPR certificates.',
        'Their statutory obligation is complete chain-of-custody transparency ensuring every metric tonne collected reaches a registered Recycler.',
      ],
      certificateRule:
        'Verified inward scrap deliveries from registered Collection Agents enable registered Recyclers to substantiate scrap provenance when generating EPR Certificates.',
    },
    documents: [
      'PAN, GSTIN, and Business Entity Registration Certificate',
      'Storage yard / warehouse ownership deed or registered lease agreement',
      'Agreements / supply tie-ups with CPCB-registered Non-Ferrous Recyclers',
      'Weighbridge calibration certificate & fire/safety compliance records',
      'Authorized signatory KYC',
    ],
    returns: {
      halfYearly: 'Half-Yearly Scrap Movement Return due on or before October 31.',
      annual: 'Annual Scrap Reconciliation Return due on or before June 30.',
      reportingItems: [
        'Source-wise inward quantities of Aluminium, Copper, and Zinc scrap collected (including Bulk Consumer handovers).',
        'Recycler-wise outward dispatch quantities backed by GST invoices and e-way bills.',
        'Closing yard inventory balance.',
      ],
    },
    faqs: [
      {
        question: 'Can a Collection Agent buy or sell EPR Certificates on the CPCB portal?',
        answer:
          'No. Only registered Recyclers can generate EPR Certificates, and Producers purchase/retire them to meet targets. Collection Agents log physical scrap collection and transfer to Recyclers.',
      },
      {
        question: 'Why do Bulk Consumers prefer working with CPCB-registered Collection Agents?',
        answer:
          'Bulk Consumers (>1,000 MT/year) are legally required to hand over end-of-life Schedule X scrap only to registered Collection Agents or Recyclers so their disposal manifests pass CPCB audits.',
      },
    ],
  },
  {
    id: 'recycler',
    exactOptionLabel: 'Recycler',
    shortTitle: 'Recycler',
    portalCode: 'Recycler',
    slug: '/applicant-types/recycler/',
    legacySlug: '/recycler-non-ferrous-metals-epr/',
    seoTitle: 'Non Ferrous Metal Recycler Registration | CPCB EPR | EPR Bazaar',
    seoDescription:
      'CPCB EPR registration for Non-Ferrous Metal Recyclers. Learn how Aluminium, Copper, and Zinc recyclers generate and trade EPR Certificates, CTO requirements, and audits.',
    heroSummary:
      'SPCB/PCC-authorized secondary metal smelters, shredders, and refining plants converting non-ferrous scrap into secondary Aluminium, Copper, or Zinc and issuing EPR Certificates.',
    applicability: {
      definition:
        'A Recycler is any entity engaged in environmentally sound recycling of non-ferrous metal scrap (Aluminium, Copper, Zinc, and their alloys) into secondary metals, ingots, billets, or alloys, registered on the CPCB portal.',
      whoFallsHere: [
        'Secondary aluminium smelting, rotary furnace, and billet/ingot casting plants.',
        'Copper cable granulation, smelting, electro-refining, and brass ingot manufacturing facilities.',
        'Zinc scrap recovery, distillation, and secondary zinc alloy processing units.',
      ],
      clarificationNote:
        'Only facilities holding valid SPCB/PCC Consent to Operate (CTO) and Hazardous Waste Authorization (where applicable) qualify for CPCB Recycler registration and EPR Certificate generation.',
    },
    coveredProducts: {
      summary:
        'All non-ferrous scrap streams derived from Schedule X products as well as industrial Aluminium, Copper, and Zinc scrap processed into reusable metal.',
      items: [
        'Aluminium scrap melted into secondary ingots, billets, sows, or de-ox aluminium',
        'Copper and brass scrap refined into cathodes, rods, billets, or copper alloy ingots',
        'Zinc scrap, dross, and die-castings recovered into secondary zinc ingots and alloys',
      ],
      exclusions:
        'Unregistered backyard furnaces, open burning of insulated cables, and facilities without valid air/water pollution controls are strictly prohibited.',
    },
    responsibilities: [
      'Register processing capacity, furnace configuration, and metal recovery yields on the CPCB EPR portal.',
      'Operate strictly within SPCB/PCC pollution emission, slag handling, and hazardous waste norms.',
      'Generate metal-specific EPR Certificates strictly against actual verified recycled metal output sold.',
      'Undergo periodic CPCB/SPCB physical and digital invoice-trail audits.',
    ],
    registration: {
      portalName: 'CPCB Centralised Non-Ferrous Metal EPR Portal',
      authority: 'Central Pollution Control Board (CPCB) & State Pollution Control Board (SPCB/PCC)',
      processOverview: [
        'Select Recycler on the CPCB portal and upload valid SPCB Consent to Operate (CTO) & Hazardous Waste Authorization.',
        'Submit installed annual recycling capacity (MT/year) separately for Aluminium, Copper, and Zinc.',
        'Provide plant geo-coordinates, process flow diagram, electricity load, and pollution control equipment details.',
        'Pass CPCB/SPCB inspection and activate EPR Certificate generation dashboard.',
      ],
    },
    eprObligations: {
      headline: 'Verified EPR Certificate Generation & Portal Trading',
      targetStructure: [
        'EPR Certificates are generated dynamically based on verified weight of secondary Aluminium, Copper, or Zinc produced and sold with GST invoices.',
        'Certificate validity, recovery yield ratios, and buyer transfers are governed by CPCB portal caps tied to installed CTO capacity.',
      ],
      certificateRule:
        'Certificates can be transferred directly to registered Producers (P1, P2, P3, P4) on the CPCB portal; EPR Bazaar connects verified Recyclers with 490+ industrial compliance buyers.',
    },
    documents: [
      'Valid SPCB/PCC Consent to Operate (CTO) & Hazardous and Other Wastes Authorization',
      'Company PAN, GSTIN, and Certificate of Incorporation',
      'Installed machinery, furnace capacity & air pollution control system (APCS) schematic',
      'Electricity bills, weighbridge calibration, and geo-tagged plant photographs',
      'Raw scrap purchase invoices, e-way bills, and finished secondary metal sales invoices',
    ],
    returns: {
      halfYearly: 'Half-Yearly Recycling & Certificate Return due on or before October 31.',
      annual: 'Annual Audited Return due on or before June 30.',
      reportingItems: [
        'Metal-wise inward scrap received (domestic vs. imported) and processing loss/slag disposal.',
        'Quantity of recovered Aluminium, Copper, and Zinc sold to domestic manufacturers.',
        'Total EPR Certificates generated, traded to Producers, and unallocated balance.',
      ],
    },
    faqs: [
      {
        question: 'How is the maximum EPR Certificate limit calculated for a registered Recycler?',
        answer:
          'CPCB links certificate generation to your plant’s SPCB-approved installed recycling capacity, actual electricity consumption, verified inward scrap invoices, and GST-backed outward sales of recovered non-ferrous metal.',
      },
      {
        question: 'Can EPR Bazaar help registered Recyclers connect with Producers looking for EPR Certificates?',
        answer:
          'Yes. EPR Bazaar operates a pan-India B2B compliance marketplace connecting 490+ verified recyclers and PROs with Producers (P1–P4) needing Aluminium, Copper, and Zinc EPR Certificates.',
      },
    ],
  },
];

export function findApplicantBySlug(pathname: string): ApplicantTypeDetail | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const withoutPrefix = normalized.startsWith('/non-ferrous-metal-epr/')
    ? normalized.replace('/non-ferrous-metal-epr', '')
    : normalized;
  return EXACT_EIGHT_APPLICANT_OPTIONS.find(
    (item) =>
      item.slug === withoutPrefix ||
      item.slug === normalized ||
      item.legacySlug === normalized
  );
}

export function findApplicantById(id: string): ApplicantTypeDetail | undefined {
  return EXACT_EIGHT_APPLICANT_OPTIONS.find((item) => item.id === id);
}

export const findApplicantTypeBySlug = findApplicantBySlug;
export const applicantTypesData = EXACT_EIGHT_APPLICANT_OPTIONS;


