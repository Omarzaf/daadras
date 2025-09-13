"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Globe, BookOpen, Monitor, Zap, Target } from "lucide-react"
import { motion } from "framer-motion"

export default function ChallengesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">
            Challenges We Address
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We've identified key challenges and developed innovative solutions to ensure effective learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="h-6 w-6 text-primary mb-2" />
                </motion.div>
                <CardTitle className="text-lg">Attention Spans</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Micro-sessions, storytelling, games, and movement breaks for younger children (ages 3-8).
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Globe className="h-6 w-6 text-accent mb-2" />
                </motion.div>
                <CardTitle className="text-lg">Language Barriers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bilingual curriculum, Urdu labeling, and local-language volunteers bridge the gap.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <BookOpen className="h-6 w-6 text-primary mb-2" />
                </motion.div>
                <CardTitle className="text-lg">Diverse Backgrounds</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personalized approaches accommodate different academic starting levels within classes.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Monitor className="h-6 w-6 text-accent mb-2" />
                </motion.div>
                <CardTitle className="text-lg">Resource Constraints</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Donations and repairs help address the shortage of functional computers.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap className="h-6 w-6 text-primary mb-2" />
                </motion.div>
                <CardTitle className="text-lg">Infrastructure Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Adaptive teaching methods work around inconsistent internet and power outages.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Target className="h-6 w-6 text-accent mb-2" />
                </motion.div>
                <CardTitle className="text-lg">Limited Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Many children had never used computers before joining our program.</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
