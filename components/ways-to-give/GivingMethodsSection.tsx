"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Package, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function GivingMethodsSection() {
  const givingMethods = [
    {
      title: "Financial Donations",
      description: "Support our programs through direct financial contributions that fund education, technology, and community initiatives.",
      icon: Heart,
      action: "Donate Now",
      href: "#bank-transfers"
    },
    {
      title: "Volunteer Your Time",
      description: "Join our dedicated team of volunteers and contribute your time and skills to make a direct impact in our community.",
      icon: Users,
      action: "Volunteer With Us",
      href: "/get-involved/volunteer"
    },
    {
      title: "In-Kind Contributions",
      description: "Contribute materials, equipment, or professional services that directly support our programs and operations.",
      icon: Package,
      action: "Contact Us",
      href: "/about/contact"
    }
  ]

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left">
              How You Can Help
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
            Choose the way that works best for you to make a meaningful difference in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {givingMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-3 rounded-xl border border-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-[family-name:var(--font-space-grotesk)]">
                        {method.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {method.href.startsWith('#') ? (
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90"
                        onClick={() => document.getElementById(method.href.slice(1))?.scrollIntoView({ behavior: "smooth" })}
                      >
                        {method.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <Link href={method.href}>
                          {method.action}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
