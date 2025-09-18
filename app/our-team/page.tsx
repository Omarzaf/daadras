"use client"

import { useState } from "react"
import { TeamHeader } from "@/components/team/TeamHeader"
import { DepartmentFilter } from "@/components/team/DepartmentFilter"
import { TeamGrid } from "@/components/team/TeamGrid"
import { getAllDepartments } from "@/lib/constants"
import { teamMembers } from "@/lib/teamMembers"

export default function OurTeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const departments = ["All", ...getAllDepartments(teamMembers)]

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
