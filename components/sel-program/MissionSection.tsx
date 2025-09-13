import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Eye } from "lucide-react"
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
            To create safe, supportive, and inclusive spaces where children can explore and understand their emotions, 
            develop positive coping strategies, and grow into compassionate individuals who feel confident expressing themselves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-space-grotesk">Safe Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creating supportive environments where children feel secure to explore and express their emotions.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-space-grotesk">Emotional Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building the ability to navigate challenges with confidence and develop positive coping strategies.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-space-grotesk">Compassionate Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nurturing empathy and helping children grow into compassionate individuals who value emotional well-being.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-space-grotesk">Self-Expression</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Empowering children to feel seen, heard, and valued while developing confidence in expressing themselves.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
