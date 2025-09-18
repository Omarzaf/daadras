import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Check, Calendar } from "lucide-react"
import { TeamMember } from "@/types"

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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section - Left with Contact Buttons Below */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="w-full h-80 lg:h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <img
                src={teamMember.image || "/placeholder-user.jpg"}
                alt={`Professional headshot of ${teamMember.name}, ${teamMember.role} at Daadras Foundation`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: "top center" }}
              />
            </div>
            
            {/* Contact Buttons Below Photo */}
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex-1 flex items-center justify-center hover:-translate-y-1" 
                onClick={copyEmailToClipboard}
                aria-label={`Copy ${teamMember.name}'s email to clipboard`}
              >
                {emailCopied ? (
                  <>
                    <Check className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5 mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>Email</span>
                  </>
                )}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex-1 flex items-center justify-center hover:-translate-y-1" 
                asChild
              >
                <a 
                  href={teamMember.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${teamMember.name}'s LinkedIn profile`}
                  className="flex items-center justify-center w-full"
                >
                  <i className="fa-brands fa-linkedin-in h-5 w-5" aria-hidden="true"></i>
                </a>
              </Button>
            </div>

          </div>

          {/* Content Section - Right */}
          <div className="order-1 lg:order-2 space-y-6 animate-in slide-in-from-right-4 duration-700">
            {/* Clear Hierarchy: Name > Role > Bio */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 animate-in fade-in-50 slide-in-from-top-4 duration-500">
                {teamMember.department.map((dept, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary text-sm px-4 py-2 w-fit">
                    {dept}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] animate-in fade-in-50 slide-in-from-top-4 duration-500" style={{ animationDelay: '100ms' }}>
                {teamMember.name}
              </h1>
              
              <p className="text-lg md:text-xl text-primary font-medium animate-in fade-in-50 slide-in-from-top-4 duration-500" style={{ animationDelay: '200ms' }}>
                {teamMember.role}
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground animate-in fade-in-50 slide-in-from-top-4 duration-500" style={{ animationDelay: '300ms' }}>
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span className="text-base">{teamMember.location}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground animate-in fade-in-50 slide-in-from-top-4 duration-500" style={{ animationDelay: '350ms' }}>
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span className="text-base">
                  {teamMember.tenure_start} - {teamMember.tenure_end}
                </span>
              </div>
            </div>

            {/* Complete Bio */}
            <div className="space-y-4 animate-in fade-in-50 slide-in-from-top-4 duration-500" style={{ animationDelay: '400ms' }}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {fullBio}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
