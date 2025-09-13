import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BookOpen, Gamepad2, Target, Trophy, Users } from "lucide-react"

export default function CurriculumSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Curriculum and Learning Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The chess curriculum follows a carefully designed sequence that gradually builds both technical skill and strategic thinking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Foundations</h3>
                <p className="text-muted-foreground">
                  Introduction to chess pieces, their movements, and board setup.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Early Play</h3>
                <p className="text-muted-foreground">
                  Practice with individual pieces (pawns, bishops, knights, etc.) through mini-games and puzzles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Complete Gameplay</h3>
                <p className="text-muted-foreground">
                  Learning check, checkmate, stalemate, and playing full games from setup to finish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Notation and Structure</h3>
                <p className="text-muted-foreground">
                  Reading and recording moves (e.g., pawn to E4), developing discipline and precision.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Openings and Strategy</h3>
                <p className="text-muted-foreground">
                  Exposure to strong openings such as the King's Pawn, Queen's Pawn, Sicilian, and Indian defenses, with emphasis on controlling the center and thinking multiple moves ahead.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Advanced Practice</h3>
                <p className="text-muted-foreground">
                  Team-based matches, timed games, and guided analysis of decision-making to refine foresight and composure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tournament Play</h3>
                <p className="text-muted-foreground">
                  A structured competition with rankings, brackets, and awards, reinforcing sportsmanship, patience, and resilience.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
