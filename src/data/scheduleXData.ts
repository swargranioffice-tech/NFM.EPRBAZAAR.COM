export interface ScheduleXProductDetail {
  code: number;
  slug: string;
  name: string;
  shortName: string;
  category:
    | 'Packaging & Consumer'
    | 'Building & Architecture'
    | 'Electrical & Industrial'
    | 'Hardware & Mobility';
  metals: Array<'Aluminium' | 'Copper' | 'Zinc'>;
  exclusions?: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  applications: string[];
  examples: string[];
  cpcbRelevance: string;
  relatedApplicantIds: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const SCHEDULE_X_SCOPE_DISCLAIMER =
  'Important Statutory Scope Note: Non-Ferrous Metal EPR under Chapter VIII of the Hazardous and Other Wastes (Management and Transboundary Movement) Amendment Rules does NOT cover all metal products in India. EPR obligations apply strictly to the 18 product families notified in Schedule X (containing Aluminium, Copper, Zinc, and their alloys), subject to stated automobile-grade exclusions.';

export const SCHEDULE_X_PRODUCT_DETAILS: ScheduleXProductDetail[] = [
  {
    code: 1,
    slug: '/schedule-x-products/beverage-aerosol-cans/',
    name: 'Cans for beverages, aerosols, and similar products',
    shortName: 'Beverage & Aerosol Cans',
    category: 'Packaging & Consumer',
    metals: ['Aluminium'],
    seoTitle: 'Schedule X Item 1: Beverage & Aerosol Cans EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR compliance for Aluminium beverage cans, aerosol cans, and similar metal containers under Schedule X Item 1.',
    description:
      'Rigid single-use and pressurized metal cans manufactured predominantly from aluminium alloys for beverages, cosmetics, pharmaceuticals, and industrial aerosol dispensing.',
    applications: [
      'Carbonated soft drinks, craft beer, energy drinks, and ready-to-drink beverage packaging',
      'Pressurized deodorant, air-freshener, insecticide, and technical spray aerosol cans',
      'Food-grade and specialty sealed aluminium beverage containers',
    ],
    examples: [
      '330 ml and 500 ml Aluminium Used Beverage Cans (UBC)',
      'Aluminium pressurized aerosol canisters and monobloc spray bottles',
      'Easy-open aluminium beverage ends and tabs',
    ],
    cpcbRelevance:
      'High-velocity short-life packaging stream. Beverage and FMCG brand owners (Producer P1, P2, P3) and can manufacturers must track aluminium tonnage placed on the market and offset Schedule XI recycling targets through UBC recycling.',
    relatedApplicantIds: ['producer-p1', 'producer-p2', 'producer-p3', 'manufacturer', 'collection-agent', 'recycler'],
    faqs: [
      {
        question: 'Are imported empty or filled aluminium beverage cans covered under Schedule X Item 1?',
        answer:
          'Yes. Importers placing Schedule X aluminium beverage or aerosol cans on the Indian market fall under Producer (P3) obligations, while importers of crushed UBC scrap fall under Producer (P4).',
      },
      {
        question: 'Are steel/tinplate food cans covered under Non-Ferrous Metal EPR?',
        answer:
          'Chapter VIII specifically regulates Aluminium, Copper, Zinc, and their alloys. Non-ferrous aluminium cans and alloy components fall within Schedule X scope.',
      },
    ],
  },
  {
    code: 2,
    slug: '/schedule-x-products/packaging-foils/',
    name: 'Packaging foils for food, pharmaceuticals, and similar products',
    shortName: 'Packaging Foils',
    category: 'Packaging & Consumer',
    metals: ['Aluminium'],
    seoTitle: 'Schedule X Item 2: Aluminium Packaging Foils EPR Compliance | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR for Aluminium packaging foils used in food, pharmaceuticals, and blister packs under Schedule X Item 2.',
    description:
      'Thin-gauge rolled aluminium foils, lidding foils, and barrier foil laminates used for food preservation, household wrapping, and pharmaceutical blister packaging.',
    applications: [
      'Pharmaceutical blister packs, strip packs, and cold-form alu-alu laminates',
      'Household food-wrap rolls, takeaway foil trays, and casserole lids',
      'Dairy, confectionery, and tea/coffee barrier foil lidding',
    ],
    examples: [
      'Pharma blister aluminium foil and cold-form lidding foil',
      'Household aluminium wrapping rolls and semi-rigid food containers',
      'Yogurt and beverage cup die-cut aluminium lids',
    ],
    cpcbRelevance:
      'Both foil rolling mills (Manufacturers) and pharma/food brand owners placing foil-packaged items or retail foil rolls on the market must quantify net aluminium foil weight under Schedule X.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'recycler'],
    faqs: [
      {
        question: 'Does pharmaceutical blister foil fall under Schedule X Item 2?',
        answer:
          'Yes. Schedule X Item 2 explicitly names packaging foils for food, pharmaceuticals, and similar products.',
      },
      {
        question: 'How is multi-material foil scrap handled for EPR?',
        answer:
          'Only the net aluminium metal weight recovered or placed in Schedule X foil packaging counts toward Non-Ferrous Metal EPR calculations; polymer layers are governed separately under Plastic Waste Management rules.',
      },
    ],
  },
  {
    code: 3,
    slug: '/schedule-x-products/doors-windows-shutters/',
    name: 'Doors, windows, and shutters',
    shortName: 'Doors, Windows & Shutters',
    category: 'Building & Architecture',
    metals: ['Aluminium', 'Zinc'],
    seoTitle: 'Schedule X Item 3: Aluminium Doors, Windows & Shutters EPR | EPR Bazaar',
    seoDescription:
      'CPCB EPR compliance for extruded Aluminium and Zinc-alloy doors, windows, rolling shutters, and fenestration systems under Schedule X Item 3.',
    description:
      'Architectural fenestration frames, sliding windows, hinged doors, and commercial rolling shutters fabricated from extruded aluminium profiles and zinc die-cast hardware.',
    applications: [
      'Residential and commercial sliding, casement, and curtain-wall window frames',
      'Anodized and powder-coated aluminium architectural doors and shopfront shutters',
      'Industrial rolling shutters and thermally broken aluminium fenestration profiles',
    ],
    examples: [
      '6063-grade extruded aluminium sliding window sections',
      'Commercial aluminium glazed entrance doors and shop shutters',
      'Die-cast zinc locking latches integrated in fenestration assemblies',
    ],
    cpcbRelevance:
      'Architectural extrusion manufacturers, fenestration brands, and importers must register and align long-life product placement records with CPCB Schedule XI and Schedule XIII mandates.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'collection-agent', 'recycler'],
    faqs: [
      {
        question: 'Are raw extruded aluminium profiles sold to fabricators covered?',
        answer:
          'Manufacturers producing Schedule X door/window systems or supplying branded fenestration profiles register under Manufacturer / Producer categories based on branding and assembly ownership.',
      },
    ],
  },
  {
    code: 4,
    slug: '/schedule-x-products/aluminium-composite-panels/',
    name: 'Aluminium composite panels',
    shortName: 'Aluminium Composite Panels (ACP)',
    category: 'Building & Architecture',
    metals: ['Aluminium'],
    seoTitle: 'Schedule X Item 4: Aluminium Composite Panels (ACP) EPR | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR registration for Aluminium Composite Panels (ACP) used in cladding, signage, and facades under Schedule X Item 4.',
    description:
      'Sandwich cladding panels consisting of two thin coil-coated aluminium skin sheets bonded to a core material, widely used in exterior building facades, interiors, and commercial signage.',
    applications: [
      'Exterior architectural facade cladding for commercial towers, airports, and metro stations',
      'Corporate retail signage, fascia boards, and modular interior wall partitions',
      'Cleanroom and hospital hygienic aluminium panel linings',
    ],
    examples: [
      'PVDF-coated exterior architectural ACP sheets (3 mm / 4 mm)',
      'Fire-retardant (FR) mineral-core aluminium composite facade panels',
      'Brushed metallic interior decorative ACP panels',
    ],
    cpcbRelevance:
      'ACP manufacturers and branded facade suppliers must report the net aluminium skin weight per square metre placed on the Indian market and meet Schedule XI & XIII obligations.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'recycler'],
    faqs: [
      {
        question: 'Is EPR target calculated on total ACP panel weight or aluminium metal weight?',
        answer:
          'Non-Ferrous Metal EPR obligations apply to the non-ferrous metal (aluminium) constituent weight within the composite panel rather than non-metallic core polymers or mineral fillers.',
      },
    ],
  },
  {
    code: 5,
    slug: '/schedule-x-products/aluminium-partitions-grills/',
    name: 'Aluminium partitioning, grills, and similar products',
    shortName: 'Aluminium Partitions & Grills',
    category: 'Building & Architecture',
    metals: ['Aluminium'],
    seoTitle: 'Schedule X Item 5: Aluminium Partitioning & Grills EPR | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR compliance for aluminium office partitions, security grills, louvers, and architectural dividers under Schedule X Item 5.',
    description:
      'Modular aluminium partition framing, architectural sun-breaker louvers, ventilation grills, and security grilles manufactured from extruded or cast aluminium alloys.',
    applications: [
      'Corporate office modular demountable glass-and-aluminium partition systems',
      'Residential balcony grills, HVAC return-air diffusers, and facade louvers',
      'Cleanroom and industrial bay partition channels',
    ],
    examples: [
      'Powder-coated aluminium office cabin partition sections',
      'Extruded aluminium HVAC air-conditioning grills and diffusers',
      'Architectural security window grills and sun-shading louvers',
    ],
    cpcbRelevance:
      'Covered under Schedule X Item 5; manufacturers and branded system suppliers must register on the CPCB portal and declare net aluminium weight placed on the market.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'collection-agent', 'recycler'],
    faqs: [
      {
        question: 'Do HVAC aluminium air diffusers and architectural louvers fall under Item 5?',
        answer:
          'Yes, aluminium grills, louvers, and partitioning assemblies fall under Schedule X Item 5 ("Aluminium partitioning, grills, and similar products").',
      },
    ],
  },
  {
    code: 6,
    slug: '/schedule-x-products/utensils-cookware/',
    name: 'Utensils: cookware, canisters, storage, and similar products',
    shortName: 'Utensils & Cookware',
    category: 'Packaging & Consumer',
    metals: ['Aluminium', 'Copper'],
    seoTitle: 'Schedule X Item 6: Utensils, Cookware & Storage Canisters EPR | EPR Bazaar',
    seoDescription:
      'CPCB EPR guide for Aluminium and Copper utensils, pressure cookers, tiffin canisters, and kitchenware under Schedule X Item 6.',
    description:
      'Domestic and commercial kitchen utensils, pressure cookers, frying pans, copper-bottom cookware, milk cans, and non-ferrous metal storage canisters.',
    applications: [
      'Household pressure cookers, kadhais, tawas, saucepans, and induction-base cookware',
      'Commercial catering vessels, hotel stockpots, and dairy milk canisters',
      'Copper drinking vessels, brass/copper thalis, and airtight metal storage containers',
    ],
    examples: [
      'Hard-anodized and non-stick aluminium pressure cookers & frying pans',
      'Copper-clad stainless or pure copper water bottles and vessels',
      'Aluminium dairy cans and food storage canisters',
    ],
    cpcbRelevance:
      'India’s large utensil sector involves numerous Manufacturers, P1 own-brand factories, and P2 outsourced consumer kitchenware brands subject to Schedule X registration.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'collection-agent', 'recycler'],
    faqs: [
      {
        question: 'Are stainless steel utensils covered under Schedule X Item 6?',
        answer:
          'No, stainless steel is a ferrous alloy. Only Aluminium, Copper, Zinc, and their alloys (such as brass or copper-bottom aluminium cookware) are regulated under Non-Ferrous Metal EPR.',
      },
    ],
  },
  {
    code: 7,
    slug: '/schedule-x-products/furniture-hardware/',
    name: 'Furniture: tables, chairs, benches, ladders, including doorknobs, handles, and hardware',
    shortName: 'Furniture, Ladders & Hardware',
    category: 'Building & Architecture',
    metals: ['Aluminium', 'Zinc', 'Copper'],
    seoTitle: 'Schedule X Item 7: Non-Ferrous Furniture, Ladders & Hardware EPR | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR for aluminium tables, chairs, benches, ladders, doorknobs, handles, and zinc/brass architectural hardware under Schedule X Item 7.',
    description:
      'Non-ferrous metal furniture frames, industrial and household aluminium ladders, and architectural hardware including doorknobs, lever handles, hinges, tower bolts, and cabinet fittings.',
    applications: [
      'Outdoor patio tables, café chairs, airport/public seating benches, and folding ladders',
      'Industrial step-ladders, scaffolding towers, and telescopic aluminium ladders',
      'Architectural zinc die-cast and brass doorknobs, mortise handles, hinges, and locks',
    ],
    examples: [
      'Anodized aluminium extension and A-frame step ladders',
      'Cast aluminium garden benches and institutional seating frames',
      'Zinc-alloy and brass door handles, cabinet pulls, and window latches',
    ],
    cpcbRelevance:
      'Covers all three non-ferrous metals—Aluminium (ladders/frames), Zinc (die-cast hardware), and Copper/Brass (decorative handles & locks).',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'recycler'],
    faqs: [
      {
        question: 'Are zinc die-cast and brass door handles included even if sold separately from furniture?',
        answer:
          'Yes. Schedule X Item 7 explicitly specifies "including doorknobs, handles, and hardware".',
      },
    ],
  },
  {
    code: 8,
    slug: '/schedule-x-products/roofing-ceiling-sheets/',
    name: 'Roofing and ceiling sheets',
    shortName: 'Roofing & Ceiling Sheets',
    category: 'Building & Architecture',
    metals: ['Aluminium', 'Zinc'],
    seoTitle: 'Schedule X Item 8: Non-Ferrous Roofing & Ceiling Sheets EPR | EPR Bazaar',
    seoDescription:
      'CPCB EPR compliance for Aluminium and Zinc-coated/Zinc-alloy roofing and ceiling sheets under Schedule X Item 8.',
    description:
      'Corrugated, trapezoidal, standing-seam, and perforated non-ferrous metal sheets installed as industrial roofing, false ceilings, and weather-shielding cladding.',
    applications: [
      'Industrial warehouse, factory, and logistics park metal roofing',
      'Coastal corrosion-resistant aluminium and zinc-aluminium alloy roof profiles',
      'Commercial acoustic perforated aluminium ceiling tiles and linear strips',
    ],
    examples: [
      'Corrugated aluminium roofing sheets and ridge caps',
      'Zinc-aluminium alloy coated roofing panels (non-ferrous zinc/aluminium fraction)',
      'Perforated aluminium false ceiling baffles and tiles',
    ],
    cpcbRelevance:
      'Roofing sheet roll-formers, coil brand owners, and importers must account for non-ferrous aluminium and zinc weights under Schedule X Item 8.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'collection-agent', 'recycler'],
    faqs: [
      {
        question: 'Are pure galvanized steel sheets fully covered or only the zinc/aluminium content?',
        answer:
          'Under Chapter VIII, EPR regulates Aluminium, Copper, and Zinc. Producers and manufacturers must assess the applicability of non-ferrous sheet grades and zinc coating weight per CPCB rules.',
      },
    ],
  },
  {
    code: 9,
    slug: '/schedule-x-products/motors-pumps-alternators/',
    name: 'Motors, pumps, alternators, and similar products (other than automobile grade)',
    shortName: 'Motors, Pumps & Alternators',
    category: 'Electrical & Industrial',
    metals: ['Copper', 'Aluminium'],
    exclusions: 'Other than automobile grade',
    seoTitle: 'Schedule X Item 9: Motors, Pumps & Alternators EPR (Non-Auto) | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR for industrial/agricultural motors, pumps, and alternators (other than automobile grade) under Schedule X Item 9.',
    description:
      'Industrial, agricultural, commercial, and domestic electric motors, submersible/centrifugal pumps, and alternators containing copper stator/rotor windings and cast aluminium housings.',
    applications: [
      'Agricultural submersible and monobloc water pumps',
      'Industrial AC/DC induction motors, blowers, and compressor drives',
      'Non-automotive AC alternators and industrial power drive units',
    ],
    examples: [
      'Three-phase industrial induction motors with copper windings and aluminium frames',
      'Domestic pressure-booster and agricultural borewell pumps',
      'Industrial DC motors and non-automotive alternators',
    ],
    cpcbRelevance:
      'One of the largest Copper & Aluminium recovery streams. Also eligible for Schedule XII life-extension by CPCB-registered Refurbishers (rewinding and overhaul units).',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'refurbisher', 'recycler'],
    faqs: [
      {
        question: 'Are automotive starter motors and car alternators covered under Schedule X Item 9?',
        answer:
          'No. Schedule X Item 9 explicitly states "other than automobile grade", excluding automotive-grade motors, pumps, and alternators.',
      },
      {
        question: 'Can motor rewinding and reconditioning workshops register as Refurbishers?',
        answer:
          'Yes. Industrial motor and pump refurbishers can register under the Refurbisher category to issue Schedule XII refurbishment certificates.',
      },
    ],
  },
  {
    code: 10,
    slug: '/schedule-x-products/conductor-cables-wires-strips/',
    name: 'Conductor cables, wires, and strips (other than automobile grade)',
    shortName: 'Conductor Cables, Wires & Strips',
    category: 'Electrical & Industrial',
    metals: ['Copper', 'Aluminium'],
    exclusions: 'Other than automobile grade',
    seoTitle: 'Schedule X Item 10: Conductor Cables, Wires & Strips EPR | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR compliance for Copper and Aluminium power cables, building wires, and busbar strips (other than automobile grade).',
    description:
      'Insulated and bare electrical power cables, building house-wiring, overhead ACSR/AAAC conductors, winding wires, and copper/aluminium busbar strips for power and construction.',
    applications: [
      'Power transmission and distribution XLPE/PVC armoured cables',
      'Residential and commercial FR/FRLS copper building wires',
      'Switchgear copper/aluminium busbar strips and enamelled magnet winding wires',
    ],
    examples: [
      'Multi-core copper armoured LT/HT power cables',
      'All-aluminium alloy overhead transmission conductors (AAAC/ACSR)',
      'Flat copper earthing strips and transformer winding strips',
    ],
    cpcbRelevance:
      'Major Copper and Aluminium obligation category. Cable OEMs, EPC-branded suppliers, and importers must segregate non-automobile cables and declare net conductor metal weight.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'collection-agent', 'recycler'],
    faqs: [
      {
        question: 'Are automotive wiring harnesses covered under Schedule X Item 10?',
        answer:
          'No. Item 10 explicitly excludes automobile-grade conductor cables, wires, and strips.',
      },
      {
        question: 'Is PVC/XLPE insulation weight included in the Non-Ferrous EPR target?',
        answer:
          'No. Non-Ferrous Metal EPR calculations apply strictly to the Copper or Aluminium conductor weight, excluding polymer insulation and steel armouring.',
      },
    ],
  },
  {
    code: 11,
    slug: '/schedule-x-products/sanitary-ware-fittings/',
    name: 'Sanitary ware and fittings',
    shortName: 'Sanitary Ware & Fittings',
    category: 'Building & Architecture',
    metals: ['Copper', 'Zinc'],
    seoTitle: 'Schedule X Item 11: Sanitary Ware & Brass/Zinc Fittings EPR | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR for brass, copper, and zinc sanitary ware fittings, faucets, valves, and bathroom fixtures under Schedule X Item 11.',
    description:
      'Plumbing faucets, taps, mixers, angle valves, concealed diverters, shower assemblies, and bathroom fittings forged or die-cast from brass (copper-zinc alloy) and zinc alloys.',
    applications: [
      'Residential and hospitality bathroom faucets, basin mixers, and showerheads',
      'Brass plumbing gate valves, ball valves, bib cocks, and flush valves',
      'Zinc-alloy towel rails, soap dispensers, and sanitary mounting brackets',
    ],
    examples: [
      'Chrome-plated forged brass basin mixers and angle stopcocks',
      'Zinc die-cast bathroom accessories and cistern flush levers',
      'Copper-alloy plumbing manifolds and compression fittings',
    ],
    cpcbRelevance:
      'Sanitary brassware combines Copper and Zinc (mixed-metal brass alloy), requiring alloy constituent tracking for both Schedule XI targets and Schedule XIII recycled content.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'recycler'],
    faqs: [
      {
        question: 'How are brass sanitary fittings treated under Aluminium, Copper, and Zinc rules?',
        answer:
          'Brass is a Copper-Zinc alloy. Obligated entities account for the constituent Copper and Zinc fractions per CPCB portal mixed-metal guidelines.',
      },
    ],
  },
  {
    code: 12,
    slug: '/schedule-x-products/electrical-fittings/',
    name: 'Electrical fittings (other than automobile grade)',
    shortName: 'Electrical Fittings (Non-Auto)',
    category: 'Electrical & Industrial',
    metals: ['Copper', 'Aluminium', 'Zinc'],
    exclusions: 'Other than automobile grade',
    seoTitle: 'Schedule X Item 12: Electrical Fittings EPR Compliance (Non-Auto) | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR compliance for switches, sockets, lugs, glands, switchgear terminals, and electrical fittings (other than automobile grade).',
    description:
      'Non-automotive electrical distribution accessories, brass/copper terminals, cable lugs, cable glands, switchgear contacts, MCB/MCCB internal bus-connectors, and die-cast enclosures.',
    applications: [
      'Modular switches, power sockets, plug pins, and brass terminal blocks',
      'Industrial aluminium/copper compression cable lugs and brass cable glands',
      'Distribution boards, busbar chambers, and die-cast aluminium/zinc junction boxes',
    ],
    examples: [
      'Copper tubular cable lugs and nickel-plated brass cable glands',
      'Brass pin sockets, modular switch contacts, and MCB terminal bars',
      'Die-cast aluminium weatherproof electrical junction enclosures',
    ],
    cpcbRelevance:
      'Item 12 covers non-automotive electrical accessories containing Copper, Brass (Cu-Zn), Aluminium, or Zinc alloys.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'recycler'],
    faqs: [
      {
        question: 'Are automotive fuse boxes, relays, and battery terminals excluded under Item 12?',
        answer:
          'Yes. Schedule X Item 12 explicitly excludes automobile-grade electrical fittings.',
      },
    ],
  },
  {
    code: 13,
    slug: '/schedule-x-products/aluminium-alloy-bicycles/',
    name: 'Aluminium alloy bicycles',
    shortName: 'Aluminium Alloy Bicycles',
    category: 'Hardware & Mobility',
    metals: ['Aluminium'],
    seoTitle: 'Schedule X Item 13: Aluminium Alloy Bicycles EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR for aluminium alloy bicycles, alloy frames, rims, and handlebars under Schedule X Item 13.',
    description:
      'Lightweight adult, youth, road, mountain, and electric-assist bicycles constructed with 6061/7005 aluminium alloy frames, rims, forks, stems, and seatposts.',
    applications: [
      'Urban commuter, mountain (MTB), hybrid, and road bicycles with alloy frames',
      'Aluminium double-wall wheel rims, crank arms, handlebars, and brake levers',
      'Non-motorized shared-mobility fleet alloy bicycles',
    ],
    examples: [
      '6061-alloy framed MTB and hybrid bicycles',
      'Extruded aluminium bicycle wheel rims and alloy handlebars',
      'Branded imported alloy bicycles sold in India (Producer P3)',
    ],
    cpcbRelevance:
      'Domestic bicycle brands (P1/P2), frame manufacturers, and importers of alloy bicycles (P3) must declare the net aluminium weight per bicycle model.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'collection-agent', 'recycler'],
    faqs: [
      {
        question: 'Are standard mild-steel (MS) frame bicycles covered under Schedule X Item 13?',
        answer:
          'No. Item 13 specifically covers "Aluminium alloy bicycles" rather than ferrous steel-frame bicycles.',
      },
    ],
  },
  {
    code: 14,
    slug: '/schedule-x-products/transformers/',
    name: 'Transformers (other than automobile grade)',
    shortName: 'Transformers (Non-Auto)',
    category: 'Electrical & Industrial',
    metals: ['Copper', 'Aluminium'],
    exclusions: 'Other than automobile grade',
    seoTitle: 'Schedule X Item 14: Transformers EPR Compliance (Non-Auto) | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR for power, distribution, and dry-type transformers (other than automobile grade) under Schedule X Item 14.',
    description:
      'Power, distribution, step-up/step-down, and dry-type electrical transformers utilizing electrolytic copper or aluminium primary/secondary windings and busbars.',
    applications: [
      'Utility 11 kV / 33 kV distribution transformers and substation power transformers',
      'Industrial dry-type, cast-resin, and furnace transformers',
      'Solar inverter duty transformers and servo voltage stabilizer transformers',
    ],
    examples: [
      'Copper-wound oil-immersed distribution transformers',
      'Aluminium-wound step-down commercial building transformers',
      'Refurbished and rewound distribution transformers (Schedule XII)',
    ],
    cpcbRelevance:
      'High-tonnage Copper and Aluminium category with long asset life and strong Refurbisher participation under Schedule XII.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'refurbisher', 'recycler'],
    faqs: [
      {
        question: 'Do transformer oil and steel core laminations count toward Non-Ferrous EPR?',
        answer:
          'No. Non-Ferrous Metal EPR covers the Copper and Aluminium windings, busbars, and terminals; transformer oil is separately regulated under Used Oil EPR rules.',
      },
    ],
  },
  {
    code: 15,
    slug: '/schedule-x-products/electric-generator-sets/',
    name: 'Electric generator sets',
    shortName: 'Electric Generator Sets',
    category: 'Electrical & Industrial',
    metals: ['Copper', 'Aluminium'],
    seoTitle: 'Schedule X Item 15: Electric Generator Sets EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR for diesel, gas, and portable electric generator sets containing copper/aluminium windings under Schedule X Item 15.',
    description:
      'Complete diesel, gas, or portable electric power generator sets (DG sets) containing copper/aluminium alternator windings, cables, busbars, and non-ferrous radiator/housing parts.',
    applications: [
      'Industrial and commercial standby diesel generator (DG) sets',
      'Telecom tower, hospital, and data-centre backup power gensets',
      'Portable inverter and residential power generator sets',
    ],
    examples: [
      'Acoustic-enclosed 15 kVA to 2000 kVA DG sets with copper alternators',
      'Portable copper-wound petrol/gasoline electric generators',
      'Reconditioned industrial generator sets refurbished under Schedule XII',
    ],
    cpcbRelevance:
      'Genset OEMs (P1/P2), importers (P3), and genset overhaul workshops (Refurbishers) must track copper and aluminium content across kVA ratings.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'refurbisher', 'recycler'],
    faqs: [
      {
        question: 'If an alternator inside a genset is bought from another OEM, who holds EPR liability?',
        answer:
          'The entity offering the complete generator set under its own brand on the market typically holds Producer responsibility, while component suppliers verify Manufacturer compliance. Review supplier agreements carefully during CPCB assessment.',
      },
    ],
  },
  {
    code: 16,
    slug: '/schedule-x-products/centralised-air-conditioning-plants/',
    name: 'Centralised air-conditioning plants',
    shortName: 'Centralised Air-Conditioning Plants',
    category: 'Electrical & Industrial',
    metals: ['Copper', 'Aluminium'],
    seoTitle: 'Schedule X Item 16: Centralised Air-Conditioning Plants EPR | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR compliance for centralised HVAC chillers, AHUs, condensers, and copper/aluminium heat-exchanger plants under Schedule X Item 16.',
    description:
      'Large commercial and industrial centralised HVAC systems—including centrifugal/screw chillers, air-handling units (AHUs), cooling coils, and VRF/VRV central plants—rich in copper tubing and aluminium fins.',
    applications: [
      'Commercial office towers, malls, hospitals, hotels, and airport HVAC plants',
      'Industrial process cooling chillers and pharmaceutical cleanroom AHUs',
      'Large VRF/VRV central air-conditioning installations',
    ],
    examples: [
      'Water-cooled and air-cooled chillers with copper condenser/evaporator tubes',
      'AHU heat-exchanger coils using copper tubes and hydrophilic aluminium fins',
      'Overhauled central HVAC chiller compressors and coil assemblies',
    ],
    cpcbRelevance:
      'HVAC OEMs, importers of central chiller systems (P3), and HVAC refurbishment contractors must track copper tubing, aluminium finstock, and motor windings.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'refurbisher', 'recycler'],
    faqs: [
      {
        question: 'Are residential split window ACs covered under Item 16 or E-Waste Rules?',
        answer:
          'Residential unitary air conditioners are covered under E-Waste (Management) Rules, whereas Schedule X Item 16 specifically designates "Centralised air-conditioning plants".',
      },
    ],
  },
  {
    code: 17,
    slug: '/schedule-x-products/apparel-products-buckles-zips-shoes/',
    name: 'Apparel products (belt buckles, zips, and shoes)',
    shortName: 'Apparel Buckles, Zips & Shoes',
    category: 'Hardware & Mobility',
    metals: ['Zinc', 'Copper', 'Aluminium'],
    seoTitle: 'Schedule X Item 17: Apparel Buckles, Zips & Shoes Non-Ferrous EPR | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR compliance for zinc, brass, and aluminium belt buckles, zippers, footwear eyelets, and apparel trims under Schedule X Item 17.',
    description:
      'Metallic apparel and footwear fasteners and hardware—specifically zinc-alloy belt buckles, brass/aluminium zippers, sliders, rivets, snap buttons, and shoe eyelets/buckles.',
    applications: [
      'Garment and denim manufacturing trims (metallic zippers, sliders, rivets, buttons)',
      'Leather and fashion belt buckles cast from zinc alloy or solid brass',
      'Footwear metallic eyelets, lace hooks, buckles, and safety shoe toe/shank trims',
    ],
    examples: [
      'Die-cast zinc alloy belt buckles and shoe buckles',
      'Brass and aluminium tooth zippers and slider pulls',
      'Brass denim rivets, snap fasteners, and boot eyelets',
    ],
    cpcbRelevance:
      'Directly impacts apparel trim manufacturers, footwear/fashion brands placing metal hardware on the domestic market, and trim importers (P3).',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'recycler'],
    faqs: [
      {
        question: 'Does the fabric or leather of a garment/shoe count toward EPR weight?',
        answer:
          'No. Only the non-ferrous metal weight (zinc, copper/brass, or aluminium in buckles, zips, and shoe hardware) is accounted for under Non-Ferrous Metal EPR.',
      },
    ],
  },
  {
    code: 18,
    slug: '/schedule-x-products/toys/',
    name: 'Toys',
    shortName: 'Toys',
    category: 'Packaging & Consumer',
    metals: ['Zinc', 'Aluminium'],
    seoTitle: 'Schedule X Item 18: Non-Ferrous Metal Toys EPR Registration | EPR Bazaar',
    seoDescription:
      'CPCB Non-Ferrous Metal EPR compliance for die-cast zinc and aluminium toys under Schedule X Item 18.',
    description:
      'Die-cast scale-model vehicles, mechanical toys, metal construction kits, and consumer toys containing Zinc (Zamak) alloys, Aluminium, or Copper/Brass components.',
    applications: [
      'Die-cast zinc-alloy (Zamak) scale model cars, trucks, aircraft, and collectibles',
      'Aluminium structural mechanical toy kits and ride-on toy frames',
      'Metallic geared mechanical toys and educational STEM hardware kits',
    ],
    examples: [
      'Die-cast zinc alloy miniature cars and construction machinery models',
      'Aluminium alloy kids’ scooters and mechanical erector sets',
      'Imported die-cast metal collectible toys (Producer P3)',
    ],
    cpcbRelevance:
      'Toy manufacturers, domestic toy brand owners, and toy importers must declare the net zinc/aluminium/copper alloy weight of metal toys sold in India.',
    relatedApplicantIds: ['manufacturer', 'producer-p1', 'producer-p2', 'producer-p3', 'recycler'],
    faqs: [
      {
        question: 'Are all-plastic toys covered under Schedule X Item 18?',
        answer:
          'No. Plastic-only toys are regulated under Plastic Waste Management rules. Schedule X Item 18 applies to toys containing Aluminium, Copper, or Zinc (such as die-cast metal toys).',
      },
    ],
  },
];

export function findScheduleXProductBySlug(pathname: string): ScheduleXProductDetail | undefined {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const withoutPrefix = normalized.startsWith('/non-ferrous-metal-epr/')
    ? normalized.replace('/non-ferrous-metal-epr', '')
    : normalized;
  return SCHEDULE_X_PRODUCT_DETAILS.find(
    (item) => item.slug === withoutPrefix || item.slug === normalized
  );
}

export const scheduleXData = SCHEDULE_X_PRODUCT_DETAILS;

