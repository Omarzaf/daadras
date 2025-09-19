// Image caching utility for better performance
class ImageCache {
  private cache = new Map<string, HTMLImageElement>()
  private preloadQueue: string[] = []
  private isProcessing = false

  // Preload images in the background
  async preloadImages(urls: string[]): Promise<void> {
    const promises = urls.map(url => this.preloadImage(url))
    await Promise.allSettled(promises)
  }

  // Preload a single image
  private async preloadImage(url: string): Promise<void> {
    if (this.cache.has(url)) {
      return Promise.resolve()
    }

    // Check if we're on the client side
    if (typeof window === 'undefined') {
      return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        this.cache.set(url, img)
        resolve()
      }
      img.onerror = () => {
        reject(new Error(`Failed to load image: ${url}`))
      }
      img.src = url
    })
  }

  // Get cached image or return null
  getCachedImage(url: string): HTMLImageElement | null {
    return this.cache.get(url) || null
  }

  // Clear cache
  clearCache(): void {
    this.cache.clear()
  }

  // Get cache size
  getCacheSize(): number {
    return this.cache.size
  }
}

// Singleton instance
export const imageCache = new ImageCache()

// Utility function to preload team member images
export async function preloadTeamImages(teamMembers: any[]): Promise<void> {
  const imageUrls = teamMembers
    .slice(0, 9) // Preload first 9 images (reduced from 12)
    .map(member => member.image || "/placeholder-user.jpg")
    .filter(url => url !== "/placeholder-user.jpg") // Skip placeholder

  if (imageUrls.length > 0) {
    try {
      // Load images in batches of 3 for better performance
      const batches = []
      for (let i = 0; i < imageUrls.length; i += 3) {
        batches.push(imageUrls.slice(i, i + 3))
      }
      
      for (const batch of batches) {
        await imageCache.preloadImages(batch)
        // Small delay between batches to prevent overwhelming the browser
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    } catch (error) {
      console.warn('Some images failed to preload:', error)
    }
  }
}
