"use client";

import { useState } from "react";
import Link from "next/link";

type IsotopeItem = {
  name: string;
  tags: string[];
  desc: string;
  detail?: string;
};

function ExpandableIsotope({ item }: { item: IsotopeItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-white/[0.02] transition"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg text-white">{item.name}</h3>
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90"
              >
                {tag}
              </span>
            ))}
          </div>
          {!open && (
            <p className="text-gray-400 text-sm mt-1 line-clamp-1">{item.desc}</p>
          )}
        </div>
        <span className="text-sky-400 text-lg leading-none mt-1 shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-gray-300 text-sm leading-relaxed mb-2">{item.desc}</p>
          {item.detail && (
            <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function IsotopesPage() {
  const medical: IsotopeItem[] = [
    { name: "F-18", tags: ["Medical", "PET"], desc: "Primary PET imaging isotope, most commonly used as FDG in oncology." },
    { name: "I-131", tags: ["Medical", "Therapy"], desc: "Established therapeutic and diagnostic isotope, especially in thyroid treatment." },
    { name: "I-123", tags: ["Medical", "Diagnostics"], desc: "Preferred iodine isotope for many diagnostic imaging applications." },
    { name: "Ac-225", tags: ["Medical", "Alpha therapy"], desc: "High-value alpha emitter under rapid development for targeted cancer therapy.", detail: "Rising clinical interest is driving new production routes and supply chain attention." },
    { name: "Tb-161", tags: ["Medical", "Theranostics"], desc: "Emerging theranostic isotope with promising therapeutic properties." },
    { name: "Y-90", tags: ["Medical", "Therapy"], desc: "Widely used therapeutic isotope for liver cancer and other targeted applications." },
    { name: "Ga-68", tags: ["Medical", "PET"], desc: "Important generator-produced PET isotope used in multiple diagnostic agents." },
    { name: "Cu-64", tags: ["Medical", "Imaging", "Therapy"], desc: "Versatile isotope used in both imaging and therapeutic research." },
    { name: "Zr-89", tags: ["Medical", "PET"], desc: "Growing PET isotope particularly useful for antibody-based imaging." },
    { name: "Ra-223", tags: ["Medical", "Alpha therapy"], desc: "Alpha-emitting therapeutic isotope used in bone metastases treatment." },
  ];

  const energy: IsotopeItem[] = [
    { name: "U-235", tags: ["Energy", "Fissile"], desc: "Primary fissile isotope used in most commercial nuclear reactors." },
    { name: "U-238", tags: ["Energy", "Fertile"], desc: "Fertile isotope that makes up the bulk of natural and depleted uranium." },
    { name: "Pu-239", tags: ["Energy", "Fissile"], desc: "Key fissile isotope produced in reactors and used in certain fuel cycles." },
    { name: "Pu-238", tags: ["Space", "Power"], desc: "Critical isotope for radioisotope thermoelectric generators used in space systems." },
    { name: "Th-232", tags: ["Energy", "Fertile"], desc: "Fertile isotope central to thorium fuel cycle research." },
    { name: "H-3 (Tritium)", tags: ["Energy", "Fusion"], desc: "Important for certain fusion approaches and specialized applications." },
    { name: "Li-6", tags: ["Fusion", "Strategic"], desc: "Important for tritium breeding in many fusion reactor designs." },
    { name: "He-4", tags: ["Industrial", "Cryogenics"], desc: "The common isotope of helium. Foundational for cryogenics and many industrial uses." },
  ];

  const quantum: IsotopeItem[] = [
    { name: "B-10", tags: ["Nuclear", "Control materials"], desc: "High neutron absorption cross section. Important for control materials and specialized nuclear applications." },
    { name: "C-13", tags: ["Quantum", "Research"], desc: "Important in quantum sensing, NMR, and advanced materials research." },
    { name: "Ge-70", tags: ["Quantum", "Semiconductors"], desc: "Spin-free germanium isotope relevant to quantum devices and advanced semiconductor research." },
    { name: "C-12", tags: ["Quantum", "Materials"], desc: "Highly purified carbon-12 is relevant to certain quantum and precision materials applications." },
  ];

  const industrial: IsotopeItem[] = [
    { name: "C-14", tags: ["Research", "Tracing"], desc: "Essential for radiocarbon dating, tracing, and a wide range of research applications." },
    { name: "Co-60", tags: ["Industrial", "Medical"], desc: "Widely used in industrial radiography, sterilization, and medical applications." },
    { name: "Ir-192", tags: ["Industrial"], desc: "Important industrial radiography isotope." },
    { name: "Am-241", tags: ["Industrial", "Instrumentation"], desc: "Used in smoke detectors, industrial gauges, and specialized applications." },
    { name: "Cf-252", tags: ["Research", "Neutron source"], desc: "Powerful neutron source used in research, industry, and specialized nuclear applications." },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Isotope Directory</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A curated foundation of the isotopes that matter most for medicine, energy, quantum technologies, advanced materials, and strategic supply chains.
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
              Featured isotopes below are expanded for deeper context. The rest can be opened as needed.
            </p>
          </div>
        </section>

        {/* Medical */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Theranostics
          </h2>
          <div className="space-y-4">
            {/* Featured */}
            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Mo-99 / Tc-99m</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Medical</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Diagnostics</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Supply chain critical</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Technetium-99m is the workhorse of diagnostic nuclear medicine, used in tens of millions of imaging procedures each year. It is produced from molybdenum-99, making the Mo-99 → Tc-99m chain one of the most important medical isotope supply systems in the world.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> cardiac imaging, bone scans, oncology imaging, and a wide range of diagnostic procedures.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Supply note:</span> Global availability depends on a relatively small number of research reactors and production routes. Supply security has been a recurring strategic concern.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">Lu-177</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Medical</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Theranostics</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Lutetium-177 is one of the most important therapeutic isotopes in modern radiopharmaceutical medicine. It is central to targeted radioligand therapy, where a radioactive isotope is delivered selectively to cancer cells.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> prostate cancer and neuroendocrine tumor therapies, with broader oncology applications expanding.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Strategic relevance:</span> Rising clinical demand has made reliable Lu-177 supply a major focus for producers and healthcare systems.
              </p>
            </div>

            {medical.map((item) => (
              <ExpandableIsotope key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Energy */}
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
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Cryogenics</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Helium-3 is a rare and strategically important isotope with applications in quantum research, ultra-low temperature physics, neutron detection, and specialized national security systems.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> dilution refrigerators, quantum computing infrastructure, neutron detection, and specialized research.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Supply note:</span> He-3 is scarce and historically tied to limited production pathways, making availability a recurring strategic issue.
              </p>
            </div>

            {energy.map((item) => (
              <ExpandableIsotope key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Quantum */}
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
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Advanced materials</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Silicon-28 is one of the most important stable isotopes for quantum computing and advanced semiconductor research. Natural silicon contains isotopes that introduce nuclear spin noise. Highly enriched Si-28 reduces that noise and enables much cleaner quantum environments.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> silicon-based quantum devices, spin qubits, high-purity semiconductor research, and advanced materials development.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Strategic relevance:</span> Control over high-purity Si-28 supply is increasingly important as quantum hardware and precision semiconductor applications scale.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-sky-500/20 bg-white/[0.04]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-semibold text-xl">B-11</h3>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Quantum</span>
                <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">Materials</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Boron-11 is the preferred boron isotope for many quantum and advanced materials applications because of its nuclear properties. It is the more abundant stable isotope of boron and is favored where reduced neutron-related complications or cleaner material behavior are required.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                <span className="text-white">Main uses:</span> advanced materials, quantum-related research, and specialized industrial applications.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white">Note:</span> B-10, by contrast, is valued for its high neutron absorption and is used in nuclear control and shielding contexts.
              </p>
            </div>

            {quantum.map((item) => (
              <ExpandableIsotope key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Industrial */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Industrial & Research Staples
          </h2>
          <div className="space-y-4">
            {industrial.map((item) => (
              <ExpandableIsotope key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Complete Isotope Data
          </h2>
          <p className="text-gray-400 mb-6">
            This directory focuses on the isotopes that currently matter most. For the full set of all known isotopes, use these authoritative sources:
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
            <Link href="/learn" className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg">
              Back to Learn
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
