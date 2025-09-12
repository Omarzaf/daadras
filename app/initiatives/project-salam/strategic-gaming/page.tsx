import HeroSection from "@/components/strategic-gaming/HeroSection"
import MissionSection from "@/components/strategic-gaming/MissionSection"
import StrategySection from "@/components/strategic-gaming/StrategySection"
import CurriculumSection from "@/components/strategic-gaming/CurriculumSection"
import VolunteerSection from "@/components/strategic-gaming/VolunteerSection"
import ChallengesSection from "@/components/strategic-gaming/ChallengesSection"
import ImpactSection from "@/components/strategic-gaming/ImpactSection"

export default function StrategicGamingPage() {
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
