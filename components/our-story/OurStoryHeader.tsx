import { BookOpen, Target, Heart, ArrowRight } from "lucide-react"

export function OurStoryHeader() {
  return (
    <>
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14 pt-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="font-bold text-primary mb-0 text-left" style={{ fontSize: 'var(--text-5xl)' }}>
            Our Story
          </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed" style={{ fontSize: 'var(--text-xl)' }}>
            Founded in May 2020 as a grassroots response to community needs, Daadras has evolved into a future-focused,
            education-driven institution committed to empowering underserved communities through transformative learning and
            technology.
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0">
                 What We Do
               </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To educate, empower, and inspire underserved children in Pakistan by providing IT training, emotional
              resilience, and logic-building skills—enabling them to become self-driven learners, break barriers, and
              create their opportunities in a rapidly changing world.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0">
                 Where We're Headed
               </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              To create a world where every individual—regardless of circumstance—has access to transformative
              education, emotional resilience, and the tools to shape their future with dignity, purpose, and
              independence.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0">
              From Crisis Response to Educational Transformation
            </h2>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            The Daadras Foundation began as a grassroots response to immediate community needs during the COVID-19
            pandemic and Balochistan floods. Our early efforts focused on food drives and helping vulnerable families
            secure basic income and sustenance during times of crisis. These compassion-driven initiatives were rooted
            in empathy and a commitment to uplift those facing hardship.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            As our work deepened, we recognized that lasting change comes not just from meeting urgent needs, but from
            empowering individuals through education. This realization led Daadras to evolve into an education-centered
            organization, now focused on equipping underserved communities, especially children, with the tools to build
            sustainable, independent futures.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Today, Daadras has grown into a technology-driven organization, leveraging AI and software development to
            build solutions that streamline workflows and expand our impact. Through our internship programs, we mentor
            emerging technologists by involving them in real-world projects that optimize our operations and enhance
            curriculum delivery.
          </p>
        </div>
      </div>
    </>
  )
}
