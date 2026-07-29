import Link from "next/link";

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research Facilities
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            The reactors, accelerators, and specialized laboratories that produce the isotopes used in medicine, energy, quantum technologies, and advanced industry.
          </p>
        </div>

        <section className="mb-20 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Why Facilities Matter
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Most useful isotopes do not exist in large quantities in nature. They have to be made.
            </p>
            <p>
              This happens primarily in nuclear reactors and particle accelerators. A smaller number are produced through other specialized methods. The availability of these facilities directly shapes which isotopes can be supplied at scale.
            </p>
            <p>
              Understanding where isotopes come from is essential to understanding the isotope economy itself.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Research Reactors
          </h2>
          <div className="space-y-4">
            {[
              { name: "High Flux Isotope Reactor (HFIR)", tags: ["USA", "Medical", "Actinides"], desc: "Oak Ridge National Laboratory. One of the most important U.S. sources of medical and research isotopes, including heavy actinides." },
              { name: "Advanced Test Reactor (ATR)", tags: ["USA", "Research"], desc: "Idaho National Laboratory. Major materials test reactor with important isotope production roles." },
              { name: "University of Missouri Research Reactor (MURR)", tags: ["USA", "Medical"], desc: "One of the most significant university-based producers of medical isotopes in North America." },
              { name: "BR2", tags: ["Belgium", "Medical"], desc: "Belgian research reactor and an important European source of medical isotopes." },
              { name: "HFR Petten", tags: ["Netherlands", "Medical"], desc: "Major European supplier of medical isotopes." },
              { name: "OPAL", tags: ["Australia", "Medical", "Industrial"], desc: "Australian research reactor producing medical and industrial isotopes for the region." },
              { name: "SAFARI-1", tags: ["South Africa", "Medical"], desc: "Key producer of medical isotopes, including Mo-99." },
              { name: "Canadian research reactor capacity", tags: ["Canada", "Medical"], desc: "Canada has long been a major supplier of medical isotopes. Current and future reactor capacity remains strategically important." },
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
            Accelerators & Cyclotrons
          </h2>
          <div className="space-y-4">
            {[
              { name: "Medical cyclotrons", tags: ["Medical", "PET"], desc: "Widely distributed systems used to produce PET isotopes such as F-18, and increasingly other medical isotopes." },
              { name: "Brookhaven Linac Isotope Producer (BLIP)", tags: ["USA", "Medical", "Research"], desc: "Important U.S. accelerator-based isotope production facility." },
              { name: "Los Alamos Isotope Production Facility (IPF)", tags: ["USA", "Medical", "Research"], desc: "Accelerator-based production facility supporting medical and research isotopes." },
              { name: "Specialized linear accelerators", tags: ["Emerging", "Medical"], desc: "Used for research isotopes and certain emerging medical and industrial isotopes that are difficult to produce in reactors." },
              { name: "National accelerator laboratories", tags: ["Research"], desc: "Support both research and the development of new isotope production methods." },
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
            Strategic Context
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              A relatively small number of facilities currently underpin large parts of the global medical isotope supply chain. That concentration creates both vulnerability and opportunity.
            </p>
            <p>
              New production routes are being developed, including advanced reactors, accelerator-based methods, and alternative target technologies. These efforts matter because isotope availability is ultimately constrained by real physical infrastructure.
            </p>
          </div>
        </section>

        <section className="mb-16 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
            Further Resources
          </h2>
          <p className="text-gray-400 mb-6">
            Key sources for research reactors, isotope production facilities, and related programs:
          </p>
          <ul className="space-y-3 text-sky-400">
            <li>
              <a href="https://nucleus.iaea.org/rrdb/#/home" target="_blank" rel="noopener noreferrer" className="hover:underline">
                IAEA Research Reactor Database (RRDB)
              </a
