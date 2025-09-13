import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Users } from "lucide-react"

export default function MissionSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            To provide personalized learning experiences and broaden the IT exposure of children, equipping them with
            practical skills tailored to their current abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Personalized Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Tailored educational experiences that adapt to each child's unique abilities and learning pace.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Digital Literacy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Building foundational computer skills and digital confidence for the modern world.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Inclusive Access</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Focusing on children from orphanages and underprivileged schools who need it most.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
