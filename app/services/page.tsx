import { Button } from "@/components/ui/button"
import { Hammer, Trees, Layers, Mountain, Leaf, Mail, CheckCircle, Car, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    icon: Trees,
    title: "Landscaping",
    description:
      "Complete landscape design and installation services to transform your outdoor space into a beautiful and functional area that reflects your style.",
    features: ["Garden Design", "Plant Installation", "Outdoor Features", "Maintenance Services"],
    image: "/projects/landscaping-before.jpeg",
    bgClass: "bg-gradient-to-br from-green-50 to-emerald-100",
    href: "/services/landscaping",
  },
  {
    icon: Hammer,
    title: "Concreting",
    description:
      "Professional concrete work including driveways, patios, foundations, and structural elements with quality finishes that stand the test of time.",
    features: ["Driveways", "Patios & Outdoor Areas", "Foundations", "Concrete Slabs", "Decorative Concrete"],
    image: "/projects/concrete-slab-day.jpeg",
    bgClass: "bg-gradient-to-br from-gray-50 to-slate-100",
    href: "/services/concreting",
  },
  {
    icon: Layers,
    title: "Artificial Grass",
    description:
      "High-quality artificial grass installation for low-maintenance beautiful lawns that look natural year-round and save water.",
    features: [
      "Premium Synthetic Turf",
      "Professional Installation",
      "Drainage Systems",
      "Pet-Friendly Options",
      "Maintenance-Free",
    ],
    image: "/projects/artificial-grass-1.jpeg",
    bgClass: "bg-gradient-to-br from-lime-50 to-green-100",
    href: "/services/artificial-grass",
  },
  {
    icon: Mountain,
    title: "Exposed Aggregate",
    description:
      "Decorative exposed aggregate finishes for modern and stylish surfaces that combine durability with aesthetic appeal for contemporary homes.",
    features: [
      "Aggregate Exposure",
      "Polished Finishes",
      "Colored Aggregate",
      "Textured Surfaces",
      "Sealing & Protection",
    ],
    image: "/projects/concrete-pathway.jpeg",
    bgClass: "bg-gradient-to-br from-stone-50 to-gray-100",
    href: "/services/exposed-concrete",
  },
  {
    icon: Leaf,
    title: "Mulching",
    description:
      "Professional mulching services to protect and nourish your garden beds while enhancing the overall landscape appearance and plant health.",
    features: ["Organic Mulch", "Decorative Bark", "Weed Suppression", "Moisture Retention", "Soil Health Improvement"],
    image: "/projects/landscaping-before.jpeg",
    bgClass: "bg-gradient-to-br from-yellow-50 to-amber-100",
    href: "/services/mulching",
  },
  {
    icon: Mail,
    title: "Letterbox Installation",
    description:
      "Custom letterbox installation with concrete foundations and professional mounting for durability, style, and enhanced curb appeal.",
    features: [
      "Concrete Foundations",
      "Various Styles",
      "Professional Mounting",
      "Durable Materials",
      "Custom Solutions",
    ],
    image: "/projects/concrete-pathway.jpeg",
    bgClass: "bg-gradient-to-br from-blue-50 to-cyan-100",
    href: "/services/letterbox-installation",
  },
  {
    icon: Car,
    title: "Driveway Construction",
    description:
      "Professional driveway construction and renovation services using quality materials and techniques for long-lasting, attractive results.",
    features: ["Concrete Driveways", "Asphalt Surfaces", "Decorative Options", "Proper Drainage", "Reinforcement"],
    image: "/projects/concrete-slab-day.jpeg",
    bgClass: "bg-gradient-to-br from-neutral-50 to-stone-100",
    href: "/services/driveway-construction",
  },
  {
    icon: Wrench,
    title: "Garden Maintenance",
    description:
      "Comprehensive garden maintenance services to keep your outdoor spaces looking their best throughout the year with regular care.",
    features: ["Regular Pruning", "Lawn Care", "Fertilization", "Pest Control", "Seasonal Cleanup"],
    image: "/projects/landscaping-before.jpeg",
    bgClass: "bg-gradient-to-br from-emerald-50 to-teal-100",
    href: "/services/garden-maintenance",
  },
  {
    icon: Trees,
    title: "Landscaping Design",
    description:
      "Custom landscape design services to create detailed plans and visualizations for your perfect outdoor space transformation.",
    features: ["Custom Design", "3D Visualization", "Plant Selection", "Hardscape Planning", "Design Support"],
    image: "/projects/modern-landscape-design.jpeg",
    bgClass: "bg-gradient-to-br from-violet-50 to-purple-100",
    href: "/services/landscaping-design",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto mb-8">
            Comprehensive concrete and landscaping solutions to transform your outdoor spaces into stunning, functional
            environments
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/quote">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.bgClass} py-12 md:py-16 lg:py-20 rounded-2xl md:rounded-3xl relative overflow-hidden`}
              >
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                          <service.icon className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-green-600 uppercase tracking-wider">
                            Service {String(index + 1).padStart(2, "0")}
                          </span>
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{service.title}</h2>
                        </div>
                      </div>

                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">{service.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-white/80"
                          >
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-800 font-medium text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <Link href={service.href}>Get Quote for {service.title}</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50 shadow-lg transition-all duration-300 hover:scale-105 bg-transparent"
                          asChild
                        >
                          <Link href={service.href}>Learn More</Link>
                        </Button>
                      </div>
                    </div>

                    <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <div className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={500}
                          height={375}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto">
            Contact us today for a free consultation and personalized quote for your concrete and landscaping needs.
            Let's transform your outdoor space together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="tel:0470432212">Call Now: 0470 432 212</Link>
            </Button>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">500+</div>
              <div className="text-gray-300 text-sm md:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">15+</div>
              <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">100%</div>
              <div className="text-gray-300 text-sm md:text-base">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
