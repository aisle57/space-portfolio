export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Companies
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Organizations producing, processing, enriching, and advancing isotopes across medicine, energy, quantum technologies, and advanced materials.
          </p>
        </div>

        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            The Commercial Layer
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Isotopes move from research facilities into the real economy through companies. Some specialize in production. Others focus on enrichment, processing, radiopharmaceutical development, or the materials and technologies that depend on specific isotopes.
            </p>
            <p>
              This page highlights major and emerging players shaping the isotope supply chain.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Medical & Radiopharmaceutical
          </h2>
          <div className="space-y-4">
            {[
              { name: "Novartis (Advanced Accelerator Applications)", tags: ["Theranostics", "Lu-177"], desc: "Major force in radioligand therapy and theranostics, including Lu-177 based treatments." },
              { name: "Bayer", tags: ["Alpha therapy"], desc: "Active in targeted alpha therapies and radiopharmaceutical development." },
              { name: "Lantheus", tags: ["Diagnostics", "Therapy"], desc: "Important player in diagnostic and therapeutic radiopharmaceuticals." },
              { name: "Telix Pharmaceuticals", tags: ["Theranostics"], desc: "Developing targeted radiation therapies and imaging agents." },
              { name: "Curium", tags: ["Supply", "Medical"], desc: "One of the largest global suppliers of medical isotopes and radiopharmaceuticals." },
              { name: "NorthStar Medical Radioisotopes", tags: ["Mo-99", "Production"], desc: "Focused on non-uranium based Mo-99 / Tc-99m production technology." },
              { name: "Shine Technologies", tags: ["Production", "Medical"], desc: "Developing advanced production methods for medical isotopes." },
              { name: "Nusano", tags: ["Accelerator", "Production"], desc: "Building large-scale accelerator-based radioisotope production capacity." },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Stable Isotopes & Enrichment
          </h2>
          <div className="space-y-4">
            {[
              { name: "ASP Isotopes", tags: ["Si-28", "Enrichment", "Quantum"], desc: "Focused on stable isotope enrichment, including silicon-28 for quantum and advanced materials applications." },
              { name: "Urenco Stable Isotopes", tags: ["Enrichment", "Stable isotopes"], desc: "Major established player in commercial stable isotope enrichment." },
              { name: "Orano Stable Isotopes", tags: ["Enrichment", "Materials"], desc: "Active in stable isotope production and advanced materials related supply." },
              { name: "Cambridge Isotope Laboratories", tags: ["Research", "Stable isotopes"], desc: "Important supplier of stable isotopes for research and specialized applications." },
              { name: "Trace Sciences International", tags: ["Stable isotopes"], desc: "Supplier of enriched stable isotopes for research and industry." },
              { name: "Isoflex", tags: ["Stable isotopes"], desc: "Provider of enriched stable isotopes for scientific and commercial use." },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Production, Nuclear & Strategic Supply
          </h2>
          <div className="space-y-4">
            {[
              { name: "BWX Technologies", tags: ["Nuclear", "Production"], desc: "Involved in medical isotope production and broader nuclear technologies." },
              { name: "Framatome", tags: ["Nuclear", "Fuel cycle"], desc: "Active in nuclear fuel and related isotope-linked activities." },
              { name: "NTP Radioisotopes", tags: ["Medical", "Mo-99"], desc: "South African producer of medical isotopes, including Mo-99." },
              { name: "DOE National Isotope Development Center network", tags: ["Research", "Supply"], desc: "Coordinates production and distribution of many research and specialty isotopes across U.S. national laboratories." },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-sky-400/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Growing Directory
          </h2>
          <p className="text-gray-400">
            This is a working foundation. The company landscape around isotopes is expanding quickly, especially in medical theranostics, alternative production technologies, stable isotope enrichment, and advanced materials supply chains. Additional companies and categories will be added over time.
          </p>
        </section>

      </div>
    </main>
  );
}
