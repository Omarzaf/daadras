"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MapPin } from "lucide-react"
import { teamMembers } from "@/lib/teamMembers"
import Link from "next/link"

export const OurTeamSection = () => {
  // Show only the first 3 team members
  const displayedMembers = teamMembers.slice(0, 3)

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-muted/30">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-left">
              Our Team
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed text-left">
            Meet the passionate individuals driving positive change in communities through innovative programs and dedicated leadership.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full">
              <div className="relative">
                <div className="w-full h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.image || "/placeholder-user.jpg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: "top center" }}
                  />
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex flex-wrap gap-1 mb-2">
                  {member.department.map((dept, index) => (
                    <Badge key={index} className="bg-primary/10 text-primary w-fit text-xs">
                      {dept}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1 font-[family-name:var(--font-space-grotesk)]">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-3 w-3" />
                  <span>{member.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{member.bio.join(' ')}</p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={`/team/${member.id}`}>
                      <i className="fa-solid fa-user h-4 w-4 mr-2"></i>
                      View Profile
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in h-4 w-4 mr-2"></i>
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Team Button */}
        <div className="text-right mt-10">
          <Link href="/our-team">
            <button className="group inline-flex items-center text-sm font-medium text-foreground transition-colors relative">
              <span className="relative">View All
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
