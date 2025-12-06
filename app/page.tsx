import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Feature";
import Templates from "@/components/sections/Template";
import Feedback from "@/components/sections/Feedback";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ReadmeBit",
  "url": "https://readmebit.com",
  "description": "Create your GitHub README the easy way using widgets, markdown formatting tools, instant GitHub-style preview, and local storage support.",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://readmebit.com"
  }
}

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </div>
  )
}