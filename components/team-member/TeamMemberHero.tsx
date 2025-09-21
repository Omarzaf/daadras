import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Check, Calendar } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { TeamMember } from "@/types"
import Image from "next/image"

interface TeamMemberHeroProps {
  teamMember: TeamMember
}

export function TeamMemberHero({ teamMember }: TeamMemberHeroProps) {
  // For individual team member pages, show the complete bio
  const fullBio = teamMember.bio.join(' ')
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(teamMember.email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section className="pt-2">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-end">
          {/* Image Section - Left */}
          <div className="flex-shrink-0">
            <div className="w-full lg:w-80 h-96 sm:h-72 md:h-80 lg:h-96 bg-gray-100 rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl relative">
              {/* Mobile: Use regular img tag for better compatibility */}
              <div className="block sm:hidden">
                <img
                  src={teamMember.image || "/placeholder-user.jpg"}
                  alt={`Professional headshot of ${teamMember.name}, ${teamMember.role} at Daadras Foundation`}
                  className="w-full h-full object-cover object-[center_8%]"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              
              {/* Desktop: Use Next.js Image component */}
              <div className="hidden sm:block">
                <Image
                  src={teamMember.image || "/placeholder-user.jpg"}
                  alt={`Professional headshot of ${teamMember.name}, ${teamMember.role} at Daadras Foundation`}
                  fill
                  className="object-cover object-[center_8%]"
                  sizes="(max-width: 1200px) 50vw, 40vw"
                  priority={true}
                />
              </div>
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6">
            {/* Clear Hierarchy: Name > Role > Bio */}
            <div className="space-y-1.5 md:space-y-2">
              <div className="flex flex-wrap gap-2">
                {teamMember.department.map((dept, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 w-fit">
                    {dept}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                {teamMember.name}
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-primary font-medium">
                {teamMember.role}
              </p>
              
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4 md:h-4 md:w-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm md:text-sm">{teamMember.location}</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-4 w-4 md:h-4 md:w-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm md:text-sm">
                  {teamMember.tenure_start} - {teamMember.tenure_end}
                </span>
              </div>
            </div>

            {/* Complete Bio */}
            <div className="space-y-2 md:space-y-2.5">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-sm lg:text-base">
                {fullBio}
              </p>
            </div>

            {/* Contact Buttons Below Bio */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 md:gap-4 pt-2">
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg text-sm sm:text-sm md:text-base flex-1 flex items-center justify-center h-10 sm:h-auto py-2 sm:py-3" 
                onClick={copyEmailToClipboard}
                aria-label={`Copy ${teamMember.name}'s email to clipboard`}
              >
                {emailCopied ? (
                  <>
                    <Check className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 sm:mr-2 flex-shrink-0" aria-hidden="true" />
                    <span className="font-normal sm:font-normal">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-2 sm:mr-2 flex-shrink-0" aria-hidden="true" />
                    <span className="font-normal sm:font-normal">Email</span>
                  </>
                )}
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg flex-1 flex items-center justify-center h-10 sm:h-auto py-2 sm:py-3 border sm:border" 
                asChild
              >
                <a 
                  href={teamMember.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${teamMember.name}'s LinkedIn profile`}
                  className="flex items-center justify-center w-full"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg flex-1 flex items-center justify-center h-10 sm:h-auto py-2 sm:py-3 border sm:border" 
                asChild
              >
                <a 
                  href="/get-involved/career" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Join our team"
                  className="flex items-center justify-center w-full"
                >
                  <span className="font-normal sm:font-normal">Join Our Team</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
