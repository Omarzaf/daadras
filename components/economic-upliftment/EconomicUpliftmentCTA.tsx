"use client"

import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function EconomicUpliftmentCTA() {
  return (
    <motion.div 
      className="text-left bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl font-bold text-foreground mb-4 font-space-grotesk"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join Our Economic Empowerment Mission
      </motion.h2>
      <motion.p 
        className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Help us create sustainable change by supporting families on their journey to financial independence. Your
        contribution doesn't just provide temporary relief—it builds lasting prosperity.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button className="bg-accent hover:bg-accent/90">
          <Heart className="mr-2 h-4 w-4" />
          Support Economic Upliftment
        </Button>
        <Button variant="outline">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  )
}
