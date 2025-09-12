import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Briefcase, Globe, ExternalLink } from "lucide-react"
import opportunities from "@/data/careerOpportunities.json"
import { BookOpen, Laptop, Users, DollarSign, Megaphone, Brain } from "lucide-react"
import { NoOpportunitiesAvailable } from "@/components/ui/no-opportunities"

const iconMap: Record<string, any> = {
  BookOpen,
  Laptop,
  Users,
  DollarSign,
  Megaphone,
  Brain,
}

export function CareersGrid() {
  // Check if there are any job opportunities available
  if (!opportunities || opportunities.length === 0) {
    return (
      <NoOpportunitiesAvailable
        type="career"
        generalInterestFormLink="https://forms.google.com/general-career-interest"
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
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-base font-[family-name:var(--font-space-grotesk)] font-semibold leading-tight">
                        {opportunity.title}
                      </h3>
                      {opportunity.urgent && (
                        <Badge className="bg-accent text-accent-foreground text-[10px] py-0.5 px-1">Urgent</Badge>
                      )}
                    </div>
                  </div>
                  {/* Smaller expand/collapse icon */}
                  <span
                    className={`
                      ml-2
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-primary/10
                      w-7 h-7
                      transition-transform
                      duration-200
                      group-data-[state=open]:rotate-180
                    `}
                  >
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
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
                          className="text-primary hover:underline ml-1 text-sm"
                        >
                          (View Map)
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{opportunity.type}</span>
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
