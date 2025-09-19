"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Check, Calendar } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
import { useState } from "react"
import { teamMembers } from "@/lib/teamMembers"
import { TeamMember } from "@/types"
import { useRouter } from "next/navigation"
import Image from "next/image"

type Props = {
  selectedDepartment: string
}

export function TeamGrid({ selectedDepartment }: Props) {
  const router = useRouter()
  const [copiedEmails, setCopiedEmails] = useState<Record<string, boolean>>({})
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})
  
  const copyEmailToClipboard = async (email: string, memberId: string) => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiedEmails(prev => ({ ...prev, [memberId]: true }))
      setTimeout(() => {
        setCopiedEmails(prev => ({ ...prev, [memberId]: false }))
      }, 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const handleCardClick = (memberId: string) => {
    router.push(`/our-team/${memberId}`)
  }

  const handleImageLoad = (memberId: string) => {
    setImagesLoaded(prev => ({ ...prev, [memberId]: true }))
  }

  const filtered = selectedDepartment === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.department.includes(selectedDepartment))


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(member.id)}
          >
            <div className="relative">
              <div className="w-full h-80 bg-gray-100 flex items-center justify-center overflow-hidden relative">
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

            <CardContent className="p-6">
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

              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                <MapPin className="h-3 w-3" />
                <span>{member.location}</span>
              </div>

              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                <Calendar className="h-3 w-3" />
                <span>{member.tenure_start} - {member.tenure_end}</span>
              </div>

              <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{member.bio.join(' ')}</p>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-white" 
                  onClick={(e) => {
                    e.stopPropagation()
                    copyEmailToClipboard(member.email, member.id)
                  }}
                >
                  {copiedEmails[member.id] ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </>
                  )}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="flex-1 bg-transparent" 
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4 mr-2" />
                    LinkedIn
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
