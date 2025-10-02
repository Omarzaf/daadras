"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, GraduationCap } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import { useState } from "react"
import { teamMembers } from "@/lib/teamMembers"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { OptimizedTeamImage } from "@/components/team/OptimizedTeamImage"

export const OurTeamSection = () => {
  const router = useRouter()
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})
  
  // Show only the first 4 team members
  const displayedMembers = teamMembers.slice(0, 4)

  const handleCardClick = (memberId: string) => {
    router.push(`/our-team/${memberId}`)
  }

  const handleImageLoad = (memberId: string) => {
    setImagesLoaded(prev => ({ ...prev, [memberId]: true }))
  }

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-muted/30">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-left">
              Our Team
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
            Meet the passionate individuals driving positive change in communities through innovative programs and dedicated leadership.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedMembers.map((member, index) => (
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

        {/* View All Team Button */}
        <div className="text-right mt-10">
          <Link href="/our-team">
            <button className="group inline-flex items-center text-sm font-medium text-foreground transition-colors relative">
              <span className="relative">View All
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
