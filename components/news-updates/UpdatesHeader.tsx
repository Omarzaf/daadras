import { motion } from "framer-motion"

export function UpdatesHeader() {
  return (
    <div className="text-left mb-8">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-space-grotesk"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        News and Updates
      </motion.h1>
      <motion.p 
        className="text-xl text-muted-foreground max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Stay informed about our latest initiatives, success stories, and insights.
      </motion.p>
    </div>
  )
}
