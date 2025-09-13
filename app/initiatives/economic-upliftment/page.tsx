import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, GraduationCap, Store, Heart, Users, ArrowRight, Target, DollarSign, BookOpen, Wrench } from "lucide-react"
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
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
          Economic Upliftment
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed">
          Empowering individuals and families not just through temporary relief but by fostering long-term economic
          sustainability and financial independence for lasting impact.
        </p>
      </div>



      {/* Key Strategies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-left text-foreground mb-12 font-[family-name:var(--font-space-grotesk)]">
            Our Economic Upliftment Strategy
          </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:justify-items-center">
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

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Skills Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Providing vocational training and skill development programs to enhance employability and create new income opportunities for community members.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Creating Lasting Change */}
      <div className="mb-16">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
            Creating Lasting Change
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl">
            Our approach focuses on sustainable solutions that address root causes rather than just symptoms.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                From Dependency to Independence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We provide tools, training, and resources that enable individuals to become self-sufficient and create their own opportunities for growth.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">
                Multiplier Effect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each person we empower goes on to help others in their community, creating a ripple effect of positive change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics Section */}
      <div className="mb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/8 rounded-3xl">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/12 rounded-full blur-lg"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Measurable change in the lives of families and communities through our economic upliftment initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-primary/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">500+</div>
              <div className="text-sm font-medium text-primary mb-1">Families Empowered</div>
              <p className="text-sm text-muted-foreground">Provided with sustainable income opportunities</p>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-accent/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">PKR 2.5M+</div>
              <div className="text-sm font-medium text-accent mb-1">Economic Impact</div>
              <p className="text-sm text-muted-foreground">Generated in additional household income</p>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-primary/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">150+</div>
              <div className="text-sm font-medium text-primary mb-1">Students Supported</div>
              <p className="text-sm text-muted-foreground">Received educational funding and resources</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">95% of supported families achieved financial stability within 12 months</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={economicUpliftmentTestimonials}
        title="Stories of Impact"
        subtitle="Real stories from the families and individuals whose lives have been transformed through our programs."
        leftAligned={true}
      />

      {/* Call to Action */}
      <div className="text-left bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          Join Our Economic Empowerment Mission
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Help us create sustainable change by supporting families on their journey to financial independence. Your
          contribution doesn't just provide temporary relief—it builds lasting prosperity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
