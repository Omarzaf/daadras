"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Monitor, Code, Brain, Zap, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function StrategySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We conduct rigorous pre- and post-assessments to ensure effective learning, grouping children based on
            skill level rather than age or grade.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Skill-Based Grouping</h3>
              <p className="text-muted-foreground">
                Students are grouped by ability rather than age, ensuring everyone receives appropriate challenges.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Comprehensive Assessment</h3>
              <p className="text-muted-foreground">
                Written tests, practical exercises, and viva exams before and after each course.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Self-Learning Focus</h3>
              <p className="text-muted-foreground">
                Emphasizing independent exploration and learning, reflecting the nature of computer science.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            </motion.div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Curriculum Highlights</h3>
              <p className="text-muted-foreground">
                Our comprehensive curriculum covers essential digital skills and modern technology concepts.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
