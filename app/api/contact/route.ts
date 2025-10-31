import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, subject, email, message } = body

    // Validate required fields
    if (!firstName || !lastName || !subject || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 })
    }

    // 250-word limit validation
    const messageWordCount = String(message)
      .trim()
      .split(/\s+/)
      .filter(Boolean).length
    if (messageWordCount > 250) {
      return NextResponse.json({ success: false, error: "Message must be 250 words or fewer" }, { status: 400 })
    }

    // Use server-side environment variable (without NEXT_PUBLIC_ prefix)
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY environment variable is not set")
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 })
    }

    // Submit to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: `${firstName} ${lastName}`,
        email: email,
        subject: subject,
        message: message,
        from_name: `${firstName} ${lastName}`,
        reply_to: email,
      }),
    })
    

    // Try to parse JSON safely
    let result: any = null
    try {
      result = await response.json()
    } catch (_) {
      // no-op, keep result as null
    }

    // If upstream HTTP failed, surface that (include any message we have)
    if (!response.ok) {
      const errorMessage = (result && (result.message || result.error)) || "Upstream service error"
      console.error("Web3Forms HTTP error:", response.status, errorMessage)
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: Math.max(400, response.status) }
      )
    }

    // Upstream HTTP ok; check payload
    if (result && result.success) {
      return NextResponse.json({ success: true, message: result.message ?? "Sent" })
    }

    console.error("Web3Forms API unexpected response:", result)
    return NextResponse.json(
      { success: false, error: (result && (result.message || result.error)) || "Failed to send message" },
      { status: 502 }
    )
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

 