"use client"

import { sendQuoteEmail } from "@/lib/email"

interface FormData {
  services: string[]
  propertyType: string
  projectSize: string
  timeline: string
  budget: string
  name: string
  email: string
  phone: string
  address: string
  details: string
}

export async function submitQuote(formData: FormData) {
  try {
    const result = await sendQuoteEmail({
      services: formData.services,
      propertyType: formData.propertyType,
      projectSize: formData.projectSize,
      timeline: formData.timeline,
      budget: formData.budget,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      details: formData.details,
    })

    if (result.success) {
      return { success: true, message: "Quote request submitted successfully!" }
    } else {
      return { success: false, message: result.error || "Failed to submit quote request. Please try again." }
    }
  } catch (error) {
    console.error("Error submitting quote:", error)
    return { success: false, message: "Failed to submit quote request. Please try again." }
  }
}

export const submitQuoteForm = submitQuote
