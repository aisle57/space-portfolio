import Link from "next/link";

const RESOURCES = [
  {
    title: "Isotope Directory",
    description:
      "Curated map of the isotopes that matter most across medicine, energy, quantum systems, and strategic supply chains.",
    link: "/isotopes",
  },
  {
    title: "Research Facilities",
    description:
      "Reactors, accelerators, and production networks that turn nuclear infrastructure into usable isotopes.",
    link: "/facilities",
  },
  {
    title: "Companies",
    description:
      "Producers, enrichers, and commercial players advancing isotope supply and applications.",
    link: "/companies",
  },
  {
    title: "Links",
    description:
      "Authoritative external data sources, institutions, labs, and organizations across the wider isotope world.",
    link: "/links",
  },
];

export const Skills = () => {
  return (
    <section
      id="hub"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="text-center mb-12 z-10 px-4">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
          Resource Map
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          The core reference layers of the hub. Use these to move from overview
          into specific isotopes, production sites, companies, and external sources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 w-full max-w-6xl z-10">
        {RESOURCES.map((resource) => (
          <Link key={resource.title} href={resource.link} className="block group">
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
              <div className="relative z-10 p-8 min-h-[220px] flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {resource.description}
                </p>
                <span className="text-sky-400 text-sm font-medium">
                  Explore →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14 z-10">
        <Link
          href="/advanced"
          className="text-gray-400 hover:text-sky-400 transition text-sm"
        >
          Prefer the denser strategic view? Go to Advanced →
        </Link>
      </div>
    </section>
  );
};
