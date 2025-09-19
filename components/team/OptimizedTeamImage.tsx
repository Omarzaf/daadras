"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { imageCache } from "@/lib/imageCache"

interface OptimizedTeamImageProps {
  src: string
  alt: string
  memberId: string
  index: number
  onLoad: (memberId: string) => void
}

export function OptimizedTeamImage({ 
  src, 
  alt, 
  memberId, 
  index, 
  onLoad 
}: OptimizedTeamImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isPreloaded, setIsPreloaded] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if image is already cached
    const cachedImage = imageCache.getCachedImage(src)
    if (cachedImage) {
      setIsInView(true)
      setIsPreloaded(true)
      return
    }

    // For priority images (first 6), load immediately
    if (index < 6) {
      setIsInView(true)
      setIsPreloaded(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px', // Start loading 100px before the image comes into view
        threshold: 0.1
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [src, index])

  const handleImageLoad = () => {
    setIsLoaded(true)
    onLoad(memberId)
  }

  const handleImageError = () => {
    setHasError(true)
    setIsLoaded(true)
    onLoad(memberId)
  }

  // Generate a better blur placeholder based on the image
  const generateBlurDataURL = (width: number = 8, height: number = 8) => {
    // Check if we're on the client side
    if (typeof window === 'undefined' || !document) {
      // Return a simple base64 blur placeholder for SSR
      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    }
    
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      // Create a subtle gradient blur
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#f3f4f6')
      gradient.addColorStop(1, '#e5e7eb')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }
    return canvas.toDataURL()
  }

  const blurDataURL = generateBlurDataURL()

  return (
    <div ref={imgRef} className="relative w-full h-56 md:h-80 bg-gray-100 overflow-hidden">
      {/* Enhanced loading skeleton - only show for non-preloaded images */}
      {!isLoaded && !isPreloaded && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-gray-400 rounded-full animate-pulse"></div>
            <div className="w-20 h-2 bg-gray-400 rounded animate-pulse"></div>
          </div>
        </motion.div>
      )}

      {/* Image */}
      {isInView && (
        <Image
          src={hasError ? "/placeholder-user.jpg" : src}
          alt={alt}
          fill
          className={`object-cover object-top transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ objectPosition: "top center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={index < 6 ? "eager" : "lazy"}
          priority={index < 3}
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={handleImageLoad}
          onError={handleImageError}
          quality={75} // Reduce quality for faster loading
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white font-medium text-lg">View Profile</span>
      </div>
    </div>
  )
}
