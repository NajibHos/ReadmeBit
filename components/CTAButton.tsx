'use client';

import Link from "next/link";
import { Button } from "./ui/button";

export default function CTAButton() {
  return (
    <div className="h-auto w-auto z-50!">
      <Link href="/create-readme">
        {/* <button
          className="px-6 py-3 text-base font-workSans font-semibold
          text-white bg-blue-700 hover:opacity-90 border
          border-white/20 rounded-full hover:scale-105"
        >
          Start Creating
        </button> */}
        <Button
          variant='teal'
          size='lg'
        >
          Start Creating
        </Button>
      </Link>
    </div>
  );
}
