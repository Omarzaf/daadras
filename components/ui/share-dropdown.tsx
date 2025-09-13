"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check } from "lucide-react"

interface ShareDropdownProps {
  title: string
  excerpt?: string
  url?: string
  className?: string
}

export function ShareDropdown({ title, excerpt, url, className = "" }: ShareDropdownProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "")
  const shareText = excerpt ? `${title} - ${excerpt}` : title

  const shareOptions = [
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      color: "hover:bg-blue-50 hover:text-blue-600",
      action: () => {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
        window.open(linkedinUrl, "_blank", "width=600,height=400")
        setIsOpen(false)
      }
    },
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook",
      color: "hover:bg-blue-50 hover:text-blue-600",
      action: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        window.open(facebookUrl, "_blank", "width=600,height=400")
        setIsOpen(false)
      }
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      color: "hover:bg-pink-50 hover:text-pink-600",
      action: () => {
        const instagramText = `${title}\n\n${excerpt || ""}\n\nRead more: ${currentUrl}`
        navigator.clipboard.writeText(instagramText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        setIsOpen(false)
      }
    },
    {
      name: "Copy Link",
      icon: copied ? "fa-solid fa-check" : "fa-solid fa-copy",
      color: "hover:bg-gray-50 hover:text-gray-600",
      action: () => {
        navigator.clipboard.writeText(currentUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        setIsOpen(false)
      }
    }
  ]

  return (
    <div className={`relative ${className}`}>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share Article
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-2">
            {shareOptions.map((option) => (
              <button
                key={option.name}
                onClick={option.action}
                className={`w-full px-4 py-2 text-left text-sm flex items-center gap-3 transition-colors cursor-pointer ${option.color}`}
              >
                <i className={`${option.icon} w-4 h-4`} />
                <span>{option.name}</span>
                {option.name === "Copy Link" && copied && (
                  <Check className="ml-auto h-3 w-3 text-green-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
