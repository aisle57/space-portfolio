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
            environment. In several of the most important hardware approaches,
            that sensitivity depends on isotopes. Controlling isotopic
            composition is becoming a core materials problem for quantum
            computing, sensing, and precision devices.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Why isotopes matter in quantum</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Many quantum devices rely on fragile quantum states. Nuclear
              spins in the surrounding material can act as a source of noise.
              If the host material contains isotopes with nuclear spin, those
              spins can disrupt coherence and reduce device performance.
            </p>
            <p>
              That is why isotopically engineered materials matter. By
              enriching or purifying specific isotopes, researchers can reduce
              spin noise and create cleaner environments for qubits and related
              quantum systems.
            </p>
            <p>
              This is not only a laboratory curiosity. As quantum hardware
              moves toward scale, access to high-purity isotopic materials
              becomes a supply-chain and infrastructure issue.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>How isotopes are used</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Spin-free host materials
              </h3>
              <p>
                Some isotopes have zero nuclear spin. When a material is
                enriched in those isotopes, the nuclear-spin background drops.
                That is the logic behind high-purity silicon-28 and selected
                germanium isotopes in quantum device research.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Quantum sensing and NMR
              </h3>
              <p>
                Other isotopes are useful precisely because of their nuclear
                properties. Carbon-13 and related species appear in sensing,
                spectroscopy, and precision measurement contexts where isotopic
                identity is part of the signal.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Cryogenics and infrastructure
              </h3>
              <p>
                Quantum hardware also depends on supporting infrastructure.
                Helium-3 is strategically important for ultra-low temperature
                systems used in quantum research and dilution refrigeration.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Advanced materials engineering
              </h3>
              <p>
                Beyond single isotopes, the field is moving toward controlled
                isotopic composition as a materials design variable. That
                includes silicon, germanium, boron, carbon, and other systems
                where nuclear properties affect device behavior.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Key quantum-relevant isotopes</h2>
          <div className="space-y-4">
            {[
              {
                name: "Si-28",
                about:
                  "One of the most important stable isotopes for silicon-based quantum devices. Highly enriched Si-28 reduces nuclear spin noise and supports cleaner qubit environments.",
              },
              {
                name: "Si-29",
                about:
                  "The spin-bearing silicon isotope often being reduced when producing high-purity Si-28 materials for quantum hardware.",
              },
              {
                name: "Ge-70",
                about:
                  "A spin-free germanium isotope of growing interest for quantum devices and silicon-germanium systems.",
              },
              {
                name: "B-11",
                about:
                  "Preferred boron isotope for many quantum and advanced materials contexts because of its nuclear properties.",
              },
              {
                name: "B-10",
                about:
                  "Important where high neutron absorption is required, and relevant as the counterpart in boron isotope engineering.",
              },
              {
                name: "C-12",
                about:
                  "High-purity carbon-12 is relevant in selected quantum and precision materials applications.",
              },
              {
                name: "C-13",
                about:
                  "Used in quantum sensing, NMR, and research contexts where nuclear spin is useful rather than harmful.",
              },
              {
                name: "He-3",
                about:
                  "Strategically important for ultra-low temperature systems and quantum research infrastructure.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.about}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Full curated entries live in the{" "}
            <Link href="/isotopes" className="text-sky-400 hover:underline">
              Isotope Directory
            </Link>
            .
          </p>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Production and supply</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Quantum-relevant isotopes often require enrichment, not just
              chemical purity. Silicon-28 is the clearest example: natural
              silicon already contains the element, but quantum hardware may
              need isotopic enrichment far beyond ordinary semiconductor grade.
            </p>
            <p>
              That makes enrichment technology part of the quantum supply
              chain. Laser isotope separation, centrifuge-based methods, and
              specialized production pathways all matter here.
            </p>
            <p>
              Helium-3 adds another layer of strategic constraint. It is scarce,
              valuable, and tied to limited production routes, yet important to
              cryogenic infrastructure used across quantum research.
            </p>
            <p>
              As quantum systems move from lab demos toward manufacturable
              hardware, isotopic materials stop being a side issue and become
              part of industrial readiness.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>
            Facilities and companies behind the field
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              The quantum isotope layer sits at the intersection of materials
              science, enrichment technology, and advanced manufacturing.
            </p>
            <p>Key parts of the landscape include:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                Companies advancing stable isotope enrichment for silicon and
                related materials
              </li>
              <li>
                Laser isotope separation developers working on quantum-relevant
                pathways
              </li>
              <li>
                Research institutions and national labs developing isotopically
                controlled materials
              </li>
              <li>
                Cryogenic and quantum infrastructure suppliers connected to
                helium-3 and ultra-low temperature systems
              </li>
            </ul>
            <p>
              This is still an early commercial layer compared with medical
              isotopes, but the strategic direction is clear: quantum hardware
              will need reliable isotopic materials supply.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Where the field is heading</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Quantum computing has forced a deeper look at materials that used
              to be treated as background detail. Isotopic purity is one of
              those details that becomes central once coherence, yield, and
              manufacturability matter.
            </p>
            <p>
              Silicon-28 is the leading example today, but it is unlikely to be
              the last. Germanium systems, boron chemistry, carbon materials,
              and specialized cryogenic isotopes all point to a broader pattern:
              nuclear properties are becoming design variables in advanced
              hardware.
            </p>
            <p>
              The long-term implication is that quantum technology will not only
              depend on algorithms and chip architectures. It will also depend
              on whether the isotope economy can supply the materials those
              systems need.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className={titleClass}>Continue in the hub</h2>
          <p className="text-gray-400 mb-6">
            Move from this field overview into the curated resource layers:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/isotopes"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Isotope Directory
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
            <Link
              href="/advanced"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Advanced
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
