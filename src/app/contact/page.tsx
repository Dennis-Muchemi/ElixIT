import { ContactHero } from '@/components/ContactPage/ContactHero'
import { ContactForm } from '@/components/ContactPage/ContactForm'
import { CalendlySection } from '@/components/ContactPage/CalendlySection'
import { FAQSection } from '@/components/ContactPage/FAQSection'
import Footer from '@/components/layout/Footer'


export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <CalendlySection />
      <FAQSection />
      <Footer />
    </main>
  )
}