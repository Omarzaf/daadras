"use client"

import { ReportCard } from "@/components/ui/report-card"
import { ViewAllButton } from "@/components/ui/view-all-button"
import { motion } from "framer-motion"
import { getReports } from "@/lib/reports"

export const ReportsSection = () => {
  // Get the latest report
  const reportsData = getReports()
  const latestReport = reportsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

  // If there are no reports, don't render the component
  if (!latestReport) {
    return null
  }

  return (
    <section id="reports" className="py-8 md:py-16 lg:py-24 bg-muted/30">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-left">
              Latest Reports
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-left">
            Access our comprehensive reports showcasing our impact, achievements, and commitment to transparency.
          </p>
        </div>

        {/* Latest Report Card - A3 Size Format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.02,
            y: -4,
            transition: { duration: 0.3 }
          }}
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

        <ViewAllButton href="/news-resources/reports" />
      </div>
    </section>
  )
}
