"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye, Calendar, FileText, Users } from "lucide-react"

interface Report {
  id: number
  title: string
  description: string
  category: string
  date: string
  pages: number
  downloads: number
  fileSize: string
  type: string
  filePath: string
  thumbnail: string
}

interface ReportsGridProps {
  reports: Report[]
}

export function ReportsGrid({ reports }: ReportsGridProps) {
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

  const handleDownload = (filePath: string, title: string) => {
    // For demo purposes, show alert since actual PDF files don't exist yet
    alert(`Download would start for: ${title}\nFile: ${filePath}`)

    // Uncomment below when actual PDF files are added to public/reports/ directory
    /*
    const link = document.createElement("a")
    link.href = filePath
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    */
  }

  const handlePreview = (filePath: string) => {
    alert(`Preview would open for file: ${filePath}`)
  }

  return (
    <div className="space-y-6">
      {reports.map((report) => (
        <div key={report.id} className="flex flex-col md:flex-row gap-6">
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
              
              {/* Metadata Row */}
              <div className="flex flex-wrap gap-6 mb-6 p-4 bg-muted/30 rounded-lg -mx-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">{report.pages}</span>
                  <span className="text-sm text-muted-foreground">Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-foreground">{report.downloads}</span>
                  <span className="text-sm text-muted-foreground">Downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{report.fileSize}</span>
                  <span className="text-sm text-muted-foreground">{report.type}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => handleDownload(report.filePath, report.title)}
                  className="bg-primary hover:bg-accent text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handlePreview(report.filePath)}
                  className="border-border text-primary hover:bg-primary/10 bg-transparent"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
