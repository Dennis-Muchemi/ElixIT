import { ServicesHero } from '@/components/ServicesPage/ServicesHero'
import { ServiceCategories } from '@/components/ServicesPage/ServiceCategories'
import { ServiceDetails } from '@/components/ServicesPage/ServiceDetails'
import { ProcessTimeline } from '@/components/ServicesPage/ProcessTimeline'
import { CTASection } from '@/components/ServicesPage/CTASection'
import Footer from '@/components/layout/Footer'


export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServiceCategories />
      <ServiceDetails />
      <ProcessTimeline />
      <CTASection />
      <Footer />
    </main>
  )
}