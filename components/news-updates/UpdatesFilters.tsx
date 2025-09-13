"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star } from "lucide-react"
import { motion } from "framer-motion"

interface UpdatesFiltersProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  categories: Array<{
    value: string
    label: string
    count: number
  }>
  filteredCount: number
  totalCount: number
}

export function UpdatesFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredCount,
  totalCount,
}: UpdatesFiltersProps) {
  return (
    <div className="mb-8 space-y-8">
      {/* Search Bar */}
      <motion.div 
        className="relative max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border-border focus:border-primary focus:ring-primary/20"
        />
      </motion.div>

      {/* Category Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-start gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={`${
                selectedCategory === category.value
                  ? "bg-primary hover:bg-accent text-primary-foreground"
                  : "border-border text-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.value === "featured" && <Star className="mr-1 h-4 w-4" />}
              {category.label} ({category.count})
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Results Count */}
      <motion.div 
        className="text-left text-sm text-foreground/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        Showing {filteredCount} of {totalCount} articles
        {searchTerm && <span> for "{searchTerm}"</span>}
      </motion.div>
    </div>
  )
}
