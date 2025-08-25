import { Button } from "@/components/ui/button"
import { Star, Phone } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turning Dirt Into <span className="text-green-600 italic">Dreams</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional concrete and landscaping services that transform your outdoor spaces into extraordinary
                living areas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Expert concreting and landscaping specialists</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Quality workmanship with attention to detail</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Comprehensive outdoor transformation services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                Request Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">Trusted by 200+ satisfied customers</span>
            </div>

            <div className="flex items-center space-x-2 bg-green-100 p-4 rounded-lg">
              <Phone className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Call us now for immediate service</p>
                <p className="font-bold text-green-700 text-lg">0470 432 212</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/projects/landscaping-before.jpeg"
                alt="Pro Concrete & Landscaping Services"
                width={600}
                height={600}
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">7+</div>
                <div className="text-sm text-gray-600">Services Offered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
