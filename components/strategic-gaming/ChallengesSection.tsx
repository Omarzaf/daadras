import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Clock, Building, Users, Target, CheckCircle } from "lucide-react"

export default function ChallengesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">
            Challenges in Implementation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We've identified key challenges and developed innovative solutions to ensure effective learning and engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Building className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Resource Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Limited chess boards and space sometimes restrict simultaneous play, requiring creative scheduling and resource management.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="h-6 w-6 text-accent mb-2" />
              <CardTitle className="text-lg">Attention Spans</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Younger children may struggle to sit through long games, requiring creative teaching through stories and interactive activities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Structural Constraints</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Small schools and orphanages often lack the infrastructure to host large tournaments, requiring flexibility in design and execution.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Solutions */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Our Solutions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tailored Engagement Methods</h4>
                  <p className="text-muted-foreground">
                    Puzzles and stories for younger kids, strategy analysis for older ones, ensuring age-appropriate learning experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Flexible Tournament Design</h4>
                  <p className="text-muted-foreground">
                    Adapting tournament formats to work within available space and infrastructure constraints.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Equal Opportunities</h4>
                  <p className="text-muted-foreground">
                    Ensuring inclusivity by giving all children equal opportunities to play and compete regardless of resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Creative Resource Management</h4>
                  <p className="text-muted-foreground">
                    Innovative approaches to maximize learning with limited chess boards and space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
