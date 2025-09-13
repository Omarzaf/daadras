"use client";

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function CareersHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="mb-16" ref={ref}>
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Career Opportunities
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-3xl text-pretty"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Build a meaningful career with Daadras Foundation. Join our dedicated team working to transform communities
        through education and social impact.
      </motion.p>
    </div>
  )
}
