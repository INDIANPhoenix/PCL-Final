import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sparkles, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Exposed Concrete - Pro Concrete & Landscaping",
  description:
    "Professional exposed aggregate concrete services. Create stunning decorative concrete surfaces with durable and slip-resistant finishes.",
}

export default function ExposedConcretePage() {
  const service = getServiceEntry("exposed-concrete")
  const galleryImages = getServiceImages("exposed-concrete")

  const features = [
    "Decorative exposed aggregate finishes",
    "Various stone and color options",
    "Slip-resistant surfaces",
    "Durable and low maintenance",
    "Custom design patterns",
    "Professional sealing and protection",
  ]

  const testimonials = [
    {
      name: "Rachel Green",
      rating: 5,
      text: "Beautiful exposed concrete work! The finish is stunning and has completely transformed our outdoor area.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mark Davis",
      rating: 5,
      text: "Professional service and exceptional quality. Our exposed concrete driveway looks amazing and is very durable.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Sophie Wilson",
      rating: 5,
      text: "Outstanding craftsmanship! The exposed aggregate finish exceeded our expectations and adds great value to our home.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Is Exposed Concrete And How Is It Different?",
      answer:
        "Exposed concrete reveals decorative aggregate stones in the surface, creating an attractive, textured finish that's more visually appealing than standard concrete.",
    },
    {
      question: "How Long Does Exposed Concrete Last?",
      answer:
        "With proper installation and sealing, exposed concrete can last 20-30 years or more, making it an excellent long-term investment for your property.",
    },
    {
      question: "What Maintenance Does Exposed Concrete Require?",
      answer:
        "Exposed concrete requires minimal maintenance - regular cleaning and periodic resealing every 3-5 years to maintain its appearance and protection.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service?.images[0]?.src || "/placeholder.svg"}
            alt={service?.images[0]?.alt || "Professional Exposed Concrete"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-amber-600/20 text-amber-300 border-amber-400">
                <Sparkles className="w-4 h-4 mr-2" />
                Exposed Concrete Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Exposed Concrete Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Create stunning decorative concrete surfaces with exposed aggregate finishes. Beautiful, durable, and
                slip-resistant surfaces that enhance any outdoor space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:scale-105"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your exposed concrete project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:scale-105"
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
                alt={service?.images[1]?.alt || "Exposed Concrete Process"}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-amber-600 font-medium mb-2">Premium Exposed Concrete Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Trusted Perth Exposed Concrete Specialists</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your outdoor spaces with beautiful exposed concrete finishes. Our expert team creates stunning
                decorative surfaces that combine durability with aesthetic appeal, perfect for driveways, patios, and
                walkways.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Using premium aggregates and professional techniques, we deliver exposed concrete surfaces that are not
                only beautiful but also slip-resistant and long-lasting, adding value and style to your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-105 bg-transparent"
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
            <Button className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 font-medium mb-2">Complete Exposed Concrete Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Exposed Concrete Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete exposed concrete solutions from design through to completion. Our experienced team
                ensures quality results that create beautiful, functional surfaces for your property.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={service?.images[2]?.src || "/placeholder.svg"}
                alt={service?.images[2]?.alt || "Exposed Concrete Services"}
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Exposed Concrete Project Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for beautiful exposed concrete surfaces? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 px-8 transition-all duration-300 hover:scale-105">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Exposed Concrete FAQs</h2>
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
      <section className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Exposed Concrete Guide</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with exposed concrete tips, design options, and maintenance advice. Download
                your free copy today!
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 transition-all duration-300 hover:scale-105" size="lg">
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
