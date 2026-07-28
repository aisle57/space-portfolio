export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research Facilities
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            The reactors, accelerators, and specialized laboratories that produce the isotopes powering medicine, energy, quantum technologies, and advanced industry.
          </p>
        </div>

        {/* Beginner Section */}
        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Why Facilities Matter
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Most useful isotopes do not exist in large quantities in nature. They have to be made.
            </p>
            <p>
              This happens primarily in nuclear reactors and particle accelerators. A smaller number of isotopes are produced through other specialized methods. The availability of these facilities directly determines which isotopes can be supplied at scale.
            </p>
            <p>
              Understanding where isotopes come from is essential to understanding the isotope economy itself.
            </p>
          </div>
        </section>

        {/* Research Reactors */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Research Reactors
          </h2>
          <div className="space-y-4">
            {[
              ["High Flux Isotope Reactor (HFIR)", "Oak Ridge National Laboratory, USA. One of the most important sources of medical and research isotopes, including heavy actinides."],
              ["National Research Universal (NRU) / Successor efforts", "Canada has long been a major supplier of medical isotopes. Current and future Canadian reactor capacity remains strategically important."],
              ["BR2", "Belgian research reactor. Significant producer of medical isotopes including Mo-99 / Tc-99m related supply."],
              ["HFR Petten", "Netherlands. Major European supplier of medical isotopes."],
              ["OPAL", "Australia. Important regional producer of medical and industrial isotopes."],
              ["SAFARI-1", "South Africa. Key supplier of medical isotopes, particularly Mo-99."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accelerators */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Accelerators & Cyclotrons
          </h2>
          <div className="space-y-4">
            {[
              ["Medical cyclotrons", "Widely distributed systems used to produce PET isotopes such as F-18, and increasingly other medical isotopes."],
              ["Linear accelerators & specialized facilities", "Used for research isotopes and certain emerging medical and industrial isotopes that are difficult to produce in reactors."],
              ["National accelerator laboratories", "Facilities that support both research and the development of new isotope production methods."],
            ].map(([name, desc]) => (
              <div key={name} className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-400 text-sm mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Notes */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Strategic Context
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              A relatively small number of facilities currently underpin large parts of the global medical isotope supply chain. This concentration creates both vulnerability and opportunity.
            </p>
            <p>
              New production routes, including advanced reactors, accelerator based methods, and alternative target technologies, are being developed to expand and secure supply.
            </p>
          </div>
        </section>

        {/* Further Resources */}
        <section className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Further Resources
          </h2>
          <p className="text-gray-400 mb-6">
            For deeper information on isotope production facilities and nuclear data:
          </p>
          <ul className="space-y-3 text-sky-400">
            <li>
              <a href="https://www.iaea.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                International Atomic Energy Agency (IAEA)
              </a>
            </li>
            <li>
              <a href="https://www.nndc.bnl.gov/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                National Nuclear Data Center
              </a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
