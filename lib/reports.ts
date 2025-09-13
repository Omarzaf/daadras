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

const reportsData: Report[] = []

// [
//   {
//     id: 1,
//     title: "Daadras Annual Impact Report 2023",
//     description: "Comprehensive overview of Daadras Foundation's achievements across Project Salam, economic upliftment, and ration drives throughout 2023.",
//     category: "Annual Report",
//     date: "2024-01-15",
//     pages: 52,
//     downloads: 1450,
//     fileSize: "3.2 MB",
//     type: "PDF",
//     filePath: "/reports/daadras-annual-report-2023.pdf",
//     thumbnail: "/generic-book-cover.svg"
//   },
//   {
//     id: 2,
//     title: "Project Salam 3.0 Evaluation Report",
//     description: "Detailed analysis of Project Salam's third phase implementation, including IT education, chess program, and SEL outcomes at Qadam Community School.",
//     category: "Program Evaluation",
//     date: "2023-12-20",
//     pages: 34,
//     downloads: 920,
//     fileSize: "2.1 MB",
//     type: "PDF",
//     filePath: "/reports/project-salam-3-evaluation.pdf",
//     thumbnail: "/drive/project_salam1.webp"
//   },
// ]

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
