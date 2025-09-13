import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Brain, BookOpen, Shield, Star, Users } from "lucide-react"

export default function CurriculumSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Curriculum and Learning Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our SEL curriculum is rooted in the fundamentals of emotional psychology, helping children build a strong foundation for lifelong well-being.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
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


      </div>
    </section>
  )
}
