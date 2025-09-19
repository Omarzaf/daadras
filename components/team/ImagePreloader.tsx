"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  images: string[]
  priority?: number
}

export function ImagePreloader({ images, priority = 3 }: ImagePreloaderProps) {
  useEffect(() => {
    // Preload critical images
    const preloadImages = images.slice(0, priority)
    
    preloadImages.forEach((src) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Cleanup function
    return () => {
      preloadImages.forEach((src) => {
        const existingLink = document.querySelector(`link[href="${src}"]`)
        if (existingLink) {
          document.head.removeChild(existingLink)
        }
      })
    }
  }, [images, priority])

  return null
}
