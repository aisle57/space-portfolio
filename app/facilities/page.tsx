import Link from "next/link";

type Facility = {
  name: string;
  tags: string[];
  location?: string;
  lat?: number;
  lng?: number;
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
      {item.location && (
        <p className="text-sky-400/90 text-sm mb-2">{item.location}</p>
      )}
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
      location: "Oak Ridge, Tennessee, USA",
      lat: 35.93,
      lng: -84.31,
      about:
        "Located at Oak Ridge National Laboratory, HFIR is one of the most important U.S. isotope production reactors. Its high neutron flux makes it especially valuable for producing both medical and research isotopes.",
      knownFor:
        "Medical isotopes, heavy actinides, and specialized research isotopes.",
      note: "A cornerstone of U.S. isotope production capability. Public reporting also places HFIR among the very small set of sources able to produce californium-252 at meaningful scale.",
    },
    {
      name: "Advanced Test Reactor (ATR)",
      tags: ["USA", "Research reactor"],
      location: "Idaho Falls area, Idaho, USA",
      lat: 43.52,
      lng: -112.05,
      about:
        "Located at Idaho National Laboratory, ATR is a major materials test reactor with important roles in irradiation services and isotope-related work.",
      knownFor:
        "Materials irradiation, research support, and selected isotope production roles.",
    },
    {
      name: "University of Missouri Research Reactor (MURR)",
      tags: ["USA", "University reactor", "Medical"],
      location: "Columbia, Missouri, USA",
      lat: 38.95,
      lng: -92.33,
      about:
        "MURR is one of the most significant university-based isotope production reactors in North America and an important supplier of medical isotopes.",
      knownFor: "Medical isotopes and research-related production.",
      note: "A key non-national-lab contributor to U.S. medical isotope supply.",
    },
    {
      name: "McMaster Nuclear Reactor",
      tags: ["Canada", "University reactor", "Medical"],
      location: "Hamilton, Ontario, Canada",
      lat: 43.26,
      lng: -79.92,
      about:
        "McMaster operates an important Canadian university reactor with medical isotope and research roles.",
      knownFor: "Medical and research isotope production in Canada.",
    },
    {
      name: "BR2",
      tags: ["Belgium", "Research reactor", "Medical"],
      location: "Mol, Belgium",
      lat: 51.22,
      lng: 5.09,
      about:
        "BR2 is a major European high-flux research reactor and an important part of the continent's medical and research isotope infrastructure.",
      knownFor: "High-flux irradiation and medical isotope production.",
    },
    {
      name: "HFR Petten",
      tags: ["Netherlands", "Research reactor", "Medical"],
      location: "Petten, Netherlands",
      lat: 52.79,
      lng: 4.67,
      about:
        "HFR Petten has long been one of the most important European reactors for medical isotope production.",
      knownFor: "Medical isotope production and irradiation services.",
    },
    {
      name: "FRM II",
      tags: ["Germany", "Research reactor"],
      location: "Garching, Germany",
      lat: 48.27,
      lng: 11.67,
      about:
        "FRM II is a major German research reactor supporting neutron science and isotope-related irradiation work.",
      knownFor: "Research irradiation and specialized isotope support.",
    },
    {
      name: "Institut Laue-Langevin (ILL)",
      tags: ["France", "Research reactor", "Neutron source"],
      location: "Grenoble, France",
      lat: 45.19,
      lng: 5.72,
      about:
        "ILL operates one of the world's leading high-flux neutron sources and is a central European research infrastructure.",
      knownFor: "High-flux neutron research and related irradiation capability.",
    },
    {
      name: "LVR-15",
      tags: ["Czech Republic", "Research reactor"],
      location: "Rez, Czech Republic",
      lat: 50.16,
      lng: 14.37,
      about:
        "LVR-15 is an important Central European research reactor used for irradiation and isotope-related work.",
      knownFor: "Research reactor irradiation and regional isotope support.",
    },
    {
      name: "MARIA reactor",
      tags: ["Poland", "Research reactor", "Medical"],
      location: "Swierk, Poland",
      lat: 52.12,
      lng: 21.35,
      about:
        "MARIA is Poland's key research reactor and a meaningful part of European medical and research isotope capacity.",
      knownFor: "Medical and research isotope production.",
    },
    {
      name: "OPAL",
      tags: ["Australia", "Research reactor", "Medical"],
      location: "Lucas Heights, Australia",
      lat: -34.05,
      lng: 150.98,
      about:
        "OPAL is Australia's open-pool research reactor and the core of ANSTO's isotope production capability.",
      knownFor:
        "Medical and industrial isotope production for Australia and export markets.",
    },
    {
      name: "SAFARI-1",
      tags: ["South Africa", "Research reactor", "Medical"],
      location: "Pelindaba, South Africa",
      lat: -25.8,
      lng: 27.94,
      about:
        "SAFARI-1 supports major medical isotope production through South Africa's NTP system.",
      knownFor: "Medical isotope production, including Mo-99 related supply.",
    },
    {
      name: "HANARO",
      tags: ["South Korea", "Research reactor"],
      location: "Daejeon, South Korea",
      lat: 36.42,
      lng: 127.37,
      about:
        "HANARO is South Korea's leading research reactor platform for neutron science and isotope-related work.",
      knownFor: "Research irradiation and regional isotope capability.",
    },
    {
      name: "Dhruva",
      tags: ["India", "Research reactor"],
      location: "Trombay, Mumbai, India",
      lat: 19.01,
      lng: 72.92,
      about:
        "Dhruva is a major Indian research reactor within the country's broader nuclear research and isotope infrastructure.",
      knownFor: "Research reactor capacity and isotope-related irradiation.",
    },
    {
      name: "SM-3",
      tags: ["Russia", "Research reactor", "Cf-252"],
      location: "Dimitrovgrad area, Russia",
      about:
        "Russian research reactor associated with specialized isotope production. Public reporting treats SM-3, alongside HFIR, as one of the very small set of sources able to produce californium-252 at meaningful scale.",
      knownFor:
        "Specialized high-value isotope production, including Cf-252 related pathways.",
      note: "Concentration risk example. When only a handful of reactors can make a given isotope, outage or access limits become system-level issues.",
    },
    {
      name: "PALLAS",
      tags: ["Netherlands", "Under construction", "Research reactor"],
      location: "Petten area, Netherlands",
      about:
        "Planned high-flux research reactor intended to succeed HFR Petten as a major European medical isotope irradiation source. Not operating yet.",
      knownFor:
        "Future Mo-99 and medical isotope irradiation capacity for Europe.",
      note: "Under construction. Public planning points to operation around 2030 to 2031. Important because HFR Petten is a concentrated node in current supply. Listed here, not as an active map production node.",
    },
  ];

  const powerReactors: Facility[] = [
    {
      name: "Bruce Power IPS",
      tags: ["Canada", "Power reactor", "Lu-177", "Co-60"],
      location: "Tiverton, Ontario, Canada",
      lat: 44.32,
      lng: -81.6,
      about:
        "Commercial power-reactor isotope production system supporting Lu-177 and Co-60 pathways, including on-site hot cell capability that strengthens therapeutic isotope supply logistics.",
      knownFor: "Power-reactor production of Lu-177 and Co-60 related isotopes.",
      note: "Structurally different from dedicated research reactors. Commercial power infrastructure used for isotope output.",
    },
    {
      name: "Darlington",
      tags: ["Canada", "Power reactor", "Mo-99"],
      location: "Clarington, Ontario, Canada",
      lat: 43.87,
      lng: -78.72,
      about:
        "Power-reactor pathway supporting Mo-99 related production. Part of the broader shift toward using selected commercial reactors for medical isotope supply.",
      knownFor: "Power-reactor Mo-99 related production pathways.",
      note: "Another example of commercial nuclear infrastructure entering isotope supply, not a research reactor built primarily for irradiation services.",
    },
    {
      name: "Salem Nuclear Generating Station",
      tags: ["USA", "Power reactor", "Co-60"],
      location: "Lower Alloways Creek, New Jersey, USA",
      about:
        "Commercial PWR site selected for first commercial-scale cobalt-60 production in U.S. pressurized water reactors under publicly announced agreements involving Westinghouse, Nordion, and PSEG Nuclear. Represents a domestic power-reactor pathway for industrial and medical Co-60 supply.",
      note:
        "Public project only. Planned Co-60 pathway in a U.S. PWR. Structurally different from research-reactor isotope production. Status depends on licensing and implementation schedules.",
    },
  ];

  const accelerators: Facility[] = [
    {
      name: "Brookhaven Linac Isotope Producer (BLIP)",
      tags: ["USA", "Accelerator", "Medical"],
      location: "Upton, New York, USA",
      lat: 40.87,
      lng: -72.87,
      about:
        "BLIP is a key U.S. accelerator-based isotope production facility at Brookhaven National Laboratory.",
      knownFor: "Accelerator-produced medical and research isotopes.",
    },
    {
      name: "Salem Nuclear Generating Station",
      tags: ["USA", "Power reactor", "Co-60"],
      location: "Lower Alloways Creek, New Jersey, USA",
      about:
        "Commercial PWR site selected for first commercial-scale cobalt-60 production in U.S. pressurized water reactors under publicly announced agreements involving Westinghouse, Nordion, and PSEG Nuclear. Represents a domestic power-reactor pathway for industrial and medical Co-60 supply.",
      knownFor:
        "Planned Co-60 production pathway in a U.S. PWR, expanding supply beyond traditional foreign and CANDU-centered sources.",
      note:
        "Public project only. Structurally different from research-reactor isotope production. Status depends on licensing and implementation schedules.",
    },
    {
      name: "TRIUMF",
      tags: ["Canada", "Accelerator", "Medical"],
      location: "Vancouver, British Columbia, Canada",
      lat: 49.25,
      lng: -123.23,
      about:
        "TRIUMF is Canada's particle accelerator centre with major roles in isotope research and production.",
      knownFor: "Accelerator-based medical and research isotopes.",
    },
    {
      name: "ARRONAX",
      tags: ["France", "Accelerator", "Medical"],
      location: "Nantes, France",
      lat: 47.25,
      lng: -1.52,
      about:
        "ARRONAX is a dedicated European accelerator facility focused on medical radioisotope production and research.",
      knownFor: "Medical radioisotope production by accelerator routes.",
    },
    {
      name: "Paul Scherrer Institute (PSI)",
      tags: ["Switzerland", "Accelerator", "Research"],
      location: "Villigen, Switzerland",
      lat: 47.54,
      lng: 8.22,
      about:
        "PSI is a major Swiss research centre with accelerator infrastructure used in isotope and nuclear science work.",
      knownFor: "Accelerator research and specialized isotope capability.",
    },
    {
      name: "iThemba LABS",
      tags: ["South Africa", "Accelerator"],
      location: "Cape Town area, South Africa",
      lat: -33.98,
      lng: 18.62,
      about:
        "iThemba LABS provides accelerator-based nuclear research and isotope-related capability in South Africa.",
      knownFor: "Accelerator isotope research and regional production support.",
    },
  ];

  const networks: Facility[] = [
    {
      name: "DOE Isotope Program / NIDC network",
      tags: ["USA", "National network", "Strategic"],
      about:
        "Coordinates production and distribution of many research and specialty isotopes across U.S. national laboratory capabilities.",
      knownFor:
        "Research isotopes, specialty isotopes, and strategic production coordination.",
      note: "Network layer, not a single map point.",
    },
    {
      name: "IAEA research reactor and isotope cooperation frameworks",
      tags: ["International", "Coordination"],
      about:
        "International cooperation, data resources, and technical support across the global research reactor landscape.",
      knownFor:
        "International reactor data, cooperation, and capacity visibility.",
      note: "Network layer, not a single map point.",
    },
    {
      name: "Regional radiopharmacy and distribution networks",
      tags: ["Global", "Logistics", "Medical"],
      about:
        "Regional radiopharmacies and distribution systems convert produced isotopes into clinically usable doses on time.",
      knownFor:
        "Last-mile medical isotope preparation, quality control, and clinical supply.",
      note: "Distributed logistics layer, not a single map point.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research Facilities
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mb-4">
            The reactors, accelerators, and production networks that turn
            nuclear infrastructure into usable isotopes. Point sites include
            location data for future mapping.
          </p>
          <p className="text-gray-500 text-sm">
            Content reviewed August 2026. Production nodes update when capacity
            or status changes.
          </p>
        </div>

        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Power reactors as isotope producers
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Not all isotope production sits in research reactors or
              accelerators. Selected power reactors are now part of the supply
              system, especially for Lu-177 and Mo-99 related pathways.
            </p>
            <p>
              Bruce Power IPS and Darlington are the clearest current examples in
              this hub. They represent a different production route: commercial
              power infrastructure used for isotope output, not a dedicated
              research reactor built primarily for irradiation services.
            </p>
            <p>
              That distinction matters for capacity planning. Research-reactor
              outages and power-reactor isotope programs are not the same risk
              profile.
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
            Power Reactor Isotope Production
          </h2>
          <div className="space-y-4">
            {powerReactors.map((item) => (
              <FacilityCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Accelerators
          </h2>
          <div className="space-y-4">
            {accelerators.map((item) => (
              <FacilityCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Networks & Coordination
          </h2>
          <div className="space-y-4">
            {networks.map((item) => (
              <FacilityCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where to go next
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/isotopes"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Isotope Directory
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
            <Link
              href="/links"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Links
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
