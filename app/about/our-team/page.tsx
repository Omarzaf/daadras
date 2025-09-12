"use client"

import { useState } from "react"
import { TeamHeader } from "@/components/our-team/TeamHeader"
import { DepartmentFilter } from "@/components/our-team/DepartmentFilter"
import { TeamGrid } from "@/components/our-team/TeamGrid"

export default function OurTeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const departments = ["All", "Leadership", "Education", "Operations", "Community Relations", "Research", "Technology"]

  return (
    <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 py-16">
        <TeamHeader />

        <DepartmentFilter
          departments={departments}
          selected={selectedDepartment}
          onSelect={setSelectedDepartment}
        />

        <TeamGrid selectedDepartment={selectedDepartment} />
    </div>
  )
}
