import { Card, CardContent } from "@/components/ui/card"
import { Phone, Calendar, Hammer, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Free Consultation",
    description:
      "Contact us for a free consultation. We'll discuss your vision, requirements, and provide expert advice.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Site Assessment & Quote",
    description: "We visit your property, assess the site, and provide a detailed quote with timeline and materials.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Professional Installation",
    description:
      "Our skilled team begins work, keeping you informed throughout the process with quality craftsmanship.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Final Inspection & Handover",
    description: "We conduct a thorough inspection, ensure your complete satisfaction, and hand over your dream space.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final handover, we make your concrete and landscaping project stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow relative">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
