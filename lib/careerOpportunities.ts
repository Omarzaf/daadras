export interface CareerOpportunity {
  id: number
  title: string
  department: string
  type: string
  engagement: string
  location: string
  mapLink: string | null
  description: string
  requirements: string[]
  icon: string
  formLink: string
  urgent: boolean
}

const careerOpportunitiesData: CareerOpportunity[] = []

// {
//   id: 1,
//   title: "Program Manager - Education",
//   department: "Education",
//   type: "Full-time",
//   engagement: "On-site",
//   location: "Lahore, Pakistan",
//   mapLink: "https://maps.google.com/?q=Lahore,Pakistan",
//   description: "Lead and oversee Project Salam and other educational initiatives. Manage program implementation, monitor outcomes, and coordinate with partner organizations.",
//   requirements: [
//     "Master's degree in Education or related field",
//     "5+ years program management experience",
//     "Experience with educational NGOs",
//     "Strong leadership and communication skills"
//   ],
//   icon: "BookOpen",
//   formLink: "https://forms.google.com/program-manager-education",
//   urgent: true
// },

/**
 * Retrieves all career opportunities data
 * @returns Array of CareerOpportunity objects
 */
export function getCareerOpportunities(): CareerOpportunity[] {
  return careerOpportunitiesData
}

/**
 * Retrieves a specific career opportunity by ID
 * @param id - The opportunity ID
 * @returns CareerOpportunity object or undefined if not found
 */
export function getCareerOpportunityById(id: number): CareerOpportunity | undefined {
  return careerOpportunitiesData.find(opportunity => opportunity.id === id)
}

/**
 * Retrieves career opportunities filtered by department
 * @param department - The department to filter by
 * @returns Array of CareerOpportunity objects matching the department
 */
export function getCareerOpportunitiesByDepartment(department: string): CareerOpportunity[] {
  return careerOpportunitiesData.filter(opportunity => opportunity.department === department)
}

/**
 * Retrieves career opportunities filtered by type
 * @param type - The type to filter by (Full-time, Part-time, Contract, etc.)
 * @returns Array of CareerOpportunity objects matching the type
 */
export function getCareerOpportunitiesByType(type: string): CareerOpportunity[] {
  return careerOpportunitiesData.filter(opportunity => opportunity.type === type)
}

/**
 * Retrieves career opportunities filtered by engagement type
 * @param engagement - The engagement type to filter by (On-site, Remote, Hybrid)
 * @returns Array of CareerOpportunity objects matching the engagement type
 */
export function getCareerOpportunitiesByEngagement(engagement: string): CareerOpportunity[] {
  return careerOpportunitiesData.filter(opportunity => opportunity.engagement === engagement)
}

/**
 * Retrieves urgent career opportunities
 * @returns Array of CareerOpportunity objects marked as urgent
 */
export function getUrgentCareerOpportunities(): CareerOpportunity[] {
  return careerOpportunitiesData.filter(opportunity => opportunity.urgent)
}

/**
 * Retrieves unique departments from all career opportunities
 * @returns Array of unique department strings, sorted alphabetically
 */
export function getCareerOpportunityDepartments(): string[] {
  const uniqueDepartments = Array.from(new Set(careerOpportunitiesData.map(opportunity => opportunity.department)))
  return uniqueDepartments.sort()
}

/**
 * Retrieves unique types from all career opportunities
 * @returns Array of unique type strings, sorted alphabetically
 */
export function getCareerOpportunityTypes(): string[] {
  const uniqueTypes = Array.from(new Set(careerOpportunitiesData.map(opportunity => opportunity.type)))
  return uniqueTypes.sort()
}

/**
 * Retrieves unique engagement types from all career opportunities
 * @returns Array of unique engagement type strings, sorted alphabetically
 */
export function getCareerOpportunityEngagements(): string[] {
  const uniqueEngagements = Array.from(new Set(careerOpportunitiesData.map(opportunity => opportunity.engagement)))
  return uniqueEngagements.sort()
}
