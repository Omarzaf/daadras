import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Monitor, Code, Brain, Zap, Award } from "lucide-react"

export default function StrategySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We conduct rigorous pre- and post-assessments to ensure effective learning, grouping children based on
            skill level rather than age or grade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-space-grotesk">Curriculum Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Monitor className="h-5 w-5 text-primary" />
                <span>Basic computer operations</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-accent" />
                <span>Coding fundamentals</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="h-5 w-5 text-primary" />
                <span>Artificial intelligence concepts</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-accent" />
                <span>Graphic design skills</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <span>Application-based learning</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
