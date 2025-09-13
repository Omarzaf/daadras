import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function FloodResponseSection() {
  return (
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
  )
}
