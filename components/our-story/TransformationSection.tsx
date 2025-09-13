"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function TransformationSection() {
  return (
    <div className="prose prose-lg max-w-none mb-16">
      <motion.div 
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-6 h-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0">
          From Crisis Response to Educational Transformation
        </h2>
      </motion.div>

      <motion.p 
        className="text-base text-muted-foreground leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        The Daadras Foundation began as a grassroots response to immediate community needs during the COVID-19
        pandemic and Balochistan floods. Our early efforts focused on food drives and helping vulnerable families
        secure basic income and sustenance during times of crisis. These compassion-driven initiatives were rooted
        in empathy and a commitment to uplift those facing hardship.
      </motion.p>

      <motion.p 
        className="text-base text-muted-foreground leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        As our work deepened, we recognized that lasting change comes not just from meeting urgent needs, but from
        empowering individuals through education. This realization led Daadras to evolve into an education-centered
        organization, now focused on equipping underserved communities, especially children, with the tools to build
        sustainable, independent futures.
      </motion.p>

      <motion.p 
        className="text-base text-muted-foreground leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Today, Daadras has grown into a technology-driven organization, leveraging AI and software development to
        build solutions that streamline workflows and expand our impact. Through our internship programs, we mentor
        emerging technologists by involving them in real-world projects that optimize our operations and enhance
        curriculum delivery.
      </motion.p>
    </div>
  )
}
