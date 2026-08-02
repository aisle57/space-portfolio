export const nodes = [
  // Isotopes
  {
    id: "mo-99",
    name: "Mo-99 / Tc-99m",
    type: "Isotope",
    val: 12,
    note: "Workhorse diagnostic pair. Supply still concentrates in a small reactor network. Outage risk is structural, not resolved.",
  },
  {
    id: "lu-177",
    name: "Lu-177",
    type: "Isotope",
    val: 11,
    note: "Therapeutic isotope with rising demand. Reactor access and processing capacity remain the binding constraints.",
  },
  {
    id: "ac-225",
    name: "Ac-225",
    type: "Isotope",
    val: 10,
    note: "Alpha-emitter of high clinical interest. Scalable production routes are still the gating item.",
  },
  {
    id: "si-28",
    name: "Si-28",
    type: "Isotope",
    val: 10,
    note: "Enriched silicon for quantum and advanced materials. Depends on separation capacity, not raw abundance.",
  },
  {
    id: "he-3",
    name: "He-3",
    type: "Isotope",
    val: 8,
    note: "Scarce isotope used in quantum sensing, neutron detection, and research. Supply is structurally tight.",
  },
  {
    id: "li-6",
    name: "Li-6",
    type: "Isotope",
    val: 11,
    note: "Key pathway into tritium breeding for fusion concepts. Enrichment separates it from natural lithium.",
  },
  {
    id: "li-7",
    name: "Li-7",
    type: "Isotope",
    val: 7,
    note: "Complement to Li-6 in nuclear chemistry and coolant contexts.",
  },
  {
    id: "haleu",
    name: "HALEU",
    type: "Isotope",
    val: 10,
    note: "High-assay low-enriched uranium product class. Depends on limited enrichment capacity above standard LEU.",
  },
  {
    id: "h-2",
    name: "H-2 Deuterium",
    type: "Isotope",
    val: 8,
    note: "Heavy hydrogen used in research, moderators, and fusion-related work. Separation is industrial, not mining.",
  },
  {
    id: "h-3",
    name: "H-3 Tritium",
    type: "Isotope",
    val: 9,
    note: "Central to fusion fuel cycles. Often linked to Li-6 breeding routes.",
  },

  // Processes
  {
    id: "gas-centrifugation",
    name: "Gas centrifugation",
    type: "Process",
    val: 12,
    note: "Core industrial method for separating isotopes by mass. Underpins commercial uranium and some specialty enrichment.",
  },
  {
    id: "reactor-production",
    name: "Reactor production",
    type: "Process",
    val: 12,
    note: "Creates isotopes through neutron reactions. Backbone of medical isotope supply.",
  },
  {
    id: "accelerator-production",
    name: "Accelerator production",
    type: "Process",
    val: 9,
    note: "Creates isotopes with charged-particle beams. Important for several medical and research nuclides.",
  },
  {
    id: "tritium-breeding",
    name: "Tritium breeding",
    type: "Process",
    val: 9,
    note: "Converts Li-6 pathways into tritium for fusion fuel concepts.",
  },
  {
    id: "haleu-enrichment",
    name: "HALEU enrichment",
    type: "Process",
    val: 9,
    note: "Enrichment above standard LEU toward HALEU. Global capacity remains scarce.",
  },

  // Applications
  {
    id: "precision-medicine",
    name: "Precision Medicine",
    type: "Application",
    val: 14,
    note: "Diagnostic imaging and targeted radiotherapies that depend on reliable isotope supply.",
  },
  {
    id: "quantum-technologies",
    name: "Quantum Technologies",
    type: "Application",
    val: 12,
    note: "Devices and materials needing ultra-pure or rare isotopes such as Si-28 and He-3.",
  },
  {
    id: "nuclear-fusion",
    name: "Nuclear / Fusion",
    type: "Application",
    val: 13,
    note: "Power and fusion pathways that depend on enriched materials, breeding routes, and production infrastructure.",
  },

  // Facilities
  {
    id: "hfir",
    name: "HFIR",
    type: "Facility",
    val: 8,
    note: "High Flux Isotope Reactor, Oak Ridge. Major U.S. isotope production node.",
  },
  {
    id: "murr",
    name: "MURR",
    type: "Facility",
    val: 7,
    note: "University of Missouri research reactor. Important U.S. medical isotope production site.",
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
    note: "South African research reactor at Pelindaba. Key regional isotope production node.",
  },
  {
    id: "centrus-piketon",
    name: "Centrus ACP",
    type: "Facility",
    val: 8,
    note: "U.S. enrichment site at Piketon. Advanced enrichment and HALEU pathway work.",
  },
  {
    id: "urenco-usa",
    name: "Urenco USA",
    type: "Facility",
    val: 8,
    note: "Commercial uranium enrichment plant in Eunice, New Mexico.",
  },
  {
    id: "asp-pretoria",
    name: "ASP Pretoria",
    type: "Facility",
    val: 7,
    note: "Specialty isotope enrichment facilities in Pretoria. Notable enrichment footprint in Africa.",
  },
  {
    id: "blip",
    name: "BLIP",
    type: "Facility",
    val: 6,
    note: "Brookhaven Linac Isotope Producer. Accelerator-based isotope production node.",
  },

  // Companies
  {
    id: "urenco",
    name: "Urenco",
    type: "Company",
    val: 8,
    note: "Major commercial uranium enrichment company with plants in Europe and the United States.",
  },
  {
    id: "centrus",
    name: "Centrus Energy",
    type: "Company",
    val: 7,
    note: "U.S. enrichment company tied to advanced enrichment and HALEU development.",
  },
  {
    id: "asp-isotopes",
    name: "ASP Isotopes",
    type: "Company",
    val: 7,
    note: "Specialty isotope enrichment company with operating facilities in Pretoria.",
  },
  {
    id: "orano",
    name: "Orano",
    type: "Company",
    val: 7,
    note: "Major fuel-cycle company including commercial enrichment at Georges Besse II.",
  },
];

