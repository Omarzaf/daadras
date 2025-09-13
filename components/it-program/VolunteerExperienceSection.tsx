"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import {
  Users,
  Code,
  BookOpen,
  CheckCircle,
  Monitor,
  Zap,
  Heart,
  Brain,
} from "lucide-react"
import { motion } from "framer-motion"

export default function VolunteerExperienceSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
            Volunteer Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
            Volunteers are at the heart of our mission. Join us for a <span className="text-primary font-semibold">dual opportunity</span>—empower young learners while gaining personal, social, and technical growth in a collaborative, innovative environment.
          </p>
        </motion.div>



        {/* Three Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mentorship Pillar */}
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
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                </motion.div>
                <CardTitle className="font-space-grotesk">Mentorship & Teaching</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">One-on-one or small-group mentorship</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Thoughtful matching with students</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Training to understand backgrounds</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Bridge privileged experiences with learner realities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Projects Pillar */}
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
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Code className="h-12 w-12 text-accent mx-auto mb-4" />
                </motion.div>
                <CardTitle className="font-space-grotesk">Technical Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Choose from existing projects or propose new ones</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Collaborate with Director of IT</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Focus on willingness to learn, not prior expertise</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Design and implement real-world solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Curriculum Development Pillar */}
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
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                </motion.div>
                <CardTitle className="font-space-grotesk">Curriculum Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Required contribution to curriculum content</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Selected ideas brought to life in classroom</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Lead sessions under IT Director mentorship</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Take ownership of educational design</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>



        {/* Cross-Disciplinary Collaboration */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
            Cross-Disciplinary Collaboration
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed mb-12">
            Our teams work closely together, creating opportunities for volunteers to engage in diverse discussions and benefit from holistic exchange of ideas that strengthen both social awareness and technical expertise.
          </p>
          
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
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/drive/volunteer_wahab.webp"
                    alt="IT volunteers working with technology"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Code className="h-8 w-8" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-3">IT Team</h4>
                  <p className="text-sm text-muted-foreground">Technical expertise and project guidance for digital literacy and coding fundamentals</p>
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
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/drive/kids_studying.jpg"
                    alt="Chess training and strategic thinking"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Brain className="h-8 w-8" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-3">Chess Team</h4>
                  <p className="text-sm text-muted-foreground">Strategic thinking and problem-solving through chess training and cognitive development</p>
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
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full">
                  <Image
                    src="/drive/women_classroom.webp"
                    alt="Social-emotional learning activities"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Heart className="h-8 w-8" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-3">SEL Team</h4>
                  <p className="text-sm text-muted-foreground">Social-emotional learning and empathy development for personal growth</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Ready to Make a Dual Impact?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            Join us in empowering young learners while simultaneously gaining personal, social, and technical growth. 
            Our collaborative, innovative environment welcomes volunteers who are willing to learn and make a meaningful difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
