import { Heart, Users, Trophy } from "lucide-react"

export function CareersBenefits() {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-[family-name:var(--font-space-grotesk)]">
        Why Work With Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Meaningful Impact</h3>
          <p className="text-sm text-muted-foreground">Work on projects that directly transform lives and communities</p>
        </div>
        <div className="text-center">
          <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Collaborative Culture</h3>
          <p className="text-sm text-muted-foreground">Join a supportive team committed to professional growth</p>
        </div>
        <div className="text-center">
          <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Career Development</h3>
          <p className="text-sm text-muted-foreground">Opportunities for training, skill development, and advancement</p>
        </div>
      </div>
    </div>
  )
}
