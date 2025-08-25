"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      services: [
        { name: "Landscaping", href: "/services/landscaping" },
        { name: "Concreting", href: "/services/concreting" },
        { name: "Artificial Grass", href: "/services/artificial-grass" },
        { name: "Exposed Aggregate", href: "/services/exposed-concrete" },
        { name: "Mulching", href: "/services/mulching" },
        { name: "Letterbox Installation", href: "/services/letterbox-installation" },
        { name: "Driveway Construction", href: "/services/driveway-construction" },
        { name: "Garden Maintenance", href: "/services/garden-maintenance" },
        { name: "Landscaping Design", href: "/services/landscaping-design" },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:0470432212"
              className="flex items-center gap-1 sm:gap-2 text-white hover:text-green-200 transition-colors duration-300"
              aria-label="Call us at 0470 432 212"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">0470432212</span>
            </a>
            <a
              href="mailto:proconcretelandscaping@gmail.com"
              className="hidden sm:flex items-center gap-2 text-white hover:text-green-200 transition-colors duration-300"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
              <span>proconcretelandscaping@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Turning Dirt Into Dreams</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Pro Concrete & Landscaping Home">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <Image
                src="/logo.png"
                alt="Pro Concrete & Landscaping Logo"
                fill
                sizes="(max-width: 640px) 40px, 48px"
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-green-800 text-sm sm:text-lg leading-tight">PRO CONCRETE</span>
              <span className="font-bold text-green-600 text-xs sm:text-sm leading-tight">& LANDSCAPING</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 min-h-[44px]"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="py-2" role="menu">
                        {item.services?.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                            role="menuitem"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 min-h-[44px] flex items-center ${
                      pathname === item.href ? "text-green-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden min-h-[44px] min-w-[44px]"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] overflow-y-auto">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-green-600 py-2 transition-colors duration-300"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`ml-4 space-y-2 overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                        >
                          {item.services?.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className={`text-sm text-gray-600 hover:text-green-600 block py-2 transition-colors duration-300 ${
                                pathname === service.href ? "text-green-600" : ""
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-lg font-medium text-gray-700 hover:text-green-600 block py-2 transition-colors duration-300 ${
                          pathname === item.href ? "text-green-600" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
