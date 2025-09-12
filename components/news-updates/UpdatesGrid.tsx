import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"

interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  authors: string[]
  date: string
  type: string
  featured: boolean
  image?: string
  layout?: string
}

interface UpdatesGridProps {
  articles: Article[]
}

export function UpdatesGrid({ articles }: UpdatesGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">{article.type}</Badge>
                <span className="text-sm font-medium text-foreground bg-muted px-2 py-1 rounded-md">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
                {article.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-1">
              <div className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                <p className="text-xs text-muted-foreground mb-4 mt-auto">By {article.authors.join(", ")}</p>
              </div>
              <Link href={`/news-resources/article/${article.layout || 'layout-1'}/${article.slug}`} className="block mt-2">
                <Button
                  variant="ghost"
                  className="w-full bg-primary hover:bg-primary/90 text-white hover:text-white transition-colors"
                >
                  Read More
                </Button>
              </Link>
            </CardContent>
            </Card>
          </motion.div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">No articles found</p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search terms or selecting a different category.
          </p>
        </div>
      )}
    </div>
  )
}
