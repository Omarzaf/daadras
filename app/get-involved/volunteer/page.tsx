"use client";

import { VolunteersHeader } from "@/components/volunteers/VolunteersHeader"
import { VolunteersGrid } from "@/components/volunteers/VolunteersGrid"

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 md:py-16 lg:py-24 bg-background">
        <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
          <VolunteersHeader />
          <VolunteersGrid />
        </div>
      </section>
    </div>
  )
}