export const nodes = [
  // ─── Isotopes ───
  {
    id: "mo-99",
    name: "Mo-99 / Tc-99m",
    type: "Isotope",
    val: 12,
    note: "Diagnostic workhorse. Supply depends on a small reactor network. Outage risk is structural.",
  },
  {
    id: "lu-177",
    name: "Lu-177",
    type: "Isotope",
    val: 11,
    note: "Therapeutic isotope. Demand is rising faster than easy reactor and processing capacity.",
  },
  {
    id: "ac-225",
    name: "Ac-225",
    type: "Isotope",
    val: 10,
    note: "Alpha-emitter for targeted therapy. Scalable production is still the constraint.",
  },
  {
    id: "si-28",
    name: "Si-28",
    type: "Isotope",
    val: 10,
    note: "Enriched silicon for quantum materials. Limited by separation capacity.",
  },
  {
    id: "he-3",
    name: "He-3",
    type: "Isotope",
    val: 8,
    note: "Scarce isotope for sensing, detection, and research. Structurally tight supply.",
  },
  {
    id: "li-6",
    name: "Li-6",
    type: "Isotope",
    val: 11,
    note: "Fusion-relevant lithium isotope. Enriched from natural lithium; feeds tritium breeding.",
  },
  {
    id: "li-7",
    name: "Li-7",
    type: "Isotope",
    val: 7,
    note: "Complement to Li-6 in nuclear chemistry and related systems.",
  },
  {
    id: "haleu",
    name: "HALEU",
    type: "Isotope",
    val: 10,
    note: "High-assay low-enriched uranium product. Depends on scarce enrichment above LEU.",
  },
  {
    id: "h-2",
    name: "H-2 Deuterium",
    type: "Isotope",
    val: 8,
    note: "Heavy hydrogen for research, moderators, and fusion-related use.",
  },
  {
    id: "h-3",
    name: "H-3 Tritium",
    type: "Isotope",
    val: 9,
    note: "Fusion fuel isotope. Often linked to Li-6 breeding pathways.",
  },

  // ─── Processes ───
  {
    id: "reactor-production",
    name: "Reactor production",
    type: "Process",
    val: 13,
    note: "Neutron-based isotope creation. Backbone of medical isotope supply.",
  },
  {
    id: "accelerator-production",
    name: "Accelerator production",
    type: "Process",
    val: 10,
    note: "Charged-particle routes for medical and research isotopes.",
  },
  {
    id: "gas-centrifugation",
    name: "Gas centrifugation",
    type: "Process",
    val: 13,
    note: "Industrial isotope separation by mass. Core enrichment method.",
  },
  {
    id: "haleu-enrichment",
    name: "HALEU enrichment",
    type: "Process",
    val: 9,
    note: "Enrichment pathway toward HALEU product. Capacity is limited.",
  },
  {
    id: "tritium-breeding",
    name: "Tritium breeding",
    type: "Process",
    val: 9,
    note: "Converts Li-6 pathways into tritium for fusion fuel concepts.",
  },

  // ─── Applications ───
  {
    id: "precision-medicine",
    name: "Precision Medicine",
    type: "Application",
    val: 14,
    note: "Imaging and targeted radiotherapy that depend on isotope supply.",
  },
  {
    id: "quantum-technologies",
    name: "Quantum Technologies",
    type: "Application",
    val: 12,
    note: "Needs ultra-pure or rare isotopes such as Si-28 and He-3.",
  },
  {
    id: "nuclear-fusion",
    name: "Nuclear / Fusion",
    type: "Application",
    val: 13,
    note: "Depends on enriched materials, breeding routes, and nuclear infrastructure.",
  },

  // ─── Facilities: reactors ───
  {
    id: "hfir",
    name: "HFIR",
    type: "Facility",
    val: 8,
    note: "High Flux Isotope Reactor, Oak Ridge. Major U.S. production node.",
  },
  {
    id: "murr",
    name: "MURR",
    type: "Facility",
    val: 8,
    note: "Missouri university reactor. Important medical isotope production site.",
  },
  {
    id: "atr",
    name: "ATR",
    type: "Facility",
    val: 7,
    note: "Advanced Test Reactor, Idaho. High-power irradiation capability.",
  },
  {
    id: "br2",
    name: "BR2",
    type: "Facility",
    val: 7,
    note: "Belgian research reactor. Major European isotope production node.",
  },
  {
    id: "hfr-petten",
    name: "HFR Petten",
    type: "Facility",
    val: 7,
    note: "Netherlands research reactor. Key medical isotope supply node.",
  },
  {
    id: "opal",
    name: "OPAL",
    type: "Facility",
    val: 7,
    note: "Australian research reactor supporting radioisotope production.",
  },
  {
    id: "safari-1",
    name: "SAFARI-1",
    type: "Facility",
    val: 7,
    note: "Pelindaba research reactor. Key African isotope production node.",
  },
  {
    id: "riar",
    name: "RIAR",
    type: "Facility",
    val: 7,
    note: "Dimitrovgrad complex. Major Russian isotope production node.",
  },
  {
    id: "maria",
    name: "MARIA",
    type: "Facility",
    val: 6,
    note: "Polish research reactor contributing to isotope production capacity.",
  },

  // ─── Facilities: accelerators ───
  {
    id: "blip",
    name: "BLIP",
    type: "Facility",
    val: 7,
    note: "Brookhaven accelerator isotope production node.",
  },
  {
    id: "triumf",
    name: "TRIUMF",
    type: "Facility",
    val: 7,
    note: "Canadian accelerator centre with isotope production capability.",
  },
  {
    id: "lanl-ipf",
    name: "LANL IPF",
    type: "Facility",
    val: 6,
    note: "Los Alamos Isotope Production Facility.",
  },

  // ─── Facilities: enrichment ───
  {
    id: "centrus-piketon",
    name: "Centrus ACP",
    type: "Facility",
    val: 8,
    note: "Piketon enrichment site. Advanced enrichment and HALEU pathway.",
  },
  {
    id: "urenco-usa",
    name: "Urenco USA",
    type: "Facility",
    val: 8,
    note: "Eunice, New Mexico commercial uranium enrichment plant.",
  },
  {
    id: "urenco-almelo",
    name: "Urenco Netherlands",
    type: "Facility",
    val: 7,
    note: "Almelo enrichment plant. Core European centrifuge capacity.",
  },
  {
    id: "orano-tricastin",
    name: "Orano GBII",
    type: "Facility",
    val: 8,
    note: "Georges Besse II at Tricastin. Major commercial enrichment plant.",
  },
  {
    id: "asp-pretoria",
    name: "ASP Pretoria",
    type: "Facility",
    val: 7,
    note: "Specialty isotope enrichment in Pretoria. Key African enrichment footprint.",
  },

  // ─── Companies ───
  {
    id: "urenco",
    name: "Urenco",
    type: "Company",
    val: 8,
    note: "Major commercial enricher with plants in Europe and the U.S.",
  },
  {
    id: "centrus",
    name: "Centrus Energy",
    type: "Company",
    val: 7,
    note: "U.S. enrichment company focused on advanced enrichment and HALEU.",
  },
  {
    id: "orano",
    name: "Orano",
    type: "Company",
    val: 7,
    note: "Fuel-cycle company including major commercial enrichment capacity.",
  },
  {
    id: "asp-isotopes",
    name: "ASP Isotopes",
    type: "Company",
    val: 7,
    note: "Specialty isotope enrichment company with Pretoria facilities.",
  },
];

