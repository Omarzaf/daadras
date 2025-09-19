"use client"

import { useEffect } from "react"
import { teamMembers } from "@/lib/teamMembers"

export function ResourceHints() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Add DNS prefetch for faster image loading
    const dnsPrefetch = document.createElement('link')
    dnsPrefetch.rel = 'dns-prefetch'
    dnsPrefetch.href = window.location.origin
    document.head.appendChild(dnsPrefetch)

    // Add preconnect for faster resource loading
    const preconnect = document.createElement('link')
    preconnect.rel = 'preconnect'
    preconnect.href = window.location.origin
    document.head.appendChild(preconnect)

    // Preload critical team images with high priority
    const criticalImages = teamMembers.slice(0, 3).map(member => member.image || "/placeholder-user.jpg")
    
    criticalImages.forEach((src, index) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.fetchPriority = 'high'
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    return () => {
      // Cleanup on unmount
      try {
        document.head.removeChild(dnsPrefetch)
        document.head.removeChild(preconnect)
        criticalImages.forEach((src) => {
          const existingLink = document.querySelector(`link[href="${src}"]`)
          if (existingLink) {
            document.head.removeChild(existingLink)
          }
        })
      } catch (error) {
        // Ignore cleanup errors
      }
    }
  }, [])

  return null
}
