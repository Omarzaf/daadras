import { Badge } from "@/components/ui/badge"

export function VolunteersHeader() {
  return (
    <div className="text-center mb-16">
      <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Get Involved</Badge>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
        Volunteer With Us
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
        Join our mission to empower communities through education and social impact. Find meaningful volunteer
        opportunities that match your skills and passion.
      </p>
    </div>
  )
}
