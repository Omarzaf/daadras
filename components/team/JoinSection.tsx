import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Briefcase, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function JoinSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
                <Briefcase className="h-4 w-4 mr-2" />
                View Positions
              </Button>
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                <Heart className="h-4 w-4 mr-2" />
                Volunteer
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
