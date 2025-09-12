import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Heart, Users, Shirt, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import TestimonialsSection from "@/components/shared/TestimonialsSection"

const emergencyReliefTestimonials = [
  {
    id: "1",
    name: "Noor Fatima",
    location: "Nasirabad, Balochistan",
    story:
      "When the floods destroyed our home, we had nothing left. Daadras Foundation provided us with food packages and clothing that helped us survive the most difficult time of our lives.",
    impact: "Family of 7 received emergency food supplies for 2 months and clothing during 2022 flood crisis.",
  },
  {
    id: "2",
    name: "Abdul Rahman",
    location: "Kot Palyani, Balochistan",
    story:
      "During Ramadan, when we couldn't afford proper Iftar meals, the foundation's Iftar drive ensured our children could break their fast with dignity and proper nutrition.",
    impact: "30 families in the community received daily Iftar meals throughout Ramadan 2023.",
  },
  {
    id: "3",
    name: "Khadija Begum",
    location: "Sharakpur, Punjab",
    story:
      "As a widow with seven children, I struggled to provide basic clothing. The foundation's clothing drive gave my children warm clothes for winter and restored their confidence.",
    impact: "Complete winter clothing provided for 8 family members, ensuring warmth and dignity during harsh weather.",
  },
]

export default function RationDrivesPage() {
  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Initiatives</Badge>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
          Emergency Relief
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
          Ensuring access to basic nutrition and essential supplies for families in critical need, especially during
          times of crisis and economic hardship.
        </p>
      </div>

      {/* Mission Context */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            A Moral and Social Imperative
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            In a country where nearly 30% of the population lives below the poverty line, ensuring access to basic
            nutrition became a moral and social imperative for Daadras Foundation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <p className="text-sm text-muted-foreground">Population Below Poverty Line</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">184K+</div>
              <p className="text-sm text-muted-foreground">Flood Displaced (2022)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95K+</div>
              <p className="text-sm text-muted-foreground">Homes Destroyed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Relief */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-[family-name:var(--font-space-grotesk)]">
          Our Emergency Relief Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Emergency Relief */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Emergency Food Distribution</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                One-month food packages for families in critical need during times of crisis, including the COVID-19
                pandemic, seasonal unemployment, and economic recession.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Each Package Includes:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Flour</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Rice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Lentils</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Cooking Oil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Tea & Sugar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Hygiene Items</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Iftar Drives */}
          <Card className="border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Iftar Drives</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                During the holy month of Ramadan, we conduct Iftar drives to ensure that low-income families can observe
                fasting with dignity and adequate nourishment.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Iftar Meal Boxes Include:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Dates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Fresh Fruits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Bread</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    <span>Cooked Meals</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Focus on both quality and quantity to support fasting individuals with nutritious meals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Clothing Relief */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-[family-name:var(--font-space-grotesk)]">
          Clothing Relief Efforts
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shirt className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Orphanage Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Organized clothing drives for orphanages, ensuring children without guardians received appropriate
                apparel and dignity.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Family Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Custom clothing provided for vulnerable families, including a widowed mother and her seven children in
                Sharakpur (August 2020).
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Winter Preparedness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Collected and distributed clothing and blankets to underserved families in Lahore, helping them face
                winter with dignity (September 2020).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Flood Response */}
      <div className="mb-16">
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-l-primary">
          <CardHeader>
            <Badge className="mb-2 bg-primary/10 text-primary w-fit">Emergency Response</Badge>
            <CardTitle className="text-2xl font-[family-name:var(--font-space-grotesk)]">
              2022 Monsoon Flood Relief
            </CardTitle>
            <p className="text-muted-foreground">Immediate humanitarian support during Pakistan's worst floods</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Crisis Scale</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Over 184,000 individuals displaced</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>95,350 homes destroyed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Multiple districts severely affected</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Our Response (August 31, 2022)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Large-scale clothing drive launched</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Nasirabad, Kot Palyani, Jhal Magsi covered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Immediate humanitarian support provided</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Relief Strategy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8 font-[family-name:var(--font-space-grotesk)]">
          Our Food Relief Strategy
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Direct Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                On-ground distribution of food packages and essential supplies directly to families in need.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Cash Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Financial assistance to enable families to purchase necessities according to their specific needs.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Collaborations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Partnerships with other foundations and organizations to amplify impact and reach more families.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={emergencyReliefTestimonials}
        title="Voices of Hope During Crisis"
        subtitle="Hear from families who received life-saving support during their most challenging moments."
      />

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          Help Us Feed Families in Need
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
          Your support helps us provide essential nutrition and supplies to families facing crisis. Every contribution
          makes a difference in ensuring dignity and basic needs are met.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-accent hover:bg-accent/90">
            <Package className="mr-2 h-4 w-4" />
            Support Emergency Relief Drives
          </Button>
          <Button variant="outline">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
