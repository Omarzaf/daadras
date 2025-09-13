import { BookOpen, TrendingUp, HandHeart } from "lucide-react"
import Image from "next/image"

export function CoreAreas() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Core Initiative Areas
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
          We focus on three key areas that address the most pressing needs in our communities, creating sustainable pathways for growth and development.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 not-prose">
        <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/drive/kids_school_uni.webp"
              alt="Students learning technology and education"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Providing comprehensive IT training, chess instruction, and emotional resilience programs to build critical thinking and problem-solving skills.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/drive/women_classroom.webp"
              alt="Economic upliftment and technology"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Economic Upliftment
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Creating pathways to financial independence through skill development, entrepreneurship support, and sustainable livelihood programs.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src="/drive/ration_package.jpeg"
              alt="Community volunteers providing emergency relief"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <HandHeart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Emergency Relief
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Responding to immediate community needs during crises with food distribution, medical aid, and essential support services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
