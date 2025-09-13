"use client"

import { TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function LastingChangeSection() {
  const changePoints = [
    {
      icon: TrendingUp,
      title: "From Dependency to Independence",
      description: "We provide tools, training, and resources that enable individuals to become self-sufficient and create their own opportunities for growth."
    },
    {
      icon: Users,
      title: "Multiplier Effect",
      description: "Each person we empower goes on to help others in their community, creating a ripple effect of positive change."
    }
  ]

  return (
    <div className="mb-16">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
          Creating Lasting Change
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl">
          Our approach focuses on sustainable solutions that address root causes rather than just symptoms.
        </p>
      </motion.div>

      <div className="space-y-6">
        {changePoints.map((point, index) => (
          <motion.div 
            key={point.title}
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-primary/10 p-3 rounded-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <point.icon className="h-6 w-6 text-primary" />
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-space-grotesk">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
