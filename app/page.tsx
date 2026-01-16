import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TreatmentProcess } from "@/components/treatment-process"
import { VideoTestimonials } from "@/components/video-testimonials"
import { ProceduresSection } from "@/components/procedures-section"
import { SmileHealthSection } from "@/components/smile-health-section"
import { AboutSection } from "@/components/about-section"
import { ClinicStructure } from "@/components/clinic-structure"
import { LocationSection } from "@/components/location-section"
import { FaqSection } from "@/components/faq-section"
import { PaymentSection } from "@/components/acessivel"
import { WhatsAppButton } from "@/components/whatsapp-button"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TreatmentProcess />
      <VideoTestimonials />
      <ProceduresSection />
      <SmileHealthSection />
      <AboutSection />
      <ClinicStructure />
      <LocationSection />
       <PaymentSection />
      <FaqSection />
      <WhatsAppButton />
    </main>
  )
}
