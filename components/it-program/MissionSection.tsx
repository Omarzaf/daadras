"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function MissionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            To provide personalized learning experiences and broaden the IT exposure of children, equipping them with
            practical skills tailored to their current abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                </motion.div>
                <CardTitle className="font-space-grotesk">Personalized Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tailored educational experiences that adapt to each child's unique abilities and learning pace.
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                </motion.div>
                <CardTitle className="font-space-grotesk">Digital Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building foundational computer skills and digital confidence for the modern world.
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
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                </motion.div>
                <CardTitle className="font-space-grotesk">Inclusive Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Focusing on children from orphanages and underprivileged schools who need it most.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
