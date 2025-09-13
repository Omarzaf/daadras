import Marquee from "@/components/ui/marquee"

export function CoreValues() {
  const values = ["Empathy", "Equity", "Education", "Empowerment", "Innovation"]
  
  return (
    <div className="w-full overflow-hidden">
      <Marquee className="py-4" pauseOnHover={false}>
        {values.map((value, index) => (
          <div key={`${value}-${index}`} className="flex items-center">
            <span className="text-2xl font-bold text-primary uppercase tracking-wider whitespace-nowrap">
              {value.toUpperCase()}
            </span>
            <span className="mx-8 md:mx-12 text-2xl text-primary/60">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}
