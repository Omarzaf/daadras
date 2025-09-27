"use client"

import { OurStoryHeader } from "@/components/our-story/OurStoryHeader"
import { TransformationSection } from "@/components/our-story/TransformationSection"
// import { HeroVideo } from "@/components/our-story/HeroVideo"
import { DocumentaryVideo } from "@/components/our-story/DocumentaryVideo"
import { CoreValues } from "@/components/our-story/CoreValues"
import { CoreAreas } from "@/components/our-story/CoreAreas"
import { VolunteerUpliftment } from "@/components/our-story/VolunteerUpliftment"
import { ImpactStatistics } from "@/components/our-story/ImpactStatistics"

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Video Section - Top of Page */}
      {/* <HeroVideo /> */}
      
      <OurStoryHeader />
            {/* Core Areas Section - Subtle Gradient Background */}
      <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <CoreAreas />
        </div>
      </section>
      

      {/* Transformation Section - White Background */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <TransformationSection />
        </div>
      </section>

      {/* Core Values Section - Subtle Gradient Background */}
      <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <CoreValues />
        </div>
      </section>

      
      {/* Project Salam Section - White Background */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <DocumentaryVideo />
        </div>
      </section>
      

      {/* Volunteer Upliftment Section - White Background */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <VolunteerUpliftment />
        </div>
      </section>
      
      {/* Impact Statistics Section - Subtle Gradient Background */}
      {/* <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <ImpactStatistics />
        </div>
      </section> */}
      

    </>
  )
}
