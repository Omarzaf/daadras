import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !subject || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
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
        email: "daadrashr@gmail.com", // Your organization email
        subject: subject,
        message: message,
        from_name: `${firstName} ${lastName}`,
        reply_to: "daadrashr@gmail.com",
      }),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ success: true })
    } else {
      console.error("Web3Forms API error:", result)
      return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
