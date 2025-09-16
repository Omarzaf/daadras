"use client"

import { notFound } from "next/navigation"
import { teamMembers } from "@/lib/teamMembers"
import { TeamMemberHero } from "@/components/team-member/TeamMemberHero"
import { StoryAndRole } from "@/components/team-member/StoryAndRole"
import { BreadcrumbNavigation } from "@/components/team-member/BreadcrumbNavigation"

interface TeamMemberPageProps {
  params: {
    id: string
  }
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const teamMember = teamMembers.find(member => member.id === params.id)

  if (!teamMember) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <BreadcrumbNavigation teamMember={teamMember} />
        
        <TeamMemberHero teamMember={teamMember} />
        
        <section className="pt-0 pb-2 md:pb-6">
          <div className="max-w-6xl mx-auto">
            <StoryAndRole teamMember={teamMember} />
          </div>
        </section>
      </div>
    </div>
  )
}
