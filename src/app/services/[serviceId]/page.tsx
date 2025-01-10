// app/services/[serviceId]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import { serviceCategories } from '@/data/ServicesData'
import { ServicesHero } from '@/components/ServicesPage/ServicesHero'
import { ServiceCategories } from '@/components/ServicesPage/ServiceCategories'
import { ServiceDetails } from '@/components/ServicesPage/ServiceDetails'
import { ProcessTimeline } from '@/components/ServicesPage/ProcessTimeline'
import { FAQSection } from '@/components/ServicesPage/FAQSection'
import { CTASection } from '@/components/ServicesPage/CTASection'
import Footer from '@/components/layout/Footer'
import { notFound } from 'next/navigation'
import NavigationBar from '@/components/layout/NavigationBar'


export default function ServicePage() {
  const { serviceId } = useParams()
  const service = serviceCategories.find(s => s.id === serviceId)
  
  if (!service) {
    return notFound()
  }

  return (
    <main className="min-h-screen">
      <NavigationBar />
      <ServicesHero service={service} />
      <ServiceCategories activeServiceId={service.id} />
      <ServiceDetails service={service} />
      <ProcessTimeline service={service} />
      <FAQSection service={service} />
      <CTASection />
      <Footer />
    </main>
  )
}