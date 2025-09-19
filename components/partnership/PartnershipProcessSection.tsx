"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function PartnershipProcessSection() {
  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Discuss goals, values alignment, and potential collaboration areas"
    },
    {
      step: "2", 
      title: "Partnership Design",
      description: "Co-create partnership framework and define mutual benefits"
    },
    {
      step: "3",
      title: "Implementation & Impact",
      description: "Launch partnership activities with ongoing monitoring and evaluation"
    }
  ]

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left"
            >
              Our Partnership Process
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
          >
            Our collaborative approach ensures meaningful partnerships that create lasting impact for both organizations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
