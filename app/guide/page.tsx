import Link from "next/link";

export default function GuidePage() {
  return (
    <main className="h-full w-full">
      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-6">
          How to read this system
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Isotope Economy is an orientation layer. It is built to show structure,
          concentration, and dependence across isotope production. Use this page
          once, then treat the map and graph as the working tools.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Production over application
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Most public discussion starts with use cases: imaging, therapy,
            quantum materials, fusion concepts. The binding constraint is usually
            upstream. Irradiation time, enrichment capacity, radiochemical
            processing, and qualified release decide what can actually ship.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Read the hub that way. An isotope page matters less than the path
            that can produce it at useful scale.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why the map is sparse
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            The supply map does not plot every reactor on Earth. It plots sites
            that matter for isotope production: research reactors used for
            irradiation, accelerators that make radioisotopes, enrichment plants,
            and selected processing nodes.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Sparse coverage is intentional. The visual point is concentration.
            A dense map of unrelated power reactors would hide the real network.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            How to read the graph
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Nodes are isotopes, processes, facilities, companies, and
            applications. Links show dependence: produced by, used in, located
            at, supplies, requires.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Click a node for a short structural note. Follow the links outward.
            Clusters around Mo-99, Lu-177, Ac-225, enrichment, and processing
            are where system risk concentrates.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The graph is a dependency map, not a complete database of capacity
            figures.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What this hub is
          </h2>
          <ul className="text-gray-400 leading-relaxed space-y-2 list-disc list-inside">
            <li>A public orientation layer for isotope production and supply</li>
            <li>A selective map of production-relevant facilities</li>
            <li>A knowledge graph of structural dependencies</li>
            <li>A starting point for newcomers and a cross-check for specialists</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What this hub is not
          </h2>
          <ul className="text-gray-400 leading-relaxed space-y-2 list-disc list-inside">
            <li>Not a government or laboratory publication</li>
            <li>Not affiliated with DOE, IAEA, or any producer</li>
            <li>Not investment advice</li>
            <li>Not a live inventory of kilograms, curies, or order books</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Suggested path
          </h2>
          <ol className="text-gray-400 leading-relaxed space-y-2 list-decimal list-inside">
            <li>Skim Learn if you are new to isotopes</li>
            <li>Open the Supply Map and toggle layers</li>
            <li>Open the Graph and follow Mo-99, Lu-177, or enrichment</li>
            <li>Use Companies and Facilities for named actors</li>
            <li>Treat the Watchlist as a pressure-point list, not a forecast</li>
          </ol>
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
            Learn
          </Link>
        </div>
      </div>
    </main>
  );
}
