"use client"

import { motion } from "framer-motion"
import { Package, Heart, Users, Calendar } from "lucide-react"

export default function ReliefStrategySection() {
  return (
    <div className="mb-16">
      <motion.h2 
        className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Food Relief Strategy
      </motion.h2>
      <motion.p 
        className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        We employ a multi-faceted approach to food relief, combining direct assistance, financial support, and strategic partnerships to maximize our impact.
      </motion.p>
      
      <motion.div 
        className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Direct Distribution</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              On-ground distribution of comprehensive food packages to families in crisis situations.
            </p>
          </motion.div>

          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Emergency Response</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Rapid deployment of relief supplies during natural disasters and humanitarian crises.
            </p>
          </motion.div>

          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Community Partnerships</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Collaborating with local organizations to identify and support the most vulnerable families.
            </p>
          </motion.div>

          <motion.div 
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
              <Calendar className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Seasonal Programs</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Targeted relief during Ramadan, winter months, and other critical periods of need.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
