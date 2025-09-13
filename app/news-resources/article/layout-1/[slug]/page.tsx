import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, Tag } from "lucide-react"
import { SuggestedRead } from "@/components/ui/suggested-read"
import { articles } from "@/lib/articles"
import { ShareDropdown } from "@/components/ui/share-dropdown"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  const renderContent = (content: any) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p className="text-muted-foreground leading-relaxed mb-6">
            {content.text}
          </p>
        )
      case 'heading':
        return (
          <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">
            {content.text}
          </h2>
        )
      case 'quote':
        return (
          <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 bg-muted/30 rounded-r-lg">
            <p className="text-lg italic text-foreground mb-2">
              "{content.text}"
            </p>
            {content.author && (
              <cite className="text-sm text-muted-foreground">
                — {content.author}
              </cite>
            )}
          </blockquote>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Article Content */}
        <article className="max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {article.type}
              </Badge>
              {article.featured && (
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>By {article.authors.join(", ")}</span>
              </div>
              
              {article.editor && (
                <div className="flex items-center gap-1">
                  <span>Edited by {article.editor}</span>
                </div>
              )}
            </div>
            
            {/* Share Button */}
            <div className="flex items-center gap-4 mb-8">
              <ShareDropdown 
                title={article.title}
                url={`/news-resources/article/layout-1/${article.slug}`}
              />
            </div>
          </header>
          
          {/* Featured Image */}
          {article.image && (
            <div className="mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {article.content.map((content, index) => (
              <div key={index}>
                {renderContent(content)}
              </div>
            ))}
          </div>
          
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </article>
        
        {/* Sidebar with Suggested Read */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <SuggestedRead currentSlug={params.slug} />
        </aside>
      </div>
    </div>
  )
}

// Generate static params for all articles
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles[params.slug as keyof typeof articles]
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }
  
  return {
    title: `${article.title} | Daadras`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : [],
    },
  }
}