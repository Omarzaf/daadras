import { TeamMember } from "@/types"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbNavigationProps {
  teamMember: TeamMember
}

export function BreadcrumbNavigation({ teamMember }: BreadcrumbNavigationProps) {
  return (
    <nav className="pt-3 pb-2" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
        </li>
        
        <li>
          <ChevronRight className="h-4 w-4" />
        </li>
        
        <li>
          <Link 
            href="/team" 
            className="hover:text-primary transition-colors"
          >
            Our Team
          </Link>
        </li>
        
        <li>
          <ChevronRight className="h-4 w-4" />
        </li>
        
        <li className="text-foreground font-medium">
          {teamMember.name}
        </li>
      </ol>
    </nav>
  )
}
