'use client';

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "../ui/dot-pattern";

export default function Hero() {
  return (
    <div className="h-[80vh] lg:h-[90vh] w-full flex justify-center items-center
      relative overflow-hidden bg-transparent"
    >
      <div className="h-auto w-[90%] flex flex-col justify-center items-center
        gap-8 lg:gap-7"
      >
        <div className="h-auto w-full lg:w-[50%] text-center z-50">
          <h2 className="text-3xl lg:text-5xl font-geist! font-extrabold
            leading-10 lg:leading-16 text-gray-900! dark:text-white!"
          >
            Create your GitHub README the easy way
          </h2>
        </div>
        <div className="text-container z-50">
          <h2 className="text-subheading">
            Select widgets, edit with ease, preview instantly, and export your README.md ⚡
          </h2>
        </div>
        <div className="h-auto w-auto mt-2 z-50!">
          <Link href='/create-readme'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 group inline-flex items-center gap-2
              text-base font-geist font-medium text-white bg-blue-700
              rounded-full hover:bg-blue-600 transition-all duration-300
              border border-white/20 hover:border-white/30"
            >
              <span>Start Creating</span>
              <span>
                <ArrowRight size={22} className="transition-transform duration-300
                group-hover:translate-x-1" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Magicui striped pattern component */}
      {/* <StripedPattern
        className="stroke-[0.3] [stroke-dasharray:8,4] text-stone-600"
      /> */}

      {/* magic ui flickering grid */}
      {/* <FlickeringGrid
        className="h-auto w-full absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        // color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
      /> */}

      <DotPattern 
        glow={true}
        className="h-auto w-full absolute inset-0 z-0 size-full"
        // glowColor="#0084d1"
      />

    </div>
  )
}