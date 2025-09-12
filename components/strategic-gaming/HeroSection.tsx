import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Trophy } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-6 bg-primary text-primary-foreground">Project Salam Strategic Gaming</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk">
          Building <span className="text-primary">Strategic Thinkers</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Strategic gaming is one of the most exciting and impactful components of Project SALAM, beginning with the introduction of chess. 
          For children from underserved communities, chess is more than a game—it is a gateway to developing critical thinking, patience, and foresight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Heart className="mr-2 h-5 w-5" />
            Get Involved
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-black/30"
          >
            <Trophy className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
