"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Trophy, Brain, Users } from "lucide-react"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const ProjectSalamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 111, {
        duration: 2,
        delay: 0.5,
        ease: "easeOut"
      })
      return controls.stop
    }
  }, [isInView, count])

  return (
    <>
      {/* Our Impact Areas Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Our Impact Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond education, we're committed to comprehensive community development through economic empowerment and
              relief efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Project Salam Section */}
      <section id="programs" className="py-16" ref={ref}>
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Flagship Program</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Project Salam</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive educational initiative combining Information Technology, Chess, and Social-Emotional
              Learning (SEL) to develop well-rounded individuals equipped for the modern world.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Information Technology</h3>
                  <p className="text-muted-foreground">
                    Digital literacy, coding fundamentals, and technology skills for the digital age.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Chess Training</h3>
                  <p className="text-muted-foreground">
                    Strategic thinking, problem-solving, and cognitive development through chess.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Social-Emotional Learning</h3>
                  <p className="text-muted-foreground">
                    Emotional intelligence, empathy, and interpersonal skills for personal growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent/90">Learn More About Project Salam</Button>
              <Button variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Join as Volunteer
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              <img
                src="/drive/project_salam1.webp"
                alt="Project Salam activities"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg"
            >
              <div className="text-center">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="text-3xl font-bold text-primary"
                >
                  <motion.span>{rounded}</motion.span>+
                </motion.div>
                <div className="text-sm text-muted-foreground">Students Impacted</div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
