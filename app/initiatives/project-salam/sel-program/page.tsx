"use client"

import HeroSection from "@/components/sel-program/HeroSection"
import MissionSection from "@/components/sel-program/MissionSection"
import StrategySection from "@/components/sel-program/StrategySection"
import CurriculumSection from "@/components/sel-program/CurriculumSection"
import VolunteerSection from "@/components/sel-program/VolunteerSection"
import ChallengesSection from "@/components/sel-program/ChallengesSection"
import ImpactSection from "@/components/sel-program/ImpactSection"

export default function SELProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MissionSection />
      <StrategySection />
      <CurriculumSection />
      <VolunteerSection />
      <ChallengesSection />
      <ImpactSection />
    </div>
  )
}
