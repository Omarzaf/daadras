import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Heart, Users, Shirt, Calendar, ArrowRight, CheckCircle } from "lucide-react"
import TestimonialsSection from "@/components/shared/TestimonialsSection"
import Image from "next/image"
import { getTestimonialsByInitiative } from "@/lib/testimonials"

export default function RationDrivesPage() {
  const emergencyReliefTestimonials = getTestimonialsByInitiative('emergency-relief');
  
  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
          Emergency Relief
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl text-pretty leading-relaxed mb-4">
          Ensuring access to basic nutrition and essential supplies for families in critical need, especially during
          times of crisis and economic hardship.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
          Our emergency relief programs provide immediate assistance to vulnerable communities facing natural disasters, economic hardship, and food insecurity across Pakistan.
        </p>
      </div>

      {/* Mission Context */}
      <div className="relative bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            A Moral and Social Imperative
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">
            In a country where nearly 30% of the population lives below the poverty line, ensuring access to basic
            nutrition became a moral and social imperative for Daadras Foundation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">30%</div>
              <p className="text-sm text-muted-foreground">Population Below Poverty Line</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">184K+</div>
              <p className="text-sm text-muted-foreground">Flood Displaced (2022)</p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">95K+</div>
              <p className="text-sm text-muted-foreground">Homes Destroyed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Relief */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          Our Emergency Relief Programs
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
          We provide comprehensive emergency assistance through targeted food distribution and seasonal support programs designed to address immediate needs during crises.
        </p>
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
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Flour</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Rice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Lentils</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Cooking Oil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
                    <span>Tea & Sugar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-primary" />
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
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span>Dates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span>Fresh Fruits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span>Bread</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
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
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          Clothing Relief Efforts
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
          Our clothing drives provide essential apparel and dignity to vulnerable families, orphans, and communities facing hardship across Pakistan.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/drive/kids_poverty.jpg"
                alt="Children receiving clothing support"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Shirt className="h-6 w-6 text-primary" />
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

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/drive/women_classroom.webp"
                alt="Family receiving clothing assistance"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-primary" />
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

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src="/drive/community_build.jpg"
                alt="Winter clothing distribution"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Heart className="h-6 w-6 text-primary" />
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
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: '#0F443F'}} />
              <span>Over 184,000 individuals displaced</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: '#0F443F'}} />
              <span>95,350 homes destroyed</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: '#0F443F'}} />
              <span>Multiple districts severely affected</span>
            </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Our Response (August 31, 2022)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: '#0F443F'}} />
              <span>Large-scale clothing drive launched</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: '#0F443F'}} />
              <span>Nasirabad, Kot Palyani, Jhal Magsi covered</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: '#0F443F'}} />
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
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          Our Food Relief Strategy
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
          We employ a multi-faceted approach to food relief, combining direct assistance, financial support, and strategic partnerships to maximize our impact.
        </p>
        
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Direct Distribution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                On-ground distribution of comprehensive food packages to families in crisis situations.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Emergency Response</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rapid deployment of relief supplies during natural disasters and humanitarian crises.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Community Partnerships</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Collaborating with local organizations to identify and support the most vulnerable families.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">Seasonal Programs</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Targeted relief during Ramadan, winter months, and other critical periods of need.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={emergencyReliefTestimonials}
        title="Voices of Hope During Crisis"
        subtitle="Hear from families who received life-saving support during their most challenging moments."
        leftAligned={true}
      />

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          Help Us Feed Families in Need
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
          Your support helps us provide essential nutrition and supplies to families facing crisis. Every contribution
          makes a difference in ensuring dignity and basic needs are met.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
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
