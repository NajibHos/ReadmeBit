// 'use client';

import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Feature";
import Templates from "@/components/sections/Template";
import Feedback from "@/components/sections/Feedback";

export default function Home() {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center">
      {/* Hero section */}
      <Hero />

      {/* Features section */}
      <Features />

      {/* Templates section */}
      <Templates />

      {/* Feedback section */}
      <Feedback />
    </div>
  )
}