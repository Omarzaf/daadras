"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Handshake } from "lucide-react";
import PhotoGalleryCarousel from "@/components/PhotoGalleryCarousel";

interface ProjectSalamHeroProps {
  showCTA?: boolean;
}

export function ProjectSalamHero({ 
  showCTA = true 
}: ProjectSalamHeroProps) {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('program-overview');
    if (programsSection) {
      const headerHeight = 100; // Account for sticky header
      const elementPosition = programsSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-background">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <div className="text-left mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What is Salam?
          </motion.h1>
          
          <motion.div 
            className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border-l-4 border-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xl font-semibold text-primary mb-3">"Salam" means "Peace" in Arabic</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Education brings peace to communities by empowering children with knowledge, skills, and confidence to build a brighter future.
            </p>
          </motion.div>

          {/* Program Definition */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
              Salam is a comprehensive <strong>10-hour-per-week</strong> program delivered across <strong>3–4 months</strong> in partnership with orphanages and underprivileged schools. We provide access to essential 21st-century skills through technology literacy, strategic thinking, and emotional intelligence, creating lasting positive change in communities.
            </p>
          </motion.div>

          {/* Call to Action */}
          {showCTA && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button size="lg" className="group" onClick={scrollToPrograms}>
                Learn About Our Programs
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/ways-to-give">
                  Support Salam Initiative
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href="/get-involved/partnership">
                  Partner with Us
                  <Handshake className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </motion.div>
          )}
        </div>

        {/* Photo Gallery Carousel */}
        <PhotoGalleryCarousel />
      </div>
    </section>
  );
}
