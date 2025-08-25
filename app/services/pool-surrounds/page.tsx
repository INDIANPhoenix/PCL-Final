import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Droplet, Phone, Star } from "lucide-react"
import { getServiceEntry, getServiceImages } from "@/lib/service-images"

export const metadata = {
  title: "Pool Surrounds - Pro Concrete & Landscaping",
  description:
    "Expert pool surround design and installation services. Create a safe, stylish, and functional area around your pool with concrete, pavers, or decking.",
}

export default function PoolSurroundsPage() {
  const service = getServiceEntry("pool-surrounds")
  const galleryImages = getServiceImages("pool-surrounds")

  const features = [
    "Concrete pool decks",
    "Paver pool decks",
    "Timber & composite decking",
    "Coping installation",
    "Drainage solutions",
    "Integrated features (fire pits, seating)",
  ]

  const testimonials = [
    {
      name: "Sarah & Tom Davies",
      rating: 5,
      text: "Our new pool surround is absolutely stunning! It's transformed our backyard into a resort-like oasis.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Mark Johnson",
      rating: 5,
      text: "Professional service and exceptional quality. The concrete pool deck is beautiful and very durable.",
      image: "/placeholder-user.jpg",
    },
    {
      name: "Jessica Lee",
      rating: 5,
      text: "Pro Concrete & Landscaping did an amazing job on our pool surrounds. The attention to detail is fantastic!",
      image: "/placeholder-user.jpg",
    },
  ]

  const faqs = [
    {
      q: "What materials can be used for pool surrounds?",
      a: "We offer a variety of materials including concrete (exposed aggregate, stamped, plain), natural stone pavers, and timber or composite decking, each with unique benefits.",
    },
    {
      q: "Is slip resistance important for pool surrounds?",
      a: "Absolutely. We prioritize safety by recommending and installing materials with excellent slip-resistant properties, especially for areas prone to getting wet.",
    },
    {
      q: "How long does pool surround installation take?",
      a: "Project timelines vary based on material, size, and complexity. A typical concrete or paver surround might take 1-2 weeks, while more elaborate designs could take longer.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* ─────────────────────────── Hero ─────────────────────────── */}
      <section className="relative flex h-[60vh] items-center justify-center">
        <Image
          src={service?.images[1]?.src || "/placeholder.svg"}
          alt={service?.images[1]?.alt || "Stunning Pool Surrounds"}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <Badge className="mx-auto mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-400">
            <Droplet className="mr-2 h-4 w-4" />
            Pool Surrounds Specialists
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">Transform Your Pool Area</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            Design and install beautiful, safe, and functional pool surrounds using concrete, pavers, or decking to
            create your ultimate outdoor oasis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
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
            src={service?.images[0]?.src || "/placeholder.svg"}
            alt={service?.images[0]?.alt || "Poolside seating area"}
            width={640}
            height={430}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-cyan-600 font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Trusted Perth Pool Surround Experts</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            The area around your pool is crucial for both aesthetics and safety. We specialize in designing and
            installing high-quality pool surrounds that are not only visually appealing but also durable,
            slip-resistant, and perfectly integrated with your outdoor living space.
          </p>
          <ul className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start">
                <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-cyan-500" />
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
      <section className="bg-cyan-500 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Pool Area?</h2>
        <p className="text-lg mb-8">Request your free, no-obligation quote today.</p>
        <Button asChild size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
          <Link href="/quote">Get a Free Quote</Link>
        </Button>
      </section>
    </div>
  )
}
