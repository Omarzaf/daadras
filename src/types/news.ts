export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  link: string;
}

export interface NewsCardProps {
  article: NewsArticle;
  variant?: "default" | "featured" | "compact";
}

export interface NewsFilterProps {
  selectedCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  categories: string[];
} 