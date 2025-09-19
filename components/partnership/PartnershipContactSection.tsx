"use client"

import { Button } from "@/components/ui/button"
import { Mail, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function PartnershipContactSection() {
  return (
    <section id="contact" className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] mb-4"
          >
            Ready to Partner With Us?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Let's discuss how we can work together to create meaningful change in communities.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/about/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about/contact">
                <Users className="mr-2 h-5 w-5" />
                Schedule Meeting
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
