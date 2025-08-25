import { MapPin, CheckCircle } from "lucide-react"

const serviceAreas = [
  "Perth CBD",
  "Subiaco",
  "Fremantle",
  "Cottesloe",
  "Nedlands",
  "Claremont",
  "Peppermint Grove",
  "Mosman Park",
  "Dalkeith",
  "Crawley",
  "West Perth",
  "Northbridge",
  "East Perth",
  "South Perth",
  "Victoria Park",
  "Burswood",
]

export function ServiceAreas() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">Service Areas Across Perth</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We proudly serve residential and commercial clients throughout Perth and surrounding suburbs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {serviceAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm">
              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see your area listed? Contact us - we may still be able to help!</p>
          <a href="tel:0470432212" className="text-green-600 hover:text-green-700 font-semibold text-lg">
            Call 0470 432 212
          </a>
        </div>
      </div>
    </section>
  )
}
