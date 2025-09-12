import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Brain, Users, Trophy } from "lucide-react"

export default function MissionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To nurture problem-solving skills, logical reasoning, and mental resilience in children through chess and other strategy-based games, 
            empowering them to transfer these skills from the board to their daily lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Strategic Thinking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Developing critical thinking and foresight through structured gameplay and strategic planning.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Brain className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Mental Resilience</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Building patience, focus, and the ability to learn from mistakes and setbacks.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Inclusive Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every child—regardless of age—learns the same material and is capable of grasping multi-step strategies.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Competitive Spirit</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Tournaments where children of all ages compete, with winners recognized and awarded.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
