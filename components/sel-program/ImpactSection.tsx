import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Shield, Star, CheckCircle, Activity, Brain } from "lucide-react"

export default function ImpactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The outcomes speak for themselves. Children develop emotional skills, resilience, and a sense of belonging that empowers them to thrive.
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Remarkable Outcomes</h3>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Confident Expression</h4>
                <p className="text-muted-foreground">
                  Younger children are now able to articulate feelings with confidence, developing emotional vocabulary and self-awareness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Adolescent Resilience</h4>
                <p className="text-muted-foreground">
                  Adolescents show greater resilience when navigating social pressures, strengthened by workshops on puberty, relationships, and future planning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Stress Management</h4>
                <p className="text-muted-foreground">
                  Mindfulness sessions and creative therapies like dance and yoga give children tangible tools to manage stress and self-expression.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-space-grotesk">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-primary" />
                <span>Confident emotional expression</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <span>Enhanced resilience and coping skills</span>
              </div>
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-primary" />
                <span>Stress management techniques</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-accent" />
                <span>Improved social navigation</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Achievement */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space-grotesk">The Ultimate Achievement</h3>
          <div className="text-center">
            <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="h-8 w-8" />
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Above all, children leave SEL sessions feeling recognized and valued—an achievement that goes far beyond academics. 
              This sense of belonging and emotional safety is what empowers them to grow, learn, and thrive in every other area of their lives.
            </p>
          </div>
        </div>

        {/* Holistic Impact */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Beyond Emotional Skills</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            SEL creates the foundation for all other learning. When children feel emotionally safe and supported, 
            they become more engaged learners, better collaborators, and more confident individuals who can navigate 
            life's challenges with resilience and empathy.
          </p>
        </div>
      </div>
    </section>
  )
}
