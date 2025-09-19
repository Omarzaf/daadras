"use client"

import Image from "next/image"

export const ContactHeroImage = () => {
  return (
    <section className="bg-background">
      {/* Image Container - Sleek Cinematic Design */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1910/600" }}>
        {/* Image Element */}
        <Image
          src="/drive/team_photo.jpg"
          alt="Contact Daadras - Get in touch with our team"
          fill
          className="object-cover transition-all duration-700 ease-out"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  )
}