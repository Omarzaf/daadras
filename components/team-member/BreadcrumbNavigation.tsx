import { TeamMember } from "@/types"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbNavigationProps {
  teamMember: TeamMember
}

export function BreadcrumbNavigation({ teamMember }: BreadcrumbNavigationProps) {
  return (
    <nav className="pt-3 pb-2" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 md:space-x-2 text-xs md:text-sm text-muted-foreground">
        <li>
          <Link 
            href="/" 
            className="flex items-center hover:text-primary transition-colors"
          >
            <Home className="h-3 w-3 md:h-4 md:w-4 mr-1 flex-shrink-0" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        
        <li>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
        </li>
        
        <li>
          <Link 
            href="/our-team" 
            className="hover:text-primary transition-colors"
          >
            <span className="hidden sm:inline">Our Team</span>
            <span className="sm:hidden">Team</span>
          </Link>
        </li>
        
        <li>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
        </li>
        
        <li className="text-foreground font-medium truncate">
          <span className="hidden sm:inline">{teamMember.name}</span>
          <span className="sm:hidden">{teamMember.name.split(' ')[0]}</span>
        </li>
      </ol>
    </nav>
  )
}
