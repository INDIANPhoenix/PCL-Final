import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Car, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Driveway Construction - Pro Concrete & Landscaping",
  description:
    "Durable driveway construction and resurfacing services. Build driveways that enhance your property with professional construction and lasting results.",
}

export default function DrivewayConstructionPage() {
  const service = getServiceEntry("driveway-construction")
  const galleryImages = getServiceImages("driveway-construction")

  const features = [
    "Concrete and asphalt driveways",
    "Proper drainage solutions",
    "Heavy-duty construction",
    "Various finish options",
    "Long-lasting durability",
    "Professional excavation and base prep",
  ]

  const testimonials = [
    {
      name: "Andrew Thompson",
      rating: 5,
      text: "Exceptional driveway construction! The team was professional and our new concrete driveway looks fantastic and is built to last.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Linda Martinez",
      rating: 5,
      text: "Outstanding workmanship and attention to detail. Our driveway has significantly improved our home's curb appeal.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Kevin Brown",
      rating: 5,
      text: "Professional service from start to finish. The drainage work is excellent and the finish quality exceeded our expectations.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Types Of Driveways Do You Construct?",
      answer:
        "We construct concrete driveways, asphalt driveways, and decorative concrete driveways with various finish options to suit your property and budget.",
    },
    {
      question: "How Long Does Driveway Construction Take?",
      answer:
        "Most residential driveways take 3-7 days to complete, including excavation, base preparation, and installation, depending on size and complexity.",
    },
    {
      question: "Do You Handle Drainage And Site Preparation?",
      answer:
        "Yes! We provide complete site preparation including excavation, proper drainage systems, and professional base preparation for long-lasting results.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service?.images[4]?.src || "/placeholder.svg"}
            alt={service?.images[4]?.alt || "Professional Driveway Construction"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-slate-600/20 text-slate-300 border-slate-400">
                <Car className="w-4 h-4 mr-2" />
                Driveway Construction Specialists
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Driveway Construction Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Build durable driveways that enhance your property. Professional construction with proper drainage,
                quality materials, and expert installation for long-lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your driveway construction project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <Button
                  className="w-full bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105"
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
                src={service?.images[3]?.src || "/placeholder.svg"}
                alt={service?.images[3]?.alt || "Driveway Construction Process"}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-slate-600 font-medium mb-2">Professional Driveway Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Your Trusted Perth Driveway Construction Company
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Expert driveway construction services for residential and commercial properties. We specialize in
                creating durable, attractive driveways using premium materials and professional techniques that enhance
                your property's value and functionality.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive construction process includes site preparation, proper drainage installation, quality
                base work, and expert finishing to ensure your driveway will serve you reliably for decades to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-600 hover:bg-slate-50 transition-all duration-300 hover:scale-105 bg-transparent"
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
            <Button className="bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 font-medium mb-2">Complete Driveway Construction</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Driveway Construction Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From initial design through final completion, we handle every aspect of your driveway construction
                project. Our experienced team ensures quality results that meet your specific needs and budget
                requirements.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-slate-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                  Request A Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-600 hover:bg-slate-50 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={service?.images[0]?.src || "/placeholder.svg"}
                alt={service?.images[0]?.alt || "Driveway Construction"}
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Driveway Construction Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional driveway construction? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-slate-600 hover:bg-slate-700 px-8 transition-all duration-300 hover:scale-105">
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Driveway Construction FAQs</h2>
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
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Driveway Construction Guide</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with driveway construction tips, material options, and design inspiration.
                Download your free copy today!
              </p>
              <Button className="bg-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105" size="lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                Free Download
              </Button>
            </div>
            <div className="relative">
              <Image
                src={service?.images[1]?.src || "/placeholder.svg"}
                alt={service?.images[1]?.alt || "Information Pack"}
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
