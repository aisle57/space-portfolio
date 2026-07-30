import Link from "next/link";

const titleClass =
  "text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400";

export default function CapitalPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            Industry Structure
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Capital & Markets
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            How capital enters the isotope economy, where it concentrates, and
            what it often underweights. This is industry structure, not
            investment advice.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Why capital shows up</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Isotopes are constrained inputs with outsized downstream leverage.
              Relatively small production systems support diagnostic networks,
              therapeutic platforms, advanced materials, and strategic energy
              pathways.
            </p>
            <p>
              Capital interest rises when demand growth, supply concentration,
              and long infrastructure timelines become visible together.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Where capital concentrates</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Medical demand platforms
              </h3>
              <p>
                Radiopharmaceutical and theranostic systems are the most visible
                commercial pull. Capital follows clinical adoption and the
                production capacity required to support it.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Enrichment and isotopic materials
              </h3>
              <p>
                Stable isotope enrichment attracts capital where purity itself is
                the product: quantum materials, specialized gases, and related
                advanced inputs.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Strategic nuclear-adjacent capacity
              </h3>
              <p>
                Fuel-cycle and energy-linked pathways draw slower, more regulated
                capital with longer timelines and higher infrastructure burden.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>How capital usually enters</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <ul className="list-disc list-inside space-y-3">
              <li>Public companies in production, enrichment, or radiopharma</li>
              <li>Private technology and production developers</li>
              <li>National laboratory and government-backed programs</li>
              <li>
                Downstream buyers securing access to constrained inputs
              </li>
            </ul>
            <p>
              The common pattern is infrastructure first, recurring product flow
              later. Commercial reference points live on the{" "}
              <Link href="/companies" className="text-sky-400 hover:underline">
                Companies
              </Link>{" "}
              page.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>What capital often underweights</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <ul className="list-disc list-inside space-y-3">
              <li>Processing and separation capacity</li>
              <li>Logistics and radiopharmacy timing</li>
              <li>Regulatory release and quality systems</li>
              <li>Facility concentration risk</li>
              <li>
                The gap between technical demonstration and reliable supply
              </li>
            </ul>
            <p>
              In this field, feasibility is not the same as manufacturable,
              inspectable, deliverable product at scale.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Use the rest of the hub for detail</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Capital & Markets is the financing lens only. Operational detail
              lives elsewhere:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <Link href="/companies" className="text-sky-400 hover:underline">
                  Companies
                </Link>{" "}
                — commercial map
              </li>
              <li>
                <Link href="/facilities" className="text-sky-400 hover:underline">
                  Facilities
                </Link>{" "}
                — production infrastructure
              </li>
              <li>
                <Link href="/isotopes" className="text-sky-400 hover:underline">
                  Directory
                </Link>{" "}
                — the materials
              </li>
              <li>
                <Link href="/advanced" className="text-sky-400 hover:underline">
                  Advanced
                </Link>{" "}
                — strategic framing
              </li>
              <li>
                <Link href="/links" className="text-sky-400 hover:underline">
                  Links
                </Link>{" "}
                — external sources
              </li>
            </ul>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className={titleClass}>Continue</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-2">
            <Link
              href="/companies"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Companies
            </Link>
            <Link
              href="/facilities"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Facilities
            </Link>
            <Link
              href="/advanced"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Advanced
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
