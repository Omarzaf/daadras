import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Globe, BookOpen, Monitor, Zap, Target } from "lucide-react"

export default function ChallengesSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">
            Challenges We Address
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We've identified key challenges and developed innovative solutions to ensure effective learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Attention Spans</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Micro-sessions, storytelling, games, and movement breaks for younger children (ages 3-8).
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="h-6 w-6 text-accent mb-2" />
              <CardTitle className="text-lg">Language Barriers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Bilingual curriculum, Urdu labeling, and local-language volunteers bridge the gap.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Diverse Backgrounds</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Personalized approaches accommodate different academic starting levels within classes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Monitor className="h-6 w-6 text-accent mb-2" />
              <CardTitle className="text-lg">Resource Constraints</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Donations and repairs help address the shortage of functional computers.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Infrastructure Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Adaptive teaching methods work around inconsistent internet and power outages.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-6 w-6 text-accent mb-2" />
              <CardTitle className="text-lg">Limited Exposure</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Many children had never used computers before joining our program.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
