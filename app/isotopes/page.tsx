export default function IsotopesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Isotope Directory
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A curated list of the most important and widely used isotopes across energy, medicine, quantum technologies, and industry. Links to complete datasets are provided for the full set of known isotopes.
          </p>
        </div>

        {/* Medical */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-sky-400 mb-6">Medical & Theranostics</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">Tc-99m</h3>
              <p className="text-gray-400 text-sm mt-1">The workhorse of diagnostic nuclear medicine. Used in tens of millions of imaging procedures each year.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">F-18</h3>
              <p className="text-gray-400 text-sm mt-1">Key isotope for PET imaging, especially in oncology (FDG).</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">Lu-177</h3>
              <p className="text-gray-400 text-sm mt-1">Leading therapeutic isotope for targeted radiopharmaceutical therapy (theranostics).</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">Ac-225</h3>
              <p className="text-gray-400 text-sm mt-1">Powerful alpha emitter under rapid development for next generation cancer therapies.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">Tb-161</h3>
              <p className="text-gray-400 text-sm mt-1">Emerging theranostic isotope with promising properties for targeted treatment.</p>
            </div>
          </div>
        </section>

        {/* Energy & Nuclear */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">Energy & Nuclear</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">U-235</h3>
              <p className="text-gray-400 text-sm mt-1">Primary fissile isotope used in most commercial nuclear reactors.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">Pu-239</h3>
              <p className="text-gray-400 text-sm mt-1">Key fissile material produced in reactors and used in some fuel cycles.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">Th-232</h3>
              <p className="text-gray-400 text-sm mt-1">Fertile isotope central to thorium fuel cycle research.</p>
            </div>
          </div>
        </section>

        {/* Quantum & Advanced */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-violet-400 mb-6">Quantum & Advanced Materials</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">B-11</h3>
              <p className="text-gray-400 text-sm mt-1">Important for quantum technologies and advanced materials research. The more abundant and preferred boron isotope for many applications.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-lg">Si-28</h3>
              <p className="text-gray-400 text-sm mt-1">Highly enriched silicon-28 is critical for certain quantum computing approaches and high precision materials.</p>
            </div>
          </div>
        </section>

        {/* Full datasets */}
        <section className="mt-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl font-semibold mb-4">Complete Isotope Data</h2>
          <p className="text-gray-400 mb-6">
            For the full set of all known isotopes, including newly discovered ones, refer to these authoritative sources:
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
