import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Home, Phone, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Decking - Pro Concrete & Landscaping",
  description:
    "Custom pergolas and gazebos designed and built to enhance your outdoor living space. Create shaded areas for relaxation and entertainment in your garden.",
}

export default function DeckingPage() {
  const service = getServiceEntry("decking")
  const galleryImages = getServiceImages("decking")

  const features = [
    "Timber decking installation",
    "Composite material options",
    "Multi-level deck designs",
    "Balustrades and railings",
    "Weather-protection treatments",
    "Custom design solutions",
  ]

  const testimonials = [
    {
      name: "Steven Parker",
      rating: 5,
      text: "Outstanding decking work! Our new deck is perfect for entertaining and has added so much value to our home.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Michelle Roberts",
      rating: 5,
      text: "Professional service and beautiful craftsmanship. The deck exceeded our expectations in every way.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Tony Martinez",
      rating: 5,
      text: "Excellent attention to detail and quality materials. Our deck looks amazing and is built to last.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      question: "What types of decking materials do you use?",
      answer:
        "We work with hardwood timber, treated pine, and composite decking materials—each offering different benefits and aesthetics.",
    },
    {
      question: "How long does a decking project take to complete?",
      answer:
        "Most residential projects take 3-7 days depending on size and complexity, including preparation, construction, and finishing work.",
    },
    {
      question: "Do you provide design services for decking projects?",
      answer: "We offer complete design services including layout planning, material selection, and custom features.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src={service?.images[3]?.src || "/placeholder.svg"}
          alt={service?.images[3]?.alt || "Professional Decking Services"}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          {/* Hero copy */}
          <div className="text-white">
            <Badge className="mb-4 border-orange-400 bg-orange-600/20 text-orange-300">
              <Home className="mr-2 h-4 w-4" />
              Decking Specialists
            </Badge>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Your Decking Experts in Perth</h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-200">
              Custom decking solutions using premium materials to create beautiful outdoor living spaces perfect for
              entertaining and relaxation.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-700"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 0470&nbsp;432&nbsp;212
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-gray-900 bg-transparent"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Quick quote form */}
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Get Your Free Quote</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                rows={4}
                placeholder="Tell us about your decking project..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-orange-500"
              />
              <Button
                size="lg"
                className="w-full bg-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-700"
              >
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <Image
            src={service?.images[1]?.src || "/placeholder.svg"}
            alt={service?.images[1]?.alt || "Decking Construction Process"}
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />

          <div>
            <p className="mb-2 font-medium text-orange-600">Premium Decking Solutions</p>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Your Trusted Perth Decking Specialists</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Transform your outdoor living with our expert decking services. We create beautiful, functional decks
              using premium materials and professional craftsmanship that enhance your property's value and lifestyle.
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              Our custom decking solutions feature quality timber and composite materials, expert construction
              techniques, and attention to detail that ensures your deck will provide years of enjoyment and durability.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="bg-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-700">
                Request a Quote
              </Button>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-50 bg-transparent"
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Here's What Our Happy Customers Say</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(({ name, text, rating, image }, i) => (
              <Card key={i} className="bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center">
                    <Image
                      src={image || "/placeholder-user.jpg"}
                      alt={name}
                      width={50}
                      height={50}
                      className="mr-4 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{name}</h4>
                      <div className="flex">
                        {Array.from({ length: rating }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic text-gray-600">"{text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-700">
              View Google Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="mb-2 font-medium text-orange-600">Complete Decking Solutions</p>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Our Comprehensive Decking Service</h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              We handle everything from design to completion. Our team guarantees quality results that create stunning
              outdoor living spaces for your home.
            </p>

            <div className="mb-8 grid gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-center">
                  <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-orange-600" />
                  <span className="text-gray-700">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="bg-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-700">
                Request a Quote
              </Button>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-50 bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <Image
            src={service?.images[2]?.src || "/placeholder.svg"}
            alt={service?.images[2]?.alt || "Decking Services"}
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Begin Your Decking Project Today!</h2>
          <p className="mb-8 text-xl text-gray-300">
            Ready for professional decking installation? Get started with a free consultation.
          </p>

          <div className="mx-auto flex max-w-md gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 rounded-lg px-4 py-3 text-gray-900" />
            <Button className="bg-orange-600 px-8 transition-all duration-300 hover:scale-105 hover:bg-orange-700">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Decking FAQs</h2>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map(({ question, answer }, i) => (
              <Card key={i} className="border border-gray-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{question}</h3>
                  <p className="text-gray-600">{answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Guide */}
      <section className="bg-orange-100 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Download Our Decking Guide</h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              Get a free guide jam-packed with decking tips, material options, and design inspiration.
            </p>
            <Button className="bg-orange-600 transition-all duration-300 hover:scale-105 hover:bg-orange-700">
              <ArrowRight className="mr-2 h-5 w-5" />
              Free Download
            </Button>
          </div>

          <Image
            src={service?.images[0]?.src || "/placeholder.svg"}
            alt={service?.images[0]?.alt || "Information Pack"}
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  )
}
