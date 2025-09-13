"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Globe, Clock, ExternalLink, ChevronDown } from "lucide-react"
import { getVolunteerOpportunities } from "@/lib/volunteerOpportunities"
import { BookOpen, Trophy, Laptop, Brain, Users, Camera, Megaphone, Heart } from "lucide-react"
import { NoOpportunitiesAvailable } from "@/components/ui/no-opportunities"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const iconMap: Record<string, any> = {
  BookOpen,
  Trophy,
  Laptop,
  Brain,
  Users,
  Camera,
  Megaphone,
  Heart,
}

export function VolunteersGrid() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const opportunities = getVolunteerOpportunities()

  // Check if there are any volunteer opportunities available
  if (!opportunities || opportunities.length === 0) {
    return (
      <NoOpportunitiesAvailable
        type="volunteer"
        generalInterestFormLink="https://forms.google.com/general-volunteer-interest"
      />
    )
  }

  return (
    <motion.div 
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-4">
        {opportunities.map((opportunity, index) => {
          const IconComponent = iconMap[opportunity.icon] ?? BookOpen
          const isOpen = openItem === String(opportunity.id)
          
          return (
            <motion.div
              key={opportunity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <motion.button
                onClick={() => setOpenItem(isOpen ? null : String(opportunity.id))}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                whileHover={{ backgroundColor: "rgba(var(--primary), 0.02)" }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl border border-primary/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-[family-name:var(--font-space-grotesk)] font-semibold text-foreground">
                          {opportunity.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] py-0.5 px-1.5 bg-background/50">
                            {opportunity.engagement}
                          </Badge>
                          {opportunity.urgent && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            >
                              <Badge className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-[10px] py-0.5 px-1.5 shadow-sm">
                                 Urgent
                               </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-foreground/80">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{opportunity.timeCommitment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4"
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-border/30 bg-gradient-to-b from-background/50 to-background/80">
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="space-y-4"
                      >
                        <p className="text-foreground leading-relaxed">
                           {opportunity.description}
                         </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-sm text-foreground/90">{opportunity.location}</span>
                                {opportunity.mapLink && (
                                  <a
                                    href={opportunity.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline ml-2 text-xs transition-colors"
                                  >
                                    View Map
                                  </a>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground/90">{opportunity.timeCommitment}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                              <Badge variant="secondary" className="text-xs py-1 px-2 bg-primary/5 text-primary border-primary/20">
                                {opportunity.engagement}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2">
                              <div className="w-1 h-4 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                              Requirements
                            </h4>
                            <ul className="text-sm text-foreground/90 space-y-2">
                              {opportunity.requirements.map((req: string, index: number) => (
                                <motion.li 
                                  key={index} 
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2, delay: 0.2 + index * 0.05 }}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span>{req}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="pt-4"
                        >
                          <Button 
                            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 h-12 text-sm px-6 shadow-lg hover:shadow-xl transition-all duration-300 font-medium" 
                            asChild
                          >
                            <a href={opportunity.formLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Apply for this Position
                            </a>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
