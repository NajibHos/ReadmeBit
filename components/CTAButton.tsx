'use client';

import Link from "next/link";

export default function CTAButton() {
  return (
    <div className="h-auto w-auto mt-3 z-50!">
      <Link href="/create-readme">
        <button
          className="px-6 py-3 text-base font-workSans font-semibold
          text-white bg-blue-700 hover:opacity-90 border
          border-white/20 rounded-full hover:scale-105"
        >
          Start Creating
        </button>
      </Link>
    </div>
  );
}
