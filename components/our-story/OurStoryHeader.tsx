"use client"

import { BookOpen, Target, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function OurStoryHeader() {
  return (
    <>
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 pt-16">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-bold text-primary mb-0 text-left" style={{ fontSize: 'var(--text-5xl)' }}>
            Our Story
          </h2>
          </motion.div>
          <motion.p 
            className="text-muted-foreground leading-relaxed" 
            style={{ fontSize: 'var(--text-xl)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Founded in May 2020 as a grassroots response to community needs, Daadras has evolved into a future-focused,
            education-driven institution committed to empowering underserved communities through transformative learning and
            technology.
          </motion.p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="w-6 h-6 text-primary" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0">
                 What We Do
               </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To educate, empower, and inspire underserved children in Pakistan by providing IT training, emotional
              resilience, and logic-building skills—enabling them to become self-driven learners, break barriers, and
              create their opportunities in a rapidly changing world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Heart className="w-6 h-6 text-primary" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0">
                 Where We're Headed
               </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To create a world where every individual—regardless of circumstance—has access to transformative
              education, emotional resilience, and the tools to shape their future with dignity, purpose, and
              independence.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
