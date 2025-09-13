"use client"

import { Users, Heart, Award, Target } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function VolunteerUpliftment() {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Header */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-0 text-left">
            Volunteer Upliftment
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl text-left">
          Our volunteers are the heart of our mission. We believe in nurturing their growth through meaningful experiences that develop both personal and professional skills while creating lasting impact in communities.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 not-prose">
        <motion.div 
          className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
        >
          <div className="relative h-48 w-full">
            <Image
              src="/drive/community_build.jpg"
              alt="Community volunteers building connections"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Heart className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Community Building
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Creating strong networks and fostering collaboration among volunteers to amplify collective impact and shared learning.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
        >
          <div className="relative h-48 w-full">
            <Image
              src="/drive/skills_develop.webp"
              alt="Skills development and training programs"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Award className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Skills Development
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Providing training opportunities and mentorship programs that enhance volunteers' capabilities and career prospects.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
        >
          <div className="relative h-48 w-full">
            <Image
              src="/drive/volunteer_wahab.webp"
              alt="Leadership opportunities and project management"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <motion.div 
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Target className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Leadership Opportunities
              </h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Empowering volunteers to take initiative, lead projects, and develop management skills through hands-on experience.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}