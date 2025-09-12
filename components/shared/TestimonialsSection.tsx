import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  location: string
  story: string
  impact: string
  image?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
}

export default function TestimonialsSection({
  testimonials,
  title = "Stories of Impact",
  subtitle = "Real stories from the families and individuals whose lives have been transformed through our programs.",
}: TestimonialsSectionProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-accent" />
              </div>

              {/* Testimonial Story */}
              <blockquote className="text-foreground/80 leading-relaxed mb-4 italic">"{testimonial.story}"</blockquote>

              {/* Beneficiary Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  <strong className="text-foreground">Impact:</strong> {testimonial.impact}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
