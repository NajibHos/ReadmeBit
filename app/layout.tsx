import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ReadmeProvider } from "@/lib/readme-context";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "ReadmeBit",
  description: "Create your GitHub README the easy way. Build clean README files using widgets, markdown formatting tools, instant GitHub-style preview, and local storage support — no login needed.",
  keywords: [
    'readme', 'readme editor', 'markdown editor', 'github readme editor',
    'readme generator', 'readmebit', 'markdown formatting', 'create readme',
    'github preview', 'widget based editing', 'github readme generator'
  ],
  openGraph: {
    title: 'ReadmeBit',
    description: 'Create your GitHub README easily with ReadmeBit. Build and preview your README using widgets, markdown formatting, and live preview.',
    siteName: 'ReadmeBit',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReadmeBit',
    description: 'Create your GitHub README easily with widgets, formatting, and live preview.',
    creator: '@najib_dev'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": 'large',
      "max-video-preview": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ReadmeBit",
  "url": "https://readmebit.com",
  "logo": "",
  "sameAs": [
    "https://github.com/NajibHos",
    "https://x.com/najib_dev"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${workSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReadmeProvider>
            <Header />
            <main className="h-auto w-full">
              {children}

              {/* vercel analytics component */}
              <Analytics />

              {/* vercel speed insight component */}
              <SpeedInsights />

              {/* shadcn toast component */}
              <Toaster
                position="top-right"
                richColors
              />
            </main>
            <Footer/>
          </ReadmeProvider>
        </ThemeProvider>

        {/* json-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
