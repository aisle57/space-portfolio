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
        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-sky-500/40 transition">
          <h3 className="text-2xl font-semibold text-white mb-4">Isotope Directory</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Searchable list of isotopes with proper nomenclature, properties, and key applications.
          </p>
          <span className="text-sky-400 text-sm font-medium">Coming Soon</span>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-sky-500/40 transition">
          <h3 className="text-2xl font-semibold text-white mb-4">Research Facilities</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Reactors, accelerators, and laboratories producing the critical isotopes of the modern economy.
          </p>
          <span className="text-sky-400 text-sm font-medium">Coming Soon</span>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-sky-500/40 transition">
          <h3 className="text-2xl font-semibold text-white mb-4">Companies</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Producers and companies advancing isotope technology, supply chains, and applications worldwide.
          </p>
          <span className="text-sky-400 text-sm font-medium">Coming Soon</span>
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
