"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ProgramOverviewSection() {
  return (
    <motion.div 
      id="program-overview"
      className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 mt-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Program Overview
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Unlike traditional education systems, Salam uniquely combines technology literacy, strategic thinking, and emotional intelligence in a single integrated curriculum. Our three-pillar approach ensures children develop not just academic skills, but the confidence and critical thinking abilities needed to thrive in the modern world.
        </motion.p>
      </div>

      {/* Program Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl mb-3 font-space-grotesk">Information Technology</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                Students learn computer basics, internet navigation, digital safety, and introductory programming concepts. We provide hands-on experience with modern technology tools, preparing them for the digital world while bridging the technology gap in underserved communities.
              </p>
              <Link href="/initiatives/project-salam/it-program">
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl mb-3 font-space-grotesk">Strategic Gaming</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                Through chess, students develop critical thinking, pattern recognition, and strategic planning skills. The game teaches patience, concentration, and decision-making while providing a fun, engaging way to enhance cognitive abilities and build confidence through mastery of complex strategies.
              </p>
              <Link href="/initiatives/project-salam/strategic-gaming">
                <Button variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl mb-3 font-space-grotesk">Social-Emotional Learning</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                Our SEL curriculum focuses on emotional regulation, empathy, conflict resolution, and self-awareness. Students learn mindfulness techniques, develop healthy relationships, and build resilience through interactive activities that promote mental well-being and social skills essential for life success.
              </p>
              <Link href="/initiatives/project-salam/sel-program">
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
