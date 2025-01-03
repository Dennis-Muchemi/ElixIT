import React from 'react';
import NavigationBar from '@/components/layout/NavigationBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import ClientSuccessSection from '@/components/home/ClientSuccessSection';
import FinalCTASection from '@/components/home/finalCTAsection';

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Top gradient overlay for smooth section transitions */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent z-20 pointer-events-none" />

      {/* Navigation */}
      <NavigationBar />

      {/* Main Content */}
      <main>
        {/* Hero Section with full-height and centered content */}
        <div className="min-h-screen flex items-center">
          <HeroSection />
        </div>

        {/* Decorative divider */}
        <div className="relative h-32">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-50" />
        </div>

        {/* Services Section */}
        <div className="relative">
          <ServicesSection />
        </div>

        {/* Featured Work Section */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-white" />
          <FeaturedWorkSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-slate-50" />
        </div>

        {/* Client Success Section */}
        <div className="relative">
          <ClientSuccessSection />
        </div>

        {/* Final CTA Section */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
          <FinalCTASection />
        </div>
      </main>

      {/* Bottom gradient overlay for smooth transition to footer */}
      <div className="relative h-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      </div>

      {/* Footer */}
      <Footer />

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Radial gradient backgrounds that follow scroll position */}
        <div className="absolute top-1/4 left-0 w-full h-screen bg-gradient-to-br from-teal-500/5 to-transparent" 
             style={{ transform: 'translate3d(0, calc(var(--scroll-y, 0) * -0.5px), 0)' }} />
        <div className="absolute top-3/4 right-0 w-full h-screen bg-gradient-to-bl from-accent-rose/5 to-transparent"
             style={{ transform: 'translate3d(0, calc(var(--scroll-y, 0) * -0.3px), 0)' }} />
      </div>
    </div>
  );
};

// Add scroll position tracking for parallax effects
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', window.scrollY.toString());
  });
}

export default HomePage;