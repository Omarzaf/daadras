import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, GraduationCap, Store, Heart, Users, ArrowRight } from "lucide-react"
import TestimonialsSection from "@/components/shared/TestimonialsSection"

const economicUpliftmentTestimonials = [
  {
    id: "1",
    name: "Fatima Ahmed",
    location: "Lahore, Punjab",
    story:
      "The sewing machine provided by Daadras Foundation changed everything for my family. I can now work from home while taking care of my children and earn enough to support our household.",
    impact:
      "Monthly income increased from PKR 5,000 to PKR 25,000, achieving financial independence for a family of 5.",
  },
  {
    id: "2",
    name: "Muhammad Hassan",
    location: "Karachi, Sindh",
    story:
      "With the educational support for my daughter, she became the first in our family to attend university. Now she's studying to become a teacher and wants to give back to our community.",
    impact: "First family member to receive higher education, breaking the cycle of poverty for future generations.",
  },
  {
    id: "3",
    name: "Aisha Bibi",
    location: "Faisalabad, Punjab",
    story:
      "The micro-entrepreneur support helped me expand my small food stall. I now employ two other women from my neighborhood and we all support our families together.",
    impact: "Business expanded 3x, creating employment for 2 additional women in the community.",
  },
]

export default function EconomicUpliftmentPage() {
  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Initiatives</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
          Economic Upliftment
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
          Empowering individuals and families not just through temporary relief but by fostering long-term economic
          sustainability and financial independence for lasting impact.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Beyond Temporary Relief
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Daadras Foundation believes in empowering individuals and families through sustainable solutions. We
            identify households with potential for self-reliance and support them with tools and opportunities to
            generate income, extending our impact beyond short-term aid into future financial independence.
          </p>
        </div>
      </div>

      {/* Key Strategies */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-[family-name:var(--font-space-grotesk)]">
          Our Economic Upliftment Strategy
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Sewing Machines</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Providing sewing machines to enable home-based businesses, allowing families to generate sustainable
                income from their skills and creativity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Education Funding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Supporting promising students with educational resources to help them escape poverty cycles and build
                future earning potential.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Micro-Entrepreneurs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Supporting small business owners like street vendors with resources and capital to expand their
                operations and increase income.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Health Centers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Resource donations to community health centers that serve underserved populations, improving healthcare
                access and community well-being.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Community Networks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Expanding community donation networks to create sustainable support systems that fuel future assistance
                and long-term development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Impact Stories */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-[family-name:var(--font-space-grotesk)]">
          Creating Lasting Change
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">
                From Dependency to Independence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our approach focuses on identifying individuals and households with the potential for self-reliance.
                Rather than providing temporary fixes, we invest in tools, education, and opportunities that create
                sustainable income streams.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">Success Metrics</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Families achieving financial independence</li>
                  <li>• Students completing higher education</li>
                  <li>• Small businesses showing growth</li>
                  <li>• Community health improvements</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Multiplier Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each economic upliftment initiative creates a ripple effect throughout the community. When one family
                achieves financial stability, they often become contributors to their community's economic ecosystem.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">Community Impact</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Job creation within communities</li>
                  <li>• Increased local economic activity</li>
                  <li>• Knowledge transfer to neighbors</li>
                  <li>• Strengthened social networks</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={economicUpliftmentTestimonials}
        title="Transforming Lives Through Economic Empowerment"
        subtitle="Meet the individuals and families who have achieved financial independence through our economic upliftment programs."
      />

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          Join Our Economic Empowerment Mission
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
          Help us create sustainable change by supporting families on their journey to financial independence. Your
          contribution doesn't just provide temporary relief—it builds lasting prosperity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-accent hover:bg-accent/90">
            <Heart className="mr-2 h-4 w-4" />
            Support Economic Upliftment
          </Button>
          <Button variant="outline">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
