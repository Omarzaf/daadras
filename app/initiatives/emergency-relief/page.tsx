"use client"

import { motion } from "framer-motion"
import TestimonialsSection from "@/components/shared/TestimonialsSection"
import { getTestimonialsByInitiative } from "@/lib/testimonials"
import {
  EmergencyReliefHero,
  MissionContextSection,
  ReliefProgramsSection,
  ClothingReliefSection,
  FloodResponseSection,
  ReliefStrategySection,
  EmergencyReliefCTA
} from "@/components/emergency-relief"

export default function EmergencyReliefPage() {
  const emergencyReliefTestimonials = getTestimonialsByInitiative('emergency-relief');
  
  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 md:py-16 lg:py-24 bg-background">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <EmergencyReliefHero />
          
          <MissionContextSection />
          <ReliefProgramsSection />
          <ClothingReliefSection />
          <FloodResponseSection />

          <ReliefStrategySection />

          {emergencyReliefTestimonials && emergencyReliefTestimonials.length > 0 && (
            <TestimonialsSection
              testimonials={emergencyReliefTestimonials}
              title="Voices of Hope During Crisis"
              subtitle="Hear from families who received life-saving support during their most challenging moments."
              leftAligned={true}
            />
          )}

          <EmergencyReliefCTA />
        </div>
      </section>
    </div>
  )
}
