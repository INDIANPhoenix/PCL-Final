import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  { name: "Landscaping", path: "/services/landscaping" },
  { name: "Concreting", path: "/services/concreting" },
  { name: "Artificial Grass", path: "/services/artificial-grass" },
  { name: "Exposed Aggregate", path: "/services/exposed-concrete" },
  { name: "Mulching", path: "/services/mulching" },
  { name: "Letterbox Installation", path: "/services/letterbox-installation" },
  { name: "Driveway Construction", path: "/services/driveway-construction" },
  { name: "Garden Maintenance", path: "/services/garden-maintenance" },
  { name: "Landscaping Design", path: "/services/landscaping-design" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full overflow-hidden p-1">
                <img
                  src="/logo.png"
                  alt="Pro Concrete & Landscaping Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-green-400 leading-tight">PRO CONCRETE</span>
                <span className="font-bold text-green-300 text-sm leading-tight">& LANDSCAPING</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Turning dirt into dreams with professional concrete and landscaping services.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 text-gray-400 pt-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>0470 432 212</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">proconcretelandscaping@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Perth & Surrounding Areas</span>
              </div>
            </div>
          </div>

          {/* Services - Split into two columns */}
          <div className="md:col-span-5">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {services.map((service) => (
                <div key={service.path}>
                  <Link
                    href={service.path}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <div className="flex flex-col space-y-2 text-gray-300">
                <Link href="/" className="hover:text-green-400 transition-colors duration-300">
                  Home
                </Link>
                <Link href="/about" className="hover:text-green-400 transition-colors duration-300">
                  About Us
                </Link>
                <Link href="/services" className="hover:text-green-400 transition-colors duration-300">
                  Services
                </Link>
                <Link href="/portfolio" className="hover:text-green-400 transition-colors duration-300">
                  Portfolio
                </Link>
                <Link href="/contact" className="hover:text-green-400 transition-colors duration-300">
                  Contact
                </Link>
                <Link href="/quote" className="hover:text-green-400 transition-colors duration-300">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media & Additional Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-green-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-green-400 transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-green-400 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-400 transition-colors duration-300">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pro Concrete & Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
