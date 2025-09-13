import { Button } from "@/components/ui/button"
import { Package, ArrowRight } from "lucide-react"

export default function EmergencyReliefCTA() {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
        Help Us Feed Families in Need
      </h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
        Your support helps us provide essential nutrition and supplies to families facing crisis. Every contribution
        makes a difference in ensuring dignity and basic needs are met.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-accent hover:bg-accent/90">
          <Package className="mr-2 h-4 w-4" />
          Support Emergency Relief Drives
        </Button>
        <Button variant="outline">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
