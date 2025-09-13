export interface Testimonial {
  id: string;
  name: string;
  location: string;
  story: string;
  impact: string;
  tags: string[];
  featured?: boolean;
}

export const testimonials: Testimonial[] = [];

  // Economic Upliftment Testimonials
  // {
  //   id: "economic-1",
  //   name: "Fatima Ahmed",
  //   location: "Lahore, Punjab",
  //   story: "The sewing machine provided by Daadras Foundation changed everything for my family. I can now work from home while taking care of my children and earn enough to support our household.",
  //   impact: "Monthly income increased from PKR 5,000 to PKR 25,000, achieving financial independence for a family of 5.",
  //   tags: ["economic-upliftment", "sewing-machines", "women-empowerment"],
  //   featured: true
  // },
  // {
  //   id: "economic-2",
  //   name: "Muhammad Hassan",
  //   location: "Karachi, Sindh",
  //   story: "With the educational support for my daughter, she became the first in our family to attend university. Now she's studying to become a teacher and wants to give back to our community.",
  //   impact: "First family member to receive higher education, breaking the cycle of poverty for future generations.",
  //   tags: ["economic-upliftment", "education-funding", "family-support"],
  //   featured: true
  // },

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
