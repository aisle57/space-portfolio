export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Companies
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            The organizations producing, processing, and advancing isotopes across medicine, energy, quantum technologies, and industry.
          </p>
        </div>

        {/* Beginner Section */}
        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            The Commercial Layer
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Isotopes move from research facilities into the real economy through companies. Some specialize in production. Others focus on processing, distribution, radiopharmaceutical development, or the technologies that use isotopes.
            </p>
            <p>
              This page highlights major players currently shaping the isotope supply chain and the applications that depend on it.
            </p>
          </div>
        </section>

        {/* Medical & Radiopharmaceutical */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Radiopharmaceutical
          </h2>
          <div className="space-y-4">
            {[
              ["Novartis (including Advanced Accelerator Applications)", "Major force in radioligand therapy and theranostics, including Lu-177 based treatments."],
              ["Bayer", "Active in targeted alpha therapies and radiopharmaceutical development."],
              ["Lantheus", "Important player in diagnostic and therapeutic radiopharmaceuticals."],
              ["Telix Pharmaceuticals", "Developing targeted radiation therapies and imaging agents."],
              ["NorthStar Medical Radioisotopes", "Focused on non-uranium based Mo-99 / Tc-99m production technology."],
              ["Shine Technologies", "Developing advanced production methods for medical isotopes."],
              ["Nusano", "Building large scale accelerator based radioisotope production capacity."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Production & Supply */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Production & Supply
          </h2>
          <div className="space-y-4">
            {[
              ["Curium", "One of the largest suppliers of medical isotopes and radiopharmaceuticals globally."],
              ["BWX Technologies", "Involved in medical isotope production and nuclear technologies."],
              ["Framatome", "Active in nuclear fuel and related isotope related activities."],
              ["Rosatom / related entities", "Significant historical and ongoing role in global isotope supply."],
              ["NTP Radioisotopes", "South African producer of medical isotopes, including Mo-99."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emerging & Specialized */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Emerging & Specialized
          </h2>
          <div className="space-y-4">
            {[
              ["Nusano", "Accelerator based radioisotope production platform aimed at large scale medical and industrial supply."],
              ["Shine Technologies", "Developing alternative production routes for medical isotopes."],
              ["NorthStar Medical Radioisotopes", "Advancing non traditional production methods for Mo-99 and related isotopes."],
              ["ASP Isotopes", "Focused on stable isotope enrichment, including silicon-28 for quantum and advanced materials applications."],
              ["DOE National Isotope Development Center network", "Coordinates production and distribution of many research and specialty isotopes across U.S. national laboratories."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <section className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Growing Directory
          </h2>
          <p className="text-gray-400">
            This is an initial foundation. The company landscape around isotopes is expanding quickly, especially in medical theranostics, alternative production technologies, and strategic supply chains. Additional companies and categories will be added over time.
          </p>
        </section>

      </div>
    </main>
  );
}
