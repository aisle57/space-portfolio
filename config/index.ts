import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Isotope Economy",
  description:
    "The public resource for isotopes, research facilities, and the companies advancing nuclear, quantum, and medical isotope technologies.",
  keywords: [
    "isotopes",
    "isotope economy",
    "nuclear isotopes",
    "medical isotopes",
    "quantum isotopes",
    "research reactors",
    "theranostics",
    "Lu-177",
    "Ac-225",
    "isotope production",
    "nuclear medicine",
  ] as Array<string>,
  authors: {
    name: "Isotope Economy",
    url: "https://www.isotopeeconomy.com",
  },
} as const;
