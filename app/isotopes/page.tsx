export default function IsotopesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Isotope Directory
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A curated foundation of the isotopes that matter most for medicine, energy, quantum technologies, advanced materials, and strategic supply chains. Links to complete official datasets are included for the full set of known isotopes.
          </p>
        </div>

        {/* Beginner Section */}
        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Start Here
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Most elements exist in more than one form. These different forms are called isotopes. They have the same number of protons, so they are the same element, but different numbers of neutrons.
            </p>
            <p>
              Some isotopes are stable. Others are unstable and release energy as they change. That energy and those nuclear properties are what make certain isotopes useful in medicine, energy systems, quantum technologies, and industry.
            </p>
            <p>
              This directory focuses on the isotopes that currently matter most, and points to complete data sources for every known isotope.
            </p>
          </div>
        </section>

        {/* Medical & Theranostics */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Theranostics
          </h2>
          <div className="space-y-4">
            {[
              ["Tc-99m", ["Medical", "Diagnostics"], "The dominant isotope in diagnostic nuclear medicine. Used in tens of millions of procedures each year."],
              ["F-18", ["Medical", "PET"], "Primary PET imaging isotope, most commonly used as FDG in oncology."],
              ["I-131", ["Medical", "Therapy"], "Established therapeutic and diagnostic isotope, especially in thyroid treatment."],
              ["I-123", ["Medical", "Diagnostics"], "Preferred iodine isotope for many diagnostic imaging applications."],
              ["Lu-177", ["Medical", "Theranostics"], "Leading therapeutic isotope for targeted radiopharmaceutical therapy."],
              ["Ac-225", ["Medical", "Alpha therapy"], "High-value alpha emitter under rapid development for targeted cancer therapy."],
              ["Tb-161", ["Medical", "Theranostics"], "Emerging theranostic isotope with promising therapeutic properties."],
              ["Y-90", ["Medical", "Therapy"], "Widely used therapeutic isotope for liver cancer and other targeted applications."],
              ["Ga-68", ["Medical", "PET"], "Important generator-produced PET isotope used in multiple diagnostic agents."],
              ["Cu-64", ["Medical", "Imaging", "Therapy"], "Versatile isotope used in both imaging and therapeutic research."],
              ["Zr-89", ["Medical", "PET"], "Growing PET isotope particularly useful for antibody-based imaging."],
              ["Ra-223", ["Medical", "Alpha therapy"], "Alpha-emitting therapeutic isotope used in bone metastases treatment."],
              ["Mo-99", ["Medical", "Parent isotope"], "Parent isotope for Tc-99m. Central to the global diagnostic imaging supply chain."],
            ].map(([name, tags, desc]) => (
              <div key={name as string} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{name as string}</h3>
                  {(tags as string[]).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{desc as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Energy & Nuclear */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Energy & Nuclear
          </h2>
          <div className="space-y-4">
            {[
              ["U-235", ["Energy", "Fissile"], "Primary fissile isotope used in most commercial nuclear reactors."],
              ["U-238", ["Energy", "Fertile"], "Fertile isotope that makes up the bulk of natural and depleted uranium."],
              ["Pu-239", ["Energy", "Fissile"], "Key fissile isotope produced in reactors and used in certain fuel cycles."],
              ["Pu-238", ["Space", "Power"], "Critical isotope for radioisotope thermoelectric generators used in space systems."],
              ["Th-232", ["Energy", "Fertile"], "Fertile isotope central to thorium fuel cycle research."],
              ["H-3 (Tritium)", ["Energy", "Fusion"], "Important for certain fusion approaches and specialized applications."],
              ["Li-6", ["Fusion", "Strategic"], "Important for tritium breeding in many fusion reactor designs."],
              ["He-3", ["Quantum", "Strategic"], "Strategic isotope used in quantum research, cryogenics, neutron detection, and specialized applications."],
              ["He-4", ["Industrial", "Cryogenics"], "The common isotope of helium. Foundational for cryogenics and many industrial uses."],
            ].map(([name, tags, desc]) => (
              <div key={name as string} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{name as string}</h3>
                  {(tags as string[]).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{desc as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quantum & Advanced Materials */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Quantum & Advanced Materials
          </h2>
          <div className="space-y-4">
            {[
              ["Si-28", ["Quantum", "Semiconductors"], "Highly enriched silicon-28 is critical for certain quantum computing approaches and ultra-pure materials research."],
              ["B-11", ["Quantum", "Materials"], "Preferred boron isotope for many quantum and advanced materials applications because of its nuclear properties."],
              ["B-10", ["Nuclear", "Control materials"], "High neutron absorption cross section. Important for control materials and specialized nuclear applications."],
              ["C-13", ["Quantum", "Research"], "Important in quantum sensing, NMR, and advanced materials research."],
              ["Ge-70", ["Quantum", "Semiconductors"], "Spin-free germanium isotope relevant to quantum devices and advanced semiconductor research."],
              ["C-12", ["Quantum", "Materials"], "Highly purified carbon-12 is relevant to certain quantum and precision materials applications."],
            ].map(([name, tags, desc]) => (
              <div key={name as string} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{name as string}</h3>
                  {(tags as string[]).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{desc as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industrial & Research */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Industrial & Research Staples
          </h2>
          <div className="space-y-4">
            {[
              ["C-14", ["Research", "Tracing"], "Essential for radiocarbon dating, tracing, and a wide range of research applications."],
              ["Co-60", ["Industrial", "Medical"], "Widely used in industrial radiography, sterilization, and medical applications."],
              ["Ir-192", ["Industrial"], "Important industrial radiography isotope."],
              ["Am-241", ["Industrial", "Instrumentation"], "Used in smoke detectors, industrial gauges, and specialized applications."],
              ["Cf-252", ["Research", "Neutron source"], "Powerful neutron source used in research, industry, and specialized nuclear applications."],
            ].map(([name, tags, desc]) => (
              <div key={name as string} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{name as string}</h3>
                  {(tags as string[]).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{desc as string}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full datasets */}
        <section className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Complete Isotope Data
          </h2>
          <p className="text-gray-400 mb-6">
            This directory focuses on the isotopes that currently matter most for technological and economic systems. For the full set of all known isotopes, including the newest discoveries, use these authoritative sources:
          </p>
          <ul className="space-y-3 text-sky-400">
            <li>
              <a href="https://www.nndc.bnl.gov/nudat3/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                NuDat 3 (National Nuclear Data Center)
              </a>
            </li>
            <li>
              <a href="https://www-nds.iaea.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                IAEA Nuclear Data Services
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
