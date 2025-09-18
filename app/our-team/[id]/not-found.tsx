import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, ArrowLeft } from "lucide-react"

export default function TeamMemberNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          <Users className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Team Member Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The team member you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90" asChild>
            <Link href="/our-team">
              <ArrowLeft className="h-5 w-5 mr-2" />
              View All Team Members
            </Link>
          </Button>
          
          <Button size="lg" variant="outline" className="w-full bg-transparent hover:bg-primary/5" asChild>
            <Link href="/">
              Go to Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
