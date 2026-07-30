import Link from "next/link";

type Company = {
  name: string;
  tags: string[];
  about: string;
  focus: string;
  note?: string;
};

function CompanyCard({ item }: { item: Company }) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-2">{item.about}</p>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        <span className="text-white">Focus:</span> {item.focus}
      </p>
      {item.note && (
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white">Note:</span> {item.note}
        </p>
      )}
    </div>
  );
}

export default function CompaniesPage() {
  const productionEnrichment: Company[] = [
    {
      name: "ASP Isotopes",
      tags: ["Public", "Enrichment", "Advanced materials"],
      about:
        "Public company developing aerodynamic and related enrichment processes for high-value stable isotopes used in advanced materials and related markets.",
      focus:
        "Stable isotope enrichment pathways for quantum, semiconductor, medical, and industrial materials.",
    },
    {
      name: "Silex Systems",
      tags: ["Public", "Laser enrichment"],
      about:
        "Australian public company developing laser isotope separation technology with applications across enrichment pathways, including silicon-related work.",
      focus: "Laser isotope separation technology development.",
    },
    {
      name: "Centrus Energy",
      tags: ["Public", "Uranium enrichment", "HALEU"],
      about:
        "U.S. enrichment company central to domestic High-Assay Low-Enriched Uranium capacity and broader nuclear fuel enrichment infrastructure.",
      focus: "Uranium enrichment and HALEU production capacity.",
      note: "Key public reference point in the U.S. enrichment rebuild.",
    },
    {
      name: "BWX Technologies",
      tags: ["Public", "Nuclear manufacturing"],
      about:
        "Nuclear manufacturing company with roles across naval nuclear, commercial nuclear components, and selected isotope-related production activities.",
      focus: "Nuclear manufacturing and specialty isotope-linked capacity.",
    },
    {
      name: "Eckert & Ziegler",
      tags: ["Public", "Isotope products"],
      about:
        "Established supplier of isotope products, components, and related systems for medical and industrial users.",
      focus: "Commercial isotope products and radiopharmaceutical support systems.",
    },
    {
      name: "IBA",
      tags: ["Public", "Cyclotrons"],
      about:
        "Major provider of cyclotron and radiopharma production systems used in medical isotope infrastructure worldwide.",
      focus: "Cyclotrons and radiopharmaceutical production infrastructure.",
    },
    {
      name: "China Isotope & Radiation Corporation",
      tags: ["Public", "Isotope production"],
      about:
        "Major Chinese isotope and radiation company involved in production and radiopharmaceutical-related supply.",
      focus: "Isotope production and radiation applications at scale.",
    },
  ];

  const medical: Company[] = [
    {
      name: "Novartis",
      tags: ["Public", "Radioligand therapy"],
      about:
        "Major pharmaceutical company commercializing radioligand therapy platforms that depend on reliable therapeutic isotope supply.",
      focus: "Clinical radioligand therapy and related nuclear medicine platforms.",
    },
    {
      name: "Bayer",
      tags: ["Public", "Targeted therapy"],
      about:
        "Pharmaceutical company with targeted radiotherapy products in the nuclear medicine landscape.",
      focus: "Targeted radiotherapeutic products and related clinical platforms.",
    },
    {
      name: "Lantheus",
      tags: ["Public", "Diagnostics", "Therapeutics"],
      about:
        "Commercial nuclear medicine company active in diagnostic imaging agents and therapeutic development.",
      focus: "Diagnostic and therapeutic radiopharmaceutical products.",
    },
    {
      name: "Telix Pharmaceuticals",
      tags: ["Public", "Radiopharma"],
      about:
        "Radiopharmaceutical company developing diagnostic and therapeutic agents across oncology and related indications.",
      focus: "Targeted radiopharmaceutical diagnostics and therapy.",
    },
    {
      name: "Curium",
      tags: ["Medical isotopes", "Manufacturing"],
      about:
        "Large nuclear medicine manufacturer and supplier supporting diagnostic and therapeutic isotope products.",
      focus: "Medical isotope manufacturing and radiopharmaceutical supply.",
    },
    {
      name: "ITM Isotope Technologies Munich",
      tags: ["Theranostics", "Production"],
      about:
        "European radiopharmaceutical and isotope company focused on targeted radionuclide therapy and related production capability.",
      focus: "Therapeutic radioisotopes and theranostic development.",
    },
    {
      name: "NorthStar Medical Radioisotopes",
      tags: ["Mo-99", "Production technology"],
      about:
        "U.S. company developing alternative production routes for molybdenum-99 and related medical isotope supply technology.",
      focus: "Mo-99 production technology and medical isotope manufacturing systems.",
    },
    {
      name: "SHINE Technologies",
      tags: ["Production technology", "Medical"],
      about:
        "Company developing accelerator-based and related production systems for medical isotopes and nuclear technology applications.",
      focus: "Alternative medical isotope production technology.",
    },
    {
      name: "Nusano",
      tags: ["Accelerator production"],
      about:
        "Accelerator-based isotope production company building capacity for medical and related radioisotopes.",
      focus: "Accelerator production platforms for radioisotopes.",
    },
    {
      name: "NTP Radioisotopes",
      tags: ["Medical", "Mo-99"],
      about:
        "South African producer and an important part of global medical isotope supply, including molybdenum-99 related production.",
      focus: "Reactor-linked medical isotope production and supply.",
    },
    {
      name: "ANSTO",
      tags: ["Australia", "Medical isotopes"],
      about:
        "Australia's nuclear science organization, including commercial medical isotope production linked to the OPAL reactor system.",
      focus: "Medical and industrial isotope production for regional and export supply.",
    },
  ];

  const stable: Company[] = [
    {
      name: "Urenco Stable Isotopes",
      tags: ["Stable isotopes", "Enrichment"],
      about:
        "Established commercial supplier of enriched stable isotopes for research, medical, and industrial users.",
      focus: "Commercial stable isotope enrichment and product supply.",
    },
    {
      name: "Orano Stable Isotopes",
      tags: ["Stable isotopes", "Materials"],
      about:
        "Part of Orano's broader nuclear materials activity, supplying stable isotopes and related products.",
      focus: "Stable isotope production and materials-linked supply.",
    },
    {
      name: "Cambridge Isotope Laboratories",
      tags: ["Research supply"],
      about:
        "Major supplier of stable isotopes and labeled compounds for research and specialty applications.",
      focus: "Research-grade stable isotopes and labeled materials.",
    },
    {
      name: "Trace Sciences International",
      tags: ["Stable isotopes"],
      about:
        "Supplier of enriched stable isotopes for scientific and commercial users.",
      focus: "Enriched stable isotope distribution.",
    },
    {
      name: "Isoflex",
      tags: ["Stable isotopes"],
      about:
        "Specialty supplier of enriched stable isotopes for research and industrial use.",
      focus: "Specialty enriched isotope products.",
    },
  ];

  const strategic: Company[] = [
    {
      name: "Framatome",
      tags: ["Nuclear fuel cycle"],
      about:
        "Nuclear fuel and technology company active across fuel-cycle services and related nuclear systems.",
      focus: "Nuclear fuel cycle technology and services.",
    },
    {
      name: "DOE National Isotope Development Center network",
      tags: ["Strategic supply", "Research"],
      about:
        "U.S. coordination layer for production and distribution of many research and specialty isotopes across national laboratory capabilities.",
      focus: "Strategic research and specialty isotope availability.",
      note: "Infrastructure network rather than a single commercial producer.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Companies</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Organizations producing, processing, enriching, and commercializing
            isotopes across medicine, energy, quantum materials, and industry.
          </p>
        </div>

        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            The commercial layer
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Companies turn isotope production into usable supply. Some enrich.
              Some manufacture medical products. Some build the machines and
              processing systems that make production possible.
            </p>
            <p>
              This page is a role map, not a ranking. For financing structure, use{" "}
              <Link href="/capital" className="text-sky-400 hover:underline">
                Capital & Markets
              </Link>
              . For external directories and institutions, use{" "}
              <Link href="/links" className="text-sky-400 hover:underline">
                Links
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Production & Enrichment
          </h2>
          <div className="space-y-4">
            {productionEnrichment.map((item) => (
              <CompanyCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Radiopharmaceutical
          </h2>
          <div className="space-y-4">
            {medical.map((item) => (
              <CompanyCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Stable Isotopes & Specialty Supply
          </h2>
          <div className="space-y-4">
            {stable.map((item) => (
              <CompanyCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Strategic & Nuclear Supply
          </h2>
          <div className="space-y-4">
            {strategic.map((item) => (
              <CompanyCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Wider commercial landscape
          </h2>
          <p className="text-gray-400 mb-6">
            For broader public and private directories, institutions, and data
            sources, use the Links page.
          </p>
          <Link
            href="/links"
            className="inline-block py-3 px-6 button-primary text-center text-white rounded-lg"
          >
            Open Links
          </Link>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where to go next
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/facilities"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Research Facilities
            </Link>
            <Link
              href="/capital"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Capital & Markets
            </Link>
            <Link
              href="/isotopes"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Isotope Directory
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
