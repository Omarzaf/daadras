"use client";

import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProjectSalamCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 mt-20 mb-16 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
            Be Part of the Change
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Every child deserves access to quality education. Join us in transforming lives and building stronger communities through Project Salam.
          </p>
          
          {/* Impact Statement */}
          <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-3xl font-bold text-primary">111+</div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Children Transformed</div>
                <div className="text-sm text-muted-foreground">Across 3 partner organizations</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/get-involved/volunteer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              <Users className="mr-2 h-5 w-5" />
              Volunteer with Us
            </Button>
          </Link>
          <Link href="/get-involved/partnership">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/ways-to-give">
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3">
              Support Salam
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Questions about Project Salam? <Link href="/about/contact" className="text-primary hover:text-primary/80 underline">Contact our team</Link>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
