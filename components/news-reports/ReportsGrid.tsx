"use client"

import { Card} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { NoReportsAvailable } from "@/components/ui/no-reports"
import { Eye, Calendar } from "lucide-react"
import { motion } from "framer-motion"

interface Report {
  id: number
  title: string
  description: string
  category: string
  date: string
  googleDriveUrl: string
  thumbnail: string
}

interface ReportsGridProps {
  reports: Report[]
  hasFilters?: boolean
}

export function ReportsGrid({ reports, hasFilters = false }: ReportsGridProps) {
  // If no reports are available, show the empty state
  if (reports.length === 0) {
    return <NoReportsAvailable hasFilters={hasFilters} />
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Annual Report":
        return "bg-primary/10 text-primary border-primary/20"
      case "Program Evaluation":
        return "bg-accent/10 text-accent border-accent/20"
      case "Research":
        return "bg-primary/15 text-primary border-primary/25"
      case "Financial":
        return "bg-accent/15 text-accent border-accent/25"
      case "Case Study":
        return "bg-primary/20 text-primary border-primary/30"
      case "Assessment":
        return "bg-accent/20 text-accent border-accent/30"
      case "Quarterly Report":
        return "bg-primary/25 text-primary border-primary/35"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }


  return (
    <div className="space-y-6">
      {reports.map((report, index) => (
        <motion.div 
          key={report.id} 
          className="flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          {/* Thumbnail Card - Left Side */}
          <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden w-full md:w-80 flex-shrink-0 p-0">
            <div className="relative h-64 md:h-full overflow-hidden">
              <img 
                src={report.thumbnail || "/placeholder.jpg"} 
                alt={report.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.jpg";
                }}
              />
            </div>
          </Card>
          
          {/* Details Card - Right Side */}
          <Card className="flex-1 hover:shadow-lg transition-all duration-300">
            <div className="px-6 py-0 flex flex-col">
              {/* Category Badge */}
              <div className="mb-3">
                <Badge className={`${getCategoryColor(report.category)} w-fit whitespace-nowrap shrink-0`}>
                  {report.category}
                </Badge>
              </div>
              
              {/* Header with Title and Date */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground hover:text-accent transition-colors mb-3 leading-tight">
                  {report.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(report.date).toLocaleDateString()}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-justify max-w-none">
                {report.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    className="bg-primary hover:bg-accent text-white"
                  >
                    <a 
                      href={report.googleDriveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Report
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
