import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Monitor, Code, Brain, Zap, Award } from "lucide-react"

export default function StrategySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We conduct rigorous pre- and post-assessments to ensure effective learning, grouping children based on
            skill level rather than age or grade.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Skill-Based Grouping</h3>
              <p className="text-muted-foreground">
                Students are grouped by ability rather than age, ensuring everyone receives appropriate challenges.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Comprehensive Assessment</h3>
              <p className="text-muted-foreground">
                Written tests, practical exercises, and viva exams before and after each course.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Self-Learning Focus</h3>
              <p className="text-muted-foreground">
                Emphasizing independent exploration and learning, reflecting the nature of computer science.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Curriculum Highlights</h3>
              <p className="text-muted-foreground">
                Our comprehensive curriculum covers essential digital skills and modern technology concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
