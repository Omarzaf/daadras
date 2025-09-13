"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ViewAllButton } from "@/components/ui/view-all-button"
import { ReportCard } from "@/components/ui/report-card"
import { Calendar, ArrowRight, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { Article } from "@/types"
import { articles } from "@/lib/articles"
import { demoArticles, getLatestArticles } from "@/lib/demoArticles"
import Link from "next/link"
import reportsData from "@/data/reports.json"

export const NewsSection = () => {
  // Use the same articles as the News & Resources page
  const featuredArticles = getLatestArticles()
  
  // Get the latest report
  const latestReport = reportsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  return (
    <section id="news" className="py-8 md:py-16 lg:py-24 bg-muted/30">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-left">
              Latest News & Updates
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-left">
            Stay informed about our latest initiatives, success stories, and community impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-card text-card-foreground gap-6 rounded-xl py-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={article.image || "/placeholder.svg"} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-primary/10 text-primary border-primary/20">
                      {article.type}
                    </Badge>
                    <span className="text-sm font-medium text-foreground bg-muted px-2 py-1 rounded-md">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <CardTitle className="font-semibold text-lg leading-tight group-hover:text-accent transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 flex flex-col flex-1">
                  <div className="flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                    <p className="text-xs text-muted-foreground mb-4 mt-auto">By {article.authors ? article.authors.join(", ") : "Daadras Team"}</p>
                  </div>
                  <Link href={`/news-resources/article/${article.layout || 'layout-1'}/${article.slug}`} className="block mt-2">
                    <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-full bg-primary hover:bg-primary/90 text-white hover:text-white transition-colors">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Latest Report Card - A3 Size Format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ 
            scale: 1.02,
            y: -4,
            transition: { duration: 0.3 }
          }}
          className="mt-12"
        >
          <ReportCard
            id={latestReport.id}
            title={latestReport.title}
            description={`${latestReport.description} This detailed analysis showcases our commitment to transparency and accountability in all our humanitarian efforts. The report highlights key metrics, beneficiary testimonials, and strategic insights that demonstrate our organization's measurable impact on communities.`}
            category={latestReport.category}
            date={latestReport.date}
            pages={latestReport.pages}
            downloads={latestReport.downloads}
            fileSize={latestReport.fileSize}
            thumbnail={latestReport.thumbnail}
            filePath={latestReport.filePath}
          />
        </motion.div>

        <ViewAllButton href="/news-resources/news" />
      </div>
    </section>
  )
}
