import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Lightbulb, Phone, Star } from "lucide-react"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Outdoor Lighting – Pro Concrete & Landscaping",
  description:
    "Professional outdoor lighting design & installation in Perth. Illuminate your landscape with energy-efficient LED solutions for beauty, safety, and security.",
}

export default function OutdoorLightingPage() {
  const service = getServiceEntry("outdoor-lighting")
  const galleryImages = getServiceImages("outdoor-lighting")

  const features = [
    "LED pathway & garden lighting",
    "Security and safety lighting",
    "Architectural accent lighting",
    "Smart lighting controls",
    "Energy-efficient installations",
    "Professional wiring & setup",
  ]

  const testimonials = [
    {
      name: "Steven Parker",
      rating: 5,
      text: "Amazing outdoor lighting installation! Our garden looks absolutely stunning at night and the pathway lighting provides excellent safety.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Michelle Roberts",
      rating: 5,
      text: "Professional service and beautiful results. The accent lighting has transformed our outdoor entertaining area completely.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Tony Martinez",
      rating: 5,
      text: "Excellent attention to detail and quality fixtures. Our home's curb appeal has improved dramatically with the new lighting.",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      q: "What types of outdoor lighting do you install?",
      a: "We design and install pathway lighting, garden accent lights, security lighting, architectural lighting, and smart lighting systems – all using energy-efficient LED technology.",
    },
    {
      q: "Do you handle the electrical wiring for outdoor lighting?",
      a: "Absolutely. Our licensed electricians take care of all wiring, connections, and safety checks to ensure a compliant installation.",
    },
    {
      q: "Can you integrate smart lighting controls?",
      a: "Yes. We offer app-controlled systems with timers, motion sensors, and seamless integration into popular home-automation ecosystems.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <Image
          src={service?.images[0]?.src || "/placeholder.svg"}
          alt={service?.images[0]?.alt || "Professional outdoor lighting installation"}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <Badge className="mx-auto mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-400">
            <Lightbulb className="mr-2 h-4 w-4" />
            Outdoor Lighting Specialists
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">Illuminate Your Outdoors</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            Enhance beauty, safety, and security with bespoke lighting solutions designed & installed by Perth’s
            experts.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
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
            alt={service?.images[1]?.alt || "Garden lighting example"}
            width={640}
            height={430}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-yellow-600 font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Perth Outdoor Lighting Company</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Transform your outdoor spaces with tailored lighting designs that highlight architectural features, improve
            safety, and create a welcoming ambiance long after sunset. Our team manages everything from concept to
            installation, using premium LED fixtures that stand the test of time.
          </p>
          <ul className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-yellow-500" />
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
      <section className="bg-yellow-500 text-gray-900 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Light Up Your Outdoors?</h2>
        <p className="text-lg mb-8">Request your free, no-obligation quote today.</p>
        <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
          <Link href="/quote">Get a Free Quote</Link>
        </Button>
      </section>
    </div>
  )
}
