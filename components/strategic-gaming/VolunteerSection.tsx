import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Trophy, BookOpen, CheckCircle, Gamepad2 } from "lucide-react"

export default function VolunteerSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Role of Volunteers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Volunteers act as mentors, guiding children through each stage of the chess curriculum while modeling patience, discipline, and respect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Volunteer Responsibilities</h3>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Mentorship and Guidance</h4>
                <p className="text-muted-foreground">
                  Guide children through each stage of the chess curriculum while modeling patience, discipline, and respect.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Adaptive Teaching</h4>
                <p className="text-muted-foreground">
                  Trained in adapting teaching styles to different age groups—making lessons playful and fun for younger children while encouraging deeper analytical thinking in older ones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Match Supervision</h4>
                <p className="text-muted-foreground">
                  Supervise matches, facilitate group discussions, and provide encouragement that links chess strategies to real-life decision-making.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="font-space-grotesk">Volunteer Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Gamepad2 className="h-5 w-5 text-primary" />
                <span>Learn to simplify complex concepts</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-accent" />
                <span>Foster fair play and sportsmanship</span>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-primary" />
                <span>Witness confidence growth in children</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-accent" />
                <span>Develop shared language of growth</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transformative Experience */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-space-grotesk">A Transformative Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">For Volunteers</h4>
              <p className="text-muted-foreground leading-relaxed">
                Volunteers learn to simplify complex concepts, foster fair play, and witness the confidence children gain as they progress from moving pawns to mastering entire games. 
                Chess becomes a shared language of growth, with both children and mentors sharpening their skills side by side.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">For Children</h4>
              <p className="text-muted-foreground leading-relaxed">
                Children develop strategic thinking, patience, and resilience. They learn that every move matters, that resilience comes from learning from mistakes, 
                and that strategy and patience can turn challenges into victories—both on the board and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
