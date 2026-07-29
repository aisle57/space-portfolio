import Link from "next/link";

export default function AdvancedPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A denser look at the isotope economy: scientific origin, industrial structure, production constraints, and the forces pushing isotopes into strategic relevance.
          </p>
        </div>

        {/* Origin */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            From discovery to infrastructure
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              The concept of isotopes emerged when it became clear that atoms of the same element could have different masses. Same chemistry. Different nuclear composition. That distinction changed physics, chemistry, and eventually the material basis of multiple industries.
            </p>
            <p>
              Early work was scientific. Once nuclear reactors and particle accelerators existed at scale, isotopes stopped being only objects of study and became manufacturable inputs. Radioisotopes entered medicine. Industrial users adopted them for tracing, radiography, and sterilization. National laboratories and specialized producers formed the production backbone.
            </p>
            <p>
              The important shift was not just discovery. It was the creation of infrastructure that could reliably transform target materials into usable isotopic products, then process, separate, package, and distribute them under regulatory control.
            </p>
          </div>
        </section>

        {/* Why production dominates */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Production is the real system
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Applications get the attention. Production determines what is possible.
            </p>
            <p>
              Most high-value isotopes are not available in useful quantities from nature. They are made. That usually means one of two routes:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white">Reactor production</span> — targets are irradiated in a high neutron flux and transformed through nuclear reactions
              </li>
              <li>
                <span className="text-white">Accelerator production</span> — charged particle beams drive specific nuclear reactions in targets
              </li>
            </ul>
            <p>
              Stable isotope enrichment is a third path. Instead of creating a new nucleus, the process separates existing isotopes of an element to raise the abundance of the desired one. This is central to materials such as Si-28, where isotopic purity itself becomes a performance variable.
            </p>
            <p>
              After production comes processing: chemical separation, purification, quality control, packaging, logistics, and regulatory release. In practice, the bottleneck is often not the nuclear reaction alone. It is the full chain around it.
            </p>
          </div>
        </section>

        {/* Concentration */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Concentration and fragility
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              A defining feature of the isotope economy is concentration. A relatively small number of research reactors, accelerator facilities, and processing centers support a large share of global supply for key medical and research isotopes.
            </p>
            <p>
              That creates systemic fragility. When a major facility goes offline for maintenance, conversion, political disruption, or aging infrastructure, effects can propagate quickly through medical systems and research programs.
            </p>
            <p>
              This is one reason Mo-99 / Tc-99m has remained strategically visible for years. Diagnostic nuclear medicine depends on a continuous supply chain. The same pattern is emerging around therapeutic isotopes as demand for Lu-177 and alpha emitters grows faster than established capacity.
            </p>
          </div>
        </section>

        {/* Strategic isotopes */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            What makes an isotope strategic
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Not every isotope is strategic. Strategic importance appears when several conditions stack:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>It enables a capability that is difficult to substitute</li>
              <li>Production requires scarce infrastructure or specialized expertise</li>
              <li>Demand growth outpaces reliable supply</li>
              <li>It sits upstream of medicine, energy systems, quantum hardware, or national capability</li>
              <li>Disruptions create outsized downstream consequences</li>
            </ul>
            <p>
              Under that lens, isotopes such as Mo-99 / Tc-99m, Lu-177, Ac-225, Si-28, He-3, and selected fusion-relevant materials matter disproportionately. Their importance is not measured by tonnage. It is measured by leverage.
            </p>
          </div>
        </section>

        {/* Medical trajectory */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medicine is moving the demand curve
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Diagnostic isotopes built the modern medical isotope market. Therapeutic isotopes are reshaping it.
            </p>
            <p>
              Theranostics pairs imaging and therapy using related molecular targeting strategies. Lu-177 has become a flagship example. Alpha emitters such as Ac-225 are attracting intense interest because of their high local energy deposition and therapeutic potential.
            </p>
            <p>
              The constraint is familiar: clinical demand can grow faster than production systems designed under older assumptions. That is why new reactor targets, accelerator routes, generator systems, and commercial production projects are now central to the medical isotope conversation.
            </p>
          </div>
        </section>

        {/* Quantum / materials */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Stable isotopes and the materials layer
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Radioisotopes dominate public discussion. Stable isotopes are quieter and increasingly important.
            </p>
            <p>
              In quantum devices and precision semiconductor systems, nuclear spin and isotopic disorder are not abstract concerns. They affect coherence, noise, and material behavior. Highly enriched Si-28 is the clearest current example: removing spin-bearing silicon isotopes creates a cleaner host environment for certain qubit architectures.
            </p>
            <p>
              Similar logic applies to selected isotopes of boron, germanium, carbon, and other materials. In these cases, enrichment is not a side process. It is part of the materials stack.
            </p>
            <p>
              That links isotope capability directly to advanced computing and semiconductor strategy.
            </p>
          </div>
        </section>

        {/* Energy */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Energy systems and long-cycle demand
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Nuclear energy has always been isotope-dependent. Fuel cycles, breeding strategies, and specialized materials all rely on specific nuclear properties.
            </p>
            <p>
              Looking forward, advanced reactors and fusion-related concepts raise additional isotope questions. Tritium handling, lithium isotope ratios for breeding blankets, and specialized materials performance all sit inside that long-cycle planning problem.
            </p>
            <p>
              These demands are slower-moving than medical theranostics, but they are structurally important. Energy systems operate on long timelines. Isotope readiness has to be thought about the same way.
            </p>
          </div>
        </section>

        {/* Future pressure */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where the pressure is building
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Several forces are pushing isotopes upward in strategic importance:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Rapid growth in radiopharmaceutical therapy</li>
              <li>Rising interest in alpha emitters and new production routes</li>
              <li>Quantum and semiconductor demand for isotopically engineered materials</li>
              <li>Concern over concentrated production infrastructure</li>
              <li>National interest in resilient domestic supply chains</li>
              <li>Long-horizon energy systems that depend on specific isotopes</li>
            </ul>
            <p>
              The common theme is leverage. Small amounts of the right isotope can unlock or constrain large downstream systems. That is the core of the isotope economy.
            </p>
          </div>
        </section>

        {/* How to read the hub */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            How to read the rest of the hub
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              The main site is organized as a map:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white">Learn</span> — orientation for people new to the subject
              </li>
              <li>
                <span className="text-white">Isotope Directory</span> — the materials themselves
              </li>
              <li>
                <span className="text-white">Research Facilities</span> — where production happens
              </li>
              <li>
                <span className="text-white">Companies</span> — who commercializes and advances supply
              </li>
            </ul>
            <p>
              The Advanced section is the interpretive layer: why the map looks the way it does, and why certain points on that map matter more than others.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Continue
          </h2>
          <p className="text-gray-400 mb-6">
            Move from structure into the working resource pages:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link href="/isotopes" className="py-3 px-6 button-primary text-center text-white rounded-lg">
              Isotope Directory
            </Link>
            <Link href="/facilities" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Research Facilities
            </Link>
            <Link href="/companies" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Companies
            </Link>
            <Link href="/learn" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Learn
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
