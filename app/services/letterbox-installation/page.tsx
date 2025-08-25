import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Letterbox Installation - Pro Concrete & Landscaping",
  description:
    "Professional letterbox installation services. Enhance your home's curb appeal with a stylish and durable letterbox, expertly installed by our team.",
}

export default function LetterboxInstallationPage() {
  const service = getServiceEntry("letterbox-installation")
  const galleryImages = getServiceImages("letterbox-installation")

  const features = [
    "Custom letterbox design and selection",
    "Professional concrete foundations",
    "Various styles and materials",
    "Durable weather-resistant installation",
    "Integrated landscape design",
    "Repair and replacement services",
  ]

  const testimonials = [
    {
      name: "Michael Chen",
      rating: 5,
      text: "Excellent letterbox installation! The concrete foundation is solid and the design perfectly matches our home's style.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      text: "Professional service and beautiful craftsmanship. Our new letterbox has really enhanced our home's curb appeal.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "David Wilson",
      rating: 5,
      text: "Outstanding attention to detail and quality materials. The letterbox looks fantastic and is built to last.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Types Of Letterboxes Do You Install?",
      answer:
        "We install a wide variety of letterboxes including brick, stone, timber, and metal designs. We can also create custom solutions to match your home's architecture.",
    },
    {
      question: "Do You Provide Concrete Foundations For Letterboxes?",
      answer:
        "Yes! We provide professional concrete foundations for all letterbox installations to ensure stability and longevity, even in harsh weather conditions.",
    },
    {
      question: "Can You Replace An Existing Letterbox?",
      answer:
        "We offer letterbox replacement services including removal of old installations and complete new setup with proper foundations.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service?.images[0]?.src || "/placeholder.svg"}
            alt={service?.images[0]?.alt || "Professional Letterbox Installation"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-400">
                <Mail className="w-4 h-4 mr-2" />
                Letterbox Installation Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Letterbox Installation Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Enhance your home's curb appeal with professional letterbox installation. Custom designs with solid
                concrete foundations for lasting durability and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0470 432 212
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your letterbox installation needs..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Get Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={service?.images[1]?.src || "/placeholder.svg"}
                alt={service?.images[1]?.alt || "Letterbox Installation Process"}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-blue-600 font-medium mb-2">Professional Letterbox Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Your Trusted Perth Letterbox Installation Company
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enhance your property's street appeal with professional letterbox installation services. We provide
                custom solutions with solid concrete foundations that combine style, durability, and functionality.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our experienced team works with various materials and styles to create letterbox installations that
                complement your home's architecture while providing reliable mail delivery for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Here's What Our Happy Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder-user.jpg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-medium mb-2">Complete Letterbox Installation</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Comprehensive Letterbox Installation Service
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete letterbox installation solutions from design consultation through to professional
                installation with concrete foundations. Our experienced team ensures quality results that enhance your
                property.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={service?.images[2]?.src || "/placeholder.svg"}
                alt={service?.images[2]?.alt || "Letterbox Installation Services"}
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Begin Your Letterbox Installation Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional letterbox installation? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Letterbox Installation FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Letterbox Installation Guide</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with letterbox installation tips, design options, and maintenance advice.
                Download your free copy today!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105" size="lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                Free Download
              </Button>
            </div>
            <div className="relative">
              <Image
                src={service?.images[3]?.src || "/placeholder.svg"}
                alt={service?.images[3]?.alt || "Installation Guide"}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
