import Link from "next/link";

const SECTIONS = [
  {
    title: "Nuclear Production",
    description:
      "Research reactors and advanced systems that convert neutron flux into critical isotopes for medicine, industry, and science.",
    link: "/facilities",
  },
  {
    title: "Quantum Technologies",
    description:
      "Ultra-pure and rare isotopes enabling next-generation quantum computing, sensing, and advanced materials.",
    link: "/isotopes",
  },
  {
    title: "Precision Medicine",
    description:
      "From diagnostic imaging to theranostics (Lu-177, Ac-225, Tb-161) and targeted therapies that seek and destroy disease.",
    link: "/companies",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 py-20">
        Core Applications
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {SECTIONS.map((section) => (
          <Link
            key={section.title}
            href={section.link}
            className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-sky-500/40 transition group"
          >
            {/* Animated background */}
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
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 min-h-[280px] flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
