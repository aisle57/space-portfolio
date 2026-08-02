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
    note: "Complement to Li-6 in nuclear chemistry and coolant contexts. Often discussed alongside enrichment of lithium isotopes.",
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
    note: "Heavy hydrogen used in research, moderators, and fusion-related work. Separation is an industrial process, not mining.",
  },
  {
    id: "h-3",
    name: "H-3 Tritium",
    type: "Isotope",
    val: 9,
    note: "Radioactive hydrogen isotope central to fusion fuel cycles and specialized applications. Often linked to Li-6 breeding routes.",
  },

  // Processes
  {
    id: "gas-centrifugation",
    name: "Gas centrifugation enrichment",
    type: "Process",
    val: 12,
    note: "Core industrial method for separating isotopes by mass. Underpins much commercial uranium and some specialty enrichment.",
  },
  {
    id: "reactor-production",
    name: "Reactor-based production",
    type: "Process",
    val: 12,
    note: "Creates isotopes through neutron reactions in research and production reactors. Backbone of medical isotope supply.",
  },
  {
    id: "accelerator-production",
    name: "Accelerator production",
    type: "Process",
    val: 9,
    note: "Creates isotopes with charged-particle beams. Important route for several medical and research nuclides.",
  },
  {
    id: "tritium-breeding",
    name: "Tritium breeding",
    type: "Process",
    val: 9,
    note: "Pathway that converts lithium pathways, especially Li-6, into tritium for fusion fuel concepts.",
  },
  {
    id: "haleu-enrichment",
    name: "HALEU enrichment",
    type: "Process",
    val: 9,
    note: "Enrichment above standard LEU levels toward HALEU product. Capacity remains scarce globally.",
  },

  // Applications
  {
    id: "precision-medicine",
    name: "Precision Medicine / Theranostics",
    type: "Application",
    val: 14,
    note: "Diagnostic imaging and targeted radiotherapies that depend on reliable isotope supply and processing.",
  },
  {
    id: "quantum-technologies",
    name: "Quantum Technologies",
    type: "Application",
    val: 12,
    note: "Devices and materials that need ultra-pure or rare isotopes such as Si-28 and He-3.",
  },
  {
    id: "nuclear-fusion",
    name: "Nuclear Production / Fusion",
    type: "Application",
    val: 13,
    note: "Power and fusion pathways that depend on enriched materials, breeding routes, and nuclear production infrastructure.",
  },

  // Facilities (seed)
  {
    id: "hfir",
    name: "HFIR",
    type: "Facility",
    val: 8,
    note: "High Flux Isotope Reactor at Oak Ridge. Major U.S. node for isotope production research and supply.",
  },
  {
    id: "opal",
    name: "OPAL",
    type: "Facility",
    val: 7,
    note: "Australian research reactor supporting radioisotope production and nuclear science.",
  },
  {
    id: "centrus-piketon",
    name: "Centrus ACP",
    type: "Facility",
    val: 8,
    note: "U.S. enrichment site at Piketon associated with advanced enrichment and HALEU pathway work.",
  },
  {
    id: "asp-pretoria",
    name: "ASP Pretoria",
    type: "Facility",
    val: 7,
    note: "Specialty isotope enrichment facilities in Pretoria. Notable commercial enrichment footprint in Africa.",
  },

  // Companies (seed)
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
    note: "Specialty isotope enrichment company with operating facilities in Pretoria focused on light isotopes.",
  },
];

export const links = [
  // Medicine cluster
  { source: "mo-99", target: "precision-medicine", relation: "used_in" },
  { source: "mo-99", target: "reactor-production", relation: "produced_by" },
  { source: "lu-177", target: "precision-medicine", relation: "used_in" },
  { source: "lu-177", target: "reactor-production", relation: "produced_by" },
  { source: "ac-225", target: "precision-medicine", relation: "used_in" },
  { source: "ac-225", target: "accelerator-production", relation: "produced_by" },
  { source: "reactor-production", target: "hfir", relation: "located_at" },
  { source: "reactor-production", target: "opal", relation: "located_at" },

  // Quantum cluster
  { source: "si-28", target: "quantum-technologies", relation: "used_in" },
  { source: "si-28", target: "gas-centrifugation", relation: "enriched_by" },
  { source: "he-3", target: "quantum-technologies", relation: "used_in" },

  // Nuclear / fusion cluster
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

  // Company / facility links
  { source: "centrus", target: "centrus-piketon", relation: "operates" },
  { source: "centrus", target: "haleu-enrichment", relation: "supplies" },
  { source: "urenco", target: "gas-centrifugation", relation: "supplies" },
  { source: "asp-isotopes", target: "asp-pretoria", relation: "operates" },
  { source: "asp-pretoria", target: "gas-centrifugation", relation: "related_to" },
  { source: "asp-isotopes", target: "si-28", relation: "supplies" },
];

export const typeColors = {
  Isotope: "#a78bfa",
  Process: "#60a5fa",
  Application: "#fbbf24",
  Facility: "#34d399",
  Company: "#f472b6",
};
