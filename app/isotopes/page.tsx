import Link from "next/link";

export default function IsotopesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Isotope Directory
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A curated directory of the isotopes that matter most for medicine, energy, quantum technologies, advanced materials, and strategic supply chains.
          </p>
        </div>

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
              This directory focuses on the isotopes that currently matter most for technological and economic systems. For the full scientific set of all known isotopes, use the official data sources linked at the bottom.
            </p>
          </div>
        </section>

        {/* MEDICAL */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Theranostics
          </h2>
          <div className="space-y-4">

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Mo-99 / Tc-99m</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Diagnostics</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Supply chain critical</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Technetium-99m is the dominant isotope in diagnostic nuclear medicine, used in tens of millions of procedures each year. It is produced from molybdenum-99, making the Mo-99 → Tc-99m chain one of the most important medical isotope supply systems in the world.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> cardiac imaging, bone scans, oncology imaging, and broad diagnostic nuclear medicine.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Supply note:</span> Availability depends on a relatively small number of production routes and facilities. Supply security remains a strategic issue.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Lu-177</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Theranostics</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Therapy</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Lutetium-177 is a central therapeutic isotope in modern radiopharmaceutical medicine, especially targeted radioligand therapy.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> prostate cancer and neuroendocrine tumor therapies, with broader oncology applications expanding.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Strategic relevance:</span> Rising clinical demand has made reliable Lu-177 supply a major focus for producers and health systems.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Ac-225</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Alpha therapy</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Emerging</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Actinium-225 is one of the most important emerging alpha-emitting isotopes for targeted cancer therapy. Alpha particles deposit high energy over a very short distance, making them attractive for selective cell destruction.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> targeted alpha therapy research and development in oncology.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Supply note:</span> Production is constrained and technically demanding. Expanding availability is a central challenge for alpha therapy growth.
              </p>
            </div>

            {[
              { name: "F-18", tags: ["PET", "Diagnostics"], desc: "Primary PET imaging isotope, most commonly used as FDG in oncology." },
              { name: "Ga-68", tags: ["PET", "Diagnostics"], desc: "Important generator-produced PET isotope used in multiple diagnostic agents." },
              { name: "I-131", tags: ["Therapy", "Diagnostics"], desc: "Established therapeutic and diagnostic isotope, especially in thyroid treatment." },
              { name: "I-123", tags: ["Diagnostics"], desc: "Preferred iodine isotope for many diagnostic imaging applications." },
              { name: "I-124", tags: ["PET", "Research"], desc: "PET-relevant iodine isotope used in research and selected imaging applications." },
              { name: "Y-90", tags: ["Therapy"], desc: "Widely used therapeutic isotope for liver cancer and other targeted applications." },
              { name: "Ra-223", tags: ["Alpha therapy"], desc: "Alpha-emitting therapeutic isotope used in bone metastases treatment." },
              { name: "Tb-161", tags: ["Theranostics", "Emerging"], desc: "Emerging theranostic isotope with promising therapeutic properties." },
              { name: "Cu-64", tags: ["Imaging", "Therapy"], desc: "Versatile isotope used in both imaging and therapeutic research." },
              { name: "Cu-67", tags: ["Therapy", "Emerging"], desc: "Therapeutic copper isotope of growing interest for radiopharmaceutical applications." },
              { name: "Zr-89", tags: ["PET"], desc: "Growing PET isotope particularly useful for antibody-based imaging." },
              { name: "In-111", tags: ["Diagnostics"], desc: "Established diagnostic isotope used in specialized nuclear medicine procedures." },
              { name: "Tl-201", tags: ["Diagnostics"], desc: "Historically important cardiac imaging isotope, still used in some settings." },
              { name: "Sm-153", tags: ["Therapy"], desc: "Therapeutic isotope used in pain palliation for bone metastases." },
              { name: "Re-186 / Re-188", tags: ["Therapy"], desc: "Therapeutic rhenium isotopes used in selected nuclear medicine applications." },
              { name: "At-211", tags: ["Alpha therapy", "Research"], desc: "Alpha-emitting isotope of research interest for targeted therapy." },
              { name: "Pb-212 / Bi-212", tags: ["Alpha therapy", "Emerging"], desc: "Important alpha-therapy related isotopes in emerging targeted treatment approaches." },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ENERGY */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Energy & Nuclear
          </h2>
          <div className="space-y-4">

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">He-3</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Strategic</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Quantum</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Helium-3 is a rare strategic isotope used in quantum research, ultra-low temperature systems, neutron detection, and specialized applications.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> dilution refrigerators, quantum infrastructure, neutron detection, specialized research.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Supply note:</span> Scarcity and limited production pathways make availability a recurring strategic issue.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Li-6</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Fusion</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Strategic</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Lithium-6 is important for fusion energy concepts that rely on tritium breeding. Lithium-containing materials can produce tritium when exposed to neutrons in reactor blanket systems.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> tritium breeding materials, fusion research, specialized nuclear applications.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Strategic relevance:</span> Lithium isotope composition becomes more important as fusion systems move from concept toward engineering reality.
              </p>
            </div>

            {[
              { name: "U-235", tags: ["Fissile", "Energy"], desc: "Primary fissile isotope used in most commercial nuclear reactors." },
              { name: "U-238", tags: ["Fertile", "Energy"], desc: "Fertile isotope that makes up the bulk of natural and depleted uranium." },
              { name: "U-233", tags: ["Fissile", "Thorium cycle"], desc: "Fissile isotope relevant to thorium fuel cycle concepts." },
              { name: "Pu-239", tags: ["Fissile", "Energy"], desc: "Key fissile isotope produced in reactors and used in certain fuel cycles." },
              { name: "Pu-238", tags: ["Space", "Power"], desc: "Critical isotope for radioisotope thermoelectric generators used in space systems." },
              { name: "Pu-241", tags: ["Nuclear"], desc: "Relevant in broader plutonium isotope and fuel-cycle contexts." },
              { name: "Th-232", tags: ["Fertile", "Energy"], desc: "Fertile isotope central to thorium fuel cycle research." },
              { name: "H-3 (Tritium)", tags: ["Fusion", "Energy"], desc: "Important for certain fusion approaches and specialized nuclear applications." },
              { name: "H-2 (Deuterium)", tags: ["Fusion", "Research"], desc: "Stable hydrogen isotope used in fusion research and specialized applications." },
              { name: "Li-7", tags: ["Nuclear", "Coolant systems"], desc: "Important lithium isotope in some nuclear system chemistries and related applications." },
              { name: "He-4", tags: ["Cryogenics", "Industrial"], desc: "The common isotope of helium. Foundational for cryogenics and many industrial uses." },
              { name: "Be-9", tags: ["Nuclear materials"], desc: "Relevant in specialized nuclear materials and neutron-related applications." },
              { name: "Zr isotopes", tags: ["Nuclear materials"], desc: "Zirconium materials are important in nuclear systems; isotopic composition can matter in specialized contexts." },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUANTUM / MATERIALS */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Quantum & Advanced Materials
          </h2>
          <div className="space-y-4">

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Si-28</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Quantum</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Semiconductors</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Silicon-28 is one of the most important stable isotopes for quantum computing and advanced semiconductor research. Highly enriched Si-28 reduces nuclear spin noise and enables cleaner quantum environments.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> silicon-based quantum devices, spin qubits, high-purity semiconductor research.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Strategic relevance:</span> Control over high-purity Si-28 supply is increasingly important as quantum hardware scales.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">B-11</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Quantum</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Materials</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Boron-11 is the preferred boron isotope for many quantum and advanced materials applications because of its nuclear properties.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> advanced materials, quantum-related research, specialized industrial applications.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Note:</span> B-10 is valued instead for high neutron absorption in nuclear control and shielding contexts.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Ge-70</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Quantum</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Semiconductors</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Germanium-70 is a spin-free germanium isotope of growing interest for quantum devices and advanced semiconductor research.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> quantum device research, silicon-germanium systems, advanced semiconductor materials.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Strategic relevance:</span> Isotopically controlled germanium becomes more important as quantum hardware explores germanium-based and hybrid systems.
              </p>
            </div>

            {[
              { name: "B-10", tags: ["Nuclear", "Control materials"], desc: "High neutron absorption cross section. Important for control materials and specialized nuclear applications." },
              { name: "C-12", tags: ["Quantum", "Materials"], desc: "Highly purified carbon-12 is relevant to certain quantum and precision materials applications." },
              { name: "C-13", tags: ["Quantum", "Research"], desc: "Important in quantum sensing, NMR, and advanced materials research." },
              { name: "Si-29", tags: ["Quantum"], desc: "Spin-bearing silicon isotope; often the isotope being depleted when producing high-purity Si-28 environments." },
              { name: "Ge-72 / Ge-73 / Ge-74", tags: ["Quantum materials"], desc: "Other germanium isotopes relevant when engineering isotopically controlled germanium materials." },
              { name: "Ga-69 / Ga-71", tags: ["Semiconductors"], desc: "Gallium isotopes of interest in specialized semiconductor and materials contexts." },
              { name: "Cl-35 / Cl-37", tags: ["Advanced reactors", "Materials"], desc: "Chlorine isotopes relevant to some advanced reactor chemistry and materials discussions." },
              { name: "N-15", tags: ["Research", "Materials"], desc: "Stable nitrogen isotope used in research and specialized tracing applications." },
              { name: "O-18", tags: ["Research", "Medical"], desc: "Important in the production pathway for F-18 and in specialized research uses." },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIAL */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Industrial & Research Staples
          </h2>
          <div className="space-y-4">
            {[
              { name: "C-14", tags: ["Research", "Tracing"], desc: "Essential for radiocarbon dating, tracing, and a wide range of research applications." },
              { name: "Co-60", tags: ["Industrial", "Medical"], desc: "Widely used in industrial radiography, sterilization, and medical applications." },
              { name: "Ir-192", tags: ["Industrial"], desc: "Important industrial radiography isotope." },
              { name: "Se-75", tags: ["Industrial"], desc: "Used in industrial radiography and specialized measurement applications." },
              { name: "Am-241", tags: ["Industrial", "Instrumentation"], desc: "Used in smoke detectors, industrial gauges, and specialized applications." },
              { name: "Cf-252", tags: ["Research", "Neutron source"], desc: "Powerful neutron source used in research, industry, and specialized nuclear applications." },
              { name: "Cs-137", tags: ["Industrial", "Calibration"], desc: "Used in industrial gauges, calibration, and specialized applications." },
              { name: "Sr-90", tags: ["Industrial", "Power sources"], desc: "Used in specialized power sources and industrial applications." },
              { name: "Kr-85", tags: ["Industrial"], desc: "Used in specialized industrial measurement and related applications." },
              { name: "H-3 (Tritium lights / tracing)", tags: ["Industrial", "Research"], desc: "Also appears in self-luminous devices and tracing applications outside fusion contexts." },
              { name: "Fe-55", tags: ["Industrial", "Research"], desc: "Used in specialized measurement and research applications." },
              { name: "Ni-63", tags: ["Industrial", "Instrumentation"], desc: "Used in electron-capture detectors and specialized instrumentation." },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">{tag}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Complete Scientific Data
          </h2>
          <p className="text-gray-400 mb-6">
            This directory is a curated map of the isotopes that currently matter most economically and strategically. For the full set of all known isotopes, including newly reported ones, use these authoritative sources:
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

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where to go next
          </h2>
          <p className="text-gray-400 mb-6">Continue through the resource hub:</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/facilities" className="py-3 px-6 button-primary text-center text-white rounded-lg">
              Research Facilities
            </Link>
            <Link href="/companies" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Companies
            </Link>
            <Link href="/advanced" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Advanced
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
