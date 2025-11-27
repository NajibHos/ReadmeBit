'use client';

import Link from "next/link";
import { motion } from "motion/react";

export default function CTAButton() {
  return (
    <div className="h-auto w-auto mt-3 z-50!">
      <Link href="/create-readme">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
          className="px-6 py-3 text-base font-workSans font-semibold
          text-white bg-blue-700 border border-white/20 rounded-full"
        >
          Start Creating
        </motion.button>
        {/* <button
          className="px-6 py-3 text-base font-workSans font-semibold
          text-white bg-blue-700 border border-white/20 rounded-full
          hover:scale-110 transition-all duration-300"
        >
          Start Creating
        </button> */}
      </Link>
    </div>
  );
}
