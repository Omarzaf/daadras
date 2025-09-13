"use client"

import Marquee from "@/components/ui/marquee"
import { motion } from "framer-motion"

export function CoreValues() {
  const values = ["Empathy", "Equity", "Education", "Empowerment", "Innovation"]
  
  return (
    <motion.div 
      className="w-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Marquee className="py-4" pauseOnHover={false}>
        {values.map((value, index) => (
          <motion.div 
            key={`${value}-${index}`} 
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-2xl font-bold text-primary uppercase tracking-wider whitespace-nowrap">
              {value.toUpperCase()}
            </span>
            <span className="mx-8 md:mx-12 text-2xl text-primary/60">•</span>
          </motion.div>
        ))}
      </Marquee>
    </motion.div>
  )
}
