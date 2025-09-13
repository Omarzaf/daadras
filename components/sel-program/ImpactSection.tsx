import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Shield, Star, CheckCircle, Activity, Brain } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, suffix: string = "") {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  
  const startAnimation = () => {
    if (hasStarted) return
    setHasStarted(true)
    
    const startTime = Date.now()
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setCount(Math.floor(easeOutQuart * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
  }
  
  return { count: count + suffix, startAnimation }
}

export default function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  
  const childrenCount = useCountUp(85, 2000, "+")
  const improvementCount = useCountUp(95, 1500, "%")
  const resilienceCount = useCountUp(90, 1800, "%")
  const engagementCount = useCountUp(100, 2200, "%")
  
  useEffect(() => {
    if (isInView) {
      childrenCount.startAnimation()
      improvementCount.startAnimation()
      resilienceCount.startAnimation()
      engagementCount.startAnimation()
    }
  }, [isInView])

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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Impact and Outcomes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The outcomes speak for themselves. Children develop emotional skills, resilience, and a sense of belonging that empowers them to thrive.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16 mt-16">
          <motion.div 
            className="bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 py-16 px-4 relative overflow-hidden"
            style={{
              backgroundAttachment: "fixed",
              backgroundSize: "cover"
            }}
          >
            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-space-grotesk"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SEL Program Impact Metrics
              </motion.h2>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                    {childrenCount.count}
                  </div>
                  <p className="text-muted-foreground font-medium">Children Impacted</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                    {improvementCount.count}
                  </div>
                  <p className="text-muted-foreground font-medium">Emotional Skills Improvement</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                    {resilienceCount.count}
                  </div>
                  <p className="text-muted-foreground font-medium">Resilience Development</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                    {engagementCount.count}
                  </div>
                  <p className="text-muted-foreground font-medium">Program Engagement Rate</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Remarkable Outcomes</h3>
            
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Confident Expression</h4>
                <p className="text-muted-foreground">
                  Younger children are now able to articulate feelings with confidence, developing emotional vocabulary and self-awareness.
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
                <h4 className="font-semibold text-foreground mb-2">Adolescent Resilience</h4>
                <p className="text-muted-foreground">
                  Adolescents show greater resilience when navigating social pressures, strengthened by workshops on puberty, relationships, and future planning.
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
                <h4 className="font-semibold text-foreground mb-2">Stress Management</h4>
                <p className="text-muted-foreground">
                  Mindfulness sessions and creative therapies like dance and yoga give children tangible tools to manage stress and self-expression.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Achievement */}
        <motion.div 
          className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-6">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Beyond Emotional Skills</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SEL creates the foundation for all other learning. When children feel emotionally safe and supported, 
                they become more engaged learners, better collaborators, and more confident individuals who can navigate 
                life's challenges with resilience and empathy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
