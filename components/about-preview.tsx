import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 min-h-[500px] sm:min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/projects/landscaping-before.jpeg"
          alt="Lush green landscaping background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center lg:justify-end">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-lg w-full mx-4 sm:mx-0">
            {/* Subtitle */}
            <p className="text-green-400 italic text-base sm:text-lg mb-4 font-light">
              Landscaping Architects in Perth, WA
            </p>

            {/* Main Heading */}
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Residential Landscaping Without Compromise
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-6 text-sm sm:text-base">
              <p className="text-gray-200 leading-relaxed">
                We are passionate about our work, which we believe speaks for itself. We create impressive residential
                landscapes around Perth that are a joy to spend time in. Our focus is on luxury. We deliver a fully
                personalised landscaping service, working with you and refining your vision every step of the way. Your
                landscaping design and construction is based on who you are. Your tastes and preferences are at the
                heart of everything we do.
              </p>

              <p className="text-gray-200 leading-relaxed">
                After you approve your final garden design, receive your quote and are happy to proceed, we will agree a
                start date with you. Our contractors will then get to work. Our company takes care of all the details
                for you, so you can relax and look forward to a sophisticated back and/or front yard that will be
                perfectly tailored to your requirements.
              </p>
            </div>

            {/* Contact Info */}
            <p className="text-gray-200 mb-6 text-sm sm:text-base">
              <span className="text-green-400">Contact</span> Pro Concrete & Landscaping on{" "}
              <a
                href="tel:0470432212"
                className="text-green-400 font-semibold hover:text-green-300 transition-colors touch-manipulation"
                aria-label="Call us at 0470 432 212"
              >
                0470 432 212
              </a>{" "}
              today to discuss your upcoming landscaping project in Perth or request a quote below now.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 touch-manipulation min-h-[48px]"
                asChild
              >
                <Link href="/quote">REQUEST A QUOTE</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-white bg-transparent hover:bg-white hover:text-gray-900 font-semibold px-6 sm:px-8 touch-manipulation min-h-[48px]"
                asChild
              >
                <Link href="/portfolio">VIEW PORTFOLIO</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
