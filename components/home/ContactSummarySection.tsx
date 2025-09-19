"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Clock } from "lucide-react"
import Link from "next/link"
import { DAADRAS_CONTACT } from "@/lib/contact_info"

function ContactSummarySection() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-left">
              Get in Touch
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
            Have questions about our programs or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Send us a message and we'll respond within 24 hours
              </p>
              <a 
                href={`mailto:${DAADRAS_CONTACT.email}`}
                className="inline-block text-primary hover:text-accent transition-colors duration-300 text-sm font-semibold"
              >
                {DAADRAS_CONTACT.email}
              </a>
            </CardContent>
          </Card>

          <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Speak directly with our team for immediate assistance
              </p>
              <a 
                href={`tel:${DAADRAS_CONTACT.phone.replace(/[^+\d]/g, "")}`}
                className="inline-block text-primary hover:text-accent transition-colors duration-300 text-sm font-semibold"
              >
                {DAADRAS_CONTACT.phone}
              </a>
            </CardContent>
          </Card>

          <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We're available to help you during these hours
              </p>
              <div className="text-primary text-sm font-semibold">
                {DAADRAS_CONTACT.officeHours}
              </div>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  )
}

export default ContactSummarySection