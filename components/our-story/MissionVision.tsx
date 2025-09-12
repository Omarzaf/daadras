import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart } from "lucide-react"

export function MissionVision() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <Card>
        <CardHeader>
          <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To educate, empower, and inspire underserved children in Pakistan by providing IT training, emotional
            resilience, and logic-building skills—enabling them to become self-driven learners, break barriers, and
            create their opportunities in a rapidly changing world.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
            <Heart className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Our Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To create a world where every individual—regardless of circumstance—has access to transformative
            education, emotional resilience, and the tools to shape their future with dignity, purpose, and
            independence.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
