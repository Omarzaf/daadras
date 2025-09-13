export default function MissionContextSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          A Moral and Social Imperative
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-6">
          In a country where nearly 30% of the population lives below the poverty line, ensuring access to basic
          nutrition became a moral and social imperative for Daadras Foundation.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">30%</div>
            <p className="text-sm text-muted-foreground">Population Below Poverty Line</p>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">184K+</div>
            <p className="text-sm text-muted-foreground">Flood Displaced (2022)</p>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">95K+</div>
            <p className="text-sm text-muted-foreground">Homes Destroyed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
