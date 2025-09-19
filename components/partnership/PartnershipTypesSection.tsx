"use client"

import { Button } from "@/components/ui/button"
import { DollarSign, BookOpen, Network, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function PartnershipTypesSection() {
  const partnershipTypes = [
    {
      title: "Financial Support Partners",
      description: "Support our programs through financial contributions and help us create sustainable impact in communities.",
      icon: DollarSign,
      benefits: [
        "Regular impact updates and progress reports",
        "Recognition in communications and events",
        "Tax benefits and donation receipts",
        "Opportunity to visit programs and see impact firsthand",
      ],
    },
    {
      title: "Project Salam Collaborators",
      description: "Partner with us to deliver our comprehensive 3-4 month Project Salam program in educational institutions.",
      icon: BookOpen,
      benefits: [
        "Direct program implementation in your community",
        "Transformative learning experiences for students",
        "Capacity building workshops and training",
        "Joint event planning and execution",
      ],
    },
    {
      title: "Institutional Partners",
      description: "Work with us in administration, evaluation, knowledge-sharing, and advocacy initiatives.",
      icon: Network,
      benefits: [
        "CSR program development",
        "Employee volunteer opportunities",
        "Skills-based volunteering programs",
        "Sustainable funding partnerships",
      ],
    },
  ]

  return (
    <section id="partnership-opportunities" className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left">
              Partnership Opportunities
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
            Choose the partnership model that aligns with your goals and capacity. Each partnership type offers unique benefits and opportunities for mutual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partnershipTypes.map((partnership, index) => {
            const IconComponent = partnership.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-2 rounded-lg border border-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-[family-name:var(--font-space-grotesk)]">
                        {partnership.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {partnership.description}
                    </p>

                    <div className="mb-4 flex-grow">
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {partnership.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="bg-primary/10 rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-primary">✓</span>
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90 mt-auto">
                      <Link href="/about/contact">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
