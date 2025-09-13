import { Package, Heart, Users, Calendar } from "lucide-react"

export default function ReliefStrategySection() {
  return (
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
  )
}
