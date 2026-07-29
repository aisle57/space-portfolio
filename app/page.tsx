import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />

        {/* Bridge Section — reduced on mobile */}
        <section className="relative z-10 py-10 md:py-28 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="hidden md:block text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-6">
              A public resource for the isotope age
            </h2>
            <p className="hidden md:block text-gray-400 text-lg leading-relaxed mb-10">
              Most people encounter isotopes only in specialized fields.
              This hub makes the landscape visible: the isotopes that matter,
              the facilities that produce them, and the companies turning them
              into real capability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link
                href="/learn"
                className="py-3 px-6 button-primary text-center text-white rounded-lg"
              >
                Start Learning
              </Link>
              <Link
                href="/isotopes"
                className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
              >
                Isotope Directory
              </Link>
              <Link
                href="/facilities"
                className="py-3 px-6 border border-white/10 text-center text-gray-300 hover:border-sky-400 hover:text-sky-400 transition rounded-lg text-sm"
              >
                Research Facilities
              </Link>
              <Link
                href="/companies"
                className="py-3 px-6 border border-white/10 text-center text-gray-300 hover:border-sky-400 hover:text-sky-400 transition rounded-lg text-sm"
              >
                Companies
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
