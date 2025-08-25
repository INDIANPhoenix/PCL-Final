"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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
    const emailContent = `
      New Quote Request from ${formData.name}
      
      Contact Information:
      - Name: ${formData.name}
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Address: ${formData.address}
      
      Project Details:
      - Services: ${formData.services.join(", ")}
      - Property Type: ${formData.propertyType}
      - Project Size: ${formData.projectSize}
      - Timeline: ${formData.timeline}
      - Budget: ${formData.budget}
      
      Additional Details:
      ${formData.details}
    `

    await resend.emails.send({
      from: "quotes@greenwestlandscaping.com",
      to: "info@greenwestlandscaping.com",
      subject: `New Quote Request from ${formData.name}`,
      text: emailContent,
    })

    return { success: true, message: "Quote request submitted successfully!" }
  } catch (error) {
    console.error("Error submitting quote:", error)
    return { success: false, message: "Failed to submit quote request. Please try again." }
  }
}

export const submitQuoteForm = submitQuote
