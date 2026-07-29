"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  slideInFromLeft,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-end min-h-[85vh] md:min-h-[80vh] px-6 md:px-20 pb-16 md:pb-24 w-full z-[20]"
    >
      <div className="w-full max-w-3xl">
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-4xl md:text-6xl font-bold text-white"
        >
          <span>
            Precision at the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400">
              Atomic Scale
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          Isotopes power medicine, energy systems, quantum technologies, and advanced industry.
          This is a public resource for understanding them and the infrastructure behind them.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a
            href="#hub"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Enter the Hub
          </a>
          <Link
            href="/isotopes"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Start with Isotopes
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
