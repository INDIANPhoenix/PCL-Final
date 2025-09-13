import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const portfolioItems = [
  {
    title: "Modern Concrete Driveway",
    category: "Concreting",
    image: "/projects/concrete-driveway-1.jpeg",
    description: "A sleek, contemporary driveway design with exposed aggregate finish",
  },
  {
    title: "Tropical Garden Oasis",
    category: "Landscaping",
    image: "/projects/modern-landscape-design.jpeg",
    description: "Complete garden transformation with native plants and water features",
  },
  {
    title: "Sustainable Garden Design",
    category: "Garden Design",
    image: "/projects/elegant-courtyard-pool.jpeg",
    description: "Water-wise garden with native plants and efficient irrigation",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore our completed projects and see how we've transformed outdoor spaces across Perth
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">Let us transform your outdoor space into something extraordinary</p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
