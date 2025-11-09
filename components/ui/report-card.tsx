"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ReportCardProps {
  id: number
  title: string
  description: string
  category: string
  date: string
  thumbnail?: string
  googleDriveUrl?: string
  className?: string
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

export function ReportCard({
  id,
  title,
  description,
  category,
  date,
  thumbnail,
  googleDriveUrl,
  className = ""
}: ReportCardProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-6 ${className}`}>
      {/* Thumbnail Card - Left Side */}
      <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden w-full md:w-80 flex-shrink-0 p-0">
        <div className="relative h-64 md:h-full overflow-hidden">
          <Image 
            src={thumbnail || "/placeholder.jpg"} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
      </Card>
      
      {/* Details Card - Right Side */}
      <Card className="flex-1 hover:shadow-lg transition-all duration-300">
        <div className="px-6 py-0 flex flex-col">
          {/* Category Badge */}
          <div className="mb-3">
            <Badge className={`${getCategoryColor(category)} w-fit whitespace-nowrap shrink-0`}>
              {category}
            </Badge>
          </div>
          
          {/* Header with Title and Date */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-foreground hover:text-accent transition-colors mb-3 leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(date).toLocaleDateString()}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed text-justify max-w-none">
            {description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {googleDriveUrl && (
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-200 hover:shadow-lg"
                asChild
              >
                <a 
                  href={googleDriveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Eye className="mr-1 h-3 w-3" />
                  View Report
                </a>
              </Button>
            )}
            {!googleDriveUrl && (
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-200 hover:shadow-lg"
                asChild
              >
                <Link href="/news-resources/reports">
                  View Report <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}