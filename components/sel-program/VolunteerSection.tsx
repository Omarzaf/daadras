import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, BookOpen, CheckCircle, Shield, Activity, Brain } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function VolunteerSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Role of Volunteers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Volunteers are integral to SEL, serving not just as facilitators but as mentors and role models who undergo structured training to work effectively with children.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Volunteer Training</h3>
            
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Trauma Sensitivity Training</h4>
                <p className="text-muted-foreground">
                  Every volunteer undergoes structured training in trauma sensitivity to work effectively with children from challenging backgrounds.
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
                <h4 className="font-semibold text-foreground mb-2">Active Listening Skills</h4>
                <p className="text-muted-foreground">
                  Training in active listening techniques to create safe spaces where children feel heard and understood.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Activity Facilitation</h4>
                <p className="text-muted-foreground">
                  Learning to guide small groups through reflective exercises, games, and discussions while designing creative activities.
                </p>
              </div>
            </motion.div>
          </motion.div>


        </div>


      </div>
    </section>
  )
}
