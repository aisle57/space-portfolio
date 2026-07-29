import Link from "next/link";

type Iso = {
  name: string;
  tags: string[];
  about: string;
  uses: string;
  note?: string;
  featured?: boolean;
};

function IsoCard({ item }: { item: Iso }) {
  return (
    <div
      className={`p-5 rounded-xl border ${
        item.featured
          ? "border-sky-500/20 bg-white/[0.04]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <h3 className={`font-semibold ${item.featured ? "text-xl" : "text-lg"}`}>
          {item.name}
        </h3>
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-2">{item.about}</p>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        <span className="text-white">Main uses:</span> {item.uses}
      </p>
      {item.note && (
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-white">Note:</span> {item.note}
        </p>
      )}
    </div>
  );
}

export default function IsotopesPage() {
  const medical: Iso[] = [
    {
      name: "Mo-99 / Tc-99m",
      tags: ["Diagnostics", "Supply chain critical"],
      about:
        "Technetium-99m is the dominant isotope in diagnostic nuclear medicine. It is produced from molybdenum-99, making this parent-daughter pair one of the most important medical isotope systems in the world.",
      uses:
        "Cardiac imaging, bone scans, oncology imaging, and a wide range of diagnostic nuclear medicine procedures.",
      note: "Global supply depends on a relatively small number of production routes and facilities.",
      featured: true,
    },
    {
      name: "Lu-177",
      tags: ["Theranostics", "Therapy"],
      about:
        "Lutetium-177 is a central therapeutic isotope in targeted radioligand therapy, where radioactive payloads are delivered selectively to cancer cells.",
      uses:
        "Prostate cancer and neuroendocrine tumor therapies, with broader oncology applications expanding.",
      note: "Rising clinical demand has made reliable supply a major industry focus.",
      featured: true,
    },
    {
      name: "Ac-225",
      tags: ["Alpha therapy", "Emerging"],
      about:
        "Actinium-225 is one of the most important emerging alpha-emitting isotopes for targeted cancer therapy. Alpha particles deposit high energy over a very short distance.",
      uses:
        "Targeted alpha therapy research and development in oncology.",
      note: "Production is constrained and technically demanding, which currently limits broader clinical scale-up.",
      featured: true,
    },
    {
      name: "F-18",
      tags: ["PET", "Diagnostics"],
      about:
        "Fluorine-18 is the primary PET imaging isotope used in modern diagnostic oncology and related imaging.",
      uses:
        "FDG PET scans and other fluorine-18 based diagnostic agents.",
    },
    {
      name: "Ga-68",
      tags: ["PET", "Diagnostics"],
      about:
        "Gallium-68 is a generator-produced PET isotope widely used in targeted diagnostic imaging.",
      uses:
        "PET imaging agents for oncology and specialized diagnostic applications.",
    },
    {
      name: "I-131",
      tags: ["Therapy", "Diagnostics"],
      about:
        "Iodine-131 is one of the most established therapeutic and diagnostic radioisotopes in nuclear medicine.",
      uses:
        "Thyroid therapy and diagnostic procedures, along with selected other nuclear medicine applications.",
    },
    {
      name: "I-123",
      tags: ["Diagnostics"],
      about:
        "Iodine-123 is preferred for many diagnostic iodine imaging applications because of its favorable imaging characteristics.",
      uses:
        "Thyroid imaging and other diagnostic nuclear medicine procedures.",
    },
    {
      name: "I-124",
      tags: ["PET", "Research"],
      about:
        "Iodine-124 is a longer-lived PET-relevant iodine isotope used mainly in research and selected imaging contexts.",
      uses:
        "PET research and specialized iodine-based imaging studies.",
    },
    {
      name: "Y-90",
      tags: ["Therapy"],
      about:
        "Yttrium-90 is a widely used therapeutic radioisotope in targeted cancer treatment.",
      uses:
        "Liver cancer therapies and other targeted radiotherapeutic applications.",
    },
    {
      name: "Ra-223",
      tags: ["Alpha therapy"],
      about:
        "Radium-223 is an alpha-emitting therapeutic isotope used in the treatment of bone metastases.",
      uses:
        "Targeted treatment of bone metastases, particularly in prostate cancer care.",
    },
    {
      name: "Tb-161",
      tags: ["Theranostics", "Emerging"],
      about:
        "Terbium-161 is an emerging theranostic isotope with promising therapeutic properties and growing research interest.",
      uses:
        "Experimental and developing radiopharmaceutical therapy applications.",
    },
    {
      name: "Cu-64",
      tags: ["Imaging", "Therapy"],
      about:
        "Copper-64 is a versatile isotope used in both imaging and therapeutic research.",
      uses:
        "PET imaging research and radiopharmaceutical development.",
    },
    {
      name: "Cu-67",
      tags: ["Therapy", "Emerging"],
      about:
        "Copper-67 is a therapeutic copper isotope of growing interest for radiopharmaceutical applications.",
      uses:
        "Targeted radiotherapy research and emerging clinical development.",
    },
    {
      name: "Zr-89",
      tags: ["PET"],
      about:
        "Zirconium-89 is increasingly used in antibody-based PET imaging because of its longer half-life.",
      uses:
        "Immuno-PET and antibody imaging applications.",
    },
    {
      name: "In-111",
      tags: ["Diagnostics"],
      about:
        "Indium-111 is an established diagnostic isotope used in specialized nuclear medicine procedures.",
      uses:
        "Infection imaging, labeled white-cell studies, and other diagnostic applications.",
    },
    {
      name: "Tl-201",
      tags: ["Diagnostics"],
      about:
        "Thallium-201 is a historically important cardiac imaging isotope that remains in use in some clinical settings.",
      uses:
        "Myocardial perfusion imaging and related diagnostic procedures.",
    },
    {
      name: "Sm-153",
      tags: ["Therapy"],
      about:
        "Samarium-153 is used therapeutically for pain palliation in patients with bone metastases.",
      uses:
        "Bone pain palliation and selected therapeutic nuclear medicine applications.",
    },
    {
      name: "Re-186 / Re-188",
      tags: ["Therapy"],
      about:
        "Rhenium-186 and rhenium-188 are therapeutic isotopes used in selected nuclear medicine applications.",
      uses:
        "Targeted therapy and palliative treatment research or specialized clinical use.",
    },
    {
      name: "At-211",
      tags: ["Alpha therapy", "Research"],
      about:
        "Astatine-211 is an alpha-emitting isotope of strong research interest for targeted radiotherapy.",
      uses:
        "Experimental targeted alpha therapy.",
    },
    {
      name: "Pb-212 / Bi-212",
      tags: ["Alpha therapy", "Emerging"],
      about:
        "Lead-212 and bismuth-212 are important isotopes in emerging targeted alpha therapy approaches.",
      uses:
        "Alpha therapy development and related radiopharmaceutical research.",
    },
  ];

  const energy: Iso[] = [
    {
      name: "He-3",
      tags: ["Strategic", "Quantum", "Cryogenics"],
      about:
        "Helium-3 is a rare strategic isotope used in quantum research, ultra-low temperature systems, neutron detection, and specialized applications.",
      uses:
        "Dilution refrigerators, quantum infrastructure, neutron detection, and specialized research.",
      note: "Limited production pathways make supply a recurring strategic concern.",
      featured: true,
    },
    {
      name: "Li-6",
      tags: ["Fusion", "Strategic"],
      about:
        "Lithium-6 is important for fusion energy concepts that rely on tritium breeding in reactor blanket systems.",
      uses:
        "Tritium breeding materials, fusion research, and specialized nuclear applications.",
      note: "Isotopic composition of lithium becomes more important as fusion systems advance.",
      featured: true,
    },
    {
      name: "U-235",
      tags: ["Fissile", "Energy"],
      about:
        "Uranium-235 is the primary fissile isotope used in most commercial nuclear reactors.",
      uses:
        "Nuclear fuel for commercial and research reactors.",
    },
    {
      name: "U-238",
      tags: ["Fertile", "Energy"],
      about:
        "Uranium-238 is the dominant isotope in natural uranium and a fertile material in nuclear fuel cycles.",
      uses:
        "Nuclear fuel matrices, breeding contexts, and broader nuclear fuel-cycle applications.",
    },
    {
      name: "U-233",
      tags: ["Fissile", "Thorium cycle"],
      about:
        "Uranium-233 is a fissile isotope relevant to thorium-based fuel cycle concepts.",
      uses:
        "Thorium fuel cycle research and advanced reactor concepts.",
    },
    {
      name: "Pu-239",
      tags: ["Fissile", "Energy"],
      about:
        "Plutonium-239 is a key fissile isotope produced in reactors and used in certain fuel-cycle strategies.",
      uses:
        "Nuclear fuel cycles and specialized nuclear applications.",
    },
    {
      name: "Pu-238",
      tags: ["Space", "Power"],
      about:
        "Plutonium-238 is a critical isotope for long-lived space power systems.",
      uses:
        "Radioisotope thermoelectric generators for space missions and specialized power applications.",
    },
    {
      name: "Th-232",
      tags: ["Fertile", "Energy"],
      about:
        "Thorium-232 is the fertile isotope at the center of thorium fuel cycle research.",
      uses:
        "Advanced nuclear fuel cycle research and thorium-based reactor concepts.",
    },
    {
      name: "H-3 (Tritium)",
      tags: ["Fusion", "Energy"],
      about:
        "Tritium is a radioactive hydrogen isotope important to certain fusion approaches and specialized nuclear applications.",
      uses:
        "Fusion research, specialized nuclear systems, and selected industrial or research uses.",
    },
    {
      name: "H-2 (Deuterium)",
      tags: ["Fusion", "Research"],
      about:
        "Deuterium is the stable heavy isotope of hydrogen and a foundational material in fusion research.",
      uses:
        "Fusion experiments, research applications, and specialized chemical or industrial uses.",
    },
    {
      name: "Li-7",
      tags: ["Nuclear", "Coolant systems"],
      about:
        "Lithium-7 is important in some nuclear system chemistries and related industrial contexts.",
      uses:
        "Nuclear coolant chemistry and specialized lithium applications.",
    },
    {
      name: "He-4",
      tags: ["Cryogenics", "Industrial"],
      about:
        "Helium-4 is the common isotope of helium and a foundational material for cryogenics and many industrial processes.",
      uses:
        "Cryogenics, cooling systems, leak detection, and broad industrial applications.",
    },
  ];

  const quantum: Iso[] = [
    {
      name: "Si-28",
      tags: ["Quantum", "Semiconductors"],
      about:
        "Silicon-28 is one of the most important stable isotopes for quantum computing and advanced semiconductor research because highly enriched Si-28 reduces nuclear spin noise.",
      uses:
        "Silicon-based quantum devices, spin qubits, and high-purity semiconductor research.",
      note: "Supply of high-purity Si-28 is increasingly strategic as quantum hardware develops.",
      featured: true,
    },
    {
      name: "B-11",
      tags: ["Quantum", "Materials"],
      about:
        "Boron-11 is the preferred boron isotope for many quantum and advanced materials applications because of its nuclear properties.",
      uses:
        "Advanced materials, quantum-related research, and specialized industrial applications.",
      note: "B-10 is preferred instead where high neutron absorption is required.",
      featured: true,
    },
    {
      name: "Ge-70",
      tags: ["Quantum", "Semiconductors"],
      about:
        "Germanium-70 is a spin-free germanium isotope of growing interest for quantum devices and advanced semiconductor research.",
      uses:
        "Quantum device research, silicon-germanium systems, and advanced semiconductor materials.",
      note: "Isotopically controlled germanium is becoming more relevant as quantum hardware explores hybrid material systems.",
      featured: true,
    },
    {
      name: "B-10",
      tags: ["Nuclear", "Control materials"],
      about:
        "Boron-10 has a high neutron absorption cross section, making it valuable in nuclear control and shielding contexts.",
      uses:
        "Control materials, neutron absorbers, and specialized nuclear applications.",
    },
    {
      name: "C-12",
      tags: ["Quantum", "Materials"],
      about:
        "Highly purified carbon-12 is relevant to certain quantum and precision materials applications where isotopic uniformity matters.",
      uses:
        "Precision materials research and selected quantum-related applications.",
    },
    {
      name: "C-13",
      tags: ["Quantum", "Research"],
      about:
        "Carbon-13 is important in quantum sensing, NMR, and advanced materials research.",
      uses:
        "NMR, tracing, quantum sensing, and specialized research applications.",
    },
    {
      name: "Si-29",
      tags: ["Quantum"],
      about:
        "Silicon-29 is a spin-bearing silicon isotope and is often the isotope being reduced when producing high-purity Si-28 environments.",
      uses:
        "Relevant mainly as the isotope depleted in quantum-grade silicon enrichment.",
    },
    {
      name: "O-18",
      tags: ["Medical", "Research"],
      about:
        "Oxygen-18 is important in the production pathway for fluorine-18 and in specialized research applications.",
      uses:
        "F-18 production pathways and research tracing applications.",
    },
    {
      name: "N-15",
      tags: ["Research", "Materials"],
      about:
        "Nitrogen-15 is a stable isotope used in research and specialized tracing applications.",
      uses:
        "Research tracing, environmental studies, and specialized materials work.",
    },
    {
      name: "Cl-37",
      tags: ["Advanced reactors", "Materials"],
      about:
        "Chlorine-37 is relevant in some advanced reactor chemistry and materials discussions.",
      uses:
        "Advanced reactor research and specialized materials contexts.",
    },
  ];

  const industrial: Iso[] = [
    {
      name: "C-14",
      tags: ["Research", "Tracing"],
      about:
        "Carbon-14 is essential for radiocarbon dating, tracing, and a wide range of scientific applications.",
      uses:
        "Dating, biological tracing, environmental research, and laboratory applications.",
    },
    {
      name: "Co-60",
      tags: ["Industrial", "Medical"],
      about:
        "Cobalt-60 is one of the most important industrial radioisotopes and is also used in selected medical applications.",
      uses:
        "Industrial radiography, sterilization, and medical radiation applications.",
    },
    {
      name: "Ir-192",
      tags: ["Industrial"],
      about:
        "Iridium-192 is a major industrial radiography isotope used to inspect welds and structural materials.",
      uses:
        "Non-destructive testing and industrial inspection.",
    },
    {
      name: "Se-75",
      tags: ["Industrial"],
      about:
        "Selenium-75 is used in industrial radiography and specialized measurement applications.",
      uses:
        "Industrial inspection and selected measurement systems.",
    },
    {
      name: "Am-241",
      tags: ["Industrial", "Instrumentation"],
      about:
        "Americium-241 is widely used in industrial gauges and certain consumer and instrumentation applications.",
      uses:
        "Smoke detectors, industrial gauging, and specialized instrumentation.",
    },
    {
      name: "Cf-252",
      tags: ["Research", "Neutron source"],
      about:
        "Californium-252 is a powerful neutron source used in research, industry, and specialized nuclear applications.",
      uses:
        "Neutron radiography, reactor startup sources, and specialized analysis.",
    },
    {
      name: "Cs-137",
      tags: ["Industrial", "Calibration"],
      about:
        "Cesium-137 is used in industrial gauges, calibration, and specialized radiation applications.",
      uses:
        "Industrial measurement, calibration sources, and selected research uses.",
    },
    {
      name: "Sr-90",
      tags: ["Industrial", "Power sources"],
      about:
        "Strontium-90 is used in specialized power sources and industrial applications.",
      uses:
        "Radioisotope power sources and specialized industrial systems.",
    },
    {
      name: "Kr-85",
      tags: ["Industrial"],
      about:
        "Krypton-85 is used in specialized industrial measurement and related applications.",
      uses:
        "Industrial gauging and specialized technical systems.",
    },
    {
      name: "Ni-63",
      tags: ["Industrial", "Instrumentation"],
      about:
        "Nickel-63 is used in electron-capture detectors and specialized instrumentation.",
      uses:
        "Gas chromatography detectors and selected instrumentation applications.",
    },
    {
      name: "Fe-55",
      tags: ["Industrial", "Research"],
      about:
        "Iron-55 is used in specialized measurement and research applications.",
      uses:
        "X-ray fluorescence related uses and specialized research systems.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Isotope Directory</h1>
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
              This directory focuses on the isotopes that currently matter most. For the full scientific set of all known isotopes, use the official data sources linked at the bottom.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Theranostics
          </h2>
          <div className="space-y-4">
            {medical.map((item) => (
              <IsoCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Energy & Nuclear
          </h2>
          <div className="space-y-4">
            {energy.map((item) => (
              <IsoCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Quantum & Advanced Materials
          </h2>
          <div className="space-y-4">
            {quantum.map((item) => (
              <IsoCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Industrial & Research Staples
          </h2>
          <div className="space-y-4">
            {industrial.map((item) => (
              <IsoCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Complete Scientific Data
          </h2>
          <p className="text-gray-400 mb-6">
            This directory is a curated map of the isotopes that currently matter most economically and strategically. For the full set of all known isotopes, use these authoritative sources:
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
