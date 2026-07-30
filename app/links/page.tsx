import Link from "next/link";

type LinkItem = {
  name: string;
  href: string;
  about: string;
};

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 transition"
    >
      <h3 className="font-semibold text-lg text-sky-400 mb-2">{item.name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{item.about}</p>
    </a>
  );
}

export default function LinksPage() {
  const dataSources: LinkItem[] = [
    {
      name: "NuDat 3",
      href: "https://www.nndc.bnl.gov/nudat3/",
      about: "National Nuclear Data Center database for nuclear structure and decay data across known isotopes.",
    },
    {
      name: "IAEA Nuclear Data Services",
      href: "https://www-nds.iaea.org/",
      about: "International Atomic Energy Agency nuclear data resources and reference services.",
    },
    {
      name: "IAEA Research Reactor Database",
      href: "https://nucleus.iaea.org/rrdb/#/home",
      about: "Global database of research reactors, many of which are central to isotope production.",
    },
    {
      name: "National Isotope Development Center",
      href: "https://www.isotopes.gov/",
      about: "U.S. isotope production and distribution interface connected to the DOE Isotope Program.",
    },
    {
      name: "DOE Isotope Program",
      href: "https://science.osti.gov/Isotope-Research-Development-and-Production",
      about: "U.S. Department of Energy program supporting isotope research, development, and production.",
    },
  ];

  const institutions: LinkItem[] = [
    {
      name: "International Atomic Energy Agency",
      href: "https://www.iaea.org/",
      about: "Global intergovernmental organization for nuclear cooperation, safety, and technical resources.",
    },
    {
      name: "Oak Ridge National Laboratory",
      href: "https://www.ornl.gov/",
      about: "Home of major U.S. isotope production capabilities, including HFIR-related work.",
    },
    {
      name: "Idaho National Laboratory",
      href: "https://inl.gov/",
      about: "Major U.S. nuclear research laboratory with advanced reactor and irradiation infrastructure.",
    },
    {
      name: "TRIUMF",
      href: "https://www.triumf.ca/",
      about: "Canadian particle accelerator centre with important roles in isotope research and production.",
    },
  ];

  const publicCompanies: LinkItem[] = [
    {
      name: "ASP Isotopes",
      href: "https://www.aspisotopes.com/",
      about: "Public company focused on stable isotope enrichment and advanced materials relevant isotopes.",
    },
    {
      name: "Silex Systems",
      href: "https://www.silex.com.au/",
      about: "Public company developing laser isotope separation technology, including quantum silicon related work.",
    },
    {
      name: "Centrus Energy",
      href: "https://www.centrusenergy.com/",
      about: "Public U.S. enrichment company and major player in HALEU production development.",
    },
    {
      name: "BWX Technologies",
      href: "https://www.bwxt.com/",
      about: "Public nuclear technology company with medical isotope production related capabilities.",
    },
    {
      name: "Eckert & Ziegler",
      href: "https://www.ezag.com/",
      about: "Public company active in isotope products, radiopharmaceutical components, and related supply.",
    },
    {
      name: "IBA",
      href: "https://www.iba-worldwide.com/",
      about: "Public company providing cyclotrons and radiopharma production infrastructure.",
    },
    {
      name: "China Isotope & Radiation",
      href: "https://www.circ.com.cn/",
      about: "Major listed isotope and radiopharmaceutical related producer.",
    },
    {
      name: "Telix Pharmaceuticals",
      href: "https://telixpharma.com/",
      about: "Public radiopharmaceutical company focused on targeted radiation therapy and imaging agents.",
    },
    {
      name: "Lantheus",
      href: "https://www.lantheus.com/",
      about: "Public company in diagnostic and therapeutic radiopharmaceuticals.",
    },
  ];

  const privateCompanies: LinkItem[] = [
    {
      name: "Curium",
      href: "https://www.curiumpharma.com/",
      about: "Major private global supplier of medical isotopes and radiopharmaceuticals.",
    },
    {
      name: "NorthStar Medical Radioisotopes",
      href: "https://www.northstarnm.com/",
      about: "Private company focused on alternative Mo-99 / Tc-99m production approaches.",
    },
    {
      name: "Shine Technologies",
      href: "https://www.shinefusion.com/",
      about: "Private company developing advanced medical isotope production technology.",
    },
    {
      name: "Nusano",
      href: "https://nusano.com/",
      about: "Private company building accelerator-based radioisotope production capacity.",
    },
    {
      name: "Cambridge Isotope Laboratories",
      href: "https://www.isotope.com/",
      about: "Important supplier of stable isotopes for research and specialized applications.",
    },
    {
      name: "Isoflex",
      href: "https://www.isoflex.com/",
      about: "Supplier of enriched stable isotopes for scientific and commercial use.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Links</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A doorway into the wider isotope world: authoritative data sources, institutions, public companies, and private companies shaping production, supply, and applications.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Authoritative Data & Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataSources.map((item) => (
              <LinkCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Institutions & Laboratories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {institutions.map((item) => (
              <LinkCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Public Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publicCompanies.map((item) => (
              <LinkCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Private Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privateCompanies.map((item) => (
              <LinkCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Back to the Hub
          </h2>
          <p className="text-gray-400 mb-6">
            Use the curated on-site pages for orientation, then return here for external pathways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link href="/isotopes" className="py-3 px-6 button-primary text-center text-white rounded-lg">
              Isotope Directory
            </Link>
            <Link href="/facilities" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Facilities
            </Link>
            <Link href="/companies" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Companies
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
