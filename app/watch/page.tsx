import Link from "next/link";

const titleClass =
  "text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400";

const WATCH_ITEMS = [
  {
    name: "Mo-99 / Tc-99m",
    reason:
      "Diagnostic supply remains concentrated in a small production network. Outage risk is still a system-level issue, not a resolved background detail.",
    links: [
      { label: "Directory", href: "/isotopes#mo-99-tc-99m" },
      { label: "Facilities", href: "/facilities" },
    ],
  },
  {
    name: "Lu-177",
    reason:
      "Therapeutic demand continues to outpace easy capacity expansion. Processing and reactor access remain the binding constraints.",
    links: [
      { label: "Directory", href: "/isotopes#lu-177" },
      { label: "Medicine", href: "/applications/medicine" },
      { label: "Companies", href: "/companies" },
    ],
  },
  {
    name: "Ac-225",
    reason:
      "Clinical interest is rising faster than proven, scalable production routes. Availability is still the gating item.",
    links: [
      { label: "Directory", href: "/isotopes#ac-225" },
      { label: "Medicine", href: "/applications/medicine" },
    ],
  },
  {
    name: "Si-28",
    reason:
      "Quantum hardware demand is pushing high-purity Si-28 from research specialty toward materials-input status.",
    links: [
      { label: "Directory", href: "/isotopes#si-28" },
      { label: "Quantum", href: "/applications/quantum" },
      { label: "Companies", href: "/companies" },
    ],
  },
  {
    name: "HALEU enrichment",
    reason:
      "Advanced reactor timelines still depend on enrichment capacity that is being rebuilt, not already abundant.",
    links: [
      { label: "Nuclear", href: "/applications/nuclear" },
      { label: "Companies", href: "/companies" },
    ],
  },
  {
    name: "He-3",
    reason:
      "Limited production pathways and competing strategic uses leave little spare capacity in the system.",
    links: [{ label: "Directory", href: "/isotopes#he-3" }],
  },
];

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-sky-400 text-sm mb-3 tracking-wide uppercase">
            Q3 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quarterly Watchlist
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Structural pressure points in the isotope economy this quarter.
            Not news. Not prices. Why these items are worth watching now.
          </p>
        </div>

        <section className="mb-20">
          <h2 className={titleClass}>Active items</h2>
          <div className="space-y-4">
            {WATCH_ITEMS.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <h3 className="font-semibold text-white text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.reason}
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.links.map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className="text-sky-400 text-sm hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className={titleClass}>How to use this list</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              The rest of the hub is the permanent map. This page is the
              quarterly pressure layer on top of it.
            </p>
            <p>
              Items appear here only when there is active structural tension:
              tight supply, rising demand, constrained routes, or unfinished
              capacity rebuilds.
            </p>
            <p>
              Directory entries explain what something is. This list only
              answers why it is under pressure now.
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
          <h2 className={titleClass}>Go deeper</h2>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-2">
            <Link
              href="/isotopes"
              className="py-3 px-6 button-primary text-center text-white rounded-lg"
            >
              Directory
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
              href="/capital"
              className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
            >
              Capital & Markets
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
