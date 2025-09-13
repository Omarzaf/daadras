import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { DAADRAS_CONTACT } from "@/lib/contact_info"

interface NoReportsAvailableProps {
  hasFilters?: boolean
}


export function NoReportsAvailable({ hasFilters = false }: NoReportsAvailableProps) {
  const title = hasFilters ? "No Reports Found" : "No Reports Available"
  const description = hasFilters 
    ? "We couldn't find any reports matching your search criteria. Try adjusting your search terms or selecting a different category."
    : "We're working on compiling our latest reports and documentation. Check back soon for comprehensive reports about our impact and initiatives."

  return (
    <div className="text-center py-20 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="space-y-3">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto" />
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
