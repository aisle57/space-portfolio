import Link from "next/link";

export default function MedicineApplicationPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-16">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            Application Area
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Precision Medicine
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Isotopes are one of the most important tools in modern medicine. They make disease visible, carry therapy directly to target tissue, and support a growing class of treatments that combine diagnosis and therapy in the same molecular system.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Why isotopes matter in medicine
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Medicine uses isotopes in two main ways. Some isotopes emit signals that can be imaged. Others deliver energy that can destroy diseased cells. In the best modern systems, those two functions are designed to work together.
            </p>
            <p>
              That is the basis of nuclear medicine and radiopharmaceutical development. A molecule seeks a biological target. An isotope attached to that molecule either reveals where the target is, treats it, or does both.
            </p>
            <p>
              This is not a narrow specialty anymore. Diagnostic imaging, oncology, cardiology, endocrinology, and an expanding set of therapeutic programs all depend on reliable access to the right isotopes.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            How medical isotopes are used
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">Diagnostics</h3>
              <p>
                Diagnostic isotopes make biological processes visible. PET and SPECT imaging use radiotracers to map blood flow, metabolism, receptor expression, and disease burden. Fluorine-18, gallium-68, technetium-99m, and related isotopes dominate this layer.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">Therapy</h3>
              <p>
                Therapeutic isotopes deliver radiation directly to target tissue. Depending on the isotope, that energy may come from beta particles or alpha particles. The goal is local biological effect with limited damage to surrounding healthy tissue.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">Theranostics</h3>
              <p>
                Theranostics pairs imaging and therapy around the same target. A diagnostic version identifies patients who express the target. A therapeutic version then delivers treatment to that same target. Lutetium-177 systems are the clearest current commercial example.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">Alpha therapy</h3>
              <p>
                Alpha-emitting isotopes deposit large amounts of energy over a very short distance. That makes them attractive for selective cell killing. Actinium-225, radium-223, and related alpha systems are among the most closely watched areas in the field.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Key medical isotopes
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "Mo-99 / Tc-99m",
                about:
                  "The backbone of diagnostic nuclear medicine. Technetium-99m is used in tens of millions of procedures each year and is produced from molybdenum-99.",
              },
              {
                name: "F-18",
                about:
                  "The primary PET imaging isotope, most commonly used as FDG in oncology and broader diagnostic imaging.",
              },
              {
                name: "Ga-68",
                about:
                  "A generator-produced PET isotope central to several targeted diagnostic agents.",
              },
              {
                name: "Lu-177",
                about:
                  "One of the most important therapeutic isotopes in modern radioligand therapy and theranostics.",
              },
              {
                name: "Ac-225",
                about:
                  "A high-value alpha emitter under rapid development for targeted cancer therapy. Production remains constrained.",
              },
              {
                name: "I-131",
                about:
                  "A long-established therapeutic and diagnostic isotope, especially important in thyroid medicine.",
              },
              {
                name: "Y-90",
                about:
                  "A therapeutic isotope widely used in liver-directed and other targeted treatment settings.",
              },
              {
                name: "Ra-223",
                about:
                  "An alpha-emitting therapy used in the treatment of bone metastases.",
              },
              {
                name: "Zr-89",
                about:
                  "A longer-lived PET isotope useful for antibody-based imaging.",
              },
              {
                name: "Cu-64 / Cu-67",
                about:
                  "Copper isotopes used across imaging and therapeutic research, with growing interest in paired systems.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.about}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Full curated entries for these and related isotopes live in the{" "}
            <Link href="/isotopes" className="text-sky-400 hover:underline">
              Isotope Directory
            </Link>
            .
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Production and supply
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Medical isotope supply is not a simple commodity market. It depends on reactors, accelerators, generators, target materials, radiochemical processing, logistics, and regulatory release.
            </p>
            <p>
              Short-lived PET isotopes such as fluorine-18 are often produced close to the clinic because they cannot travel far. Other isotopes can move through regional or global supply chains, but those chains are often concentrated in a small number of production sites.
            </p>
            <p>
              That concentration is why Mo-99 / Tc-99m has remained strategically visible for years, and why rising demand for Lu-177 and Ac-225 is forcing new investment in production capacity.
            </p>
            <p>
              The medical isotope system is therefore both a clinical system and an infrastructure system. Treatment access ultimately depends on whether production can keep up.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Facilities and companies behind the field
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Research reactors remain central for several major medical isotopes. Accelerator and cyclotron systems are increasingly important for PET isotopes and for alternative production routes. Processing and generator systems turn raw production into clinically usable material.
            </p>
            <p>
              On the commercial side, the landscape includes:
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>Large radiopharmaceutical companies commercializing therapy and imaging agents</li>
              <li>Specialist isotope suppliers and manufacturers</li>
              <li>Companies building alternative production technologies</li>
              <li>Infrastructure providers such as cyclotron and radiopharma system companies</li>
            </ul>
            <p>
              The important point is that medicine does not only depend on drug development. It depends on whether the underlying isotope can be produced, processed, and delivered at the required quality and scale.
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Where the field is heading
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Diagnostic nuclear medicine is already mature. The faster-moving frontier is therapy.
            </p>
            <p>
              Radioligand therapy, alpha emitters, and broader theranostic platforms are expanding the medical role of isotopes from imaging into treatment at scale. That shift is increasing demand for isotopes that were once relatively niche and forcing new attention on production resilience.
            </p>
            <p>
              The next phase of the field will be shaped less by the idea of targeted radiation and more by whether supply chains, manufacturing capacity, and clinical infrastructure can support wider use.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Continue in the hub
          </h2>
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
