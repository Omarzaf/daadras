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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <MissionContextSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ReliefProgramsSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ClothingReliefSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FloodResponseSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ReliefStrategySection />
          </motion.div>

          {emergencyReliefTestimonials && emergencyReliefTestimonials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <TestimonialsSection
                testimonials={emergencyReliefTestimonials}
                title="Voices of Hope During Crisis"
                subtitle="Hear from families who received life-saving support during their most challenging moments."
                leftAligned={true}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <EmergencyReliefCTA />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
