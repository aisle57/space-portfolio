import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t border-white/10">
      <div className="w-full flex flex-col items-center justify-center m-auto py-10">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg text-white mb-2">Isotope Economy</h3>
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              Building the public resource for the isotope age.
            </p>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[16px] mb-3">Explore</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/#projects" className="hover:text-sky-400 transition">
                Nuclear
              </Link>
              <Link href="/#projects" className="hover:text-sky-400 transition">
                Quantum
              </Link>
              <Link href="/#projects" className="hover:text-sky-400 transition">
                Medical
              </Link>
              <Link href="/#hub" className="hover:text-sky-400 transition">
                Hub
              </Link>
            </div>
          </div>

          {/* Resource */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[16px] mb-3">Resource</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link href="/isotopes" className="hover:text-sky-400 transition">
                Isotope Directory
              </Link>
              <Link href="/facilities" className="hover:text-sky-400 transition">
                Research Facilities
              </Link>
              <Link href="/companies" className="hover:text-sky-400 transition">
                Companies
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-[14px] text-center text-gray-500">
          © {new Date().getFullYear()} Isotope Economy. All rights reserved.
        </div>
      </div>
    </div>
  );
};
