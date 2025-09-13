"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { NewsSection } from "@/components/home/NewsSection"
import { ReportsSection } from "@/components/home/ReportsSection"
import { OurInitiativesSection } from "@/components/home/OurInitiativesSection"
import { OurTeamSection } from "@/components/home/OurTeamSection"
import { SupportMissionSection } from "@/components/home/SupportMissionSection"
import ContactSummarySection from "@/components/home/ContactSummarySection"
import { PartnersSection } from "@/components/home/PartnersSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <ReportsSection />
      <OurInitiativesSection />
      <OurTeamSection />
      <SupportMissionSection />
      <PartnersSection />
      <ContactSummarySection />
    </>
  )
}
