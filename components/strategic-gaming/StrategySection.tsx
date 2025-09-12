import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Gamepad2, Users, Trophy, BookOpen, Target } from "lucide-react"

export default function StrategySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Strategy</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach combines structured progression with engaging learning methods to ensure every child develops strategic thinking skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Structured Progression</h3>
                <p className="text-muted-foreground">
                  Lessons move from piece recognition to advanced openings, tactics, and tournament play, giving every child a clear path to mastery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Learning Through Play</h3>
                <p className="text-muted-foreground">
                  Games, storytelling, puzzles, and interactive challenges keep sessions engaging, particularly for younger learners.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Inclusive Engagement</h3>
                <p className="text-muted-foreground">
                  While classes may be divided by age for management purposes, every child learns the same material and is capable of grasping multi-step strategies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Competitive Spirit</h3>
                <p className="text-muted-foreground">
                  Each cycle culminates in a tournament where children of all ages face off, with winners recognized, awarded, and given the chance to play against Daadras' Head of Chess.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-space-grotesk">Key Learning Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Gamepad2 className="h-5 w-5 text-primary" />
                <span>Strategic thinking and planning</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-accent" />
                <span>Patience and focus through sustained gameplay</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span>Sportsmanship and collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-accent" />
                <span>Resilience by embracing mistakes</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Confidence through tournament play</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
