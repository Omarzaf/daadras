export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  type: string;
  image: string;
  slug: string;
}

export interface Initiative {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  href: string;
  gradientFrom: string;
  gradientTo: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
  location: string;
  joining_story: string[];
  role_description: string[];
}
