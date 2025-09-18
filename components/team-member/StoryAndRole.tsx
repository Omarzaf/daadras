import { Users, Briefcase } from "lucide-react"
import { TeamMember } from "@/types"

interface StoryAndRoleProps {
  teamMember: TeamMember
}

export function StoryAndRole({ teamMember }: StoryAndRoleProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
      {/* Story Section - Left */}
      <div className="space-y-6 md:space-y-8">
        <div className="pt-6 md:pt-8 border-t border-gray-200/50 animate-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Users className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
              Their Story
            </h2>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {teamMember.joining_story.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg italic animate-in fade-in-50 slide-in-from-left-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                "{paragraph}"
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Role Description Section - Right */}
      <div className="space-y-6 md:space-y-8 animate-in slide-in-from-right-4 duration-700">
        <div className="pt-6 md:pt-8 border-t border-gray-200/50">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
              Role & Responsibilities
            </h2>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {teamMember.role_description.map((description, index) => (
              <p 
                key={index} 
                className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg animate-in fade-in-50 slide-in-from-right-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
