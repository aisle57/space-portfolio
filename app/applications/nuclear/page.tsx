import Link from "next/link";

const titleClass =
  "text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400";

export default function NuclearApplicationPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            Application Area
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuclear Production
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nuclear systems depend on specific isotopes, not generic elements.
            Fissile materials, fertile materials, fusion-related isotopes, and
            specialized nuclear products form the backbone of energy, research,
            and strategic infrastructure.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Why isotopes matter in nuclear systems</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Reactors run because certain nuclei can sustain fission. Fuel
              cycles matter because some isotopes can be converted into others.
              Fusion concepts depend on specific hydrogen and lithium isotopes.
            </p>
            <p>
              The difference between U-235 and U-238 is not academic. It
              determines whether a fuel system works.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Key nuclear isotopes</h2>
          <div className="space-y-4">
            {[
              {
                name: "U-235",
                href: "/isotopes#u-235",
                about:
                  "Primary fissile isotope used in most commercial nuclear reactors.",
              },
              {
                name: "U-238",
                href: "/isotopes#u-238",
                about:
                  "Dominant natural uranium isotope and a fertile material in fuel cycles.",
              },
              {
                name: "Pu-239",
                href: "/isotopes#pu-239",
                about:
                  "Key fissile isotope produced in reactors and used in certain fuel-cycle strategies.",
              },
              {
                name: "Pu-238",
                href: "/isotopes#pu-238",
                about:
                  "Critical for long-lived space power systems.",
              },
              {
                name: "Th-232",
                href: "/isotopes#th-232",
                about:
                  "Fertile isotope at the center of thorium fuel cycle research.",
              },
              {
                name: "U-233",
                href: "/isotopes#u-233",
                about:
                  "Fissile isotope relevant to thorium-based pathways.",
              },
              {
                name: "H-2 (Deuterium)",
                href: "/isotopes#h-2-deuterium",
                about:
                  "Stable heavy hydrogen isotope used in fusion research.",
              },
              {
                name: "H-3 (Tritium)",
                href: "/isotopes#h-3-tritium",
                about:
                  "Radioactive hydrogen isotope important to certain fusion approaches.",
              },
              {
                name: "Li-6",
                href: "/isotopes#li-6",
                about:
                  "Strategically important for tritium breeding concepts.",
              },
              {
                name: "Li-7",
                href: "/isotopes#li-7",
                about:
                  "Relevant in some nuclear system chemistries.",
              },
              {
                name: "He-3",
                href: "/isotopes#he-3",
                about:
                  "Scarce strategic isotope with specialized nuclear-related roles.",
              },
              {
                name: "He-4",
                href: "/isotopes#he-4",
                about:
                  "Common helium isotope foundational to cryogenics and industrial systems.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="font-semibold text-white mb-2">
                  <Link
                    href={item.href}
                    className="hover:text-sky-400 transition"
                  >
                    {item.name}
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.about}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Full curated entries live in the{" "}
            <Link
              href="/isotopes#energy"
              className="text-sky-400 hover:underline"
            >
              Energy & Nuclear section
            </Link>
            .
          </p>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Production and supply</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Nuclear isotope supply is inseparable from the fuel cycle and
              national nuclear infrastructure: enrichment, reactors, and
              specialized production facilities.
            </p>
            <p>
              For advanced reactors, HALEU and related enrichment pathways have
              become strategically important. Fusion adds pressure around
              tritium and lithium isotope management.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className={titleClass}>Continue in the hub</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-6">
            <Link
              href="/isotopes#energy"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Nuclear Isotopes
            </Link>
            <Link
              href="/facilities"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Facilities
            </Link>
            <Link
              href="/companies"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Companies
            </Link>
            <Link
              href="/links"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Links
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
