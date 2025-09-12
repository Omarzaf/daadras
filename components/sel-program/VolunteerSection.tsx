import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, BookOpen, CheckCircle, Shield, Activity, Brain } from "lucide-react"

export default function VolunteerSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Role of Volunteers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Volunteers are integral to SEL, serving not just as facilitators but as mentors and role models who undergo structured training to work effectively with children.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Volunteer Training</h3>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Trauma Sensitivity Training</h4>
                <p className="text-muted-foreground">
                  Every volunteer undergoes structured training in trauma sensitivity to work effectively with children from challenging backgrounds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Active Listening Skills</h4>
                <p className="text-muted-foreground">
                  Training in active listening techniques to create safe spaces where children feel heard and understood.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Activity Facilitation</h4>
                <p className="text-muted-foreground">
                  Learning to guide small groups through reflective exercises, games, and discussions while designing creative activities.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-space-grotesk">Volunteer Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <span>Guide small groups through reflective exercises</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-accent" />
                <span>Facilitate games and discussions</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Design creative activities balancing fun with learning</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-accent" />
                <span>Serve as mentors and role models</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transformative Experience */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space-grotesk">A Transformative Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">For Children</h4>
              <p className="text-muted-foreground leading-relaxed">
                Children gain the assurance that their voices matter. They develop emotional skills, build confidence in self-expression, 
                and learn healthy coping strategies in a supportive environment.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">For Volunteers</h4>
              <p className="text-muted-foreground leading-relaxed">
                Volunteers develop deeper empathy and resilience through their engagement. They learn to create safe spaces, 
                facilitate meaningful conversations, and witness the transformative power of emotional support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
