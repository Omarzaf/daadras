"use client"

import React from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: any
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

interface PartnerLogoProps {
  name: string
  logo: string
  url?: string
  className?: string
}

export function PartnerLogo({ name, logo, url, className }: PartnerLogoProps) {
  // Function to intelligently break long names
  const formatName = (name: string) => {
    const words = name.split(' ')
    if (words.length <= 2 || name.length <= 20) {
      return name
    }
    
    // For names with 3+ words, put last 1-2 words on new line
    if (words.length === 3) {
      return `${words[0]} ${words[1]}\n${words[2]}`
    } else if (words.length >= 4) {
      const firstPart = words.slice(0, -2).join(' ')
      const secondPart = words.slice(-2).join(' ')
      return `${firstPart}\n${secondPart}`
    }
    
    return name
  }

  const formattedName = formatName(name)
  
  const content = (
    <div className={cn('flex flex-col items-center justify-center p-4', className)}>
      <div className="w-24 h-24 mb-3 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100">
        <img
          src={logo}
          alt={`${name} logo`}
          className="max-w-full max-h-full object-contain p-2"
        />
      </div>
      <p className="text-sm font-medium text-muted-foreground text-center whitespace-pre-line leading-tight min-h-[2.5rem] flex items-center">
        {formattedName}
      </p>
    </div>
  )

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
      >
        {content}
      </a>
    )
  }

  return content
}
