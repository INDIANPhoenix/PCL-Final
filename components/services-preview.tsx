"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { getServiceImage } from "@/lib/service-images"

const services = [
  {
    title: "Concreting",
    description: "Professional concrete services for driveways, patios, and foundations.",
    href: "/services/concreting",
    imageKey: "concreting",
  },
  {
    title: "Landscaping",
    description: "Complete landscaping solutions to transform your outdoor space.",
    href: "/services/landscaping",
    imageKey: "landscaping",
  },
  {
    title: "Artificial Grass",
    description: "Low-maintenance artificial grass installation for all areas.",
    href: "/services/artificial-grass",
    imageKey: "artificial-grass",
  },
  {
    title: "Exposed Concrete",
    description: "Decorative exposed aggregate concrete finishes.",
    href: "/services/exposed-concrete",
    imageKey: "exposed-concrete",
  },
  {
    title: "Driveway Construction",
    description: "Durable driveway construction and resurfacing services.",
    href: "/services/driveway-construction",
    imageKey: "driveway-construction",
  },
  {
    title: "Mulching",
    description: "Professional mulching services for garden health and aesthetics.",
    href: "/services/mulching",
    imageKey: "mulching",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concrete work to complete landscaping, we provide comprehensive outdoor solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const imageUrl = getServiceImage(service.imageKey)

            return (
              <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
