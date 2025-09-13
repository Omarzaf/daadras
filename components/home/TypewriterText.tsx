"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text?: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export const TypewriterText = ({
  text = "Empowering Communities,\nOne Project at a Time",
  speed = 80,
  className = "",
  onComplete,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [blinkCount, setBlinkCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        },
        speed + Math.random() * 40 + (text[currentIndex] === "," ? 200 : 0),
      ) // Faster typing with natural variation

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length) {
      setIsComplete(true)
      if (onComplete) {
        onComplete()
      }
    }
  }, [currentIndex, text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const renderText = () => {
    const parts = ["Empowering,", "Communities,", "One Project At A Time"]
    const currentText = displayedText
    let charCount = 0

    return parts.map((part, index) => {
      const partStart = charCount
      const partEnd = charCount + part.length
      charCount += part.length + (index < parts.length - 1 ? 1 : 0) // +1 for space

      const visiblePart = currentText.slice(partStart, Math.min(partEnd, currentText.length))

      return (
        <span
          key={index}
          className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:3px_3px_6px_rgba(0,0,0,1),_1px_1px_3px_rgba(0,0,0,0.8)]"
        >
          {visiblePart}
          {index < parts.length - 1 && visiblePart.length === part.length && <br />}
        </span>
      )
    })
  }

  return (
    <span className={`relative ${className}`}>
      {renderText()}
      {currentIndex <= text.length && (
        <>
          <span className={`inline-block w-0.5 h-8 md:h-12 bg-white ml-0.5 opacity-0`} />
          <span
            className={`text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:3px_3px_6px_rgba(0,0,0,1),_1px_1px_3px_rgba(0,0,0,0.8)] ${showCursor ? "opacity-70" : "opacity-0"}`}
          >
            |
          </span>
        </>
      )}
    </span>
  )
}
