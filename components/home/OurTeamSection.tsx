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
import Image from "next/image"

export const OurTeamSection = () => {
  const router = useRouter()
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})
  
  // Show only the first 3 team members
  const displayedMembers = teamMembers.slice(0, 3)

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl overflow-hidden cursor-pointer"
                onClick={() => handleCardClick(member.id)}
              >
                <div className="relative">
                  <div className="w-full h-56 md:h-80 bg-gray-100 flex items-center justify-center overflow-hidden relative">
                    {/* Loading skeleton */}
                    {!imagesLoaded[member.id] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                      </div>
                    )}
                    <Image
                      src={member.image || "/placeholder-user.jpg"}
                      alt={member.name}
                      fill
                      className={`object-cover object-top group-hover:scale-105 transition-transform duration-300 ${
                        imagesLoaded[member.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ objectPosition: "top center" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index < 6 ? "eager" : "lazy"}
                      priority={index < 3}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      onLoad={() => handleImageLoad(member.id)}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium text-lg">View Profile</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.department.map((dept, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary w-fit text-xs">
                        {dept}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 font-[family-name:var(--font-space-grotesk)]">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{member.location}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{member.tenure_start} - {member.tenure_end}</span>
                  </div>

                  <div className="flex items-start gap-1 text-xs text-muted-foreground mb-4 min-h-[2.5rem]">
                    <GraduationCap className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-2">{member.education}</span>
                  </div>

                  <div className="mt-auto flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-accent text-white" 
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
                      className="!bg-transparent !border-gray-300 hover:!bg-gray-100 hover:!border-gray-400 hover:!text-foreground transition-colors duration-200" 
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
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
