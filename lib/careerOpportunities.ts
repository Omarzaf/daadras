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

const careerOpportunitiesData: CareerOpportunity[] = [
  {
    id: 1,
    title: "Program Manager - Education",
    department: "Education",
    type: "Full-time",
    engagement: "On-site",
    location: "Lahore, Pakistan",
    mapLink: "https://maps.google.com/?q=Lahore,Pakistan",
    description: "Lead and oversee Project Salam and other educational initiatives. Manage program implementation, monitor outcomes, and coordinate with partner organizations.",
    requirements: [
      "Master's degree in Education or related field",
      "5+ years program management experience",
      "Experience with educational NGOs",
      "Strong leadership and communication skills"
    ],
    icon: "BookOpen",
    formLink: "https://forms.google.com/program-manager-education",
    urgent: true
  },
  {
    id: 2,
    title: "Technology Coordinator",
    department: "Technology",
    type: "Full-time",
    engagement: "Hybrid",
    location: "Lahore, Pakistan",
    mapLink: "https://maps.google.com/?q=Lahore,Pakistan",
    description: "Oversee IT training programs, manage technology infrastructure, and develop digital literacy curricula for our educational initiatives.",
    requirements: [
      "Bachelor's in Computer Science or IT",
      "3+ years in educational technology",
      "Experience with curriculum development",
      "Proficiency in multiple programming languages"
    ],
    icon: "Laptop",
    formLink: "https://forms.google.com/technology-coordinator",
    urgent: false
  },
  {
    id: 3,
    title: "Community Relations Officer",
    department: "Outreach",
    type: "Full-time",
    engagement: "On-site",
    location: "Multiple Cities, Pakistan",
    mapLink: "https://maps.google.com/?q=Pakistan",
    description: "Build and maintain relationships with local communities, coordinate relief programs, and identify families in need for our various initiatives.",
    requirements: [
      "Bachelor's degree in Social Work or related field",
      "2+ years community outreach experience",
      "Excellent interpersonal skills",
      "Fluency in Urdu and English"
    ],
    icon: "Users",
    formLink: "https://forms.google.com/community-relations-officer",
    urgent: true
  },
  {
    id: 4,
    title: "Finance & Operations Manager",
    department: "Operations",
    type: "Full-time",
    engagement: "Hybrid",
    location: "Lahore, Pakistan",
    mapLink: "https://maps.google.com/?q=Lahore,Pakistan",
    description: "Manage financial operations, oversee budgets, ensure compliance, and streamline organizational processes for maximum efficiency.",
    requirements: [
      "MBA in Finance or CA qualification",
      "4+ years in nonprofit finance",
      "Experience with donor reporting",
      "Strong analytical and organizational skills"
    ],
    icon: "DollarSign",
    formLink: "https://forms.google.com/finance-operations-manager",
    urgent: false
  },
  {
    id: 5,
    title: "Communications & Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    engagement: "Remote",
    location: "Remote",
    mapLink: null,
    description: "Develop marketing strategies, manage social media presence, create compelling content, and coordinate public relations efforts.",
    requirements: [
      "Bachelor's in Marketing or Communications",
      "3+ years digital marketing experience",
      "Strong content creation skills",
      "Experience with nonprofit sector preferred"
    ],
    icon: "Megaphone",
    formLink: "https://forms.google.com/communications-specialist",
    urgent: false
  },
  {
    id: 6,
    title: "Research & Evaluation Analyst",
    department: "Research",
    type: "Full-time",
    engagement: "Hybrid",
    location: "Lahore, Pakistan",
    mapLink: "https://maps.google.com/?q=Lahore,Pakistan",
    description: "Design and conduct program evaluations, analyze impact data, prepare research reports, and support evidence-based decision making.",
    requirements: [
      "Master's in Research, Statistics, or related field",
      "2+ years research experience",
      "Proficiency in statistical software",
      "Strong analytical and writing skills"
    ],
    icon: "Brain",
    formLink: "https://forms.google.com/research-analyst",
    urgent: true
  }
]

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
