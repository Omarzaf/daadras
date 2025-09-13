import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Target, Heart, CheckCircle, Star } from "lucide-react"

export default function ImpactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The chess program has had remarkable success, transforming children's thinking patterns and building essential life skills.
          </p>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Remarkable Success</h3>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Confident Gameplay</h4>
                <p className="text-muted-foreground">
                  Children as young as seven, and even those with no prior exposure, now play complete games with confidence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Strategic Planning</h4>
                <p className="text-muted-foreground">
                  Many have developed the ability to plan multiple moves ahead, stay calm under pressure, and approach both games and life challenges with strategic patience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Tournament Excitement</h4>
                <p className="text-muted-foreground">
                  The tournaments have become a highlight of every cycle, fostering excitement, pride, and healthy competition.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chess as a Life Skills Tool */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Chess as a Life Skills Tool</h3>
          <div className="flex items-start gap-6">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Star className="h-8 w-8" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chess has proven to be one of Project SALAM's strongest tools for building critical life skills. It teaches children that every move matters, that resilience comes from learning from mistakes, and that strategy and patience can turn challenges into victories—both on the board and beyond.
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
