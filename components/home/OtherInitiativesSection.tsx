"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export const OtherInitiativesSection = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-muted/30">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Economic Upliftment */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="group"
          >
            <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl group-hover:border-primary/20">
              <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Economic Upliftment</CardTitle>
                <CardDescription>
                  Empowering communities through sustainable livelihood programs and microfinance initiatives.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Sewing machines distributed</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">200+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Families empowered</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">15+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Health centers supported</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Micro-entrepreneurs</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full group">
                  <Link href="/initiatives/economic-upliftment" aria-label="Learn more about Economic Upliftment">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Emergency Relief */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="group"
          >
            <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl group-hover:border-primary/20">
              <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Emergency Relief</CardTitle>
                <CardDescription>
                  Providing essential food supplies to families in need during challenging times.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Ration packages distributed</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">1,200+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Families fed</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Iftar drives organized</div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground leading-tight">Emergency responses</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full group">
                  <Link href="/initiatives/emergency-relief" aria-label="Learn more about Emergency Relief">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>


        </div>
      </div>
    </section>
  )
}
