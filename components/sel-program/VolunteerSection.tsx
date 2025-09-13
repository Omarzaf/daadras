import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, BookOpen, CheckCircle, Shield, Activity, Brain } from "lucide-react"
import Image from "next/image"

export default function VolunteerSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Role of Volunteers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Volunteers are integral to SEL, serving not just as facilitators but as mentors and role models who undergo structured training to work effectively with children.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">Volunteer Training</h3>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Trauma Sensitivity Training</h4>
                <p className="text-muted-foreground">
                  Every volunteer undergoes structured training in trauma sensitivity to work effectively with children from challenging backgrounds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Active Listening Skills</h4>
                <p className="text-muted-foreground">
                  Training in active listening techniques to create safe spaces where children feel heard and understood.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Activity Facilitation</h4>
                <p className="text-muted-foreground">
                  Learning to guide small groups through reflective exercises, games, and discussions while designing creative activities.
                </p>
              </div>
            </div>
          </div>


        </div>


      </div>
    </section>
  )
}
