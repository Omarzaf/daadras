export const Programs: { text: string; link: string }[] = [
  {
    text: "Project Salam",
    link: "/initiatives/project-salam",
  },
  {
    text: "Partner With Us",
    link: "/get-involved/partnership",
  },
  {
    text: "Volunteer With Us",
    link: "/get-involved/volunteer",
  },
  {
    text: "Careers",
    link: "/get-involved/career",
  },
];

export const GetInvolved: { text: string; link: string }[] = [
  {
    text: "Volunteer",
    link: "/get-involved/volunteer",
  },
  {
    text: "Donate",
    link: "/ways-to-give",
  },
  {
    text: "Partner",
    link: "/get-involved/partnership",
  },
  {
    text: "Sponsor",
    link: "/get-involved/partnership",
  },
];

// Department definitions
export const DEPARTMENTS = {
  ADMINISTRATION: "Administration",
  RESEARCH: "Research", 
  STRATEGIC_GAMING: "Strategic Gaming",
  INFORMATION_TECHNOLOGY: "Information Technology",
  MARKETING: "Marketing",
  LEGACY_CONTRIBUTORS: "Legacy contributors",
  PUBLIC_SPEAKING: "Public Speaking",
  SOCIAL_EMOTIONAL_LEARNING: "Social Emotional Learning"
} as const;

// Helper function to get all unique departments from team members data
export const getAllDepartments = (teamMembers: any[]): string[] => {
  const departments = new Set<string>();
  teamMembers.forEach(member => {
    if (Array.isArray(member.department)) {
      member.department.forEach(dept => departments.add(dept));
    } else {
      departments.add(member.department);
    }
  });
  
  const departmentArray = Array.from(departments);
  const sortedDepartments = departmentArray.filter(dept => dept !== "Legacy contributors").sort();
  const previousMembersExists = departmentArray.includes("Legacy contributors");
  
  return previousMembersExists ? [...sortedDepartments, "Legacy contributors"] : sortedDepartments;
};

// Helper function to get department tags for filtering
export const getDepartmentTags = (teamMembers: any[]): { text: string; value: string }[] => {
  return getAllDepartments(teamMembers).map(dept => ({
    text: dept,
    value: dept.toLowerCase().replace(/\s+/g, '-')
  }));
};