export const links = [
  // Medicine
  { source: "mo-99", target: "precision-medicine", relation: "used_in" },
  { source: "mo-99", target: "reactor-production", relation: "produced_by" },
  { source: "lu-177", target: "precision-medicine", relation: "used_in" },
  { source: "lu-177", target: "reactor-production", relation: "produced_by" },
  { source: "ac-225", target: "precision-medicine", relation: "used_in" },
  { source: "ac-225", target: "accelerator-production", relation: "produced_by" },
  { source: "reactor-production", target: "hfir", relation: "located_at" },
  { source: "reactor-production", target: "murr", relation: "located_at" },
  { source: "reactor-production", target: "opal", relation: "located_at" },
  { source: "reactor-production", target: "safari-1", relation: "located_at" },
  { source: "accelerator-production", target: "blip", relation: "located_at" },

  // Quantum
  { source: "si-28", target: "quantum-technologies", relation: "used_in" },
  { source: "si-28", target: "gas-centrifugation", relation: "enriched_by" },
  { source: "he-3", target: "quantum-technologies", relation: "used_in" },

  // Nuclear / fusion
  { source: "li-6", target: "nuclear-fusion", relation: "used_in" },
  { source: "li-6", target: "gas-centrifugation", relation: "enriched_by" },
  { source: "li-6", target: "tritium-breeding", relation: "requires" },
  { source: "li-7", target: "nuclear-fusion", relation: "related_to" },
  { source: "h-3", target: "nuclear-fusion", relation: "used_in" },
  { source: "h-3", target: "tritium-breeding", relation: "produced_by" },
  { source: "h-2", target: "nuclear-fusion", relation: "used_in" },
  { source: "haleu", target: "haleu-enrichment", relation: "enriched_by" },
  { source: "haleu", target: "nuclear-fusion", relation: "used_in" },
  { source: "haleu-enrichment", target: "centrus-piketon", relation: "located_at" },
  { source: "gas-centrifugation", target: "centrus-piketon", relation: "located_at" },
  { source: "gas-centrifugation", target: "urenco-usa", relation: "located_at" },
  { source: "gas-centrifugation", target: "asp-pretoria", relation: "located_at" },

  // Companies
  { source: "centrus", target: "centrus-piketon", relation: "operates" },
  { source: "centrus", target: "haleu-enrichment", relation: "supplies" },
  { source: "urenco", target: "urenco-usa", relation: "operates" },
  { source: "urenco", target: "gas-centrifugation", relation: "supplies" },
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
