'use client';

import Link from "next/link";

export default function CTAButton() {
  return (
    <div className="h-auto w-auto z-50!">
      <Link href="/create-readme">
        <button
          className="px-5 py-2.5 text-sm font-workSans font-medium shadow-sm
          rounded bg-blue-700 text-white hover:bg-blue-700/60"
        >
          Start Creating
        </button>
      </Link>
    </div>
  );
}
