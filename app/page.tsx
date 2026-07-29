import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />

        {/* Bridge Section */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-6">
              A public resource for the isotope age
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Most people encounter isotopes only in specialized fields. 
              This hub exists to make the landscape visible: the isotopes that matter, 
              the facilities that produce them, and the companies turning them into real world capability.
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
                className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
              >
                Research Facilities
              </Link>
              <Link
                href="/companies"
                className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
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
