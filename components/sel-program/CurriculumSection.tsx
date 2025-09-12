import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Brain, BookOpen, Shield, Star, Users } from "lucide-react"

export default function CurriculumSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Curriculum and Learning Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our SEL curriculum is rooted in the fundamentals of emotional psychology, helping children build a strong foundation for lifelong well-being.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Self-Identity and Self-Awareness</h3>
                <p className="text-muted-foreground">
                  Exploring "Who am I?" through reflection on personal beliefs, self-image, and how others perceive them. Activities like drawing self-portraits and writing affirmations nurture self-expression.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Understanding Emotions and Mental Health</h3>
                <p className="text-muted-foreground">
                  Children learn what emotions are, why they matter, and how to check in with their feelings through activities like the "emotional volcano" and sticky-note reflections.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Self-Acceptance and Self-Esteem</h3>
                <p className="text-muted-foreground">
                  Guided exercises in self-love, body image, and uniqueness—supported by mirror activities—build confidence and resilience.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Expressing Emotions</h3>
                <p className="text-muted-foreground">
                  Children practice journaling, role-play with puppets, and writing letters to themselves, learning healthy outlets for emotional release.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Coping Strategies</h3>
                <p className="text-muted-foreground">
                  With mindfulness, breathing, humor, and distraction techniques, children are taught practical ways to manage difficult emotions and life's unpredictability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Positive Psychology and Gratitude</h3>
                <p className="text-muted-foreground">
                  Lessons emphasize optimism and appreciation, with activities like gratitude journaling and creating cards for loved ones to foster positivity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space-grotesk">Learning Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-space-grotesk">Emotional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Children develop the ability to recognize, process, and manage their emotions in healthy ways.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle className="font-space-grotesk">Healthy Coping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Equipped with coping mechanisms far healthier than destructive patterns they may have learned during hardship.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="font-space-grotesk">Lifelong Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building a strong foundation for lifelong emotional well-being and resilience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
