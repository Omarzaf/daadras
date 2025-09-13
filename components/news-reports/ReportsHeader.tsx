import { motion } from "framer-motion"

export function ReportsHeader() {
  return (
    <div className="mb-8">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-left font-space-grotesk"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Reports & Publications
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-3xl text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Access our comprehensive reports, research findings, and impact assessments that demonstrate Daadras
        Foundation's commitment to transparency and continuous improvement.
      </motion.p>
    </div>
  )
}
