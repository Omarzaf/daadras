"use client"

import { Handshake } from "lucide-react"
import { motion } from "framer-motion"
import { partners } from "@/lib/partners"

export function CurrentPartnersSection() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left"
            >
              Our Current Partners
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
          >
            We're proud to work with organizations that share our commitment to community development and social impact.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex flex-col items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 group-hover:shadow-md cursor-pointer">
                    <div className="relative w-16 h-16 bg-white rounded-lg p-2 shadow-sm group-hover:shadow-md transition-shadow">
                      <img 
                        src={partner.src} 
                        alt={partner.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                        <Handshake className="h-6 w-6" />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                      {partner.name}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
