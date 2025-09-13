import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Brain, BookOpen, Shield, Star, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function CurriculumSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-space-grotesk">Curriculum and Learning Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Our SEL curriculum is rooted in the fundamentals of emotional psychology, helping children build a strong foundation for lifelong well-being.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Self-Identity and Self-Awareness</h3>
                <p className="text-muted-foreground">
                  Exploring "Who am I?" through reflection on personal beliefs, self-image, and how others perceive them. Activities like drawing self-portraits and writing affirmations nurture self-expression.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Understanding Emotions and Mental Health</h3>
                <p className="text-muted-foreground">
                  Children learn what emotions are, why they matter, and how to check in with their feelings through activities like the "emotional volcano" and sticky-note reflections.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Self-Acceptance and Self-Esteem</h3>
                <p className="text-muted-foreground">
                  Guided exercises in self-love, body image, and uniqueness—supported by mirror activities—build confidence and resilience.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Expressing Emotions</h3>
                <p className="text-muted-foreground">
                  Children practice journaling, role-play with puppets, and writing letters to themselves, learning healthy outlets for emotional release.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Coping Strategies</h3>
                <p className="text-muted-foreground">
                  With mindfulness, breathing, humor, and distraction techniques, children are taught practical ways to manage difficult emotions and life's unpredictability.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Positive Psychology and Gratitude</h3>
                <p className="text-muted-foreground">
                  Lessons emphasize optimism and appreciation, with activities like gratitude journaling and creating cards for loved ones to foster positivity.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
