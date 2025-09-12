import { partners } from "@/lib/partners"

type Partner = {
  name: string
  src: string
  url: string
}

export function PartnersGrid() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center font-space-grotesk">
        Our Partners
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {partners.map((partner: Partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted/50 p-3 rounded-lg flex flex-col items-center hover:shadow-md transition-shadow"
          >
            <div className="w-24 h-24 flex items-center justify-center mb-2">
              <img
                src={partner.src}
                alt={partner.name}
                className="object-contain max-h-24 max-w-full"
                loading="lazy"
              />
            </div>
            <p className="text-sm font-medium text-muted-foreground">{partner.name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
