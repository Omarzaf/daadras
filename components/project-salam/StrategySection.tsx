"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Brain, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function StrategySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-16 mb-12"
    >
      <div className="text-left mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
          Our Strategy
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed">
          Our approach combines comprehensive assessment, tailored curriculum design, and self-learning promotion to create sustainable educational impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-space-grotesk">Assessment & Tailoring</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We conduct comprehensive tests to understand each school's unique needs, available resources, and student capabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Initial assessment of student skill levels and learning styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Evaluation of available time slots and resource constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom curriculum design based on specific school requirements</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="h-full border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-space-grotesk">Self-Learning Promotion</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our curriculum is specifically designed to foster independent learning and critical thinking skills.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Interactive activities that encourage exploration and discovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Problem-solving exercises that build analytical thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Peer-to-peer learning opportunities and mentorship programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
