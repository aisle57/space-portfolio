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
  const publicProducers: Company[] = [
    {
      name: "ASP Isotopes",
      tags: ["Public", "Enrichment", "Si-28"],
      about:
        "ASP Isotopes is focused on stable isotope enrichment and the advancement of production capabilities for high-value materials used in quantum, semiconductor, and related applications.",
      focus:
        "Stable isotope enrichment, including silicon-28 and other advanced materials relevant isotopes.",
    },
    {
      name: "Silex Systems",
      tags: ["Public", "Laser enrichment", "Quantum silicon"],
      about:
        "Silex Systems is developing laser isotope separation technology with applications in enrichment pathways, including work relevant to quantum silicon.",
      focus:
        "Laser isotope separation technology and related enrichment development.",
    },
    {
      name: "BWX Technologies",
      tags: ["Public", "Nuclear", "Production"],
      about:
        "BWX Technologies is involved in nuclear technologies and medical isotope production related capabilities.",
      focus:
        "Nuclear systems and isotope production related activities.",
    },
    {
      name: "Eckert & Ziegler",
      tags: ["Public", "Isotope products", "Supply"],
      about:
        "Eckert & Ziegler is a significant company in isotope products, radiopharmaceutical components, and related supply activities.",
      focus:
        "Isotope products, radiopharmaceutical supply, and related production services.",
    },
    {
      name: "IBA",
      tags: ["Public", "Cyclotrons", "Infrastructure"],
      about:
        "IBA provides cyclotron systems and radiopharma production infrastructure used in medical isotope and radiopharmaceutical manufacturing environments.",
      focus:
        "Production infrastructure for radiopharmaceutical and medical isotope systems.",
    },
  ];

  const medical: Company[] = [
    {
      name: "Novartis",
      tags: ["Theranostics", "Lu-177"],
      about:
        "Novartis is a major force in radioligand therapy and theranostics, with significant activity around targeted radiopharmaceutical treatments.",
      focus:
        "Radioligand therapy and commercial theranostic applications.",
    },
    {
      name: "Bayer",
      tags: ["Alpha therapy", "Radiopharma"],
      about:
        "Bayer is active in targeted alpha therapies and broader radiopharmaceutical development.",
      focus:
        "Targeted alpha therapy and radiopharmaceutical innovation.",
    },
    {
      name: "Lantheus",
      tags: ["Diagnostics", "Therapy"],
      about:
        "Lantheus is an important company in diagnostic and therapeutic radiopharmaceuticals.",
      focus:
        "Imaging agents and therapeutic radiopharmaceutical products.",
    },
    {
      name: "Telix Pharmaceuticals",
      tags: ["Theranostics", "Imaging"],
      about:
        "Telix develops targeted radiation therapies and imaging agents across oncology-focused radiopharmaceutical applications.",
      focus:
        "Targeted radiopharmaceutical therapy and diagnostic agents.",
    },
    {
      name: "Curium",
      tags: ["Supply", "Medical isotopes"],
      about:
        "Curium is one of the largest global suppliers of medical isotopes and radiopharmaceuticals.",
      focus:
        "Medical isotope supply and radiopharmaceutical manufacturing.",
    },
    {
      name: "NorthStar Medical Radioisotopes",
      tags: ["Mo-99", "Production tech"],
      about:
        "NorthStar focuses on alternative production approaches for Mo-99 / Tc-99m related supply.",
      focus:
        "Non-traditional Mo-99 production technology and related medical isotope supply.",
    },
    {
      name: "Shine Technologies",
      tags: ["Production tech", "Medical"],
      about:
        "Shine is developing advanced production methods intended to expand medical isotope supply.",
      focus:
        "Next-generation medical isotope production technology.",
    },
    {
      name: "Nusano",
      tags: ["Accelerator", "Production"],
      about:
        "Nusano is building large-scale accelerator-based radioisotope production capacity.",
      focus:
        "Accelerator-based radioisotope production infrastructure.",
    },
  ];

  const stable: Company[] = [
    {
      name: "Urenco Stable Isotopes",
      tags: ["Enrichment", "Stable isotopes"],
      about:
        "Urenco Stable Isotopes is a major established player in commercial stable isotope enrichment.",
      focus:
        "Commercial enrichment and supply of stable isotopes.",
    },
    {
      name: "Orano Stable Isotopes",
      tags: ["Enrichment", "Materials"],
      about:
        "Orano is active in stable isotope production and advanced materials related supply.",
      focus:
        "Stable isotope production and materials-linked isotope supply.",
    },
    {
      name: "Cambridge Isotope Laboratories",
      tags: ["Research supply", "Stable isotopes"],
      about:
        "Cambridge Isotope Laboratories is an important supplier of stable isotopes for research and specialized applications.",
      focus:
        "Research and specialty stable isotope products.",
    },
    {
      name: "Trace Sciences International",
      tags: ["Stable isotopes"],
      about:
        "Trace Sciences supplies enriched stable isotopes for research and industry.",
      focus:
        "Enriched stable isotope supply for scientific and commercial users.",
    },
    {
      name: "Isoflex",
      tags: ["Stable isotopes"],
      about:
        "Isoflex provides enriched stable isotopes for scientific and commercial use.",
      focus:
        "Specialty enriched stable isotope products.",
    },
  ];

  const strategic: Company[] = [
    {
      name: "Framatome",
      tags: ["Nuclear", "Fuel cycle"],
      about:
        "Framatome is active in nuclear fuel and related isotope-linked nuclear technology activities.",
      focus:
        "Nuclear fuel cycle and related nuclear technology services.",
    },
    {
      name: "NTP Radioisotopes",
      tags: ["Medical", "Mo-99"],
      about:
        "NTP is a major South African producer of medical isotopes and an important part of global supply for selected diagnostic isotopes.",
      focus:
        "Medical isotope production, including Mo-99 related supply.",
    },
    {
      name: "DOE National Isotope Development Center network",
      tags: ["Research", "Strategic supply"],
      about:
        "The NIDC network coordinates production and distribution of many research and specialty isotopes across U.S. national laboratory capabilities.",
      focus:
        "Strategic research and specialty isotope availability through national laboratory infrastructure.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Companies</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Organizations producing, processing, enriching, and advancing isotopes across medicine, energy, quantum technologies, and advanced materials.
          </p>
        </div>

        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            The Commercial Layer
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Isotopes move from research facilities into the real economy through companies. Some specialize in production. Others focus on enrichment, processing, radiopharmaceutical development, or the materials and technologies that depend on specific isotopes.
            </p>
            <p>
              This page maps the major commercial and production-linked players shaping the isotope supply chain.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Production & Enrichment Focused
          </h2>
          <div className="space-y-4">
            {publicProducers.map((item) => (
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
            Stable Isotopes & Enrichment
          </h2>
          <div className="space-y-4">
            {stable.map((item) => (
              <CompanyCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Production, Nuclear & Strategic Supply
          </h2>
          <div className="space-y-4">
            {strategic.map((item) => (
              <CompanyCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Growing Directory
          </h2>
          <p className="text-gray-400">
            This is a working foundation. The company landscape around isotopes is expanding quickly, especially in medical theranostics, alternative production technologies, stable isotope enrichment, and advanced materials supply chains. Additional companies will be added over time.
          </p>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where to go next
          </h2>
          <p className="text-gray-400 mb-6">Continue through the resource hub:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/isotopes" className="py-3 px-6 button-primary text-center text-white rounded-lg">
              Isotope Directory
            </Link>
            <Link href="/facilities" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Research Facilities
            </Link>
            <Link href="/advanced" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Advanced
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
