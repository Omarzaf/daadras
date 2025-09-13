"use client"

export const HeroVideo = () => {
  return (
    <section className="bg-background">
      {/* Video Container - Sleek Cinematic Design */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1910/600" }}>
        {/* Video Element */}
        <video
          key="docu-video"
          className="w-full h-full object-cover transition-all duration-700 ease-out"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
        >
          <source src="/videos/docu.webm" type="video/webm" />
          {/* Fallback for browsers that don't support webm */}
          <p className="text-white text-center p-8">Your browser does not support the video format.</p>
        </video>
      </div>
    </section>
  )
}