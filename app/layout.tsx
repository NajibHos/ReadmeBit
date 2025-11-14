import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ReadmeProvider } from "@/lib/readme-context";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "ReadmeBit",
  description: `ReadmeBit let's you create and customize your Github README easily.
  Select widgets, edit with ease, preview instantly, copy as makdown or export README.md file. Free
  and Open Source.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geist.variable} antialiased`}
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

              {/* vercel analytics */}
              <Analytics />

              {/* shadcn toast component */}
              <Toaster
                position="top-right"
                richColors
              />
            </main>
            <Footer/>
          </ReadmeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
