"use client";

import {
  ProjectSalamHero,
  ProgramOverviewSection,
  ProjectSalamTestimonials,
  ProgramEvolutionTimeline,
  StrategySection,
  ProjectSalamNewsSection,
  ProjectSalamCTA,
} from "@/components/project-salam";

export default function ProjectSalamPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        <ProjectSalamHero />
        <ProgramOverviewSection />
        <StrategySection />
        <ProjectSalamTestimonials />
        <ProgramEvolutionTimeline />
        <ProjectSalamNewsSection />
        <ProjectSalamCTA />
      </div>
    </div>
  );
}
