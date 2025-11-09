export interface Report {
  id: number
  title: string
  description: string
  category: string
  date: string
  googleDriveUrl: string
  thumbnail: string
}

const reportsData: Report[] = [
  {
    id: 1,
    title: "Daadras Impact Report 2023-2025",
    description: "Comprehensive overview of Daadras Foundation's achievements across Project Salam, economic upliftment, and ration drives throughout 2023 to 2025.",
    category: "Annual Report",
    date: "2025-11-01",
    googleDriveUrl: "https://drive.google.com/file/d/1jEhj9iN494Uh3duCX32GRXXly-hnj_jL/view?usp=sharing",
    thumbnail: "/Daadras - Annual Report 2025-1_page-0001.jpg"
  },
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
