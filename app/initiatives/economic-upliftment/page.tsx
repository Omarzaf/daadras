import TestimonialsSection from "@/components/shared/TestimonialsSection"
import { getTestimonialsByInitiative } from "@/lib/testimonials"
import {
  EconomicUpliftmentHero,
  EconomicUpliftmentStrategy,
  LastingChangeSection,
  EconomicImpactStats,
  EconomicUpliftmentCTA
} from "@/components/economic-upliftment"

export default function EconomicUpliftmentPage() {
  const economicUpliftmentTestimonials = getTestimonialsByInitiative('economic-upliftment');
  
  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      <EconomicUpliftmentHero />
      <EconomicUpliftmentStrategy />
      <LastingChangeSection />
      <EconomicImpactStats />
      {economicUpliftmentTestimonials && economicUpliftmentTestimonials.length > 0 && (
        <TestimonialsSection
          testimonials={economicUpliftmentTestimonials}
          title="Stories of Impact"
          subtitle="Real stories from the families and individuals whose lives have been transformed through our programs."
          leftAligned={true}
        />
      )}
      <EconomicUpliftmentCTA />
    </div>
  )
}
