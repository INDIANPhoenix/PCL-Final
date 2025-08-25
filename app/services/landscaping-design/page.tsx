import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TreePine, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Landscaping Design - Pro Concrete & Landscaping",
  description:
    "Expert landscaping design services to transform your outdoor space into a beautiful and functional oasis. From conceptualization to execution, we create stunning landscapes.",
}

export default function LandscapingDesignPage() {
  const service = getServiceEntry("landscaping-design")
  const galleryImages = getServiceImages("landscaping-design")

  const features = [
    "Custom landscape design consultation",
    "3D visualization and planning",
    "Plant selection and placement",
    "Hardscape integration design",
    "Irrigation system planning",
    "Ongoing design support",
  ]

  const testimonials = [
    {
      name: "Amanda Clarke",
      rating: 5,
      text: "The landscape design exceeded our expectations! The team created a beautiful plan that perfectly matched our vision.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "James Mitchell",
      rating: 5,
      text: "Professional design service with incredible attention to detail. Our new landscape is absolutely stunning.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sarah Thompson",
      rating: 5,
      text: "Outstanding creative design work. The 3D visualizations helped us see exactly what our space would look like.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Does Your Landscape Design Service Include?",
      answer:
        "Our comprehensive design service includes site analysis, concept development, detailed plans, plant selection, hardscape design, and 3D visualizations to help you envision your new landscape.",
    },
    {
      question: "How Long Does The Design Process Take?",
      answer:
        "Most residential landscape designs take 2-4 weeks to complete, depending on the complexity and scope of the project. We'll provide a timeline during consultation.",
    },
    {
      question: "Do You Provide Installation Services Too?",
      answer:
        "Yes! We offer complete design-build services, handling everything from initial concept through final installation and ongoing maintenance support.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service?.images[0]?.src || "/placeholder.svg"}
            alt={service?.images[0]?.alt || "Professional Landscape Design"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-green-600/20 text-green-300 border-green-400">
                <TreePine className="w-4 h-4 mr-2" />
                Landscape Design Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Landscape Design Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Transform your outdoor vision into reality with professional landscape design services. Custom designs
                that enhance your property's beauty and functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105"
                >
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Design Consultation</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your landscape design vision..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  Get Free Consultation
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
                alt={service?.images[1]?.alt || "Landscape Design Process"}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-green-600 font-medium mb-2">Professional Landscape Design Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Trusted Perth Landscape Design Company</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Create stunning outdoor environments with our comprehensive landscape design services. From concept to
                detailed plans, we design landscapes that enhance your property's beauty, functionality, and value.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our experienced design team combines creative vision with practical expertise to deliver landscape plans
                that thrive in Perth's climate while reflecting your personal style and meeting your outdoor living
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105">
                  Request A Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105 bg-transparent"
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
            <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-600 font-medium mb-2">Complete Landscape Design Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Landscape Design Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete landscape design solutions from initial consultation through to detailed plans and
                3D visualizations. Our experienced team ensures quality designs that create beautiful outdoor spaces.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105">
                  Request A Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={service?.images[6]?.src || "/placeholder.svg"}
                alt={service?.images[6]?.alt || "Landscape Design Services"}
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Landscape Design Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional landscape design services? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-green-600 hover:bg-green-700 px-8 transition-all duration-300 hover:scale-105">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Landscape Design FAQs</h2>
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
      <section className="py-20 bg-green-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Landscape Design Guide</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with landscape design tips, planning advice, and inspiration for your
                outdoor space. Download your free copy today!
              </p>
              <Button className="bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105" size="lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                Free Download
              </Button>
            </div>
            <div className="relative">
              <Image
                src={service?.images[2]?.src || "/placeholder.svg"}
                alt={service?.images[2]?.alt || "Design Guide"}
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
