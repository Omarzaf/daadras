"use client"

import { motion } from "framer-motion"

export default function EmergencyReliefHero() {
  return (
    <div className="mb-16">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Emergency Relief
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Ensuring access to basic nutrition and essential supplies for families in critical need, especially during
        times of crisis and economic hardship.
      </motion.p>
      <motion.p 
        className="text-lg text-muted-foreground max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Our emergency relief programs provide immediate assistance to vulnerable communities facing natural disasters, economic hardship, and food insecurity across Pakistan.
      </motion.p>
    </div>
  )
}
