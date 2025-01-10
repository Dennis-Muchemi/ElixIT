import { ContactHero } from '@/components/ContactPage/ContactHero'
import { ContactForm } from '@/components/ContactPage/ContactForm'
import { CalendlySection } from '@/components/ContactPage/CalendlySection'
import { FAQSection } from '@/components/ContactPage/FAQSection'
import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'


export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <ContactHero />
      <ContactForm />
      <CalendlySection />
      <FAQSection />
      <Footer />
    </main>
  )
}