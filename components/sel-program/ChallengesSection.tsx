import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Building, Heart, Users, Target, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ChallengesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">
            Challenges in SEL Implementation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Running SEL programs in underserved schools and orphanages presents unique hurdles that require creative solutions and sustained commitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
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
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <Building className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Resource Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Many small schools and orphanages lack dedicated spaces, materials, or supportive infrastructure to host SEL sessions effectively.
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
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <Heart className="h-6 w-6 text-accent mb-2" />
                <CardTitle className="text-lg">Permanent Struggles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Unlike short-term difficulties, many participants live with ongoing realities of poverty, loss, or instability that require sustained sensitivity and patience.
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
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <Users className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Cultural Barriers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Emotional expression can be stigmatized in some communities, making it hard for children to open up initially and share their feelings.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Solutions */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Our Solutions</h3>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Real-Time Adaptation</h4>
                  <p className="text-muted-foreground">
                    Adapting activities and approaches based on available resources and space constraints to ensure meaningful experiences.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Volunteer Collaboration</h4>
                  <p className="text-muted-foreground">
                    Working closely with trained volunteers to create safe spaces and overcome cultural barriers through patient, consistent presence.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sustained Sensitivity</h4>
                  <p className="text-muted-foreground">
                    Providing ongoing support and understanding for children facing permanent struggles, building trust over time.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Safe Space Creation</h4>
                  <p className="text-muted-foreground">
                    Over time, creating environments where children feel secure enough to share and grow, regardless of initial barriers.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
