import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Code,
  BookOpen,
  CheckCircle,
  Monitor,
  Zap,
  Heart,
  Brain,
} from "lucide-react"

export default function VolunteerExperienceSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
            Volunteer Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Volunteers are at the heart of our mission. Join us for a <span className="text-primary font-semibold">dual opportunity</span>—empower young learners while gaining personal, social, and technical growth in a collaborative, innovative environment.
          </p>
        </div>

        {/* Journey Overview */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space-grotesk">Your Volunteer Journey</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Mentorship</h4>
                <p className="text-sm text-muted-foreground">Guide children through personalized learning experiences</p>
              </div>
              <div className="text-center">
                <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Technical Growth</h4>
                <p className="text-sm text-muted-foreground">Work on real-world projects and develop technical expertise</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Curriculum Development</h4>
                <p className="text-sm text-muted-foreground">Design and lead educational content</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Mentorship Pillar */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Mentorship & Teaching</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">One-on-one or small-group mentorship</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Thoughtful matching with students</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Training to understand backgrounds</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Bridge privileged experiences with learner realities</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Projects Pillar */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <Code className="h-12 w-12 text-accent mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Technical Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Choose from existing projects or propose new ones</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Collaborate with Director of IT</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Focus on willingness to learn, not prior expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Design and implement real-world solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Curriculum Development Pillar */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center pb-4">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="font-space-grotesk">Curriculum Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Required contribution to curriculum content</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Selected ideas brought to life in classroom</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Lead sessions under IT Director mentorship</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Take ownership of educational design</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-space-grotesk">Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Monitor className="h-8 w-8 text-primary" />
                  <CardTitle className="font-space-grotesk">Applicant Tracking System</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Volunteers developed a comprehensive ATS to manage incoming applications, streamlining our recruitment process and providing hands-on experience in full-stack development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-8 w-8 text-accent" />
                  <CardTitle className="font-space-grotesk">Data Ingestion Pipeline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Built an automated system for collecting written exams, viva recordings, and practical reports, demonstrating real-world data engineering skills while enhancing our operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cross-Disciplinary Collaboration */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space-grotesk">Cross-Disciplinary Collaboration</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground">IT Team</h4>
                <p className="text-sm text-muted-foreground">Technical expertise and project guidance</p>
              </div>
              <div className="space-y-3">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground">Chess Team</h4>
                <p className="text-sm text-muted-foreground">Strategic thinking and problem-solving</p>
              </div>
              <div className="space-y-3">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-foreground">SEL Team</h4>
                <p className="text-sm text-muted-foreground">Social-emotional learning and empathy</p>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
              Our teams work closely together, creating opportunities for volunteers to engage in diverse discussions and benefit from holistic exchange of ideas that strengthen both social awareness and technical expertise.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-space-grotesk">Ready to Make a Dual Impact?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Join us in empowering young learners while simultaneously gaining personal, social, and technical growth. 
            Our collaborative, innovative environment welcomes volunteers who are willing to learn and make a meaningful difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
