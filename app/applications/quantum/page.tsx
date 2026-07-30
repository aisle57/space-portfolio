import Link from "next/link";

const titleClass =
  "text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400";

export default function QuantumApplicationPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            Application Area
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quantum Technologies
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Quantum systems are extremely sensitive to their material
            environment. In several important hardware approaches, that
            sensitivity depends on isotopes.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Why isotopes matter in quantum</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Nuclear spins in host materials can disrupt coherence. Isotopic
              engineering reduces that noise and creates cleaner environments
              for qubits and related systems.
            </p>
            <p>
              As quantum hardware moves toward scale, access to high-purity
              isotopic materials becomes a supply-chain issue.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Key quantum-relevant isotopes</h2>
          <div className="space-y-4">
            {[
              {
                name: "Si-28",
                href: "/isotopes#si-28",
                about:
                  "High-purity silicon-28 reduces nuclear spin noise in silicon-based quantum devices.",
              },
              {
                name: "Si-29",
                href: "/isotopes#si-29",
                about:
                  "Spin-bearing silicon isotope often reduced when making quantum-grade Si-28 materials.",
              },
              {
                name: "Ge-70",
                href: "/isotopes#ge-70",
                about:
                  "Spin-free germanium isotope of growing interest for quantum devices.",
              },
              {
                name: "B-11",
                href: "/isotopes#b-11",
                about:
                  "Preferred boron isotope for many quantum and advanced materials contexts.",
              },
              {
                name: "B-10",
                href: "/isotopes#b-10",
                about:
                  "Important where high neutron absorption is required.",
              },
              {
                name: "C-12",
                href: "/isotopes#c-12",
                about:
                  "High-purity carbon-12 for selected quantum and precision materials uses.",
              },
              {
                name: "C-13",
                href: "/isotopes#c-13",
                about:
                  "Used in quantum sensing, NMR, and research contexts.",
              },
              {
                name: "He-3",
                href: "/isotopes#he-3",
                about:
                  "Strategic isotope for ultra-low temperature quantum infrastructure.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="font-semibold text-white mb-2">
                  <Link
                    href={item.href}
                    className="hover:text-sky-400 transition"
                  >
                    {item.name}
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.about}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Full curated entries live in the{" "}
            <Link
              href="/isotopes#quantum"
              className="text-sky-400 hover:underline"
            >
              Quantum & Advanced Materials section
            </Link>
            .
          </p>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Production and supply</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Quantum-relevant isotopes often require enrichment, not just
              chemical purity. Silicon-28 is the clearest example.
            </p>
            <p>
              Helium-3 adds another strategic constraint because of limited
              production routes and importance to cryogenic infrastructure.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className={titleClass}>Continue in the hub</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-6">
            <Link
              href="/isotopes#quantum"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Quantum Isotopes
            </Link>
            <Link
              href="/facilities"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Facilities
            </Link>
            <Link
              href="/companies"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Companies
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
