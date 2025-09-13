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

const volunteerOpportunitiesData: VolunteerOpportunity[] = [
  {
    id: 1,
    title: "Education Program Volunteer",
    category: "Education",
    engagement: "On-site",
    location: "Multiple Locations, Lahore",
    mapLink: "https://maps.google.com/?q=Lahore,Pakistan",
    timeCommitment: "4-6 hours/week",
    description: "Support our Project Salam initiative by assisting with IT training, chess instruction, and social-emotional learning activities for children aged 7-18.",
    requirements: [
      "Basic computer skills",
      "Patience with children",
      "Commitment for minimum 3 months"
    ],
    icon: "BookOpen",
    formLink: "https://forms.google.com/education-volunteer",
    urgent: false
  },
  {
    id: 2,
    title: "Chess Instructor",
    category: "Education",
    engagement: "On-site",
    location: "Community Centers, Lahore",
    mapLink: "https://maps.google.com/?q=Community+Centers+Lahore,Pakistan",
    timeCommitment: "6-8 hours/week",
    description: "Teach chess to children and youth as part of our strategic thinking development program. Help organize tournaments and chess clubs.",
    requirements: [
      "Strong chess skills (minimum 1200 rating)",
      "Experience teaching children",
      "Weekend availability"
    ],
    icon: "Trophy",
    formLink: "https://forms.google.com/chess-instructor",
    urgent: true
  },
  {
    id: 3,
    title: "IT Training Assistant",
    category: "Technology",
    engagement: "Hybrid",
    location: "Schools & Centers, Lahore",
    mapLink: "https://maps.google.com/?q=Schools+Lahore,Pakistan",
    timeCommitment: "3-5 hours/week",
    description: "Assist with digital literacy programs, help students with basic computer skills, and support technology integration in classrooms.",
    requirements: [
      "Proficiency in MS Office",
      "Basic troubleshooting skills",
      "Bilingual preferred"
    ],
    icon: "Laptop",
    formLink: "https://forms.google.com/it-training-assistant",
    urgent: false
  },
  {
    id: 4,
    title: "Social-Emotional Learning Facilitator",
    category: "Counseling",
    engagement: "On-site",
    location: "Various Schools, Lahore",
    mapLink: "https://maps.google.com/?q=Schools+Lahore,Pakistan",
    timeCommitment: "5-7 hours/week",
    description: "Lead SEL workshops focusing on emotional intelligence, empathy, and interpersonal skills development for students.",
    requirements: [
      "Psychology/Education background preferred",
      "Experience with group facilitation",
      "Empathetic communication skills"
    ],
    icon: "Brain",
    formLink: "https://forms.google.com/sel-facilitator",
    urgent: true
  },
  {
    id: 5,
    title: "Community Outreach Coordinator",
    category: "Outreach",
    engagement: "On-site",
    location: "Field Work, Multiple Cities",
    mapLink: "https://maps.google.com/?q=Pakistan",
    timeCommitment: "8-10 hours/week",
    description: "Help identify families in need, coordinate ration drives, and build relationships with local communities for our relief programs.",
    requirements: [
      "Strong communication skills",
      "Local language fluency",
      "Transportation available",
      "Community connections helpful"
    ],
    icon: "Users",
    formLink: "https://forms.google.com/community-outreach",
    urgent: false
  },
  {
    id: 6,
    title: "Content Creator & Social Media",
    category: "Marketing",
    engagement: "Remote",
    location: "Remote",
    mapLink: null,
    timeCommitment: "4-6 hours/week",
    description: "Create engaging content for our social media platforms, document program activities, and help spread awareness about our initiatives.",
    requirements: [
      "Social media experience",
      "Basic photo/video editing",
      "Creative writing skills",
      "Understanding of NGO sector"
    ],
    icon: "Camera",
    formLink: "https://forms.google.com/content-creator",
    urgent: false
  },
  {
    id: 7,
    title: "Event Management Volunteer",
    category: "Events",
    engagement: "On-site",
    location: "Event Venues, Lahore",
    mapLink: "https://maps.google.com/?q=Event+Venues+Lahore,Pakistan",
    timeCommitment: "10-15 hours/month",
    description: "Help organize fundraising events, community gatherings, and program celebrations. Coordinate logistics and manage volunteer teams.",
    requirements: [
      "Event planning experience",
      "Strong organizational skills",
      "Leadership abilities",
      "Flexible schedule"
    ],
    icon: "Megaphone",
    formLink: "https://forms.google.com/event-management",
    urgent: true
  },
  {
    id: 8,
    title: "Fundraising & Grant Writing",
    category: "Development",
    engagement: "Remote",
    location: "Remote",
    mapLink: null,
    timeCommitment: "6-8 hours/week",
    description: "Research funding opportunities, write grant proposals, and support fundraising campaigns to sustain and expand our programs.",
    requirements: [
      "Grant writing experience",
      "Research skills",
      "Excellent written English",
      "Nonprofit sector knowledge"
    ],
    icon: "Heart",
    formLink: "https://forms.google.com/fundraising-volunteer",
    urgent: true
  }
]

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
