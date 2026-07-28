"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-2 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          From laser isotope enrichment to targeted cancer therapies. 
          The technologies reshaping energy, quantum systems, and medicine.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Explore the Hub
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Isotope visual"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
