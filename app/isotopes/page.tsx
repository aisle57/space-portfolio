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
            A curated foundation of the isotopes that matter most for energy, medicine, quantum technologies, advanced materials, and the emerging technological supply chain. Links to complete official datasets are provided for the full set of known isotopes.
          </p>
        </div>

        {/* Medical & Theranostics */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-sky-400 mb-6">Medical & Theranostics</h2>
          <div className="space-y-4">
            {[
              ["Tc-99m", "The dominant isotope in diagnostic nuclear medicine. Used in tens of millions of procedures annually."],
              ["F-18", "Primary PET imaging isotope, most commonly used as FDG in oncology."],
              ["I-131", "Established therapeutic and diagnostic isotope, especially in thyroid treatment."],
              ["I-123", "Preferred iodine isotope for diagnostic imaging due to its favorable radiation characteristics."],
              ["Lu-177", "Leading therapeutic isotope for targeted radiopharmaceutical therapy (theranostics)."],
              ["Ac-225", "High value alpha emitter under rapid clinical and commercial development for cancer therapy."],
              ["Tb-161", "Emerging theranostic isotope with promising therapeutic properties."],
              ["Y-90", "Widely used therapeutic isotope for liver cancer and other targeted applications."],
              ["Ga-68", "Important generator produced PET isotope used in multiple diagnostic agents."],
              ["Cu-64", "Versatile isotope used in both imaging and therapeutic research."],
              ["Zr-89", "Growing PET isotope particularly useful for antibody based imaging."],
              ["Ra-223", "Alpha emitting therapeutic isotope used in bone metastases treatment."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Energy & Nuclear */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">Energy & Nuclear</h2>
          <div className="space-y-4">
            {[
              ["U-235", "Primary fissile isotope used in the majority of commercial nuclear reactors."],
              ["U-238", "Fertile isotope that makes up the bulk of natural and depleted uranium."],
              ["Pu-239", "Key fissile isotope produced in reactors and used in certain fuel cycles."],
              ["Pu-238", "Critical isotope for radioisotope thermoelectric generators (space power systems)."],
              ["Th-232", "Fertile isotope central to thorium fuel cycle research and future energy systems."],
              ["H-3 (Tritium)", "Essential for certain fusion approaches and specialized applications."],
              ["He-3", "Strategic isotope used in quantum research, cryogenics, neutron detection, and national security applications."],
              ["He-4", "The common isotope of helium, foundational for cryogenics and many industrial uses."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quantum & Advanced Materials */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-violet-400 mb-6">Quantum & Advanced Materials</h2>
          <div className="space-y-4">
            {[
              ["B-11", "Preferred boron isotope for many quantum and advanced materials applications due to its nuclear properties."],
              ["B-10", "High neutron absorption cross section. Important for control materials and specialized applications."],
              ["Si-28", "Highly enriched silicon-28 is critical for certain quantum computing platforms and ultra pure materials research."],
              ["C-13", "Important in quantum sensing, NMR, and advanced materials research."],
              ["Ge-74 / Ge-76", "Relevant to certain quantum and rare event physics applications."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industrial & Research */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">Industrial & Research Staples</h2>
          <div className="space-y-4">
            {[
              ["C-14", "Essential for radiocarbon dating, tracing, and various research applications."],
              ["Co-60", "Widely used in industrial radiography, sterilization, and medical applications."],
              ["Ir-192", "Important industrial radiography isotope."],
              ["Am-241", "Used in smoke detectors, industrial gauges, and specialized applications."],
              ["Cf-252", "Powerful neutron source used in research, industry, and specialized nuclear applications."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full datasets */}
        <section className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4">Complete Isotope Data</h2>
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
