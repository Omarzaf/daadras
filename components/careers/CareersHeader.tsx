import { Badge } from "@/components/ui/badge"

export function CareersHeader() {
  return (
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-accent text-accent-foreground">Join Our Team</Badge>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
        Career Opportunities
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Build a meaningful career with Daadras Foundation. Join our dedicated team working to transform communities
        through education and social impact.
      </p>
    </div>
  )
}
