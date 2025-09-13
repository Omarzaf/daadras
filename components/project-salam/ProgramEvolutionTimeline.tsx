"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ProgramEvolutionTimeline() {
  return (
    <>
      {/* Program Evolution & History */}
      <div className="mt-20 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk text-left">
          Our Journey: From 21 to 111+ Students
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
          Three phases of growth, learning, and impact - each building on previous successes and expanding our reach to more children in need.
        </p>
      </div>

      {/* Salam 1.0 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 }
        }}
        viewport={{ once: true }}
        className="group"
      >
        <Card className="mb-8 border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1">
                <Badge className="mb-2 bg-accent/10 text-accent">2023</Badge>
                <CardTitle className="text-2xl font-space-grotesk">
                  Project Salam: The Foundation Year
                </CardTitle>
                <div className="flex items-center gap-3 mt-3">
                  <img
                    src="/collaborator_logos/Waduha.png"
                    alt="Waduha Welfare Foundation"
                    className="h-8 w-auto object-contain"
                  />
                  <p className="text-muted-foreground">Partnered with Waduha Welfare Foundation</p>
                </div>
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
      </motion.div>

      {/* Salam 2.0 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 }
        }}
        viewport={{ once: true }}
        className="group"
      >
        <Card className="mb-8 border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1">
                <Badge className="mb-2 bg-primary/10 text-primary">2024</Badge>
                <CardTitle className="text-2xl font-space-grotesk">
                  Project Salam: Expansion and Growth
                </CardTitle>
                <div className="flex items-center gap-3 mt-3">
                  <img
                    src="/collaborator_logos/aabroo-logo-1.png"
                    alt="Aabroo Welfare Foundation"
                    className="h-8 w-auto object-contain"
                  />
                  <p className="text-muted-foreground">Partnered with Aabroo Schools</p>
                </div>
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
      </motion.div>

      {/* Salam 3.0 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2 }
        }}
        viewport={{ once: true }}
        className="group"
      >
        <Card className="mb-8 border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1">
                <Badge className="mb-2 bg-primary/10 text-primary">2024-2025</Badge>
                <CardTitle className="text-2xl font-space-grotesk">
                  Project Salam: Focusing on Self-Expression
                </CardTitle>
                <div className="flex items-center gap-3 mt-3">
                  <img
                    src="/collaborator_logos/qadam.jpg"
                    alt="Qadam Welfare Community"
                    className="h-8 w-auto object-contain"
                  />
                  <p className="text-muted-foreground">Partnered with Qadam Welfare Community</p>
                </div>
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
      </motion.div>
    </>
  );
}
