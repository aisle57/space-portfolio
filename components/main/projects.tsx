import Link from "next/link";

const SECTIONS = [
  {
    title: "Nuclear Production",
    description:
      "Fissile materials, enrichment, fusion-related isotopes, and the nuclear infrastructure that underpins energy and strategic systems.",
    link: "/applications/nuclear",
  },
  {
    title: "Quantum Technologies",
    description:
      "Isotopically engineered materials for quantum computing, sensing, and advanced devices where nuclear properties shape performance.",
    link: "/applications/quantum",
  },
  {
    title: "Precision Medicine",
    description:
      "Diagnostic imaging, theranostics, and targeted radiopharmaceutical therapies built around medical isotopes.",
    link: "/applications/medicine",
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
