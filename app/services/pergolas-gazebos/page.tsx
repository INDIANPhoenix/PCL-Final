import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Sun, Phone, Star } from "lucide-react"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Pergolas & Gazebos - Pro Concrete & Landscaping",
  description:
    "Custom pergolas and gazebos designed and built to enhance your outdoor living space. Create shaded areas for relaxation and entertainment in your garden.",
}

export default function PergolasGazebosPage() {
  const service = getServiceEntry("pergolas-gazebos")
  const galleryImages = getServiceImages("pergolas-gazebos")

  const features = [
    "Custom design & consultation",
    "Material options: wood, vinyl, metal",
    "Integrated shade solutions",
    "Outdoor kitchen & lighting integration",
    "Professional installation",
    "Permit assistance",
  ]

  const testimonials = [
    {
      name: "John & Jane Doe",
      rating: 5,
      text: "Our new pergola is absolutely stunning! It's transformed our backyard into a beautiful shaded oasis.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Emily White",
      rating: 5,
      text: "The gazebo is perfect for entertaining. High quality craftsmanship and excellent service from start to finish.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Michael Green",
      rating: 5,
      text: "Pro Concrete & Landscaping built us a custom pergola that exceeded our expectations. Highly recommend!",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      q: "What's the difference between a pergola and a gazebo?",
      a: "Pergolas typically have an open roof structure with beams, offering partial shade, while gazebos usually have a solid, closed roof and provide full shade and shelter.",
    },
    {
      q: "What materials do you use for pergolas and gazebos?",
      a: "We work with various materials including natural timber (cedar, redwood), low-maintenance vinyl, and durable metal (aluminum, steel) to match your aesthetic and budget.",
    },
    {
      q: "Do I need a permit for a pergola or gazebo?",
      a: "Permit requirements vary by local council and structure size. We can assist you in determining if a permit is needed and guide you through the application process.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <Image
          src={service?.images[0]?.src || "/placeholder.svg"}
          alt={service?.images[0]?.alt || "Custom Pergola and Gazebo"}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <Badge className="mx-auto mb-4 bg-purple-500/20 text-purple-300 border-purple-400">
            <Sun className="mr-2 h-4 w-4" />
            Pergolas & Gazebos Specialists
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Your Outdoor Shade & Structure Experts
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            Design and build custom pergolas and gazebos to create beautiful, shaded outdoor living spaces perfect for
            relaxation and entertainment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: 0470 432 212
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── About / Features ─────────────────────────── */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={service?.images[1]?.src || "/placeholder.svg"}
            alt={service?.images[1]?.alt || "Modern Gazebo"}
            width={640}
            height={430}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-purple-600 font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Perth Pergola & Gazebo Builders</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Enhance your outdoor lifestyle with our custom-designed pergolas and gazebos. We create structures that not
            only provide essential shade and shelter but also serve as stunning architectural features, seamlessly
            integrating with your home and landscape.
          </p>
          <ul className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-purple-500" />
                <span className="text-gray-800 dark:text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────────────── Testimonials ─────────────────────────── */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Kind Words From Our Clients</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(({ name, text, image, rating }) => (
              <Card key={name} className="shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${name} avatar`}
                    width={80}
                    height={80}
                    className="rounded-full mb-3 object-cover"
                  />
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <div className="flex">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FAQ ─────────────────────────── */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map(({ q, a }, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left">{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ─────────────────────────── CTA ─────────────────────────── */}
      <section className="bg-purple-500 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Dreaming of a New Outdoor Structure?</h2>
        <p className="text-lg mb-8">Request your free, no-obligation quote today.</p>
        <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
          <Link href="/quote">Get a Free Quote</Link>
        </Button>
      </section>
    </div>
  )
}
