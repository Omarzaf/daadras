import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ReportsCTA() {
  return (
    <motion.div 
      className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-left font-space-grotesk"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Stay Updated with Our Latest Reports
      </motion.h2>
      <motion.p 
        className="text-lg text-muted-foreground mb-6 max-w-3xl text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Subscribe to our newsletter to receive notifications when new reports and publications are available.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-primary hover:bg-accent text-white">Subscribe</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
