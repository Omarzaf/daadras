// Shared demo articles for homepage and news page
export const demoArticles = [
  {
    id: 1,
    title: "Project Salam Reaches 500 Students Milestone",
    slug: "project-salam-reaches-500-students",
    excerpt: "Our flagship educational program has successfully enrolled over 500 students across 15 communities, marking a significant achievement in our mission to provide quality education.",
    category: "news",
    authors: ["Umer Zafar", "Arooj Hameed Khan", "Sawaiz Naseem"],
    date: "2024-01-15",
    type: "Layout 1",
    featured: true,
    image: "/students-learning.jpg",
    layout: "layout-1",
    readTime: "5 min read"
  }
]

// Function to get the latest articles (can be extended to fetch from API)
export const getLatestArticles = () => {
  return demoArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}