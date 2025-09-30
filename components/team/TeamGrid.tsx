"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, GraduationCap } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { teamMembers } from "@/lib/teamMembers"
import { useRouter } from "next/navigation"
import { OptimizedTeamImage } from "./OptimizedTeamImage"
import { preloadTeamImages } from "@/lib/imageCache"

type Props = {
  selectedDepartment: string
}

export function TeamGrid({ selectedDepartment }: Props) {
  const router = useRouter()
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})

  const handleCardClick = (memberId: string) => {
    router.push(`/our-team/${memberId}`)
  }

  const handleImageLoad = (memberId: string) => {
    setImagesLoaded(prev => ({ ...prev, [memberId]: true }))
  }

  const filtered = selectedDepartment === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.department.includes(selectedDepartment))

  // Preload images for better performance
  useEffect(() => {
    // Preload critical images immediately using link preload
    const criticalImages = filtered.slice(0, 6).map(member => member.image || "/placeholder-user.jpg")
    
    criticalImages.forEach((src, index) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.fetchPriority = index < 3 ? 'high' : 'low'
      document.head.appendChild(link)
    })

    // Background preload of additional images with delay
    setTimeout(() => {
      preloadTeamImages(filtered)
    }, 100)
  }, [filtered])


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {filtered.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          className="group"
        >
          <Card 
            className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl overflow-hidden cursor-pointer p-0"
            onClick={() => handleCardClick(member.id)}
          >
            <div className="relative group">
              <OptimizedTeamImage
                src={member.image || "/placeholder-user.jpg"}
                alt={member.name}
                memberId={member.id}
                index={index}
                onLoad={handleImageLoad}
              />
            </div>

            <CardContent className="px-2 pt-0 pb-3 flex flex-col h-full">
              <div className="flex flex-wrap gap-0.5 mb-0.5">
                {member.department.map((dept, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary w-fit text-[10px] px-1 py-0.5 leading-tight">
                    {dept}
                  </Badge>
                ))}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-0 font-[family-name:var(--font-space-grotesk)]">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-1 text-sm">{member.role}</p>

              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                <MapPin className="h-3 w-3" />
                <span>{member.location}</span>
              </div>

              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                <Calendar className="h-3 w-3" />
                <span>{member.tenure_start} - {member.tenure_end}</span>
              </div>

              <div className="flex items-start gap-1 text-xs text-muted-foreground mb-2 min-h-[2rem]">
                <GraduationCap className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{member.education}</span>
              </div>

              <div className="flex gap-1.5">
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary hover:bg-accent text-white text-xs h-8" 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCardClick(member.id)
                  }}
                >
                  View Profile
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="!bg-transparent !border-gray-300 hover:!bg-gray-100 hover:!border-gray-400 hover:!text-foreground transition-colors duration-200 h-8 w-8 p-0" 
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
