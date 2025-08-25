"use server"

import { sendContactEmail } from "@/lib/email"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!firstName || !lastName || !email || !phone || !message) {
    return {
      success: false,
      error: "Please fill in all required fields",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    }
  }

  try {
    const result = await sendContactEmail({
      firstName,
      lastName,
      email,
      phone,
      service: service || "General Inquiry",
      message,
    })

    if (result.success) {
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      }
    } else {
      return {
        success: false,
        error: "Failed to send message. Please try again or call us directly.",
      }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "Something went wrong. Please try again later.",
    }
  }
}
