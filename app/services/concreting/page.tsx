import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Hammer, ArrowRight, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Concreting - Pro Concrete & Landscaping",
  description:
    "Professional concrete services for driveways, patios, and foundations. We deliver high-quality concrete work that stands the test of time.",
}

export default function ConcretingPage() {
  const service = getServiceEntry("concreting")
  const galleryImages = getServiceImages("concreting")

  const features = [
    "Residential & commercial concrete",
    "Driveways and pathways",
    "Patios and outdoor areas",
    "Foundations and slabs",
    "Decorative concrete finishes",
    "Concrete repairs and restoration",
  ]

  const testimonials = [
    {
      name: "David Smith",
      rating: 5,
      text: "Excellent concrete work! Our new driveway looks fantastic and has held up perfectly through all weather conditions.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Lisa Brown",
      rating: 5,
      text: "Professional service from start to finish. The concrete patio exceeded our expectations and was completed on time.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Tom Wilson",
      rating: 5,
      text: "High quality workmanship and attention to detail. Would definitely recommend for any concrete projects.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What Types Of Concrete Services Does Pro Concrete & Landscaping Offer?",
      answer:
        "We offer comprehensive concrete services including driveways, patios, foundations, decorative concrete, repairs, and commercial concrete solutions.",
    },
    {
      question: "How Long Does A Typical Concrete Project Take To Complete?",
      answer:
        "Project timelines vary based on size and complexity. Most residential driveways take 2-3 days, while larger projects may take 1-2 weeks including curing time.",
    },
    {
      question: "Do You Provide Warranties On Your Concrete Work?",
      answer:
        "Yes! We provide comprehensive warranties on all our concrete work, ensuring peace of mind and long-term satisfaction with your investment.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service?.images[4]?.src || "/placeholder.svg"}
            alt={service?.images[4]?.alt || "Professional Concreting"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-gray-600/20 text-gray-300 border-gray-400">
                <Hammer className="w-4 h-4 mr-2" />
                Professional Concreting
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Concrete Construction Experts in Perth
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                From driveways to patios, we deliver high-quality concrete work that stands the test of time.
                Professional installation with attention to detail and lasting results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0470 432 212
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 bg-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your concrete project..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-gray-800 hover:bg-gray-900" size="lg">
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
                alt={service?.images[1]?.alt || "Concrete Construction Process"}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-2">Professional Concrete Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Your Trusted Perth Concrete Construction Company
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With extensive experience in concrete construction, we deliver durable, high-quality results for
                residential and commercial projects. Our skilled team uses premium materials and proven techniques.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From site preparation to final finishing, we handle every aspect of your concrete project with precision
                and professionalism. Quality workmanship and customer satisfaction are our top priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gray-800 hover:bg-gray-900">Request A Quote</Button>
                <Button variant="outline">
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
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
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
            <Button className="bg-gray-800 hover:bg-gray-900">View Google Reviews</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 font-medium mb-2">Complete Concrete Solutions</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Comprehensive Concrete Construction Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide complete concrete solutions from design through to completion. Our experienced team ensures
                quality results that meet your specific requirements and budget.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gray-800 hover:bg-gray-900">Request A Quote</Button>
                <Button variant="outline">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={service?.images[0]?.src || "/placeholder.svg"}
                alt={service?.images[0]?.alt || "Concrete Construction"}
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
          <h2 className="text-4xl font-bold mb-4">Begin Your Concrete Project Today!</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready for professional concrete work? Get started with a free consultation.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-gray-800 hover:bg-gray-900 px-8">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Concrete Construction FAQs</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Download Pro Concrete Information Pack</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get our comprehensive guide with concrete tips, design ideas, and project inspiration. Download your
                free copy today!
              </p>
              <Button className="bg-gray-800 hover:bg-gray-900" size="lg">
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
