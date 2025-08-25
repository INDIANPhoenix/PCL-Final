import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Scissors, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Garden Maintenance - Pro Concrete & Landscaping",
  description:
    "Professional garden maintenance services to keep your outdoor spaces healthy and beautiful year-round. Regular care, expert knowledge, and reliable service.",
}

export default function GardenMaintenancePage() {
  const service = getServiceEntry("garden-maintenance")
  const galleryImages = getServiceImages("garden-maintenance")

  const features = [
    "Regular lawn mowing and edging",
    "Pruning and trimming services",
    "Weeding and pest control",
    "Seasonal garden cleanup",
    "Plant health monitoring",
    "Irrigation system maintenance",
  ]

  const testimonials = [
    {
      name: "Jennifer Adams",
      rating: 5,
      text: "Excellent garden maintenance service! Our garden has never looked better and the team is always reliable and professional.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Robert Taylor",
      rating: 5,
      text: "Outstanding service and attention to detail. They keep our garden looking pristine year-round with regular maintenance.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "Professional and thorough garden care. Our plants are healthier than ever and the lawn looks fantastic every week.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Does Your Garden Maintenance Service Include?",
      answer:
        "Our comprehensive service includes lawn mowing, edging, pruning, weeding, seasonal cleanup, plant care, and irrigation maintenance to keep your garden healthy and beautiful.",
    },
    {
      question: "How Often Do You Provide Garden Maintenance Services?",
      answer:
        "We offer flexible scheduling including weekly, fortnightly, or monthly maintenance visits depending on your garden's needs and your preferences.",
    },
    {
      question: "Do You Provide Garden Maintenance For Commercial Properties?",
      answer:
        "Yes! We provide professional garden maintenance services for both residential and commercial properties, including offices, retail spaces, and apartment complexes.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service?.images[0]?.src || "/placeholder.svg"}
            alt={service?.images[0]?.alt || "Professional Garden Maintenance"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-emerald-600/20 text-emerald-300 border-emerald-400">
                <Scissors className="w-4 h-4 mr-2" />
                Garden Maintenance Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Garden Maintenance Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Keep your garden looking its best year-round with our professional maintenance services. Regular care,
                expert knowledge, and reliable service for beautiful outdoor spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
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
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your garden maintenance needs..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
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
                alt={service?.images[1]?.alt || "Garden Maintenance Process"}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-emerald-600 font-medium mb-2">Professional Garden Care Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Trusted Perth Garden Maintenance Company</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Maintain beautiful, healthy gardens with our professional maintenance services. Our experienced team
                provides regular care that keeps your outdoor spaces looking their best throughout the seasons.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From routine lawn care to specialized plant maintenance, we handle all aspects of garden upkeep with
                expertise and attention to detail, ensuring your garden remains a source of pride and enjoyment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 bg-transparent"
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
            <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-emerald-600 font-medium mb-2">Complete Garden Maintenance</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Garden Maintenance Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete garden maintenance solutions to keep your outdoor spaces healthy and beautiful. Our
                experienced team ensures your garden receives the care it needs throughout the year.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={service?.images[2]?.src || "/placeholder.svg"}
                alt={service?.images[2]?.alt || "Garden Maintenance Services"}
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Garden Maintenance Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional garden care? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 transition-all duration-300 hover:scale-105">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Garden Maintenance FAQs</h2>
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
      <section className="py-20 bg-emerald-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Garden Maintenance Guide</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with garden maintenance tips, seasonal care advice, and plant health
                information. Download your free copy today!
              </p>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Free Download
              </Button>
            </div>
            <div className="relative">
              <Image
                src={service?.images[3]?.src || "/placeholder.svg"}
                alt={service?.images[3]?.alt || "Information Pack"}
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
