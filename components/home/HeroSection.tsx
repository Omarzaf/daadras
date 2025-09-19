"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { TypewriterText } from "./TypewriterText";
import { useState } from "react";
import Link from "next/link";

export const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  const handleTypewriterComplete = () => {
    setShowContent(true);
  };

  return (
    <section className="bg-background">
      <div
        className="relative w-full overflow-hidden min-h-[60vh] md:min-h-0"
        style={{ aspectRatio: "1910/600" }}
      >
        <div className="absolute inset-0 bg-primary" />
        <video
          key="docu-video"
          className="w-full h-full object-cover transition-all duration-700 ease-out relative z-10"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
          poster="/drive/hero-poster.jpg"
          onLoadedData={(e) => {
            console.log("Video loaded successfully");
            e.currentTarget.play().catch(console.error);
          }}
          onEnded={(e) => {
            console.log("Video ended, restarting...");
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(console.error);
          }}
          onError={(e) => {
            console.log("Video failed to load:", e);
            e.currentTarget.style.display = "none";
          }}
          onCanPlay={(e) => {
            e.currentTarget.play().catch(console.error);
          }}
        >
          <source src="/videos/docu.webm" type="video/webm" />
          <p className="text-white text-center p-8">
            Your browser does not support the video format.
          </p>
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none z-20" />

        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none z-20" />

        <div className="absolute inset-0 bg-black/60 pointer-events-none z-20" />

        <div className="absolute inset-0 flex items-center z-30">
          <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
            <div className="max-w-2xl space-y-8">
              <div>
                <motion.h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-balance font-space-grotesk h-16 sm:h-20 md:h-32 flex items-start text-white [text-shadow:3px_3px_6px_rgba(0,0,0,1),_1px_1px_3px_rgba(0,0,0,0.8)]">
                  <TypewriterText
                    text="Empowering, Communities, One Project At A Time"
                    onComplete={handleTypewriterComplete}
                  />
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-xl md:text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:3px_3px_6px_rgba(0,0,0,1),_1px_1px_3px_rgba(0,0,0,0.8)] text-pretty mt-18"
              >
                Through education, technology, and social-emotional learning,
                we're building stronger communities and brighter futures.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=uu0VXYj_y_A"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={showContent ? 0 : -1}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white bg-black/70 hover:bg-white hover:text-black backdrop-blur-sm"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      <span className="hidden xs:inline">Watch Our Story</span>
                      <span className="xs:hidden">Watch Story</span>
                    </Button>
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/about/our-story" tabIndex={showContent ? 0 : -1}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
