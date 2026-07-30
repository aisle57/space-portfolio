import Link from "next/link";

const titleClass =
  "text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400";

export default function NuclearApplicationPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            Application Area
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuclear Production
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nuclear systems depend on specific isotopes, not generic elements.
            Fissile materials, fertile materials, fusion-related isotopes, and
            specialized nuclear products form the backbone of energy,
            research, and strategic infrastructure.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Why isotopes matter in nuclear systems</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Nuclear energy is an isotope business at its core. Reactors run
              because certain nuclei can sustain fission. Fuel cycles matter
              because some isotopes can be converted into others. Fusion
              concepts depend on specific hydrogen and lithium isotopes.
            </p>
            <p>
              That is why enrichment, breeding, and isotopic composition are
              central engineering problems. The difference between U-235 and
              U-238 is not academic. It determines whether a fuel system works.
            </p>
            <p>
              The same logic extends beyond power reactors into research
              reactors, space power systems, and the broader nuclear materials
              complex that supports medicine and industry.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>How nuclear isotopes are used</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Fission energy
              </h3>
              <p>
                Commercial reactors depend on fissile isotopes, especially
                U-235. Enrichment raises the concentration of that isotope so
                fuel can sustain a controlled chain reaction. Other fissile
                species such as Pu-239 appear in broader fuel-cycle strategies.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Fertile materials and breeding
              </h3>
              <p>
                Fertile isotopes such as U-238 and Th-232 can be converted into
                fissile isotopes under neutron exposure. That conversion is the
                basis of breeding concepts and advanced fuel cycles.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Fusion-related isotopes
              </h3>
              <p>
                Fusion concepts rely on isotopic fuel and materials systems.
                Deuterium, tritium, and lithium-6 are especially important in
                pathways that depend on tritium breeding and controlled fusion
                reactions.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Research, space, and specialized power
              </h3>
              <p>
                Nuclear isotopes also support research reactors, neutron
                sources, and specialized power systems. Plutonium-238 remains
                critical for long-lived space power applications.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Key nuclear isotopes</h2>
          <div className="space-y-4">
            {[
              {
                name: "U-235",
                about:
                  "The primary fissile isotope used in most commercial nuclear reactors. Enrichment of U-235 is central to the nuclear fuel cycle.",
              },
              {
                name: "U-238",
                about:
                  "The dominant isotope in natural uranium and a fertile material that can be converted into plutonium-239 in reactor systems.",
              },
              {
                name: "Pu-239",
                about:
                  "A key fissile isotope produced in reactors and used in certain fuel-cycle strategies.",
              },
              {
                name: "Pu-238",
                about:
                  "Critical for radioisotope thermoelectric generators used in space systems and other specialized power applications.",
              },
              {
                name: "Th-232",
                about:
                  "The fertile isotope at the center of thorium fuel cycle research and advanced reactor concepts.",
              },
              {
                name: "U-233",
                about:
                  "A fissile isotope relevant to thorium-based fuel cycle pathways.",
              },
              {
                name: "H-2 (Deuterium)",
                about:
                  "Stable heavy hydrogen isotope used in fusion research and specialized applications.",
              },
              {
                name: "H-3 (Tritium)",
                about:
                  "Radioactive hydrogen isotope important to certain fusion approaches and specialized nuclear applications.",
              },
              {
                name: "Li-6",
                about:
                  "Strategically important for tritium breeding concepts in fusion blanket systems.",
              },
              {
                name: "Li-7",
                about:
                  "Relevant in some nuclear system chemistries and lithium-related nuclear applications.",
              },
              {
                name: "He-3",
                about:
                  "Scarce strategic isotope with roles in research, detection, and specialized nuclear-related systems.",
              },
              {
                name: "He-4",
                about:
                  "The common helium isotope foundational to cryogenics and many nuclear-adjacent industrial systems.",
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
              Nuclear isotope supply is inseparable from the fuel cycle and
              national nuclear infrastructure. Enrichment capacity, reactor
              fleets, reprocessing choices, and specialized production
              facilities all shape what is available.
            </p>
            <p>
              For commercial power, the central issue is access to enriched
              uranium and the industrial systems around it. For advanced
              reactors, HALEU and related enrichment pathways have become
              strategically important.
            </p>
            <p>
              Fusion adds a different pressure. Tritium availability, lithium
              isotope management, and materials systems for breeding are still
              being engineered at scale.
            </p>
            <p>
              Specialized isotopes such as Pu-238 show another side of the
              problem: some nuclear products are mission-critical and
              production-constrained at the same time.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>
            Facilities and companies behind the field
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Nuclear isotope capability is built from large infrastructure:
              enrichment plants, reactors, national laboratories, fuel-cycle
              companies, and specialized production networks.
            </p>
            <p>Key parts of the landscape include:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>Enrichment companies and fuel-cycle operators</li>
              <li>
                Research reactors and irradiation facilities used for isotope
                and materials work
              </li>
              <li>
                National programs coordinating strategic nuclear materials and
                specialty isotopes
              </li>
              <li>
                Companies developing advanced reactor fuel pathways such as
                HALEU
              </li>
            </ul>
            <p>
              This is the most infrastructure-heavy layer of the isotope
              economy. Capability is slow to build, strategic in nature, and
              tightly connected to national systems.
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
              Nuclear systems are being asked to do more: denser power, advanced
              reactor designs, stronger domestic fuel security, and possible
              future fusion deployment.
            </p>
            <p>
              That raises the importance of enrichment capacity, isotopic
              materials management, and specialized production routes. HALEU,
              tritium systems, and constrained strategic isotopes are all part
              of that pressure.
            </p>
            <p>
              The nuclear layer of the isotope economy is therefore not only
              about existing reactor fleets. It is about whether the materials
              and production systems needed for the next generation of nuclear
              technology can actually be built.
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
