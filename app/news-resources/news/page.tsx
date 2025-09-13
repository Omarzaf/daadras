"use client"

import { useState, useMemo } from "react"
import { UpdatesHeader } from "@/components/news-updates/UpdatesHeader"
import { UpdatesFilters } from "@/components/news-updates/UpdatesFilters"
import { UpdatesGrid } from "@/components/news-updates/UpdatesGrid"
import { articles } from "@/lib/articles"
import { demoArticles, getLatestArticles } from "@/lib/demoArticles"

export default function NewsUpdatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Get the latest articles from shared source
  const latestArticles = getLatestArticles()

  const filteredArticles = useMemo(() => {
    return latestArticles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "featured" ? article.featured : article.category === selectedCategory)
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, latestArticles])

  const categories = [
    { value: "all", label: "All Articles", count: latestArticles.length },
    { value: "featured", label: "Featured", count: latestArticles.filter((a) => a.featured).length },
    { value: "news", label: "Latest News", count: latestArticles.filter((a) => a.category === "news").length },
    { value: "analysis", label: "Analysis", count: latestArticles.filter((a) => a.category === "analysis").length },
    { value: "story", label: "Stories", count: latestArticles.filter((a) => a.category === "story").length },
  ]

  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      <UpdatesHeader />
      <UpdatesFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        filteredCount={filteredArticles.length}
        totalCount={latestArticles.length}
      />
      <UpdatesGrid articles={filteredArticles} />
    </div>
  )
}
