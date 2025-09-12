"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Trophy, Users, ArrowRight, Target, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import PhotoGalleryCarousel from "@/components/PhotoGalleryCarousel"

export default function ProjectSalamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-background">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="text-left mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Project Salam
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Empowering underprivileged children through comprehensive education in IT, Chess, Social-Emotional Learning, and Public Speaking.
            </motion.p>
          </div>

          {/* Photo Gallery Carousel */}
          <PhotoGalleryCarousel />

          {/* Program Overview */}
          <motion.div 
            className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
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
                  className="text-lg text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  A holistic educational initiative designed to bridge the digital divide and empower children with essential 21st-century skills.
                </motion.p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">111+</div>
                  <div className="text-sm text-muted-foreground">Students Impacted</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Core Learning Pillars</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Engagement Rate</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">IT Skills</h3>
                  <p className="text-xs text-muted-foreground">Digital literacy and computer fundamentals</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Chess</h3>
                  <p className="text-xs text-muted-foreground">Strategic thinking and problem-solving</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">SEL</h3>
                  <p className="text-xs text-muted-foreground">Social-emotional learning and mindfulness</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Public Speaking</h3>
                  <p className="text-xs text-muted-foreground">Communication and confidence building</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Four Pillars of Project Salam */}
          <div className="mt-16 mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Four Pillars of Project Salam
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our comprehensive approach integrates four essential learning domains to create well-rounded individuals.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3 font-space-grotesk">Information Technology</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Digital literacy, computer fundamentals, and introduction to modern technology for future readiness.
                  </p>
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
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3 font-space-grotesk">Chess</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Strategic thinking, problem-solving, and cognitive development through the ancient game of chess.
                  </p>
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
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3 font-space-grotesk">Social-Emotional Learning</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Emotional intelligence, self-awareness, and interpersonal skills for personal and social success.
                  </p>
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
                <CardContent className="p-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3 font-space-grotesk">Public Speaking</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Communication skills, confidence building, and leadership development through structured speaking practice.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Program Evolution */}
          <div className="mt-16 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk text-left">
              Program Evolution
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
              From pilot to expansion, each phase has brought valuable insights and measurable impact.
            </p>
          </div>

          {/* Salam 1.0 */}
          <Card className="mb-8 border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Badge className="mb-2 bg-accent/10 text-accent">Phase 1</Badge>
                  <CardTitle className="text-2xl font-space-grotesk">
                    Project Salam 1.0: The Foundation
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Spreading Smiles Organization, Lahore</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">21</div>
                  <div className="text-sm text-muted-foreground">Students (Ages 3-8)</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Core Curriculum</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>First exposure to computers for many children, adapted to individual learning levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Chess fundamentals with age-appropriate teaching methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Social-Emotional Learning through interactive activities and mindfulness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Public speaking skills development through storytelling and presentations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Program Highlights</h4>
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-medium text-sm">Chess Success Story</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        3-year-old Habib learning chess pieces and playing independently
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-medium text-sm">SEL Impact</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Children articulating feelings clearly and practicing mindfulness
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Salam 2.0 */}
          <Card className="mb-8 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Badge className="mb-2 bg-primary/10 text-primary">Phase 2</Badge>
                  <CardTitle className="text-2xl font-space-grotesk">
                    Project Salam 2.0: Expansion and Growth
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Multiple Partner Organizations</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">60+</div>
                  <div className="text-sm text-muted-foreground">Students (Ages 5-12)</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Enhanced Curriculum</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Advanced IT skills including basic programming and digital literacy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Competitive chess training with tournament participation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Structured SEL curriculum with emotional regulation techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Advanced public speaking with debate and presentation skills</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-medium text-sm">Multi-Site Implementation</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Successfully expanded to 3 partner organizations across different regions
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-medium text-sm">Skills Development</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Students demonstrating measurable improvement in all four core areas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Salam 3.0 */}
          <Card className="mb-8 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Badge className="mb-2 bg-primary/10 text-primary">Phase 3</Badge>
                  <CardTitle className="text-2xl font-space-grotesk">
                    Project Salam 3.0: Focusing on Self-Expression
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">Specialized Learning Centers</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Students (Ages 8-15)</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Specialized Focus Areas</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Creative technology projects and digital storytelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Strategic chess mastery with analytical thinking development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Advanced SEL with leadership and empathy building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Professional public speaking and communication mastery</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Innovation Highlights</h4>
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-medium text-sm">Self-Expression Focus</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Students creating original content and leading peer learning sessions
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="font-medium text-sm">Mentorship Model</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Older students mentoring younger participants across all skill areas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Statistics */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-16 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-left text-foreground mb-8 font-space-grotesk">
              Cumulative Impact Across All Phases
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2 font-space-grotesk">
                  111+
                </div>
                <p className="text-muted-foreground">Total Students Impacted</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2 font-space-grotesk">3</div>
                <p className="text-muted-foreground">Partner Organizations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2 font-space-grotesk">4</div>
                <p className="text-muted-foreground">Core Learning Pillars</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2 font-space-grotesk">100%</div>
                <p className="text-muted-foreground">Student Engagement Rate</p>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 mt-16">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk text-left">
                Looking Ahead: The Future of Project Salam
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left mb-6">
                Building on our momentum, we plan to scale Project Salam further, continuing to refine our model of
                holistic, context-sensitive, and skills-based education for children across Pakistan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent hover:bg-accent/90">
                <Users className="mr-2 h-4 w-4" />
                Join as Volunteer
              </Button>
              <Button variant="outline">
                Support Project Salam <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
