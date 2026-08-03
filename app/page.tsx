import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />

        <section className="relative z-10 py-16 md:py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-6">
              How to use this hub
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Start with the basics, explore the major application areas, then
              use the map and graph to see where supply sits and how it connects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              <Link
                href="/learn"
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 1
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">Learn</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Clear starting point for anyone new to isotopes and why they
                  matter.
                </p>
              </Link>

              <Link
                href="#projects"
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 2
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Applications
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Field gateways into medicine, quantum technologies, and
                  nuclear production.
                </p>
              </Link>

              <Link
                href="/map"
                className="p-6 rounded-2xl border border-sky-400/30 bg-white/[0.03] hover:border-sky-400/60 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 3
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Supply Map
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reactors, accelerators, and enrichment plants. Geography of
                  the thin global network.
                </p>
              </Link>

              <Link
                href="/graph"
                className="p-6 rounded-2xl border border-violet-400/30 bg-white/[0.03] hover:border-violet-400/60 transition"
              >
                <p className="text-violet-300 text-sm mb-2 tracking-wide uppercase">
                  Path 4
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Knowledge Graph
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  How isotopes, processes, facilities, and companies depend on
                  each other.
                </p>
              </Link>

              <Link
                href="/watch"
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 5
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Q3 Watchlist
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Structural pressure points this quarter. What is under tension
                  now, and why.
                </p>
              </Link>

              <Link
                href="/isotopes"
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 6
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Directory
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Isotope reference layer, then facilities, companies, and
                  external sources.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <Projects />
        <Skills />
      </div>
    </main>
  );
}
