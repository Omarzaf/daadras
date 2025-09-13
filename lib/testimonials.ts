export interface Testimonial {
  id: string;
  name: string;
  location: string;
  story: string;
  impact: string;
  tags: string[];
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  // Economic Upliftment Testimonials
  {
    id: "economic-1",
    name: "Fatima Ahmed",
    location: "Lahore, Punjab",
    story: "The sewing machine provided by Daadras Foundation changed everything for my family. I can now work from home while taking care of my children and earn enough to support our household.",
    impact: "Monthly income increased from PKR 5,000 to PKR 25,000, achieving financial independence for a family of 5.",
    tags: ["economic-upliftment", "sewing-machines", "women-empowerment"],
    featured: true
  },
  {
    id: "economic-2",
    name: "Muhammad Hassan",
    location: "Karachi, Sindh",
    story: "With the educational support for my daughter, she became the first in our family to attend university. Now she's studying to become a teacher and wants to give back to our community.",
    impact: "First family member to receive higher education, breaking the cycle of poverty for future generations.",
    tags: ["economic-upliftment", "education-funding", "family-support"],
    featured: true
  },
  {
    id: "economic-3",
    name: "Aisha Bibi",
    location: "Faisalabad, Punjab",
    story: "The micro-entrepreneur support helped me expand my small food stall. I now employ two other women from my neighborhood and we all support our families together.",
    impact: "Business expanded 3x, creating employment for 2 additional women in the community.",
    tags: ["economic-upliftment", "micro-entrepreneurs", "community-development"],
    featured: true
  },

  // Project Salam Testimonials
  {
    id: "salam-1",
    name: "Aisha",
    location: "Lahore",
    story: "Project Salam didn't just teach me about computers and chess. It taught me about myself and how I can help others learn too.",
    impact: "Gained confidence and leadership skills, now helping other students in the program.",
    tags: ["project-salam", "sel", "chess", "it", "confidence-building"],
    featured: true
  },
  {
    id: "salam-2",
    name: "Ahmed Ali",
    location: "Karachi",
    story: "Before joining Project Salam, I was shy and couldn't express myself. Now I can speak confidently in front of others and I'm learning to code!",
    impact: "Improved public speaking skills and discovered passion for technology.",
    tags: ["project-salam", "public-speaking", "it", "personal-development"],
    featured: false
  },
  {
    id: "salam-3",
    name: "Zara Khan",
    location: "Faisalabad",
    story: "The chess lessons taught me to think strategically, not just in games but in life. I now approach problems differently and feel more confident.",
    impact: "Enhanced critical thinking and problem-solving abilities.",
    tags: ["project-salam", "chess", "strategic-thinking", "critical-thinking"],
    featured: false
  },

  // Emergency Relief Testimonials
  {
    id: "relief-1",
    name: "Noor Fatima",
    location: "Nasirabad, Balochistan",
    story: "When the floods destroyed our home, we had nothing left. Daadras Foundation provided us with food packages and clothing that helped us survive the most difficult time of our lives.",
    impact: "Family of 7 received emergency food supplies for 2 months and clothing during 2022 flood crisis.",
    tags: ["emergency-relief", "flood-relief", "disaster-response"],
    featured: true
  },
  {
    id: "relief-2",
    name: "Abdul Rahman",
    location: "Kot Palyani, Balochistan",
    story: "During Ramadan, when we couldn't afford proper Iftar meals, the foundation's Iftar drive ensured our children could break their fast with dignity and proper nutrition.",
    impact: "30 families in the community received daily Iftar meals throughout Ramadan 2023.",
    tags: ["emergency-relief", "iftar-drives", "ramadan-relief"],
    featured: true
  },
  {
    id: "relief-3",
    name: "Khadija Begum",
    location: "Sharakpur, Punjab",
    story: "As a widow with seven children, I struggled to provide basic clothing. The foundation's clothing drive gave my children warm clothes for winter and restored their confidence.",
    impact: "Complete winter clothing provided for 8 family members, ensuring warmth and dignity during harsh weather.",
    tags: ["emergency-relief", "clothing-drives", "winter-relief"],
    featured: true
  },
  {
    id: "relief-4",
    name: "Hassan Sheikh",
    location: "Flood-affected area, Sindh",
    story: "When the floods destroyed our home, Daadras Foundation was there immediately with food, shelter, and hope. They didn't just give us aid, they helped us rebuild our lives.",
    impact: "Family received immediate relief and long-term support for rebuilding their home.",
    tags: ["emergency-relief", "flood-relief", "disaster-response"],
    featured: false
  },
  {
    id: "relief-5",
    name: "Maryam Bibi",
    location: "Earthquake-affected area, Balochistan",
    story: "After the earthquake, we lost everything. Daadras Foundation provided us with essential supplies and helped us get back on our feet. Their support gave us strength to start over.",
    impact: "Received comprehensive disaster relief and recovery support.",
    tags: ["emergency-relief", "earthquake-relief", "disaster-response"],
    featured: false
  },

  // General Impact Testimonials
  {
    id: "general-1",
    name: "Rashid Ahmed",
    location: "Lahore",
    story: "Daadras Foundation has transformed our community. They don't just provide temporary help, they create lasting change. Our children are now educated, our families are self-sufficient, and our community is stronger.",
    impact: "Community-wide transformation with improved education and economic stability.",
    tags: ["community-impact", "transformation", "sustainability"],
    featured: true
  },
  {
    id: "general-2",
    name: "Saima Khan",
    location: "Karachi",
    story: "I've been volunteering with Daadras for two years, and I've seen firsthand how they change lives. The children in Project Salam are not just learning skills, they're becoming confident leaders.",
    impact: "Witnessed transformation of children into confident, skilled individuals.",
    tags: ["volunteer-perspective", "project-salam", "leadership-development"],
    featured: false
  }
];

/**
 * Retrieves testimonials filtered by tags
 * @param tags - Array of tags to filter by
 * @returns Array of testimonials matching the tags
 */
export function getTestimonialsByTags(tags: string[]): Testimonial[] {
  if (tags.length === 0) return testimonials;
  
  return testimonials.filter(testimonial => 
    tags.some(tag => testimonial.tags.includes(tag))
  );
}

/**
 * Retrieves featured testimonials
 * @returns Array of featured testimonials
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(testimonial => testimonial.featured === true);
}

/**
 * Retrieves all testimonials
 * @returns Array of all testimonials
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

/**
 * Retrieves testimonials for a specific initiative
 * @param initiative - The initiative name (e.g., 'economic-upliftment', 'project-salam')
 * @returns Array of testimonials for the specified initiative
 */
export function getTestimonialsByInitiative(initiative: string): Testimonial[] {
  return testimonials.filter(testimonial => 
    testimonial.tags.includes(initiative)
  );
}

/**
 * Retrieves all available tags
 * @returns Array of unique tags
 */
export function getAllTags(): string[] {
  const allTags = testimonials.flatMap(testimonial => testimonial.tags);
  return [...new Set(allTags)].sort();
}

/**
 * Retrieves testimonials by location
 * @param location - The location to filter by
 * @returns Array of testimonials from the specified location
 */
export function getTestimonialsByLocation(location: string): Testimonial[] {
  return testimonials.filter(testimonial => 
    testimonial.location.toLowerCase().includes(location.toLowerCase())
  );
}
