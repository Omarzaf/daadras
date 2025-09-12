"use client"

import { BarChart3, Users, Globe, Heart, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface CounterProps {
  value: number
  suffix?: string
  className?: string
}

function AnimatedCounter({ value, suffix = "", className = "" }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = value
          const duration = 2000 // 2 seconds
          const increment = end / (duration / 16) // 60fps
          
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setDisplayValue(end)
              clearInterval(timer)
            } else {
              setDisplayValue(Math.round(start))
            }
          }, 16)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export function ImpactStatistics() {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0 text-center">
            Our Impact
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed mx-auto max-w-4xl">
          Through dedicated efforts and community partnerships, we have achieved meaningful milestones that reflect our commitment to transforming lives and building stronger, more resilient communities.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 not-prose">
        <div className="relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-80">
          <Image
            src="/community-volunteers.png"
            alt="Lives impacted through community programs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center items-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedCounter value={5000} suffix="+" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Lives Impacted
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Direct beneficiaries reached through our comprehensive programs and emergency relief efforts across communities.
            </p>
          </div>
        </div>

        <div className="relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-80">
          <Image
            src="/students-learning-with-computers-in-classroom.png"
            alt="Students educated in technology and skills"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center items-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedCounter value={1200} suffix="+" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Students Educated
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Children and youth who have participated in our IT training, chess programs, and educational initiatives.
            </p>
          </div>
        </div>

        <div className="relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-80">
          <Image
            src="/diverse-group-of-students-engaged-in-it-chess-and-.png"
            alt="Families supported through relief programs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center items-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedCounter value={800} suffix="+" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Families Supported
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Households that have received emergency aid, food relief, and economic support during times of crisis.
            </p>
          </div>
        </div>

        <div className="relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-80">
          <Image
            src="/chess-champion.jpg"
            alt="Active volunteers making a difference"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center items-center text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <AnimatedCounter value={150} suffix="+" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Active Volunteers
            </h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Dedicated individuals contributing their time and skills to advance our mission and create positive change.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}