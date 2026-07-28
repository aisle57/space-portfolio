import { ProjectCard } from "@/components/sub/project-card";

const SECTIONS = [
  {
    title: "Nuclear Production",
    description:
      "Research reactors and advanced systems that convert neutron flux into critical isotopes for medicine, industry, and science.",
    image: "/projects/space-website.png",
    link: "#nuclear",
  },
  {
    title: "Quantum Technologies",
    description:
      "Ultra-pure and rare isotopes enabling next-generation quantum computing, sensing, and advanced materials.",
    image: "/projects/space-website.png",
    link: "#quantum",
  },
  {
    title: "Precision Medicine",
    description:
      "From diagnostic imaging to theranostics to targeted therapies that seek and destroy disease.",
    image: "/projects/space-website.png",
    link: "#medical",
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
          <ProjectCard
            key={section.title}
            src={section.image}
            title={section.title}
            description={section.description}
            link={section.link}
          />
        ))}
      </div>
    </section>
  );
};
