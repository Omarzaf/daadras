"use client"

import { Target, DollarSign, BookOpen, TrendingUp } from "lucide-react"
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

export default function EconomicImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })
  
  const familiesCount = useCountUp(500, 2000, "+")
  const studentsCount = useCountUp(150, 1800, "+")
  const impactCount = useCountUp(2.5, 2200, "M+")
  
  useEffect(() => {
    if (isInView) {
      familiesCount.startAnimation()
      studentsCount.startAnimation()
      impactCount.startAnimation()
    }
  }, [isInView])

  const stats = [
    {
      icon: Target,
      value: familiesCount.count,
      label: "Families Empowered",
      description: "Provided with sustainable income opportunities",
      color: "primary"
    },
    {
      icon: DollarSign,
      value: `PKR ${impactCount.count}`,
      label: "Economic Impact",
      description: "Generated in additional household income",
      color: "accent"
    },
    {
      icon: BookOpen,
      value: studentsCount.count,
      label: "Students Supported",
      description: "Received educational funding and resources",
      color: "primary"
    }
  ]

  return (
    <div className="mb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/8 rounded-3xl">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/12 rounded-full blur-lg"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-12" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Measurable change in the lives of families and communities through our economic upliftment initiatives.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`${stat.color === 'accent' ? 'bg-accent/15' : 'bg-primary/15'} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2 font-space-grotesk">
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${stat.color === 'accent' ? 'text-accent' : 'text-primary'} mb-1`}>
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">95% of supported families achieved financial stability within 12 months</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
