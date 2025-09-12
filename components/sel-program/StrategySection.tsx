import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Activity, Heart, BookOpen, Target } from "lucide-react"

export default function StrategySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach combines developmentally appropriate grouping with interactive activities and holistic integration across all Project SALAM programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Developmentally Appropriate Grouping</h3>
                <p className="text-muted-foreground">
                  Children are placed in clusters (7–9, 10–13, 14–18) so that each lesson speaks to their stage of growth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Interactive and Reflective Activities</h3>
                <p className="text-muted-foreground">
                  From mindfulness and storytelling to group discussions and journaling, children learn by doing, sharing, and reflecting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Holistic Integration</h3>
                <p className="text-muted-foreground">
                  SEL isn't confined to a classroom—it's woven into games, therapy workshops, and other Project SALAM activities, reinforcing that emotional health is a daily practice.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-space-grotesk">Key Learning Approaches</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span>Age-appropriate group discussions</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-accent" />
                <span>Mindfulness and breathing exercises</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-primary" />
                <span>Storytelling and creative expression</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-accent" />
                <span>Journaling and reflection activities</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <span>Integration across all programs</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
