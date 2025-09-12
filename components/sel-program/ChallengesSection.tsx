import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Building, Heart, Users, Target, CheckCircle } from "lucide-react"

export default function ChallengesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">
            Challenges in SEL Implementation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Running SEL programs in underserved schools and orphanages presents unique hurdles that require creative solutions and sustained commitment.
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
                Many small schools and orphanages lack dedicated spaces, materials, or supportive infrastructure to host SEL sessions effectively.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="h-6 w-6 text-accent mb-2" />
              <CardTitle className="text-lg">Permanent Struggles</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Unlike short-term difficulties, many participants live with ongoing realities of poverty, loss, or instability that require sustained sensitivity and patience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Cultural Barriers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Emotional expression can be stigmatized in some communities, making it hard for children to open up initially and share their feelings.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Solutions */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space-grotesk">Our Solutions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Real-Time Adaptation</h4>
                  <p className="text-muted-foreground">
                    Adapting activities and approaches based on available resources and space constraints to ensure meaningful experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Volunteer Collaboration</h4>
                  <p className="text-muted-foreground">
                    Working closely with trained volunteers to create safe spaces and overcome cultural barriers through patient, consistent presence.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Sustained Sensitivity</h4>
                  <p className="text-muted-foreground">
                    Providing ongoing support and understanding for children facing permanent struggles, building trust over time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Safe Space Creation</h4>
                  <p className="text-muted-foreground">
                    Over time, creating environments where children feel secure enough to share and grow, regardless of initial barriers.
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
