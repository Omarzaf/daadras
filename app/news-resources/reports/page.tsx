"use client"

import { useState, useMemo } from "react"
import { ReportsHeader } from "@/components/news-reports/ReportsHeader"
import { ReportsFilters } from "@/components/news-reports/ReportsFilters"
import { ReportsGrid } from "@/components/news-reports/ReportsGrid"
import { ReportsCTA } from "@/components/news-reports/ReportsCTA"
import reportsData from "@/data/reports.json"

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories from reports data
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(reportsData.map(report => report.category)))
    return uniqueCategories.sort()
  }, [])

  // Filter reports based on search term and selected category
  const filteredReports = useMemo(() => {
    return reportsData.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || report.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
      <ReportsHeader />
      <ReportsFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <ReportsGrid reports={filteredReports} />
      <ReportsCTA />
    </div>
  )
}
