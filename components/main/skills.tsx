import Link from "next/link";

export const Skills = () => {
  return (
    <section
      id="hub"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="text-center mb-12 z-10">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
          The Isotope Resource Hub
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto px-4">
          A growing public resource for isotopes, research facilities, and the companies advancing the field.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 w-full max-w-6xl z-10">
        
        {/* Isotope Directory */}
        <Link href="/isotopes" className="block group">
          <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 hover:border-sky-500/40 transition">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition"
              >
                <source src="/videos/Isotope-bg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/55" />
            </div>
            <div className="relative z-10 p-8 min-h-[240px] flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-4">Isotope Directory</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Searchable list of isotopes with proper nomenclature, properties, and key applications.
              </p>
              <span className="text-sky-400 text-sm font-medium">Explore →</span>
            </div>
          </div>
        </Link>

        {/* Research Facilities */}
        <Link href="/facilities" className="block group">
          <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 hover:border-sky-500/40 transition">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition"
              >
                <source src="/videos/Isotope-bg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/55" />
            </div>
            <div className="relative z-10 p-8 min-h-[240px] flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-4">Research Facilities</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Reactors, accelerators, and laboratories producing the critical isotopes of the modern economy.
              </p>
              <span className="text-sky-400 text-sm font-medium">Explore →</span>
            </div>
          </div>
        </Link>

        {/* Companies */}
        <Link href="/companies" className="block group">
          <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 hover:border-sky-500/40 transition">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition"
              >
                <source src="/videos/Isotope-bg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/55" />
            </div>
            <div className="relative z-10 p-8 min-h-[240px] flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-4">Companies</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Producers and companies advancing isotope technology, supply chains, and applications worldwide.
              </p>
              <span className="text-sky-400 text-sm font-medium">Explore →</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
