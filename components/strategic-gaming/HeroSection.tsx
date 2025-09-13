import { Button } from "@/components/ui/button"
import { Users, Briefcase, Mail } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk">
          Building <span className="text-primary">Strategic Thinkers</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Strategic gaming is one of the most exciting and impactful components of Project SALAM, beginning with the introduction of chess. 
          For children from underserved communities, chess is more than a game—it is a gateway to developing critical thinking, patience, and foresight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/get-involved/volunteer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Users className="mr-2 h-5 w-5" />
              Volunteer with Us
            </Button>
          </Link>
          <Link href="/get-involved/career">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Briefcase className="mr-2 h-5 w-5" />
              Join Our Permanent Team
            </Button>
          </Link>
          <Link href="/about/contact">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
