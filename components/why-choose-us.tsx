import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind.",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on all projects.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of experience in concrete and landscaping.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your time and complete projects within agreed timelines.",
    },
    {
      icon: CheckCircle,
      title: "Free Quotes",
      description: "No hidden fees - transparent pricing with detailed free estimates.",
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Consistently rated 5 stars by our satisfied customers across Perth.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Pro Concrete & Landscaping?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering exceptional results that exceed your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.title}
                className="text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-2 card-hover"
              >
                <CardContent className="p-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-200 hover:scale-110">
                    <IconComponent className="h-8 w-8 text-green-600 transition-transform duration-300 hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-green-600">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 transition-colors duration-300">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
