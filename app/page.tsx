"use client"

import { Suspense, lazy } from "react"
import { HeroSection } from "@/components/home/HeroSection"

// Lazy load non-critical components
const NewsSection = lazy(() => import("@/components/home/NewsSection").then(module => ({ default: module.NewsSection })))
const ReportsSection = lazy(() => import("@/components/home/ReportsSection").then(module => ({ default: module.ReportsSection })))
const OurInitiativesSection = lazy(() => import("@/components/home/OurInitiativesSection").then(module => ({ default: module.OurInitiativesSection })))
const OurTeamSection = lazy(() => import("@/components/home/OurTeamSection").then(module => ({ default: module.OurTeamSection })))
const SupportMissionSection = lazy(() => import("@/components/home/SupportMissionSection").then(module => ({ default: module.SupportMissionSection })))
const PartnersSection = lazy(() => import("@/components/home/PartnersSection").then(module => ({ default: module.PartnersSection })))
const ContactSummarySection = lazy(() => import("@/components/home/ContactSummarySection"))

// Loading skeleton component
const SectionSkeleton = () => (
  <div className="py-8 md:py-16 lg:py-24">
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
)

export default function HomePage() {
  return (
    <>
      {/* Critical content - loads immediately */}
      <HeroSection />
      
      {/* Non-critical content - lazy loaded */}
      <Suspense fallback={<SectionSkeleton />}>
        <NewsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <OurInitiativesSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <OurTeamSection />
      </Suspense>
      
      
      <Suspense fallback={<SectionSkeleton />}>
        <SupportMissionSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <PartnersSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ReportsSection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSummarySection />
      </Suspense>
    </>
  )
}
