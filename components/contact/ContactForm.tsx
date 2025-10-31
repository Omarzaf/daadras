"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")

  const wordCount = useMemo(() => {
    const words = message
      .trim()
      .split(/\s+/)
      .filter(Boolean)
    return words.length
  }, [message])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Capture form element before any awaits to avoid null references
    const formEl = e.currentTarget
    const formData = new FormData(formEl)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const subject = formData.get("subject") as string
    const emailValue = formData.get("email") as string
    const messageValue = formData.get("message") as string

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          subject,
          email: emailValue,
          message: messageValue,
        }),
      })

      let result: any = null
      try {
        result = await response.json()
      } catch (_) {}

      if (response.ok && result && result.success) {
        setSubmitStatus("success")
        // Reset form
        formEl.reset()
        setMessage("")
        setEmail("")
      } else {
        setSubmitStatus("error")
        if (!response.ok) {
          console.error("Contact API error:", result?.error || response.statusText)
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
        Send us a Message
      </h2>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Message sent successfully!</p>
          <p className="text-green-600 text-sm">We'll get back to you soon.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">Failed to send message</p>
          <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name
            </label>
            <Input id="firstName" name="firstName" placeholder="Your first name" required />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
              Last Name
            </label>
            <Input id="lastName" name="lastName" placeholder="Your last name" required />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject
          </label>
          <Input id="subject" name="subject" placeholder="What is this regarding?" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us more about your inquiry..."
            value={message}
            onChange={(e) => {
              const text = e.target.value
              const words = text
                .trim()
                .split(/\s+/)
                .filter(Boolean)
              if (words.length <= 250) {
                setMessage(text)
              } else {
                // Trim to 250 words
                const limited = words.slice(0, 250).join(" ")
                setMessage(limited)
              }
            }}
            onInput={(e) => {
              const el = e.currentTarget
              el.style.height = "auto"
              el.style.height = `${el.scrollHeight}px`
            }}
            className="resize-y"
            required
          />
          <div className="mt-1 text-xs text-muted-foreground">{wordCount}/250 words</div>
        </div>
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
