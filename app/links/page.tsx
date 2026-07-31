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
      about:
        "National Nuclear Data Center database for nuclear structure and decay data across known isotopes.",
    },
    {
      name: "IAEA Nuclear Data Services",
      href: "https://www-nds.iaea.org/",
      about:
        "International Atomic Energy Agency nuclear data resources and reference services.",
    },
    {
      name: "IAEA Research Reactor Database",
      href: "https://nucleus.iaea.org/rrdb/#/home",
      about:
        "Global database of research reactors, many of which are central to isotope production.",
    },
    {
      name: "National Isotope Development Center",
      href: "https://www.isotopes.gov/",
      about:
        "U.S. isotope production and distribution interface connected to the DOE Isotope Program.",
    },
    {
      name: "DOE Isotope Program",
      href: "https://science.osti.gov/Isotope-Research-Development-and-Production",
      about:
        "U.S. Department of Energy program supporting isotope research, development, and production.",
    },
    {
      name: "NIST Physical Measurement Laboratory",
      href: "https://www.nist.gov/pml",
      about:
        "U.S. measurement science resources relevant to nuclear data, standards, and precision materials work.",
    },
    {
      name: "Live Chart of Nuclides (IAEA)",
      href: "https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html",
      about:
        "Interactive nuclide chart for exploring isotopes and basic nuclear properties.",
    },
  ];

  const institutions: LinkItem[] = [
    {
      name: "International Atomic Energy Agency",
      href: "https://www.iaea.org/",
      about:
        "Global intergovernmental organization for nuclear cooperation, safety, and technical resources.",
    },
    {
      name: "Oak Ridge National Laboratory",
      href: "https://www.ornl.gov/",
      about:
        "Home of major U.S. isotope production capabilities, including HFIR-related work.",
    },
    {
      name: "Idaho National Laboratory",
      href: "https://inl.gov/",
      about:
        "Major U.S. nuclear research laboratory with advanced reactor and irradiation infrastructure.",
    },
    {
      name: "Brookhaven National Laboratory",
      href: "https://www.bnl.gov/",
      about:
        "U.S. national laboratory hosting important nuclear data and accelerator-based isotope work.",
    },
    {
      name: "Los Alamos National Laboratory",
      href: "https://www.lanl.gov/",
      about:
        "U.S. national laboratory with isotope production and nuclear science infrastructure.",
    },
    {
      name: "TRIUMF",
      href: "https://www.triumf.ca/",
      about:
        "Canadian particle accelerator centre with important roles in isotope research and production.",
    },
    {
      name: "ANSTO",
      href: "https://www.ansto.gov.au/",
      about:
        "Australia's nuclear science and technology organisation, including OPAL-linked isotope production.",
    },
    {
      name: "Paul Scherrer Institute",
      href: "https://www.psi.ch/",
      about:
        "Major Swiss research centre with accelerator infrastructure used in isotope and nuclear science work.",
    },
    {
      name: "FRM II / TUM",
      href: "https://www.frm2.tum.de/",
      about:
        "Technical University of Munich research reactor complex, an important European irradiation platform.",
    },
    {
      name: "Institut Laue-Langevin",
      href: "https://www.ill.eu/",
      about:
        "European neutron research centre operating one of the world's leading high-flux sources.",
    },
  ];

  const fieldOrgs: LinkItem[] = [
    {
      name: "Society of Nuclear Medicine and Molecular Imaging",
      href: "https://www.snmmi.org/",
      about:
        "Professional society covering nuclear medicine practice, imaging, and related clinical developments.",
    },
    {
      name: "World Nuclear Association",
      href: "https://world-nuclear.org/",
      about:
        "Industry information resource on nuclear power, fuel cycle topics, and related nuclear infrastructure.",
    },
    {
      name: "European Nuclear Society",
      href: "https://www.euronuclear.org/",
      about:
        "European professional network across nuclear science, engineering, and related fields.",
    },
  ];

  const publicCompanies: LinkItem[] = [
    {
      name: "ASP Isotopes",
      href: "https://www.aspisotopes.com/",
      about: "Public enrichment and advanced isotope materials company.",
    },
    {
      name: "Silex Systems",
      href: "https://www.silex.com.au/",
      about: "Public company developing laser isotope separation technology.",
    },
    {
      name: "Centrus Energy",
      href: "https://www.centrusenergy.com/",
      about: "U.S. uranium enrichment company, including HALEU-related capacity.",
    },
    {
      name: "BWX Technologies",
      href: "https://www.bwxt.com/",
      about: "Nuclear manufacturing and specialty isotope-linked capacity.",
    },
    {
      name: "Eckert & Ziegler",
      href: "https://www.ezag.com/",
      about: "Isotope products and radiopharmaceutical support systems.",
    },
    {
      name: "IBA",
      href: "https://www.iba-worldwide.com/",
      about: "Cyclotrons and radiopharmaceutical production infrastructure.",
    },
    {
      name: "Telix Pharmaceuticals",
      href: "https://telixpharma.com/",
      about: "Radiopharmaceutical diagnostics and therapy company.",
    },
    {
      name: "Lantheus",
      href: "https://www.lantheus.com/",
      about: "Commercial nuclear medicine diagnostics and therapeutics.",
    },
  ];

  const privateCompanies: LinkItem[] = [
    {
      name: "Curium",
      href: "https://www.curiumpharma.com/",
      about: "Nuclear medicine manufacturer and medical isotope supplier.",
    },
    {
      name: "NorthStar Medical Radioisotopes",
      href: "https://www.northstarnm.com/",
      about: "Medical isotope production technology, including Mo-99 routes.",
    },
    {
      name: "SHINE Technologies",
      href: "https://www.shinefusion.com/",
      about: "Alternative medical isotope production technology.",
    },
    {
      name: "Nusano",
      href: "https://nusano.com/",
      about: "Accelerator-based radioisotope production platforms.",
    },
    {
      name: "Cambridge Isotope Laboratories",
      href: "https://www.isotope.com/",
      about: "Research and specialty stable isotope products.",
    },
    {
      name: "Isoflex",
      href: "https://www.isoflex.com/",
      about: "Specialty enriched stable isotope supply.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Links</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A doorway into the wider isotope world: authoritative data sources,
            institutions, field organizations, and selected companies.
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
            Field Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fieldOrgs.map((item) => (
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
            Use the curated on-site pages for orientation, then return here for
            external pathways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/isotopes"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Isotope Directory
            </Link>
            <Link
              href="/facilities"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Facilities
            </Link>
            <Link
              href="/companies"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Companies
            </Link>
            <Link
              href="/watch"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Q3 Watchlist
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
