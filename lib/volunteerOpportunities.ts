export interface VolunteerOpportunity {
  id: number
  title: string
  category: string
  engagement: string
  location: string
  mapLink: string | null
  timeCommitment: string
  description: string
  requirements: string[]
  icon: string
  formLink: string
  urgent: boolean
}

const volunteerOpportunitiesData: VolunteerOpportunity[] = []
  // {
  //   id: 1,
  //   title: "Education Program Volunteer",
  //   category: "Education",
  //   engagement: "On-site",
  //   location: "Multiple Locations, Lahore",
  //   mapLink: "https://maps.google.com/?q=Lahore,Pakistan",
  //   timeCommitment: "4-6 hours/week",
  //   description: "Support our Project Salam initiative by assisting with IT training, chess instruction, and social-emotional learning activities for children aged 7-18.",
  //   requirements: [
  //     "Basic computer skills",
  //     "Patience with children",
  //     "Commitment for minimum 3 months"
  //   ],
  //   icon: "BookOpen",
  //   formLink: "https://forms.google.com/education-volunteer",
  //   urgent: false
  // },
  // {
  //   id: 2,
  //   title: "Chess Instructor",
  //   category: "Education",
  //   engagement: "On-site",
  //   location: "Community Centers, Lahore",
  //   mapLink: "https://maps.google.com/?q=Community+Centers+Lahore,Pakistan",
  //   timeCommitment: "6-8 hours/week",
  //   description: "Teach chess to children and youth as part of our strategic thinking development program. Help organize tournaments and chess clubs.",
  //   requirements: [
  //     "Strong chess skills (minimum 1200 rating)",
  //     "Experience teaching children",
  //     "Weekend availability"
  //   ],
  //   icon: "Trophy",
  //   formLink: "https://forms.google.com/chess-instructor",
  //   urgent: true
  // },


/**
 * Retrieves all volunteer opportunities data
 * @returns Array of VolunteerOpportunity objects
 */
export function getVolunteerOpportunities(): VolunteerOpportunity[] {
  return volunteerOpportunitiesData
}

/**
 * Retrieves a specific volunteer opportunity by ID
 * @param id - The opportunity ID
 * @returns VolunteerOpportunity object or undefined if not found
 */
export function getVolunteerOpportunityById(id: number): VolunteerOpportunity | undefined {
  return volunteerOpportunitiesData.find(opportunity => opportunity.id === id)
}

/**
 * Retrieves volunteer opportunities filtered by category
 * @param category - The category to filter by
 * @returns Array of VolunteerOpportunity objects matching the category
 */
export function getVolunteerOpportunitiesByCategory(category: string): VolunteerOpportunity[] {
  return volunteerOpportunitiesData.filter(opportunity => opportunity.category === category)
}

/**
 * Retrieves volunteer opportunities filtered by engagement type
 * @param engagement - The engagement type to filter by (On-site, Remote, Hybrid)
 * @returns Array of VolunteerOpportunity objects matching the engagement type
 */
export function getVolunteerOpportunitiesByEngagement(engagement: string): VolunteerOpportunity[] {
  return volunteerOpportunitiesData.filter(opportunity => opportunity.engagement === engagement)
}

/**
 * Retrieves urgent volunteer opportunities
 * @returns Array of VolunteerOpportunity objects marked as urgent
 */
export function getUrgentVolunteerOpportunities(): VolunteerOpportunity[] {
  return volunteerOpportunitiesData.filter(opportunity => opportunity.urgent)
}

/**
 * Retrieves unique categories from all volunteer opportunities
 * @returns Array of unique category strings, sorted alphabetically
 */
export function getVolunteerOpportunityCategories(): string[] {
  const uniqueCategories = Array.from(new Set(volunteerOpportunitiesData.map(opportunity => opportunity.category)))
  return uniqueCategories.sort()
}

/**
 * Retrieves unique engagement types from all volunteer opportunities
 * @returns Array of unique engagement type strings, sorted alphabetically
 */
export function getVolunteerOpportunityEngagements(): string[] {
  const uniqueEngagements = Array.from(new Set(volunteerOpportunitiesData.map(opportunity => opportunity.engagement)))
  return uniqueEngagements.sort()
}
