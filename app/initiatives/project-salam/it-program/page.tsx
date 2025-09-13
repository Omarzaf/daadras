"use client"

import HeroSection from "@/components/it-program/HeroSection"
import MissionSection from "@/components/it-program/MissionSection"
import StrategySection from "@/components/it-program/StrategySection"
import ChallengesSection from "@/components/it-program/ChallengesSection"
import VolunteerExperienceSection from "@/components/it-program/VolunteerExperienceSection"

export default function ITProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MissionSection />
      <StrategySection />
      <ChallengesSection />
      <VolunteerExperienceSection />
    </div>
  )
}
