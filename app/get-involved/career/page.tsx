"use client";

import { CareersHeader } from "@/components/careers/CareersHeader"
import { CareersGrid } from "@/components/careers/CareersGrid"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 md:py-16 lg:py-24 bg-background">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <CareersHeader />
          <CareersGrid />
        </div>
      </section>
    </div>
  )
}
