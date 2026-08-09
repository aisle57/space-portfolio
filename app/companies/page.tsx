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
        "Public company developing enrichment processes for high-value stable isotopes used in advanced materials and related markets.",
      focus:
        "Stable isotope enrichment pathways for quantum, semiconductor, medical, and industrial materials.",
    },
    {
      name: "Quantum Leap Energy",
      tags: ["Fuel cycle", "Conversion", "HALEU"],
      about:
        "ASP Isotopes subsidiary focused on nuclear fuel-cycle pathways, including uranium conversion work, HALEU-oriented enrichment efforts, and lithium isotope separation.",
      focus: "Uranium conversion, advanced enrichment pathways, and lithium isotopes.",
      note: "Fuel-cycle company under the ASP Isotopes group, not a medical radiopharma manufacturer.",
    },
    {
      name: "Silex Systems",
      tags: ["Public", "Laser enrichment"],
      about:
        "Australian public company developing laser isotope separation technology across enrichment pathways.",
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
      name: "Urenco",
      tags: ["Enrichment", "Commercial"],
      about:
        "Major commercial uranium enricher with centrifuge plants in Europe and the United States.",
      focus: "Industrial uranium enrichment capacity.",
    },
    {
      name: "Orano",
      tags: ["Fuel cycle", "Enrichment"],
      about:
        "Fuel-cycle company with major commercial enrichment capacity and broader nuclear services.",
      focus: "Enrichment and nuclear fuel-cycle operations.",
    },
    {
      name: "ConverDyn",
      tags: ["Conversion", "UF6"],
      about:
        "U.S. uranium conversion joint venture context tied to UF6 feedstock supply ahead of enrichment.",
      focus: "Uranium conversion to enrichment feedstock.",
    },
    {
      name: "BWX Technologies",
      tags: ["Public", "Nuclear manufacturing"],
      about:
        "Nuclear manufacturing company with roles across naval nuclear, commercial nuclear components, and selected isotope-related production activities.",
      focus: "Nuclear manufacturing and specialty isotope-linked capacity.",
    },
    {
      name: "Framatome",
      tags: ["Nuclear fuel", "Technology"],
      about:
        "Nuclear fuel and technology company active across fuel fabrication and related nuclear systems.",
      focus: "Nuclear fuel systems and advanced fuel-cycle support.",
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
        "Major pharmaceutical company with radioligand therapy programs that depend on reliable therapeutic isotope supply.",
      focus: "Radioligand therapeutics and clinical nuclear medicine platforms.",
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
        "Company developing alternative production systems for medical isotopes and related nuclear technology applications.",
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
      name: "TerraPower Isotopes",
      tags: ["Ac-225", "Manufacturing"],
      about:
        "Expanding actinium-225 supply for targeted alpha therapy, including a large cGMP manufacturing project in Philadelphia intended to raise capacity once online.",
      focus: "Ac-225 production scale-up for advanced cancer therapies.",
      note: "Planned capacity expansion. Not the same as TerraPower's reactor business.",
    },
    {
      name: "PanTera",
      tags: ["Ac-225", "Production"],
      about:
        "Company focused on actinium-225 production scale-up for targeted alpha therapy supply.",
      focus: "Ac-225 production capacity.",
    },
    {
      name: "Niowave",
      tags: ["Accelerator", "Ac-225"],
      about:
        "Accelerator-based medical isotope company active in actinium-225 and related radioisotope pathways.",
      focus: "Accelerator production of medical radioisotopes.",
    },
    {
      name: "Cardinal Health",
      tags: ["Theranostics", "Ac-225", "Distribution"],
      about:
        "Major nuclear medicine and theranostics supply actor. Its Center for Theranostics Advancement supports commercial-scale radiopharmaceutical production and distribution, including actinium-225 related capacity growth.",
      focus:
        "Radiopharmaceutical manufacturing, theranostics supply, and last-mile nuclear medicine logistics.",
      note: "Important to the Ac-225 and broader therapeutic isotope commercial chain, especially where production volume and distribution meet.",
    },
    {
      name: "Orano Med",
      tags: ["Alpha therapy", "Pb-212"],
      about:
        "Orano's nuclear medicine arm focused on targeted alpha therapy and related isotope development.",
      focus: "Targeted alpha therapy isotope platforms.",
    },
    {
      name: "IRE",
      tags: ["Medical", "Mo-99"],
      about:
        "Belgian radioisotope producer important to global molybdenum-99 and related medical isotope supply.",
      focus: "Reactor-linked medical radioisotope production.",
    },
    {
      name: "NTP Radioisotopes",
      tags: ["Medical", "Mo-99"],
      about:
        "South African radioisotope producer linked to SAFARI-1 production pathways.",
      focus: "Medical radioisotope production and supply.",
    },
    {
      name: "ANSTO",
      tags: ["National lab", "Medical"],
      about:
        "Australian nuclear science organization with reactor-based radioisotope production through OPAL-related pathways.",
      focus: "National radioisotope production and nuclear science services.",
    },
    {
      name: "Isotopia",
      tags: ["Therapeutics", "Production"],
      about:
        "Radiopharmaceutical and isotope company active in therapeutic isotope development and supply.",
      focus: "Therapeutic radioisotope products.",
    },
    {
      name: "SOFIE",
      tags: ["PET", "Manufacturing"],
      about:
        "Radiopharma company connected to PET manufacturing and broader nuclear medicine supply activity.",
      focus: "PET radiopharmaceutical manufacturing.",
    },
    {
      name: "ARTMS",
      tags: ["Cyclotron technology"],
      about:
        "Technology company focused on cyclotron-based production routes for medical isotopes.",
      focus: "Cyclotron production technology for medical isotopes.",
    },
    {
      name: "Nordion",
      tags: ["Co-60", "Medical", "Industrial"],
      about:
        "Major actor in cobalt-60 supply and related nuclear medicine and industrial irradiation pathways.",
      focus:
        "Co-60 production and supply for sterilization, industrial irradiation, and selected medical uses.",
      note: "Important to the Co-60 chain. Power-reactor production partnerships are part of the broader supply picture.",
    },
  ];

  const nationalRegional: Company[] = [
    {
      name: "NRG",
      tags: ["Irradiation", "Petten"],
      about:
        "Operator context around the Petten research reactor and related irradiation services important to European isotope supply.",
      focus: "Research reactor irradiation and isotope-related services.",
    },
    {
      name: "POLATOM",
      tags: ["Medical", "Poland"],
      about:
        "Polish radioisotope producer linked to MARIA reactor pathways.",
      focus: "National radioisotope production and supply.",
    },
    {
      name: "INVAP",
      tags: ["Reactor technology", "Argentina"],
      about:
        "Argentine nuclear technology company connected to research reactor and isotope infrastructure development.",
      focus: "Research reactor technology and related nuclear infrastructure.",
    },
    {
      name: "KAERI",
      tags: ["National lab", "Korea"],
      about:
        "Korea Atomic Energy Research Institute context around HANARO and national nuclear research capacity.",
      focus: "National nuclear research and irradiation capability.",
    },
    {
      name: "JSC Isotope",
      tags: ["Supply", "Russia"],
      about:
        "Russian isotope trading and supply organization connected to national production capacity.",
      focus: "Isotope supply organization linked to domestic production nodes.",
    },
  ];

  const strategic: Company[] = [
    {
      name: "DOE Isotope Program",
      tags: ["U.S. program", "National labs"],
      about:
        "U.S. program coordinating isotope production and distribution across national laboratory capabilities.",
      focus: "Strategic research and specialty isotope availability.",
      note: "Infrastructure network rather than a single commercial producer.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Companies</h1>
          <p className="text-gray-400 text-lg max-w-3xl mb-4">
            Organizations producing, processing, enriching, and commercializing
            isotopes across medicine, energy, quantum materials, and industry.
          </p>
          <p className="text-gray-500 text-sm">
            Content reviewed August 2026. Production nodes update when capacity or status changes.
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
            National & Regional Producers
          </h2>
          <div className="space-y-4">
            {nationalRegional.map((item) => (
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
            <Link
              href="/graph"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Knowledge Graph
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
