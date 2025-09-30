"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Package, ArrowRight } from "lucide-react"

export default function EmergencyReliefCTA() {
  return (
    <motion.div 
      className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 font-[family-name:var(--font-space-grotesk)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Help Us Feed Families in Need
      </motion.h2>
      <motion.p 
        className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Your support helps us provide essential nutrition and supplies to families facing crisis. Every contribution
        makes a difference in ensuring dignity and basic needs are met.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button className="bg-accent hover:bg-accent/90 w-full sm:w-auto text-sm sm:text-base py-2 sm:py-2.5">
          <Package className="mr-2 h-4 w-4" />
          Support Emergency Relief Drives
        </Button>
        <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base py-2 sm:py-2.5">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
