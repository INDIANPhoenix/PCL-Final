import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
// You'll need to set these environment variables in your build environment
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
const EMAILJS_TEMPLATE_ID_CONTACT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT || 'your_contact_template_id'
const EMAILJS_TEMPLATE_ID_QUOTE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUOTE || 'your_quote_template_id'
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

export async function sendContactEmail(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}) {
  try {
    const templateParams = {
      to_name: 'Pro Concrete & Landscaping',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      reply_to: data.email,
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    return { success: true, data: response }
  } catch (error: any) {
    console.error("Email send error:", error)
    return { success: false, error: error.message || "Failed to send email" }
  }
}

export async function sendQuoteEmail(data: {
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
}) {
  try {
    const templateParams = {
      to_name: 'Pro Concrete & Landscaping',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      address: data.address || "Not provided",
      services: data.services.join(", "),
      property_type: data.propertyType,
      project_size: data.projectSize,
      timeline: data.timeline,
      budget: data.budget,
      details: data.details || "No additional details provided",
      reply_to: data.email,
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_QUOTE,
      templateParams,
      EMAILJS_PUBLIC_KEY
    )

    return { success: true, data: response }
  } catch (error: any) {
    console.error("Email send error:", error)
    return { success: false, error: error.message || "Failed to send email" }
  }
}
