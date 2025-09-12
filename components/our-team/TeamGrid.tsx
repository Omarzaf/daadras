import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import { teamMembers } from "@/lib/teamMembers"
import { TeamMember } from "@/types"

type Props = {
  selectedDepartment: string
}

export function TeamGrid({ selectedDepartment }: Props) {
  const filtered: TeamMember[] = selectedDepartment === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.department === selectedDepartment)

  // Find Abdullah Farrukh's index to insert join card after him
  const abdullahIndex = filtered.findIndex(member => member.id === "abdullah-farrukh")
  const shouldShowJoinCard = selectedDepartment === "All" || selectedDepartment === "Education"

  const renderItems = () => {
    const items = []
    
    filtered.forEach((member, index) => {
      // Add the team member card
      items.push(
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          className="group"
        >
          <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl overflow-hidden">
          <div className="relative">
            <div className="w-full h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: "top center" }}
              />
            </div>
          </div>

          <CardContent className="p-6">
            <Badge className="mb-2 bg-primary/10 text-primary w-fit">
              {member.department}
            </Badge>
            <h3 className="text-xl font-bold text-foreground mb-1 font-[family-name:var(--font-space-grotesk)]">
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-2">{member.role}</p>

            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
              <MapPin className="h-3 w-3" />
              <span>{member.location}</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{member.bio}</p>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in h-4 w-4 mr-2"></i>
                  LinkedIn
                </a>
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                <a href={`mailto:${member.email}`}>
                  <i className="fa-solid fa-envelope h-4 w-4 mr-2"></i>
                  Email
                </a>
              </Button>
            </div>
          </CardContent>
          </Card>
        </motion.div>
      )
      
      // Add join card after Abdullah Farrukh
      if (shouldShowJoinCard && member.id === "abdullah-farrukh") {
        items.push(
          <motion.div
            key="join-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl overflow-hidden">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary">Join Us</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <Badge className="mb-2 bg-primary/10 text-primary w-fit">
                  Open Position
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-1 font-[family-name:var(--font-space-grotesk)]">
                  Become a Team Member
                </h3>
                <p className="text-primary font-medium mb-2">Various Roles Available</p>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-3 w-3" />
                  <span>Remote & On-site</span>
                </div>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  We're always looking for passionate individuals who share our vision of transforming education and empowering communities. Join our mission to make a difference.
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <i className="fa-solid fa-briefcase h-4 w-4 mr-2"></i>
                    View Positions
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <i className="fa-solid fa-heart h-4 w-4 mr-2"></i>
                    Volunteer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      }
    })
    
    return items
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {renderItems()}
    </div>
  )
}
