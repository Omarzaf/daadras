"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { getTestimonialsByInitiative } from "@/lib/testimonials";

export function ProjectSalamTestimonials() {
  const testimonials = getTestimonialsByInitiative("project-salam");

  // Don't render the component if there are no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
      className="mt-20 mb-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-space-grotesk">
          Voices of Change
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Hear directly from the children whose lives have been transformed through Project Salam
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`h-full border-l-4 border-l-primary hover:shadow-xl transition-all duration-300`}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="text-primary text-4xl mb-2">"</div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {testimonial.story}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Student at {testimonial.location}</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">{testimonial.impact}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
