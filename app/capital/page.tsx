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
            Isotopes sit at the intersection of infrastructure, regulation, and
            specialized demand. This page maps how capital enters the field and
            what structural forces shape that capital, without investment advice.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Why capital is paying attention</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              High-value isotopes are not ordinary commodities. They are scarce,
              regulated, production-constrained inputs that unlock large
              downstream systems in medicine, quantum hardware, energy, and
              industry.
            </p>
            <p>
              That leverage is what attracts capital. A comparatively small
              production system can support diagnostic networks, therapeutic
              platforms, advanced materials, or strategic energy pathways.
            </p>
            <p>
              Capital interest rises when demand growth, supply concentration,
              and long infrastructure timelines become visible at the same time.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Where the money actually goes</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Medical radioisotopes and theranostics
              </h3>
              <p>
                The most visible commercial layer. Diagnostic imaging created the
                installed base. Radioligand therapy and alpha systems are expanding
                demand into treatment, which increases pressure on production,
                processing, and distribution.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Enrichment and advanced materials
              </h3>
              <p>
                Stable isotope enrichment matters where isotopic purity itself is
                a performance variable. Silicon-28, selected germanium and boron
                pathways, and related materials sit in this layer, especially for
                quantum and semiconductor applications.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Nuclear fuel-cycle adjacent capacity
              </h3>
              <p>
                Enrichment, specialized nuclear materials, and long-cycle energy
                systems attract a different kind of capital: slower, more
                regulated, and more strategic.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Processing, logistics, and clinical infrastructure
              </h3>
              <p>
                Often underweighted. Isotope value is realized only after
                separation, quality control, packaging, transport, and timely
                delivery. These steps are part of the real system.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>How capital tends to enter</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>Capital usually shows up through several routes:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Public companies commercializing production, enrichment, or
                radiopharmaceutical platforms
              </li>
              <li>
                Private producers and technology developers building specialized
                capacity
              </li>
              <li>
                National programs and laboratory networks funding strategic
                isotopes and infrastructure
              </li>
              <li>
                Downstream healthcare, semiconductor, and energy firms securing
                access to constrained inputs
              </li>
            </ul>
            <p>
              The common pattern is infrastructure first, recurring product flow
              later. Build times are long. Regulatory pathways matter. Facility
              concentration remains a structural risk.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Public reference layer</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Public companies are useful as a map of where commercial activity is
              visible, not as recommendations.
            </p>
            <p>
              This hub keeps that map on the{" "}
              <Link href="/companies" className="text-sky-400 hover:underline">
                Companies
              </Link>{" "}
              page and the broader external index on{" "}
              <Link href="/links" className="text-sky-400 hover:underline">
                Links
              </Link>
              . Use those pages to orient around producers, enrichers, and
              application-side commercial players.
            </p>
            <p>
              Treat public listings as reference points in the industry structure.
              Company-specific evaluation belongs outside this resource hub.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>What markets often underweight</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>Several structural realities are easy to underprice:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Processing capacity, not just primary production</li>
              <li>Distribution and radiopharmacy logistics</li>
              <li>Regulatory release and quality systems</li>
              <li>Single-facility or single-region concentration risk</li>
              <li>Long commissioning timelines for new enrichment or reactor routes</li>
              <li>
                The difference between laboratory demonstration and reliable
                commercial supply
              </li>
            </ul>
            <p>
              In isotopes, technical feasibility is only part of the problem.
              Repeatable production under real constraints is the harder part.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>How this page fits the hub</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Capital & Markets is an interpretive layer, not a portfolio product.
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white">Companies</span> — commercial map
              </li>
              <li>
                <span className="text-white">Facilities</span> — production
                infrastructure
              </li>
              <li>
                <span className="text-white">Directory</span> — the isotopes
                themselves
              </li>
              <li>
                <span className="text-white">Advanced</span> — strategic framing
              </li>
              <li>
                <span className="text-white">Links</span> — external sources and
                institutions
              </li>
            </ul>
            <p>
              Use this page to understand the capital structure of the field.
              Use the resource maps to inspect the actual systems.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className={titleClass}>Continue in the hub</h2>
          <p className="text-gray-400 mb-6">
            Move from capital structure into the operating maps:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
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
              href="/isotopes"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Isotope Directory
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
