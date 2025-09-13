"use client"

export const ContactHeroImage = () => {
  return (
    <section className="bg-background">
      {/* Image Container - Sleek Cinematic Design */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1910/600" }}>
        {/* Image Element */}
        <img
          src="/drive/team_photo.jpg"
          alt="Contact Daadras - Get in touch with our team"
          className="w-full h-full object-cover transition-all duration-700 ease-out"
          loading="eager"
        />
        
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  )
}