"use client"

import Marquee, { PartnerLogo } from "@/components/ui/marquee"
import { Partner } from "@/types"
import { partners } from "@/lib/partners"

export const PartnersSection = () => {
  const partnersData: Partner[] = partners.map(partner => ({
    name: partner.name,
    logo: partner.src,
    url: partner.url
  }))
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-background">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Partners</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We collaborate with leading organizations to maximize our impact and reach more communities.
          </p>
        </div>
      </div>
      
      <div className="w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {partnersData.map((partner, index) => (
            <PartnerLogo
              key={index}
              name={partner.name}
              logo={partner.logo}
              url={partner.url}
              className="mx-6"
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
