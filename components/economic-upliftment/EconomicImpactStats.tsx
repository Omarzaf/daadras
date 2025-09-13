import { Target, DollarSign, BookOpen, TrendingUp } from "lucide-react"

export default function EconomicImpactStats() {
  return (
    <div className="mb-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/8 rounded-3xl">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary/8 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/12 rounded-full blur-lg"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Measurable change in the lives of families and communities through our economic upliftment initiatives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-primary/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">500+</div>
            <div className="text-sm font-medium text-primary mb-1">Families Empowered</div>
            <p className="text-sm text-muted-foreground">Provided with sustainable income opportunities</p>
          </div>
          
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-accent/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">PKR 2.5M+</div>
            <div className="text-sm font-medium text-accent mb-1">Economic Impact</div>
            <p className="text-sm text-muted-foreground">Generated in additional household income</p>
          </div>
          
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="bg-primary/15 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground mb-2 font-[family-name:var(--font-space-grotesk)]">150+</div>
            <div className="text-sm font-medium text-primary mb-1">Students Supported</div>
            <p className="text-sm text-muted-foreground">Received educational funding and resources</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">95% of supported families achieved financial stability within 12 months</span>
          </div>
        </div>
      </div>
    </div>
  )
}
