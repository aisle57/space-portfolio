"use client";

import { useState } from "react";
import Link from "next/link";

import { SOCIALS } from "@/constants";

const NAV_GROUPS = [
  {
    title: "Learn",
    items: [
      { title: "Start Learning", link: "/learn" },
      { title: "Advanced", link: "/advanced" },
    ],
  },
  {
    title: "Applications",
    items: [
      { title: "Precision Medicine", link: "/applications/medicine" },
      { title: "Quantum Technologies", link: "/applications/quantum" },
      { title: "Nuclear Production", link: "/applications/nuclear" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Isotope Directory", link: "/isotopes" },
      { title: "Facilities", link: "/facilities" },
      { title: "Companies", link: "/companies" },
      { title: "Capital & Markets", link: "/capital" },
      { title: "Links", link: "/links" },
    ],
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-sky-900/40 bg-[#03001427] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        <Link href="/" className="flex items-center">
          <div className="font-bold text-gray-200 text-lg tracking-wide">
            Isotope Economy
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 border border-sky-400/30 bg-[rgba(3,0,20,0.37)] px-3 py-2 rounded-full text-gray-200 text-sm">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.title}
                className="relative"
                onMouseEnter={() => setOpenDesktop(group.title)}
                onMouseLeave={() => setOpenDesktop(null)}
              >
                <button
                  className="px-3 py-1 hover:text-sky-400 transition"
                  onClick={() =>
                    setOpenDesktop(
                      openDesktop === group.title ? null : group.title
                    )
                  }
                >
                  {group.title}
                </button>

                {openDesktop === group.title && (
                  <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                    <div className="rounded-xl border border-white/10 bg-[#0a0618] shadow-xl p-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.link}
                          className="block px-3 py-2 rounded-lg text-gray-300 hover:text-sky-400 hover:bg-white/5 transition"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-4 ml-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-5 w-5 text-white hover:text-sky-400 transition" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] border-t border-white/10 p-5 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <button
                  className="w-full text-left text-gray-200 font-medium py-2"
                  onClick={() =>
                    setOpenMobile(
                      openMobile === group.title ? null : group.title
                    )
                  }
                >
                  {group.title}
                </button>

                {openMobile === group.title && (
                  <div className="pl-3 pb-2 flex flex-col gap-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        className="text-gray-400 hover:text-sky-400 transition py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-7 w-7 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
