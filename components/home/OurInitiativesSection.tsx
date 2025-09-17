"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Trophy,
  Brain,
  Users,
  Globe,
  Heart,
  Award,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";

// Types
interface MetricData {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  path: string;
}

interface InitiativeData {
  id: string;
  title: string;
  description: string;
  badge?: string;
  href: string;
  buttonText: string;
  image?: string;
  metrics?: Array<{ value: string; label: string; sublabel?: string }>;
  hasChart?: boolean;
}

// Reusable MetricCard Component
const MetricCard = ({
  metric,
  onHover,
  onLeave,
  isHovered,
}: {
  metric: MetricData;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}) => {
  const isFamiliesMetric =
    metric.value === "100+" &&
    metric.label.includes(
      "Families supported with self-sustainability programs"
    );
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  const handleMouseEnter = () => {
    if (isFamiliesMetric) {
      setHasBeenHovered(true);
    }
    onHover();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      animate={
        isFamiliesMetric && !hasBeenHovered
          ? {
              y: [0, -7, 0],
            }
          : undefined
      }
      transition={
        isFamiliesMetric && !hasBeenHovered
          ? {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-gradient-to-br from-[#0F443F]/10 to-[#0F443F]/5 rounded-lg p-4 border border-[#0F443F]/20 group cursor-pointer"
    >
      <div className="relative z-10">
        <div className="text-xl font-bold text-[#0F443F] mb-1">
          {metric.value}
        </div>
        <div className="text-xs text-muted-foreground font-medium">
          {metric.label}
        </div>
      </div>
    </motion.div>
  );
};

// Optimized AnimatedChart Component
const AnimatedChart = ({
  hoveredMetric,
  metrics,
}: {
  hoveredMetric: string | null;
  metrics: MetricData[];
}) => {
  const [hoveredMetrics, setHoveredMetrics] = useState<Set<string>>(new Set());

  const barHeights = useMemo(
    () => ({
      people: 250, // 100+ - tallest
      projects: 210, // 20+
      communities: 170, // 5+
      success: 150, // 3+ - shortest
    }),
    []
  );

  useEffect(() => {
    if (hoveredMetric) {
      setHoveredMetrics((prev) => new Set([...prev, hoveredMetric]));
    }
  }, [hoveredMetric]);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <div className="w-full h-full flex items-end justify-evenly px-4">
        {metrics.map((metric, index) => {
          const shouldShow = hoveredMetrics.has(metric.id);
          const height = barHeights[metric.id as keyof typeof barHeights] || 50;

          return (
            <motion.div
              key={metric.id}
              className="flex flex-col items-center justify-end"
              style={{ width: "60px", height: "100%" }}
            >
              {shouldShow && (
                <motion.div
                  className="mb-2 text-sm font-semibold text-primary text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  {metric.value}
                </motion.div>
              )}
              <motion.div
                className="bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-lg shadow-lg border border-primary/20"
                style={{ width: "45px" }}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: shouldShow ? `${height}px` : 0,
                  opacity: shouldShow ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// InitiativeCard Component
const InitiativeCard = ({
  initiative,
  children,
}: {
  initiative: InitiativeData;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initiative.id === "economic" ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: initiative.id === "economic" ? 0.2 : 0.4,
      }}
      className="group"
    >
      <div className="bg-card rounded-2xl overflow-hidden">{children}</div>
    </motion.div>
  );
};

export const OurInitiativesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const [hoveredEmergencyMetric, setHoveredEmergencyMetric] = useState<
    string | null
  >(null);

  // Memoized data with logarithmic scaling for proportional chart representation
  const metrics = useMemo<MetricData[]>(
    () => [
      {
        id: "people",
        icon: Users,
        value: "100+",
        label: "Families supported with self-sustainability programs",
        path: "M 0 300 Q 40 260 80 200 Q 120 140 160 100 Q 200 70 240 50 Q 280 35 320 25 Q 360 20 400 15",
      },
      {
        id: "projects",
        icon: Heart,
        value: "20+",
        label: "Sewing machines & small business tools distributed",
        path: "M 0 300 Q 50 275 100 250 Q 150 225 200 200 Q 250 180 300 165 Q 350 155 400 150",
      },
      {
        id: "communities",
        icon: Globe,
        value: "5+",
        label: "Students sponsored for continued education",
        path: "M 0 300 Q 50 285 100 270 Q 150 255 200 245 Q 250 235 300 230 Q 350 225 400 220",
      },
      {
        id: "success",
        icon: Award,
        value: "3+",
        label: "Community initiatives strengthened",
        path: "M 0 300 Q 50 290 100 280 Q 150 270 200 265 Q 250 260 300 255 Q 350 250 400 245",
      },
    ],
    []
  );

  const emergencyImages = useMemo(
    () => ({
      "Ration Packages": "/drive/ration_package.jpeg",
      "Families fed through food & cash assistance":
        "/drive/help_charity_kids.webp",
      "Iftar drives and meal distributions organized": "/drive/iftar_drive.jpg",
      "Emergency responses delivered (COVID-19, Green Town, Floods 2022, Yasmeen's Family)":
        "/drive/flood_relief.jpeg",
    }),
    []
  );

  const initiatives = useMemo<InitiativeData[]>(
    () => [
      {
        id: "economic",
        title: "Economic Upliftment",
        description:
          "Fostering long-term economic sustainability and financial independence for lasting impact.",
        href: "/initiatives/economic-upliftment",
        buttonText: "Learn More",
        hasChart: true,
      },
      {
        id: "emergency",
        title: "Emergency Relief",
        description:
          "Providing essential food supplies, emergency aid, and rapid response support to families during challenging times and crises.",
        badge: "Emergency Response",
        href: "/initiatives/emergency-relief",
        buttonText: "Learn more",
        image: hoveredEmergencyMetric
          ? emergencyImages[
              hoveredEmergencyMetric as keyof typeof emergencyImages
            ]
          : "/drive/kids_poverty.jpg",
        metrics: [
          { value: "500+", label: "Ration Packages", sublabel: "Distributed" },
          {
            value: "1,000+",
            label: "Families fed through food & cash assistance",
            sublabel: "",
          },
          {
            value: "30+",
            label: "Iftar drives and meal distributions organized",
            sublabel: "",
          },
          {
            value: "10+",
            label:
              "Emergency responses delivered (COVID-19, Green Town, Floods 2022, Yasmeen's Family)",
            sublabel: "",
          },
        ],
      },
    ],
    [hoveredEmergencyMetric, emergencyImages]
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 111, {
        duration: 2,
        delay: 0.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count]);

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white" ref={ref}>
      <div className="max-w-[1380px] w-full mx-auto px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        {/* Project Salam - Flagship Program */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col h-full">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  Flagship Program
                </Badge>
                <h4 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                  Project Salam
                </h4>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our comprehensive educational initiative combining Information
                  Technology, Chess, and Social-Emotional Learning (SEL) to
                  develop well-rounded individuals equipped for the modern
                  world.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Information Technology
                      </h4>
                      <p className="text-muted-foreground">
                        Digital literacy, coding fundamentals, and technology
                        skills for the digital age.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Chess Training
                      </h4>
                      <p className="text-muted-foreground">
                        Strategic thinking, problem-solving, and cognitive
                        development through chess.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Social-Emotional Learning
                      </h4>
                      <p className="text-muted-foreground">
                        Emotional intelligence, empathy, and interpersonal
                        skills for personal growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-start gap-3 mt-auto">
                <Button
                  className="bg-accent hover:bg-accent/90 px-6 py-2"
                  asChild
                >
                  <Link href="/initiatives/project-salam">
                    Learn More About Project Salam
                  </Link>
                </Button>
                <Button variant="outline" className="px-6 py-2" asChild>
                  <Link href="/get-involved/volunteer">
                    <Users className="mr-2 h-4 w-4" />
                    Join as Volunteer
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <img
                  src="/drive/project_salam1.webp"
                  alt="Project Salam activities"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="text-3xl font-bold text-primary"
                  >
                    <motion.span>{rounded}</motion.span>+
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    Students Impacted
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Why is this div adding space? */}
        {/* Other Impact Areas */}
        <div>
          <div className="space-y-12">
            {/* Economic Upliftment */}
            <InitiativeCard initiative={initiatives[0]}>
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Chart Container */}
                <div className="lg:col-span-2 relative h-64 lg:h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="h-full bg-gradient-to-br from-green-500/5 to-green-600/10 rounded-lg relative overflow-hidden">
                      <div className="w-full h-full relative">
                        {/* Grid Background */}
                        <div className="absolute inset-0 opacity-15">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `linear-gradient(to right, #0F443F 1px, transparent 1px), linear-gradient(to bottom, #0F443F 1px, transparent 1px)`,
                              backgroundSize: "40px 40px",
                            }}
                          ></div>
                        </div>

                        {/* Chart Area */}
                        <div className="absolute inset-0">
                          <div className="w-full h-full relative overflow-hidden">
                            {/* Static gradient fill */}
                            <div
                              className="absolute bottom-0 left-0 w-full"
                              style={{
                                height: "0%",
                                background:
                                  "linear-gradient(to top, #a7f3d0 0%, #6ee7b7 50%, #34d399 100%)",
                                opacity: 0.3,
                                filter: "blur(2px)",
                              }}
                            ></div>

                            {/* Invisible data points for positioning */}
                            <div
                              className="absolute bottom-0 left-0 w-3 h-3 rounded-full shadow-lg"
                              style={{
                                backgroundColor: "#0F443F",
                                boxShadow: "0 0 10px rgba(15, 68, 63, 0.5)",
                                transform: "translate(-50%, 50%)",
                                opacity: 0,
                              }}
                            ></div>
                            <div
                              className="absolute top-0 right-0 w-3 h-3 rounded-full shadow-lg"
                              style={{
                                backgroundColor: "#0F443F",
                                boxShadow: "0 0 10px rgba(15, 68, 63, 0.5)",
                                transform: "translate(50%, -50%)",
                                opacity: 0,
                              }}
                            ></div>

                            {/* Animated Chart */}
                            <AnimatePresence>
                              <AnimatedChart
                                hoveredMetric={hoveredMetric}
                                metrics={metrics}
                              />
                            </AnimatePresence>

                            {/* Hover display */}
                            {/* Removed hovered metric overlay from top-right as requested */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="lg:col-span-3 px-8 pb-8 pt-0 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-primary/90 mb-4 bg-accent/10 text-accent border-accent/20">
                      Additional Impact Areas
                    </span>
                    <h4 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                      {initiatives[0].title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {initiatives[0].description}
                    </p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="mb-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {metrics.map((metric) => (
                          <MetricCard
                            key={metric.id}
                            metric={metric}
                            onHover={() => setHoveredMetric(metric.id)}
                            onLeave={() => setHoveredMetric(null)}
                            isHovered={hoveredMetric === metric.id}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 px-6 py-2"
                    >
                      <Link
                        href={initiatives[0].href}
                        aria-label={`Learn more about ${initiatives[0].title}`}
                      >
                        {initiatives[0].buttonText}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </InitiativeCard>

            {/* Emergency Relief */}
            <InitiativeCard initiative={initiatives[1]}>
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Content Section */}
                <div className="lg:col-span-3 pl-6 pr-8 pb-8 pt-0 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    <div className="mb-6">
                      <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-primary/90 mb-4 bg-accent/10 text-accent border-accent/20">
                        Additional Impact Areas
                      </span>
                      <h4 className="text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                        {initiatives[1].title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {initiatives[1].description}
                      </p>
                    </div>

                    {/* Interactive Metrics Grid */}
                    {initiatives[1].metrics && (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {initiatives[1].metrics.map((metric, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.02, y: -2 }}
                            onMouseEnter={() =>
                              setHoveredEmergencyMetric(metric.label)
                            }
                            onMouseLeave={() => setHoveredEmergencyMetric(null)}
                            className="relative overflow-hidden bg-gradient-to-br from-[#0F443F]/10 to-[#0F443F]/5 rounded-lg p-4 border border-[#0F443F]/20 group cursor-pointer"
                          >
                            <div className="relative z-10">
                              <div className="text-xl font-bold text-[#0F443F] mb-1">
                                {metric.value}
                              </div>
                              <div className="text-xs text-muted-foreground font-medium">
                                {metric.sublabel
                                  ? `${metric.label} ${metric.sublabel}`
                                  : metric.label}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-start">
                    <Button
                      asChild
                      className="bg-accent hover:bg-accent/90 px-6 py-2"
                    >
                      <Link
                        href={initiatives[1].href}
                        aria-label={`Learn more about ${initiatives[1].title}`}
                      >
                        {initiatives[1].buttonText}
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="lg:col-span-2 relative h-80 lg:h-96 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden order-1 lg:order-2 rounded-l-lg">
                  <div className="relative w-full h-full">
                    <AnimatePresence>
                      {initiatives[1].image && (
                        <motion.img
                          key={initiatives[1].image}
                          src={initiatives[1].image}
                          alt={initiatives[1].title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 0.9,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </InitiativeCard>
          </div>
        </div>
      </div>
    </section>
  );
};
