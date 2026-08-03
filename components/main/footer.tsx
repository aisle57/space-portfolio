import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t border-white/10">
      <div className="w-full flex flex-col items-center justify-center m-auto py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-start justify-between gap-10 px-6">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <h3 className="font-bold text-lg text-white mb-2">
              Isotope Economy
            </h3>
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              A public resource for the isotopes, facilities, and companies
              shaping medicine, energy, quantum systems, and industry.
            </p>
            <p className="text-sm text-gray-500 text-center md:text-left max-w-xs mt-3">
              Operated by Matthew Malaszuk
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-[16px] mb-3">Learn</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link href="/" className="hover:text-sky-400 transition">
                  Home
                </Link>
                <Link href="/learn" className="hover:text-sky-400 transition">
                  Start Learning
                </Link>
                <Link href="/advanced" className="hover:text-sky-400 transition">
                  Advanced
                </Link>
                <Link href="/about" className="hover:text-sky-400 transition">
                  About
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-[16px] mb-3">Applications</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link
                  href="/applications/medicine"
                  className="hover:text-sky-400 transition"
                >
                  Precision Medicine
                </Link>
                <Link
                  href="/applications/quantum"
                  className="hover:text-sky-400 transition"
                >
                  Quantum Technologies
                </Link>
                <Link
                  href="/applications/nuclear"
                  className="hover:text-sky-400 transition"
                >
                  Nuclear Production
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-bold text-[16px] mb-3">Resources</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link href="/watch" className="hover:text-sky-400 transition">
                  Q3 Watchlist
                </Link>
                <Link href="/isotopes" className="hover:text-sky-400 transition">
                  Isotope Directory
                </Link>
                <Link
                  href="/facilities"
                  className="hover:text-sky-400 transition"
                >
                  Research Facilities
                </Link>
                <Link href="/map" className="hover:text-sky-400 transition">
                  Map
                </Link>
                <Link href="/graph" className="hover:text-sky-400 transition">
                  Graph
                </Link>
                <Link
                  href="/companies"
                  className="hover:text-sky-400 transition"
                >
                  Companies
                </Link>
                <Link href="/capital" className="hover:text-sky-400 transition">
                  Capital & Markets
                </Link>
                <Link href="/links" className="hover:text-sky-400 transition">
                  Links
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-center text-gray-400">
          Questions, corrections, or additions:{" "}
          <Link
            href="https://x.com/IsotopeEconomy"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sky-400 hover:underline"
          >
            @IsotopeEconomy on X
          </Link>
        </div>

        <div className="mt-4 text-[14px] text-center text-gray-500">
          © {new Date().getFullYear()} Isotope Economy. All rights reserved.
        </div>
      </div>
    </div>
  );
};
