"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Star, Phone, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ErrorBoundary } from "@/components/error-boundary"
import { LoadingSpinner } from "@/components/loading-spinner"

const slides = [
  {
    title: "Turning Dirt Into Dreams",
    subtitle: "Professional landscaping and outdoor services",
    image: "/projects/artificial-grass-1.jpeg",
  },
  {
    title: "Expert Concreting Solutions",
    subtitle: "Driveways, patios and structural concrete work",
    image: "/projects/concrete-slab-day.jpeg",
  },
  {
    title: "Perfect Lawn All Year Round",
    subtitle: "Premium artificial grass installation",
    image: "/projects/artificial-grass-2.jpeg",
  },
]

export function EnhancedHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => setIsLoading(false), 1000)
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => {
      clearTimeout(timer)
      clearInterval(slideTimer)
    }
  }, [slides.length])

  if (isLoading) {
    return (
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="flex items-center justify-center min-h-[600px]">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    )
  }

  return (
    <ErrorBoundary>
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  Perth's Trusted Concrete & Landscaping Experts
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slides[currentSlide].title.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-500 mr-2 ${
                        word === "Dreams" ? "text-green-600 italic" : ""
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">{slides[currentSlide].subtitle}</p>
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
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="/quote" className="flex items-center justify-center">
                    Start Your Quote Quiz
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-transparent"
                  asChild
                >
                  <Link href="/portfolio" className="flex items-center justify-center">
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    View Our Work
                  </Link>
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

              <div className="flex items-center space-x-2 bg-green-100 p-4 rounded-lg hover:bg-green-200 transition-colors">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Call us now for immediate service</p>
                  <p className="font-bold text-green-700 text-lg">0470 432 212</p>
                </div>
              </div>
            </div>

            {/* Hero Image Carousel */}
            <div
              className={`relative transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">9</div>
                  <div className="text-sm text-gray-600">Services Offered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
