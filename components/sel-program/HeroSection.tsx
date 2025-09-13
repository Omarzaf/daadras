import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk">
          Building <span className="text-primary">Emotional Resilience</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Our Social-Emotional Learning (SEL) program is the foundation of Project SALAM. Designed for children and adolescents from underserved communities, 
          it equips them with emotional resilience, empathy, and the ability to navigate challenges with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Heart className="mr-2 h-5 w-5" />
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  )
}
