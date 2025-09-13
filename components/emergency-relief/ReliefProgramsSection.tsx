import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Calendar, CheckCircle } from "lucide-react"

export default function ReliefProgramsSection() {
  return (
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
  )
}
