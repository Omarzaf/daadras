"use client"

import { Button } from "@/components/ui/button"
import { Users, Briefcase, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empowering Future <span className="text-primary">Innovators</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nurturing digital literacy and technical skills in children aged 3 to 15, with a focus on those from
          orphanages and underprivileged schools through personalized learning experiences.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/get-involved/volunteer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Users className="mr-2 h-5 w-5" />
              Volunteer with Us
            </Button>
          </Link>
          <Link href="/get-involved/career">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Briefcase className="mr-2 h-5 w-5" />
              Join Our Permanent Team
            </Button>
          </Link>
          <Link href="/about/contact">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
