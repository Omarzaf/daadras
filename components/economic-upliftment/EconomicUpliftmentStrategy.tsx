"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, GraduationCap, Store, Heart, Users, Wrench } from "lucide-react"
import { motion } from "framer-motion"

export default function EconomicUpliftmentStrategy() {
  const strategyCards = [
    {
      icon: TrendingUp,
      title: "Sewing Machines",
      description: "Providing sewing machines to enable home-based businesses, allowing families to generate sustainable income from their skills and creativity.",
      color: "primary"
    },
    {
      icon: GraduationCap,
      title: "Education Funding",
      description: "Supporting promising students with educational resources to help them escape poverty cycles and build future earning potential.",
      color: "primary"
    },
    {
      icon: Store,
      title: "Micro-Entrepreneurs",
      description: "Supporting small business owners like street vendors with resources and capital to expand their operations and increase income.",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Health Centers",
      description: "Resource donations to community health centers that serve underserved populations, improving healthcare access and community well-being.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Community Networks",
      description: "Expanding community donation networks to create sustainable support systems that fuel future assistance and long-term development.",
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Skills Development",
      description: "Providing vocational training and skill development programs to enhance employability and create new income opportunities for community members.",
      color: "accent"
    }
  ]

  return (
    <div className="mb-16">
      <motion.h2 
        className="text-3xl font-bold text-left text-foreground mb-12 font-space-grotesk"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Economic Upliftment Strategy
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-items-center">
        {strategyCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
              <CardHeader>
                <div className={`${card.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <card.icon className={`h-8 w-8 ${card.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                </div>
                <CardTitle className="font-space-grotesk">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
