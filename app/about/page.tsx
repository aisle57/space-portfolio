import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Isotope Economy
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A public resource for understanding isotopes and the infrastructure
            behind them.
          </p>
        </div>

        <section className="mb-12 space-y-5 text-gray-300 leading-relaxed">
          <p>
            Most people encounter isotopes only inside specialized fields:
            nuclear medicine, quantum materials, energy systems, or research.
            The production and enrichment network behind those uses is often
            invisible.
          </p>
          <p>
            Isotope Economy exists to make that landscape clearer. The hub maps
            important isotopes, the facilities that produce or separate them,
            the companies involved, and the dependencies that connect them.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-4">
            What this is
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>A public orientation layer for isotope supply structure</li>
            <li>
              A curated map of selected reactors, accelerators, and enrichment
              sites
            </li>
            <li>
              A knowledge graph of how isotopes, processes, facilities, and
              companies connect
            </li>
            <li>A quarterly watchlist of structural pressure points</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-4">
            What this is not
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li>Not a government or laboratory publication</li>
            <li>Not affiliated with DOE, IAEA, or any producer</li>
            <li>Not investment advice</li>
            <li>Not a complete global inventory of every facility on earth</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-4">
            Method
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Entries are curated from public information: institutional sources,
              company disclosures, and established nuclear and medical reference
              material.
            </p>
            <p>
              The map and graph prioritize system-relevant production,
              enrichment, and application nodes rather than attempting a complete
              global inventory on day one. Coverage will expand as additional
              sites and relationships are verified. Missing nodes should be read
              as incomplete coverage, not proof that something does not exist.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-4">
            Contact
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Isotope Economy is an independent public resource project.
            </p>
            <p>
              Corrections, missing sites, and better classifications are welcome.
              Public infrastructure only improves when people who know the systems
              push back on errors.
            </p>
            <p>
              Public contact:{" "}
              <Link
                href="https://x.com/IsotopeEconomy"
                target="_blank"
                rel="noreferrer noopener"
                className="text-sky-400 hover:underline"
              >
                @IsotopeEconomy on X
              </Link>
            </p>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <Link
            href="/map"
            className="py-3 px-6 button-primary text-center text-white rounded-lg"
          >
            Supply Map
          </Link>
          <Link
            href="/graph"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Knowledge Graph
          </Link>
          <Link
            href="/learn"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </main>
  );
}
