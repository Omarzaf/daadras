export interface Report {
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

const reportsData: Report[] = [
  {
    id: 1,
    title: "Daadras Annual Impact Report 2023",
    description: "Comprehensive overview of Daadras Foundation's achievements across Project Salam, economic upliftment, and ration drives throughout 2023.",
    category: "Annual Report",
    date: "2024-01-15",
    pages: 52,
    downloads: 1450,
    fileSize: "3.2 MB",
    type: "PDF",
    filePath: "/reports/daadras-annual-report-2023.pdf",
    thumbnail: "/generic-book-cover.svg"
  },
  {
    id: 2,
    title: "Project Salam 3.0 Evaluation Report",
    description: "Detailed analysis of Project Salam's third phase implementation, including IT education, chess program, and SEL outcomes at Qadam Community School.",
    category: "Program Evaluation",
    date: "2023-12-20",
    pages: 34,
    downloads: 920,
    fileSize: "2.1 MB",
    type: "PDF",
    filePath: "/reports/project-salam-3-evaluation.pdf",
    thumbnail: "/drive/project_salam1.webp"
  },
  {
    id: 3,
    title: "Economic Upliftment Impact Study 2023",
    description: "Assessment of our economic upliftment initiatives including sewing machine distribution, micro-entrepreneur support, and community development programs.",
    category: "Research",
    date: "2023-11-25",
    pages: 28,
    downloads: 680,
    fileSize: "1.9 MB",
    type: "PDF",
    filePath: "/reports/economic-upliftment-study-2023.pdf",
    thumbnail: "/community-volunteers.png"
  },
  {
    id: 4,
    title: "Financial Transparency Report 2023",
    description: "Complete financial breakdown of Daadras Foundation's funding sources, expenditure allocation, and program investments across all initiatives.",
    category: "Financial",
    date: "2023-12-31",
    pages: 24,
    downloads: 520,
    fileSize: "1.4 MB",
    type: "PDF",
    filePath: "/reports/financial-transparency-2023.pdf",
    thumbnail: "/generic-book-cover.svg"
  },
  {
    id: 5,
    title: "Ration Drives & Emergency Response Case Study",
    description: "Analysis of our food relief programs, Iftar drives, and emergency response efforts including flood relief and community support initiatives.",
    category: "Case Study",
    date: "2023-10-15",
    pages: 31,
    downloads: 750,
    fileSize: "2.3 MB",
    type: "PDF",
    filePath: "/reports/ration-drives-case-study-2023.pdf",
    thumbnail: "/generic-book-cover.svg"
  },
  {
    id: 6,
    title: "Community Partnership Assessment 2023",
    description: "Evaluation of our collaborations with partner organizations, volunteer impact, and community engagement across all operational areas.",
    category: "Assessment",
    date: "2023-09-30",
    pages: 26,
    downloads: 590,
    fileSize: "1.8 MB",
    type: "PDF",
    filePath: "/reports/community-partnership-assessment-2023.pdf",
    thumbnail: "/community-volunteers.png"
  },
  {
    id: 7,
    title: "Project Salam 1.0 & 2.0 Comparative Analysis",
    description: "Comprehensive comparison of the first two phases of Project Salam, highlighting lessons learned and program evolution.",
    category: "Research",
    date: "2023-08-20",
    pages: 40,
    downloads: 820,
    fileSize: "2.7 MB",
    type: "PDF",
    filePath: "/reports/project-salam-comparative-analysis.pdf",
    thumbnail: "/students-learning.jpg"
  },
  {
    id: 8,
    title: "Quarterly Impact Summary Q4 2023",
    description: "Latest quarterly report showcasing recent achievements, program updates, and upcoming initiatives across all Daadras Foundation programs.",
    category: "Quarterly Report",
    date: "2024-01-05",
    pages: 16,
    downloads: 340,
    fileSize: "1.1 MB",
    type: "PDF",
    filePath: "/reports/quarterly-summary-q4-2023.pdf",
    thumbnail: "/generic-book-cover.svg"
  }
]

/**
 * Retrieves all reports data
 * @returns Array of Report objects
 */
export function getReports(): Report[] {
  return reportsData
}

/**
 * Retrieves a specific report by ID
 * @param id - The report ID
 * @returns Report object or undefined if not found
 */
export function getReportById(id: number): Report | undefined {
  return reportsData.find(report => report.id === id)
}

/**
 * Retrieves reports filtered by category
 * @param category - The category to filter by
 * @returns Array of Report objects matching the category
 */
export function getReportsByCategory(category: string): Report[] {
  return reportsData.filter(report => report.category === category)
}

/**
 * Retrieves unique categories from all reports
 * @returns Array of unique category strings, sorted alphabetically
 */
export function getReportCategories(): string[] {
  const uniqueCategories = Array.from(new Set(reportsData.map(report => report.category)))
  return uniqueCategories.sort()
}
