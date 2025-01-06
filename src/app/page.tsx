'use client'

import React, { useState, useEffect } from 'react';
import NavigationBar from '@/components/layout/NavigationBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import ClientSuccessSection from '@/components/home/ClientSuccessSection';
import FinalCTASection from '@/components/home/finalCTAsection';
import { ScrollHandler } from '@/components/common/ScrollHandler';

const HomePage = () => {
  // Handle mounting state
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative bg-slate-900">
      {/* Fixed position elements */}
      <ScrollHandler />
      <NavigationBar />

      {/* Main content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <div className="relative bg-white">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900 to-transparent" />
          <ServicesSection />
        </div>

        {/* Featured Work Section */}
        <div className="relative bg-slate-50">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
          <FeaturedWorkSection />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Client Success Section */}
        <div className="relative bg-white">
          <ClientSuccessSection />
        </div>

        {/* Final CTA Section */}
        <div className="relative bg-slate-900">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
          <FinalCTASection />
        </div>
      </main>

      <Footer />

      {/* Background decorative elements - only rendered after mounting */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 left-0 w-full h-screen bg-gradient-to-br from-teal-500/5 to-transparent"
            style={{
              transform: `translate3d(0, calc(var(--scroll-y, 0) * -0.5px), 0)`,
              willChange: 'transform'
            }}
          />
          <div 
            className="absolute top-3/4 right-0 w-full h-screen bg-gradient-to-bl from-accent-rose/5 to-transparent"
            style={{
              transform: `translate3d(0, calc(var(--scroll-y, 0) * -0.3px), 0)`,
              willChange: 'transform'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;