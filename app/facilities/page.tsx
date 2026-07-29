import Link from "next/link";

type Facility = {
  name: string;
  tags: string[];
  about: string;
  knownFor: string;
  note?: string;
};

function FacilityCard({ item }: { item: Facility }) {
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
        <span className="text-white">Known for:</span> {item.knownFor}
      </p>
      {item.note && (
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white">Note:</span> {item.note}
        </p>
      )}
    </div>
  );
}

export default function FacilitiesPage() {
  const reactors: Facility[] = [
    {
      name: "High Flux Isotope Reactor (HFIR)",
      tags: ["USA", "Research reactor", "Medical", "Actinides"],
      about:
        "Located at Oak Ridge National Laboratory, HFIR is one of the most important U.S. isotope production reactors. Its high neutron flux makes it especially valuable for producing both medical and research isotopes.",
      knownFor:
        "Medical isotopes, heavy actinides, and specialized research isotopes.",
      note: "A cornerstone of U.S. isotope production capability.",
    },
    {
      name: "Advanced Test Reactor (ATR)",
      tags: ["USA", "Research reactor"],
      about:
        "Located at Idaho National Laboratory, ATR is a major materials test reactor with important roles in irradiation services and isotope-related work.",
      knownFor:
        "Materials irradiation, research support, and selected isotope production roles.",
    },
    {
      name: "University of Missouri Research Reactor (MURR)",
      tags: ["USA", "University reactor", "Medical"],
      about:
        "MURR is one of the most significant university-based isotope production reactors in North America and an important supplier of medical isotopes.",
      knownFor:
        "Medical isotopes and research-related production.",
      note: "A key non-national-lab contributor to U.S. medical isotope supply.",
    },
    {
      name: "BR2",
      tags: ["Belgium", "Research reactor", "Medical"],
      about:
        "BR2 is a major European research reactor and an important source of medical isotopes for regional and international supply.",
      knownFor:
        "Medical isotope production and research irradiation services.",
    },
    {
      name: "HFR Petten",
      tags: ["Netherlands", "Research reactor", "Medical"],
      about:
        "The High Flux Reactor at Petten has long been one of Europe’s most important medical isotope production facilities.",
      knownFor:
        "Medical isotopes, including major contributions to diagnostic isotope supply chains.",
      note: "Historically central to European Mo-99 related supply.",
    },
    {
      name: "OPAL",
      tags: ["Australia", "Research reactor", "Medical"],
      about:
        "OPAL is Australia’s open-pool research reactor and a major regional producer of medical and industrial isotopes.",
      knownFor:
        "Medical isotopes, industrial isotopes, and research support for the region.",
    },
    {
      name: "SAFARI-1",
      tags: ["South Africa", "Research reactor", "Medical"],
      about:
        "SAFARI-1 is a key African research reactor and an important global contributor to medical isotope production.",
      knownFor:
        "Medical isotopes, including Mo-99 related production.",
    },
    {
      name: "Canadian research reactor capacity",
      tags: ["Canada", "Medical", "Strategic"],
      about:
        "Canada has long been a major force in medical isotope production. Current and future reactor-based capacity remains strategically important to North American and global supply.",
      knownFor:
        "Medical isotope production and related nuclear research infrastructure.",
      note: "Canada’s role remains significant even as specific reactor systems change over time.",
    },
    {
      name: "LVR-15",
      tags: ["Czech Republic", "Research reactor"],
      about:
        "LVR-15 is a European research reactor involved in irradiation services and isotope-related work.",
      knownFor:
        "Research irradiation and selected isotope production support.",
    },
    {
      name: "MARIA reactor",
      tags: ["Poland", "Research reactor", "Medical"],
      about:
        "The MARIA reactor is an important Central European research reactor with roles in medical isotope production and research.",
      knownFor:
        "Medical isotopes and research irradiation services.",
    },
  ];

  const accelerators: Facility[] = [
    {
      name: "Medical cyclotrons",
      tags: ["Global", "Cyclotron", "PET"],
      about:
        "Hospital and regional cyclotrons form a distributed production layer for short-lived PET isotopes. Unlike large research reactors, these systems are widespread and closer to clinical demand.",
      knownFor:
        "F-18 and other PET isotopes used in diagnostic imaging.",
      note: "Critical for daily PET supply because many PET isotopes cannot be shipped long distances.",
    },
    {
      name: "Brookhaven Linac Isotope Producer (BLIP)",
      tags: ["USA", "Accelerator", "Medical"],
      about:
        "BLIP is an important U.S. accelerator-based isotope production facility supporting medical and research isotopes.",
      knownFor:
        "Accelerator-produced medical and research isotopes.",
    },
    {
      name: "Los Alamos Isotope Production Facility (IPF)",
      tags: ["USA", "Accelerator", "Medical"],
      about:
        "The Los Alamos IPF supports accelerator-based production of medical and research isotopes as part of the U.S. isotope infrastructure.",
      knownFor:
        "Accelerator-produced isotopes for medicine and research.",
    },
    {
      name: "Specialized linear accelerators",
      tags: ["Global", "Accelerator", "Emerging"],
      about:
        "Specialized linacs are increasingly important for isotopes that are difficult, inefficient, or strategically undesirable to produce only in reactors.",
      knownFor:
        "Emerging medical isotopes, research isotopes, and alternative production routes.",
    },
    {
      name: "National accelerator laboratories",
      tags: ["Global", "Research"],
      about:
        "National accelerator facilities support both research and the development of new isotope production methods, target systems, and processing approaches.",
      knownFor:
        "Research isotopes, method development, and advanced production R&D.",
    },
  ];

  const networks: Facility[] = [
    {
      name: "DOE Isotope Program / NIDC network",
      tags: ["USA", "National network", "Strategic"],
      about:
        "The U.S. Department of Energy Isotope Program and the National Isotope Development Center coordinate production and distribution of many research and specialty isotopes across national laboratory capabilities.",
      knownFor:
        "Research isotopes, specialty isotopes, and strategic production coordination.",
      note: "One of the most important organizing layers in the U.S. isotope supply system.",
    },
    {
      name: "IAEA-connected research reactor network",
      tags: ["International", "Coordination"],
      about:
        "Through data resources, cooperation frameworks, and technical support, the IAEA helps make the global research reactor and isotope production landscape more visible and coordinated.",
      knownFor:
        "International reactor data, cooperation, and capacity visibility.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research Facilities
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            The reactors, accelerators, and production networks that turn nuclear infrastructure into usable isotopes for medicine, energy, quantum technologies, and industry.
          </p>
        </div>

        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Why Facilities Matter
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Most useful isotopes are not simply extracted from nature in the amounts modern systems need. They are made.
            </p>
            <p>
              That production depends on real infrastructure: research reactors, accelerators, target systems, processing facilities, and distribution networks. The availability of these facilities determines which isotopes can be supplied, at what scale, and with what resilience.
            </p>
            <p>
              In several critical cases, a relatively small number of facilities support a large share of global use. That concentration is one of the defining features of the isotope economy.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Research Reactors
          </h2>
          <div className="space-y-4">
            {reactors.map((item) => (
              <FacilityCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Accelerators & Cyclotrons
          </h2>
          <div className="space-y-4">
            {accelerators.map((item) => (
              <FacilityCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Strategic Production Networks
          </h2>
          <div className="space-y-4">
            {networks.map((item) => (
              <FacilityCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Further Resources
          </h2>
          <p className="text-gray-400 mb-6">
            Authoritative sources for research reactors, production facilities, and related programs:
          </p>
          <ul className="space-y-3 text-sky-400">
            <li>
              <a href="https://nucleus.iaea.org/rrdb/#/home" target="_blank" rel="noopener noreferrer" className="hover:underline">
                IAEA Research Reactor Database (RRDB)
              </a>
            </li>
            <li>
              <a href="https://www.isotopes.gov/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                National Isotope Development Center (NIDC)
              </a>
            </li>
            <li>
              <a href="https://science.osti.gov/Isotope-Research-Development-and-Production/Facilities" target="_blank" rel="noopener noreferrer" className="hover:underline">
                DOE Isotope Program Facilities
              </a>
            </li>
            <li>
              <a href="https://www.iaea.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                International Atomic Energy Agency (IAEA)
              </a>
            </li>
          </ul>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where to go next
          </h2>
          <p className="text-gray-400 mb-6">Continue through the resource hub:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/companies" className="py-3 px-6 button-primary text-center text-white rounded-lg">
              Companies
            </Link>
            <Link href="/isotopes" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Isotope Directory
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
