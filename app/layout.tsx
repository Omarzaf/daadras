import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import Navigation from "@/components/header-footer/navigation"
import { Footer } from "@/components/header-footer/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import { ResourceHints } from "@/components/team/ResourceHints"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Daadras - Empowering Communities",
  description:
    "Daadras is dedicated to empowering communities through education, technology, and social-emotional learning programs.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <head>
        {/* FontAwesome now loaded via npm packages only */}
      </head>
      <body className="font-sans overflow-x-hidden">
        <ResourceHints />
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
