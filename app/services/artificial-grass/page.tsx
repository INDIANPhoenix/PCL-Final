import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, GrapeIcon as Grass, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Artificial Grass - Pro Concrete & Landscaping",
  description:
    "Premium artificial grass installation for low-maintenance lawns. Enjoy a lush, green lawn year-round without the hassle of watering or mowing.",
}

export default function ArtificialGrassPage() {
  const service = getServiceEntry("artificial-grass")
  const galleryImages = getServiceImages("artificial-grass")

  const features = [
    "Premium quality synthetic turf",
    "Pet-friendly and safe materials",
    "Low maintenance solution",
    "Water conservation benefits",
    "All-weather durability",
    "Professional installation guarantee",
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing artificial grass installation! Our lawn looks perfect year-round and the kids love playing on it.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional service and excellent quality. No more mowing or watering - just a beautiful green lawn!",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      text: "Best investment we've made for our backyard. The artificial grass looks so natural and saves us time.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "How Long Does Artificial Grass Last?",
      answer:
        "High-quality artificial grass can last 15-20 years with proper installation and minimal maintenance. Our premium turf comes with comprehensive warranties.",
    },
    {
      question: "Is Artificial Grass Safe For Pets And Children?",
      answer:
        "Yes! Our artificial grass is made from non-toxic materials and is completely safe for pets and children. It's also easy to clean and maintain.",
    },
    {
      question: "How Much Does Artificial Grass Installation Cost?",
      answer:
        "Costs vary based on area size and grass quality. We provide detailed quotes after assessing your space and requirements.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service?.images[0]?.src || "/placeholder.svg"}
            alt={service?.images[0]?.alt || "Professional Artificial Grass"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-lime-600/20 text-lime-300 border-lime-400">
                <Grass className="w-4 h-4 mr-2" />
                Artificial Grass Installation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Perfect Lawn All Year Round</h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Enjoy a lush, green lawn without the maintenance. Our premium artificial grass looks natural, feels
                great, and saves you time and water.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-lime-600 hover:bg-lime-700 transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0470 432 212
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 bg-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your artificial grass project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-lime-600 hover:bg-lime-700 transition-all duration-300 hover:scale-105"
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
                src={service?.images[5]?.src || "/placeholder.svg"}
                alt={service?.images[5]?.alt || "Artificial Grass Installation Process"}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lime-600 font-medium mb-2">Premium Artificial Grass Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Your Trusted Perth Artificial Grass Specialists</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transform your outdoor space with our premium artificial grass installations. We use only the highest
                quality synthetic turf that looks and feels like natural grass, providing you with a beautiful lawn
                year-round.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our professional installation process ensures proper drainage, longevity, and a natural appearance that
                will enhance your property value while saving you time and money on maintenance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-lime-600 hover:bg-lime-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-lime-600 text-lime-600 hover:bg-lime-50 transition-all duration-300 hover:scale-105 bg-transparent"
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
            <Button className="bg-lime-600 hover:bg-lime-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-lime-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lime-600 font-medium mb-2">Complete Artificial Grass Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Artificial Grass?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our premium artificial grass provides all the beauty of natural grass without the maintenance, watering,
                or seasonal changes. Perfect for busy families and environmentally conscious homeowners.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-lime-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-lime-600 hover:bg-lime-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-lime-600 text-lime-600 hover:bg-lime-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={service?.images[2]?.src || "/placeholder.svg"}
                alt={service?.images[2]?.alt || "Artificial Grass Benefits"}
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
          <h2 className="text-4xl font-bold mb-4">Ready for a Perfect Lawn?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Transform your outdoor space with premium artificial grass installation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-lime-600 hover:bg-lime-700 px-8 transition-all duration-300 hover:scale-105">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Artificial Grass FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
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
      <section className="py-20 bg-lime-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Artificial Grass Information Pack</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with artificial grass tips, maintenance advice, and design inspiration.
                Download your free copy today!
              </p>
              <Button className="bg-lime-600 hover:bg-lime-700 transition-all duration-300 hover:scale-105" size="lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                Free Download
              </Button>
            </div>
            <div className="relative">
              <Image
                src={service?.images[7]?.src || "/placeholder.svg"}
                alt={service?.images[7]?.alt || "Information Pack"}
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
