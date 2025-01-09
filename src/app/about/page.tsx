import { AboutHero } from '@/components/aboutPage/AboutHero'
import { MissionVision } from '@/components/aboutPage/MissionVision'
import { CompanyValues } from '@/components/aboutPage/CompanyValues'
import { TeamSection } from '@/components/aboutPage/TeamSection'
import { Timeline } from '@/components/aboutPage/Timeline'
import { TechStack } from '@/components/aboutPage/TechStack'
import { Testimonials } from '@/components/aboutPage/Testimonials'
import Footer from '@/components/layout/Footer'
import NavigationBar from '@/components/layout/NavigationBar'


export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <AboutHero />
      <MissionVision />
      <CompanyValues />
      <TeamSection />
      <Timeline />
      <TechStack />
      <Testimonials />
      <Footer />
    </main>
  )
}
