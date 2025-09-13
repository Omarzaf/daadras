import { Button } from "@/components/ui/button"
import { Heart, ArrowRight } from "lucide-react"

export default function EconomicUpliftmentCTA() {
  return (
    <div className="text-left bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
        Join Our Economic Empowerment Mission
      </h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
        Help us create sustainable change by supporting families on their journey to financial independence. Your
        contribution doesn't just provide temporary relief—it builds lasting prosperity.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="bg-accent hover:bg-accent/90">
          <Heart className="mr-2 h-4 w-4" />
          Support Economic Upliftment
        </Button>
        <Button variant="outline">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
