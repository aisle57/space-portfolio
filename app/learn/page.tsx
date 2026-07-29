import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What is an isotope?
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A clear starting point for anyone who wants to understand isotopes and why they matter.
          </p>
        </div>

        <section className="mb-16 space-y-6 text-gray-300 leading-relaxed">
          <p>
            Every element is defined by the number of protons in its atoms. Carbon always has 6 protons. Uranium always has 92. That number is fixed for each element.
          </p>
          <p>
            The number of neutrons, however, can vary. Atoms of the same element that have different numbers of neutrons are called isotopes.
          </p>
          <p>
            For example, most carbon atoms have 6 neutrons (carbon-12). Some have 7 (carbon-13). A very small number have 8 (carbon-14). These are all carbon, but they are different isotopes of carbon.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Stable and unstable isotopes
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Some isotopes are stable. They remain as they are indefinitely.
            </p>
            <p>
              Others are unstable. Over time they transform into different isotopes or elements and release energy in the process. These are radioactive isotopes, also called radioisotopes.
            </p>
            <p>
              The energy and particles released by radioisotopes are what make them useful in medicine, industry, energy systems, and research.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Why isotopes matter
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Isotopes are embedded in critical systems:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Medical imaging and cancer therapy</li>
              <li>Nuclear energy and advanced reactor systems</li>
              <li>Quantum computing and precision materials</li>
              <li>Industrial measurement, tracing, and sterilization</li>
              <li>Space power systems and strategic applications</li>
            </ul>
            <p>
              In many of these areas, specific isotopes are irreplaceable. Their availability depends on specialized production facilities and supply chains.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            How isotopes are made
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Most of the isotopes used in technology do not occur in useful quantities in nature. They have to be produced.
            </p>
            <p>
              The two primary methods are:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white">Nuclear reactors</span> — materials are placed in a high neutron environment and transformed into the desired isotopes.
              </li>
              <li>
                <span className="text-white">Particle accelerators</span> — beams of particles are used to create specific isotopes through nuclear reactions.
              </li>
            </ul>
            <p>
              A smaller number of isotopes are obtained through other specialized processes, including enrichment of stable isotopes.
            </p>
          </div>
        </section>

        <section className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where to go next
          </h2>
          <p className="text-gray-400 mb-8">
            Once the basics are clear, move into the resource hub:
          </p>
          <div className="flex flex-col gap-4">
            <Link
              href="/isotopes"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              1. Isotope Directory
            </Link>
            <Link
              href="/facilities"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              2. Research Facilities
            </Link>
            <Link
              href="/companies"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              3. Companies
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
