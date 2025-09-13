"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import { articles } from "@/lib/articles"

interface SuggestedReadProps {
  currentSlug: string
}

export function SuggestedRead({ currentSlug }: SuggestedReadProps) {
  // Get all articles and find the next one to suggest
  const allArticles = Object.entries(articles)
  const currentIndex = allArticles.findIndex(([slug]) => slug === currentSlug)
  
  // Get the next article, or loop back to the first one
  const nextIndex = (currentIndex + 1) % allArticles.length
  const [suggestedSlug, suggestedArticle] = allArticles[nextIndex]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "news":
        return "bg-primary/10 text-primary border-primary/20"
      case "analysis":
        return "bg-accent/10 text-accent border-accent/20"
      case "story":
        return "bg-primary/15 text-primary border-primary/25"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  return (
    <div className="mb-6 sticky top-8">
      {suggestedArticle.image && (
        <img
          src={suggestedArticle.image || "/placeholder.svg"}
          alt={suggestedArticle.title}
          className="w-full rounded-lg shadow-md h-48 object-cover"
        />
      )}
      
      {/* Suggested Read Card */}
      <div className="mt-4 p-4 bg-muted/30 rounded-lg">
        <h3 className="font-semibold text-foreground mb-3">Suggested Read</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge className={getCategoryColor(suggestedArticle.category)} size="sm">
              {suggestedArticle.type}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{suggestedArticle.readTime}</span>
            </div>
          </div>
          
          <h4 className="font-medium text-sm leading-tight line-clamp-2">
            {suggestedArticle.title}
          </h4>
          
          <p className="text-xs text-muted-foreground line-clamp-2">
            {suggestedArticle.excerpt}
          </p>
          
          <div className="text-xs text-muted-foreground">
            <span>Published: </span>
            <span className="font-medium">
              {new Date(suggestedArticle.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-border">
          <Link href={`/news-resources/article/${suggestedArticle.layout || 'layout-1'}/${suggestedSlug}`}>
            <Button variant="default" size="sm" className="w-full">
              Read Next Article
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}