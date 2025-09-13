import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { DAADRAS_CONTACT } from "@/lib/contact_info"

interface NoOpportunitiesAvailableProps {
  type: "career" | "volunteer"
  generalInterestFormLink: string
}


export function NoOpportunitiesAvailable({ type, generalInterestFormLink }: NoOpportunitiesAvailableProps) {
  const isCareer = type === "career"
  const title = isCareer ? "No Current Openings" : "No Current Volunteer Opportunities"
  const description = isCareer 
    ? "We don't have any active positions right now, but we'd love to hear from passionate individuals who share our mission."
    : "We don't have any active volunteer positions right now, but we'd love to hear from passionate individuals who share our mission."
  const buttonText = "Submit Your Interest"

  return (
    <div className="text-center py-20 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="space-y-3">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto" />
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="space-y-4 pt-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href={generalInterestFormLink} target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              {buttonText}
            </a>
          </Button>

          <p className="text-sm text-muted-foreground">
            Or email us at{" "}
            <a href={`mailto:${DAADRAS_CONTACT.email}`} className="text-primary hover:underline font-medium">
              {DAADRAS_CONTACT.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
