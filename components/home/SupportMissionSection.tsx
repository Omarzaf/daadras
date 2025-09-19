"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, Globe, Award } from "lucide-react"
import Link from "next/link"

export const SupportMissionSection = () => {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-[family-name:var(--font-space-grotesk)] text-left">
              Support Our Mission
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
            Your support helps us continue empowering communities through education, technology, and social-emotional learning programs. Every contribution makes a meaningful difference in the lives of those we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Direct Impact</h3>
              <p className="text-muted-foreground text-sm">
                100% of your donation goes directly to our programs, creating immediate positive change in communities.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure & Transparent</h3>
              <p className="text-muted-foreground text-sm">
                Secure payment processing with full transparency. Track how your contribution creates lasting change.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community Focused</h3>
              <p className="text-muted-foreground text-sm">
                Join a community of supporters working together to create sustainable, long-term solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-start mb-6">
          <Button asChild size="lg" className="group">
            <Link href="/ways-to-give">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/get-involved/volunteer">
              <Users className="mr-2 h-5 w-5" />
              Volunteer With Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
