"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shirt, Users, Heart } from "lucide-react"
import Image from "next/image"

export default function ClothingReliefSection() {
  return (
    <div className="mb-16">
      <motion.h2 
        className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Clothing Relief Efforts
      </motion.h2>
      <motion.p 
        className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Our clothing drives provide essential apparel and dignity to vulnerable families, orphans, and communities facing hardship across Pakistan.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
            <div className="relative h-48 w-full">
              <Image
                src="/drive/kids_poverty.jpg"
                alt="Children receiving clothing support"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Shirt className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Orphanage Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Organized clothing drives for orphanages, ensuring children without guardians received appropriate
                apparel and dignity.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
            <div className="relative h-48 w-full">
              <Image
                src="/drive/women_classroom.webp"
                alt="Family receiving clothing assistance"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Family Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Custom clothing provided for vulnerable families, including a widowed mother and her seven children in
                Sharakpur (August 2020).
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            scale: 1.05,
            y: -10,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className="group"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md group-hover:shadow-2xl h-full">
            <div className="relative h-48 w-full">
              <Image
                src="/drive/community_build.jpg"
                alt="Winter clothing distribution"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)]">Winter Preparedness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Collected and distributed clothing and blankets to underserved families in Lahore, helping them face
                winter with dignity (September 2020).
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
