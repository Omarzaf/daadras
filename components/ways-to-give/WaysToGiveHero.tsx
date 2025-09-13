"use client"

import { Heart, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WaysToGiveHero() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left"
            >
              Ways to Give
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
          >
            Your generous support helps us continue empowering communities through education, technology, and social-emotional learning programs. Every contribution makes a real difference.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary" />
            <span>100% Goes to Programs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Tax Deductible</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
