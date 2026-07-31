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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-6">
              How to use this hub
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Start with the basics, move into the major application areas, then
              use the resource maps and the quarterly watchlist to track what is
              under pressure now.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Link
                href="/learn"
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 1
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Learn
                </h3>
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
                href="#hub"
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-sky-400/40 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 3
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Resources
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Curated maps of isotopes, facilities, companies, and external
                  reference sources.
                </p>
              </Link>

              <Link
                href="/watch"
                className="p-6 rounded-2xl border border-sky-400/30 bg-white/[0.03] hover:border-sky-400/60 transition"
              >
                <p className="text-sky-400 text-sm mb-2 tracking-wide uppercase">
                  Path 4
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">
                  Q3 Watchlist
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Structural pressure points this quarter. What is under tension
                  now, and why.
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
