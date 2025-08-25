import { Header } from "@/components/header"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServiceAreas } from "@/components/service-areas"
import { AboutPreview } from "@/components/about-preview"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <EnhancedHeroSection />
        <ServicesPreview />
        <AboutPreview />
        <WhyChooseUs />
        <ProcessSection />
        <TestimonialsSection />
        <ServiceAreas />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
