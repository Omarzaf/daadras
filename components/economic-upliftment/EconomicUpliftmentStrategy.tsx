import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, GraduationCap, Store, Heart, Users, Wrench } from "lucide-react"

export default function EconomicUpliftmentStrategy() {
  return (
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
  )
}
