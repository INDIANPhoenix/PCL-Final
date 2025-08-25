import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ready to transform your outdoor space? Get in touch for a free consultation and quote.
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
