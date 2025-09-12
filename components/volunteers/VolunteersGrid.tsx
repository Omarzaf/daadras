import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Globe, Clock, ExternalLink } from "lucide-react"
import opportunities from "@/data/volunteerOpportunities.json"
import { BookOpen, Trophy, Laptop, Brain, Users, Camera, Megaphone, Heart } from "lucide-react"
import { NoOpportunitiesAvailable } from "@/components/ui/no-opportunities"

const iconMap: Record<string, any> = {
  BookOpen,
  Trophy,
  Laptop,
  Brain,
  Users,
  Camera,
  Megaphone,
  Heart,
}

export function VolunteersGrid() {
  // Check if there are any volunteer opportunities available
  if (!opportunities || opportunities.length === 0) {
    return (
      <NoOpportunitiesAvailable
        type="volunteer"
        generalInterestFormLink="https://forms.google.com/general-volunteer-interest"
      />
    )
  }

  return (
    <div className="mb-10">
      <Accordion type="single" collapsible className="w-full space-y-2">
        {opportunities.map((opportunity) => {
          const IconComponent = iconMap[opportunity.icon] ?? BookOpen
          return (
            <AccordionItem key={opportunity.id} value={String(opportunity.id)} className="border rounded-md px-0">
              <AccordionTrigger
                className="
                  hover:no-underline 
                  py-3
                  px-4
                  rounded-lg
                  bg-primary/5
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:outline-none
                  transition
                  text-base
                  font-semibold
                  shadow-sm
                  group
                  w-full
                  min-h-0
                  [&>svg]:ml-2
                  [&>svg]:h-4
                  [&>svg]:w-4
                  "
                style={{
                  minHeight: "2.2rem",
                  fontSize: "1rem",
                  letterSpacing: "0.01em",
                  width: "100%",
                  display: "block",
                }}
              >
                <div className="flex items-center gap-3 text-left w-full">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 flex items-center">
                    <h3 className="text-base font-[family-name:var(--font-space-grotesk)] font-semibold leading-tight">
                      {opportunity.title}
                    </h3>
                    {opportunity.urgent && (
                      <Badge className="bg-accent text-accent-foreground text-[10px] py-0.5 px-1 ml-2">Urgent</Badge>
                    )}
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-3 px-4">
                <div className="space-y-3 pt-2">
                  <p className="text-sm leading-relaxed text-foreground/80">{opportunity.description}</p>

                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{opportunity.location}</span>
                      {opportunity.mapLink && (
                        <a
                          href={opportunity.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline ml-1 text-xs"
                        >
                          (View Map)
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{opportunity.timeCommitment}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <Badge variant="secondary" className="text-xs py-1 px-2">
                        {opportunity.engagement}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2 text-foreground">Requirements:</h4>
                    <ul className="text-sm text-foreground/70 space-y-1">
                      {opportunity.requirements.map((req: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 h-10 text-sm px-4 mt-4" asChild>
                    <a href={opportunity.formLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Apply Now
                    </a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
