import "server-only"
import { Resend } from "resend"

const apiKey = process.env.RESEND_API_KEY
if (!apiKey) {
  throw new Error("RESEND_API_KEY is missing. Set it in the environment variables to use Resend.")
}

const resend = new Resend(apiKey)

const RECIPIENT_EMAILS = ["saurav@agiconsolutions.com", "ads131991@gmail.com"]

export async function sendContactEmail(data: {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Pro Concrete & Landscaping <noreply@proconcretelandscaping.com>",
      to: RECIPIENT_EMAILS,
      subject: `New Contact Form Submission - ${data.service}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #16a34a, #15803d); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #16a34a; margin-bottom: 20px;">Contact Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            <p style="margin: 10px 0;"><strong>Service Required:</strong> ${data.service}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #16a34a; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #374151;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #dcfce7; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #166534;">
              <strong>Follow up required:</strong> Please respond to this inquiry within 24 hours for best customer experience.
            </p>
          </div>
        </div>
        
        <div style="background: #374151; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            Pro Concrete & Landscaping | Turning Dirt Into Dreams
          </p>
        </div>
      </div>
    `,
    })

    if (error) {
      console.error("Email send error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Email send error:", error)
    return { success: false, error: "Failed to send email" }
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
    const { data: emailData, error } = await resend.emails.send({
      from: "Pro Concrete & Landscaping <noreply@proconcretelandscaping.com>",
      to: RECIPIENT_EMAILS,
      subject: `New Quote Request - ${data.name}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #16a34a, #15803d); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Quote Request</h1>
        </div>
        
        <div style="padding: 30px; background: #f9fafb;">
          <h2 style="color: #16a34a; margin-bottom: 20px;">Customer Information</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            <p style="margin: 10px 0;"><strong>Address:</strong> ${data.address || "Not provided"}</p>
          </div>
          
          <h2 style="color: #16a34a; margin-bottom: 20px;">Project Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0;"><strong>Services Required:</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              ${data.services.map((service) => `<li style="margin: 5px 0;">${service}</li>`).join("")}
            </ul>
            
            <p style="margin: 10px 0;"><strong>Property Type:</strong> ${data.propertyType}</p>
            <p style="margin: 10px 0;"><strong>Project Size:</strong> ${data.projectSize}</p>
            <p style="margin: 10px 0;"><strong>Timeline:</strong> ${data.timeline}</p>
            <p style="margin: 10px 0;"><strong>Budget Range:</strong> ${data.budget}</p>
          </div>
          
          ${
            data.details
              ? `
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #16a34a; margin-top: 0;">Additional Details:</h3>
            <p style="line-height: 1.6; color: #374151;">${data.details}</p>
          </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding: 20px; background: #dcfce7; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #166534;">
              <strong>High Priority:</strong> Quote request requires prompt response within 24 hours.
            </p>
          </div>
        </div>
        
        <div style="background: #374151; padding: 20px; text-align: center;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            Pro Concrete & Landscaping | Turning Dirt Into Dreams
          </p>
        </div>
      </div>
    `,
    })

    if (error) {
      console.error("Email send error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Email send error:", error)
    return { success: false, error: "Failed to send email" }
  }
}
