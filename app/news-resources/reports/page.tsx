"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ReportsHeader } from "@/components/news-reports/ReportsHeader"
import { ReportsFilters } from "@/components/news-reports/ReportsFilters"
import { ReportsGrid } from "@/components/news-reports/ReportsGrid"
// import { ReportsCTA } from "@/components/news-reports/ReportsCTA"
import { getReports, getReportCategories } from "@/lib/reports"

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories from reports data
  const categories = useMemo(() => {
    return getReportCategories()
  }, [])

  // Filter reports based on search term and selected category
  const filteredReports = useMemo(() => {
    const reportsData = getReports()
    return reportsData.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || report.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-background">
      <motion.div 
        className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ReportsHeader />
        <ReportsFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <ReportsGrid reports={filteredReports} hasFilters={searchTerm !== "" || selectedCategory !== "All"} />
        </motion.div>
        {/* <ReportsCTA /> */}
      </motion.div>
    </div>
  )
}
