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

      </div>
    </div>
  )
}