export const links = [
  // Medicine supply chains
  { source: "mo-99", target: "reactor-production", relation: "produced_by" },
  { source: "mo-99", target: "precision-medicine", relation: "used_in" },
  { source: "lu-177", target: "reactor-production", relation: "produced_by" },
  { source: "lu-177", target: "precision-medicine", relation: "used_in" },
  { source: "ac-225", target: "accelerator-production", relation: "produced_by" },
  { source: "ac-225", target: "precision-medicine", relation: "used_in" },

  // Reactor facilities host production
  { source: "reactor-production", target: "hfir", relation: "located_at" },
  { source: "reactor-production", target: "murr", relation: "located_at" },
  { source: "reactor-production", target: "atr", relation: "located_at" },
  { source: "reactor-production", target: "br2", relation: "located_at" },
  { source: "reactor-production", target: "hfr-petten", relation: "located_at" },
  { source: "reactor-production", target: "opal", relation: "located_at" },
  { source: "reactor-production", target: "safari-1", relation: "located_at" },
  { source: "reactor-production", target: "riar", relation: "located_at" },
  { source: "reactor-production", target: "maria", relation: "located_at" },

  // Accelerator facilities
  { source: "accelerator-production", target: "blip", relation: "located_at" },
  { source: "accelerator-production", target: "triumf", relation: "located_at" },
  { source: "accelerator-production", target: "lanl-ipf", relation: "located_at" },

  // Quantum chain
  { source: "si-28", target: "gas-centrifugation", relation: "enriched_by" },
  { source: "si-28", target: "quantum-technologies", relation: "used_in" },
  { source: "he-3", target: "quantum-technologies", relation: "used_in" },

  // Fusion / nuclear materials chain
  { source: "li-6", target: "gas-centrifugation", relation: "enriched_by" },
  { source: "li-6", target: "tritium-breeding", relation: "requires" },
  { source: "li-6", target: "nuclear-fusion", relation: "used_in" },
  { source: "li-7", target: "nuclear-fusion", relation: "used_in" },
  { source: "h-2", target: "nuclear-fusion", relation: "used_in" },
  { source: "h-3", target: "tritium-breeding", relation: "produced_by" },
  { source: "h-3", target: "nuclear-fusion", relation: "used_in" },
  { source: "haleu", target: "haleu-enrichment", relation: "enriched_by" },
  { source: "haleu", target: "nuclear-fusion", relation: "used_in" },

  // Enrichment facilities host separation
  { source: "gas-centrifugation", target: "centrus-piketon", relation: "located_at" },
  { source: "gas-centrifugation", target: "urenco-usa", relation: "located_at" },
  { source: "gas-centrifugation", target: "urenco-almelo", relation: "located_at" },
  { source: "gas-centrifugation", target: "orano-tricastin", relation: "located_at" },
  { source: "gas-centrifugation", target: "asp-pretoria", relation: "located_at" },
  { source: "haleu-enrichment", target: "centrus-piketon", relation: "located_at" },

  // Companies operate facilities / supply capability
  { source: "centrus", target: "centrus-piketon", relation: "operates" },
  { source: "centrus", target: "haleu-enrichment", relation: "supplies" },
  { source: "urenco", target: "urenco-usa", relation: "operates" },
  { source: "urenco", target: "urenco-almelo", relation: "operates" },
  { source: "urenco", target: "gas-centrifugation", relation: "supplies" },
  { source: "orano", target: "orano-tricastin", relation: "operates" },
  { source: "orano", target: "gas-centrifugation", relation: "supplies" },
  { source: "asp-isotopes", target: "asp-pretoria", relation: "operates" },
  { source: "asp-isotopes", target: "si-28", relation: "supplies" },
];

export const typeColors = {
  Isotope: "#a78bfa",
  Process: "#60a5fa",
  Application: "#fbbf24",
  Facility: "#34d399",
  Company: "#f472b6",
};

export const typeList = [
  "Isotope",
  "Process",
  "Application",
  "Facility",
  "Company",
];
