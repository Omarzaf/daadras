import { TrendingUp, Users } from "lucide-react"

export default function LastingChangeSection() {
  return (
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
  )
}
