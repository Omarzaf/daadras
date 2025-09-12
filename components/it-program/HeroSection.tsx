import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto text-center">
        <Badge className="mb-6 bg-primary text-primary-foreground">Project Salam IT Program</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk">
          Empowering Future <span className="text-primary">Innovators</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Nurturing digital literacy and technical skills in children aged 3 to 15, with a focus on those from
          orphanages and underprivileged schools through personalized learning experiences.
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
            <BookOpen className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
