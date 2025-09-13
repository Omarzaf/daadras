"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Handshake, Users, Mail, Phone, MapPin, ExternalLink, Heart, BookOpen, DollarSign, Network, ArrowRight, Globe, Award } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { partners } from "@/lib/partners"

export default function PartnershipsPage() {
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
      title: "Project SALAM Collaborators",
      description: "Partner with us to deliver our comprehensive 3-4 month Project SALAM program in educational institutions.",
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

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Discuss goals, values alignment, and potential collaboration areas"
    },
    {
      step: "2", 
      title: "Partnership Design",
      description: "Co-create partnership framework and define mutual benefits"
    },
    {
      step: "3",
      title: "Implementation & Impact",
      description: "Launch partnership activities with ongoing monitoring and evaluation"
    }
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-12">
            <div className="mb-6">

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left"
              >
                Partner With Daadras
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
            >
              Join us in transforming communities through meaningful collaboration. We believe partnerships are the cornerstone of creating lasting social change and building stronger ecosystems of impact together.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/about/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
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
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border h-full">
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`bg-gradient-to-br ${partnership.color} p-2 rounded-lg border ${partnership.borderColor}`}>
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

      {/* Current Partners */}
      <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-12">
            <div className="mb-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left"
              >
                Our Current Partners
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
            >
              We're proud to work with organizations that share our commitment to community development and social impact.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {partners.map((partner, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 group-hover:shadow-md">
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-8 md:py-16 lg:py-24 bg-white">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="mb-12">
            <div className="mb-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left"
              >
                Our Partnership Process
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left"
            >
              Our collaborative approach ensures meaningful partnerships that create lasting impact for both organizations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] mb-4"
            >
              Ready to Partner With Us?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Let's discuss how we can work together to create meaningful change in communities.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/about/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about/contact">
                  <Users className="mr-2 h-5 w-5" />
                  Schedule Meeting
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
