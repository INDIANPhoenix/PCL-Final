"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, Phone, Mail, Calendar, FileText } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF
    // For now, we'll simulate the download
    const link = document.createElement("a")
    link.href = "/placeholder.pdf" // This would be your actual PDF URL
    link.download = "Pro-Concrete-Landscaping-Services.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your quote request has been successfully submitted. We'll review your requirements and get back to you
            within 24 hours with a personalized quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What Happens Next */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What happens next?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Review & Analysis</h3>
                    <p className="text-gray-600 text-sm">
                      We'll carefully review your project requirements and assess the scope of work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Site Assessment</h3>
                    <p className="text-gray-600 text-sm">
                      We may schedule a site visit to provide the most accurate quote possible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Detailed Quote</h3>
                    <p className="text-gray-600 text-sm">
                      You'll receive a comprehensive quote with timeline and project details.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Need immediate assistance?</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Call us directly</p>
                    <p className="text-green-600 font-bold">0470 432 212</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <Mail className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email us</p>
                    <p className="text-green-600">proconcretelandscaping@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download PDF Section */}
        <Card className="shadow-lg bg-gradient-to-r from-green-600 to-green-700 text-white">
          <CardContent className="p-8 text-center">
            <FileText className="h-16 w-16 mx-auto mb-4 text-green-100" />
            <h2 className="text-3xl font-bold mb-4">Download Our Services Brochure</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Get detailed information about all our concrete and landscaping services, including pricing guides,
              project examples, and helpful tips for your outdoor transformation.
            </p>
            <Button
              onClick={handleDownloadPDF}
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Brochure
            </Button>
          </CardContent>
        </Card>

        {/* Additional Actions */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
