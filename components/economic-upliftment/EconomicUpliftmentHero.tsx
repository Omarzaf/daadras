"use client"

import { motion } from "framer-motion"

export default function EconomicUpliftmentHero() {
  return (
    <div className="mb-16">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Economic Upliftment
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Empowering individuals and families not just through temporary relief but by fostering long-term economic
        sustainability and financial independence for lasting impact.
      </motion.p>
    </div>
  )
}
