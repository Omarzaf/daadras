"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectSalamData } from "@/lib/projectSalamData";

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, suffix: string = "") {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  const startAnimation = () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));
      
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

export function ImpactStatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const studentsCount = useCountUp(projectSalamData.impactStats.studentsCount, 2000, "+")
  const partnersCount = useCountUp(projectSalamData.impactStats.partnersCount, 1500)
  const pillarsCount = useCountUp(projectSalamData.impactStats.pillarsCount, 1800)
  const engagementCount = useCountUp(projectSalamData.impactStats.engagementRate, 2200, "%")
  
  useEffect(() => {
    if (isInView) {
      studentsCount.startAnimation()
      partnersCount.startAnimation()
      pillarsCount.startAnimation()
      engagementCount.startAnimation()
    }
  }, [isInView])
  
  return (
    <div className="w-full bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 py-16 px-4 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
      >
        <div className="relative z-10" ref={ref}>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-space-grotesk"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cumulative Impact Across All Phases
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                {studentsCount.count}
              </div>
              <p className="text-muted-foreground font-medium">Total Students Impacted</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                {partnersCount.count}
              </div>
              <p className="text-muted-foreground font-medium">Partner Organizations</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                {pillarsCount.count}
              </div>
              <p className="text-muted-foreground font-medium">Core Learning Pillars</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 font-space-grotesk">
                {engagementCount.count}
              </div>
              <p className="text-muted-foreground font-medium">Student Engagement Rate</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
