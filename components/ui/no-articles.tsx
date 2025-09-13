import { Button } from "@/components/ui/button"
import { Newspaper } from "lucide-react"
import { DAADRAS_CONTACT } from "@/lib/contact_info"

interface NoArticlesAvailableProps {
  hasFilters?: boolean
}

export function NoArticlesAvailable({ hasFilters = false }: NoArticlesAvailableProps) {
  const title = hasFilters ? "No Articles Found" : "No Articles Available"
  const description = hasFilters 
    ? "We couldn't find any articles matching your search criteria. Try adjusting your search terms or selecting a different category."
    : "We're working on bringing you the latest news and updates. Check back soon for new content about our initiatives and impact."

  return (
    <div className="text-center py-20 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="space-y-3">
          <Newspaper className="h-12 w-12 text-muted-foreground mx-auto" />
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {!hasFilters && (
          <div className="space-y-4 pt-4">
            <p className="text-sm text-muted-foreground">
              Stay connected with us for the latest updates:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href={`mailto:${DAADRAS_CONTACT.email}`} rel="noopener noreferrer">
                  <Newspaper className="mr-2 h-4 w-4" />
                  Contact Us
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about/our-story" rel="noopener noreferrer">
                  Learn About Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
