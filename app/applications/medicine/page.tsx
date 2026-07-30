import Link from "next/link";

const titleClass =
  "text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400";

export default function MedicineApplicationPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            Application Area
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Precision Medicine
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Isotopes are one of the most important tools in modern medicine.
            They make disease visible, carry therapy directly to target tissue,
            and support treatments that combine diagnosis and therapy in the
            same molecular system.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Why isotopes matter in medicine</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Medicine uses isotopes in two main ways. Some isotopes emit
              signals that can be imaged. Others deliver energy that can
              destroy diseased cells. In the best modern systems, those two
              functions are designed to work together.
            </p>
            <p>
              That is the basis of nuclear medicine and radiopharmaceutical
              development. A molecule seeks a biological target. An isotope
              attached to that molecule either reveals where the target is,
              treats it, or does both.
            </p>
            <p>
              This is not a narrow specialty anymore. Diagnostic imaging,
              oncology, cardiology, endocrinology, and an expanding set of
              therapeutic programs all depend on reliable access to the right
              isotopes.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>How medical isotopes are used</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Diagnostics
              </h3>
              <p>
                Diagnostic isotopes make biological processes visible. PET and
                SPECT imaging use radiotracers to map blood flow, metabolism,
                receptor expression, and disease burden.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Therapy
              </h3>
              <p>
                Therapeutic isotopes deliver radiation directly to target
                tissue. Depending on the isotope, that energy may come from
                beta particles or alpha particles.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Theranostics
              </h3>
              <p>
                Theranostics pairs imaging and therapy around the same target.
                Lutetium-177 systems are the clearest current commercial
                example.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <h3 className="font-semibold text-white text-lg mb-2">
                Alpha therapy
              </h3>
              <p>
                Alpha-emitting isotopes deposit large amounts of energy over a
                very short distance. Actinium-225 and radium-223 are among the
                most watched systems in this area.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Key medical isotopes</h2>
          <div className="space-y-4">
            {[
              {
                name: "Mo-99 / Tc-99m",
                href: "/isotopes#mo-99-tc-99m",
                about:
                  "The backbone of diagnostic nuclear medicine.",
              },
              {
                name: "F-18",
                href: "/isotopes#f-18",
                about:
                  "The primary PET imaging isotope, most commonly used as FDG.",
              },
              {
                name: "Ga-68",
                href: "/isotopes#ga-68",
                about:
                  "A generator-produced PET isotope used in targeted diagnostics.",
              },
              {
                name: "Lu-177",
                href: "/isotopes#lu-177",
                about:
                  "Central therapeutic isotope in radioligand therapy and theranostics.",
              },
              {
                name: "Ac-225",
                href: "/isotopes#ac-225",
                about:
                  "High-value alpha emitter for targeted cancer therapy. Production remains constrained.",
              },
              {
                name: "I-131",
                href: "/isotopes#i-131",
                about:
                  "Established therapeutic and diagnostic isotope, especially in thyroid medicine.",
              },
              {
                name: "Y-90",
                href: "/isotopes#y-90",
                about:
                  "Therapeutic isotope used in liver-directed and other targeted treatments.",
              },
              {
                name: "Ra-223",
                href: "/isotopes#ra-223",
                about:
                  "Alpha-emitting therapy used for bone metastases.",
              },
              {
                name: "Zr-89",
                href: "/isotopes#zr-89",
                about:
                  "Longer-lived PET isotope useful for antibody-based imaging.",
              },
              {
                name: "Cu-64",
                href: "/isotopes#cu-64",
                about:
                  "Versatile copper isotope used across imaging and therapeutic research.",
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
              href="/isotopes#medical"
              className="text-sky-400 hover:underline"
            >
              Medical & Theranostics section
            </Link>
            .
          </p>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Production and supply</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Medical isotope supply depends on reactors, accelerators,
              generators, processing, logistics, and regulatory release.
            </p>
            <p>
              Short-lived PET isotopes are often produced close to the clinic.
              Other isotopes move through concentrated regional or global
              supply chains.
            </p>
            <p>
              That concentration is why Mo-99 / Tc-99m remains strategically
              visible, and why rising demand for Lu-177 and Ac-225 is forcing
              new production investment.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>
            Facilities and companies behind the field
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Research reactors remain central for several major medical
              isotopes. Accelerators and cyclotrons are increasingly important
              for PET isotopes and alternative production routes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/facilities"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Research Facilities
            </Link>
            <Link
              href="/companies"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Companies
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>Where the field is heading</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Diagnostic nuclear medicine is mature. The faster-moving frontier
              is therapy, especially radioligand therapy and alpha emitters.
            </p>
            <p>
              The next phase will be shaped by whether supply chains and
              manufacturing capacity can support wider clinical use.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className={titleClass}>Continue in the hub</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-6">
            <Link
              href="/isotopes#medical"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Medical Isotopes
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
