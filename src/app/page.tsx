'use client'

import React, { useState, useEffect, useCallback } from 'react';
import NavigationBar from '@/components/layout/NavigationBar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import ClientSuccessSection from '@/components/home/ClientSuccessSection';
import FinalCTASection from '@/components/home/finalCTAsection';

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      document.documentElement.style.setProperty('--scroll-y', `${currentScroll}`);
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    // Set initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative bg-slate-900">
      <NavigationBar />

      {/* Main content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section with gradient transition */}
        <div className="relative bg-white">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900 to-transparent transform transition-transform"
               style={{
                 transform: `translateY(${Math.min(scrollY * 0.1, 32)}px)`
               }} />
          <ServicesSection />
        </div>

        {/* Featured Work Section with gradient transitions */}
        <div className="relative bg-slate-50">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent transform transition-transform"
               style={{
                 transform: `translateY(${Math.min(scrollY * 0.05, 32)}px)`
               }} />
          <FeaturedWorkSection />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Client Success Section */}
        <div className="relative bg-white">
          <ClientSuccessSection />
        </div>

        {/* Final CTA Section with gradient transition */}
        <div className="relative bg-slate-900">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent transform transition-transform"
               style={{
                 transform: `translateY(${Math.min(scrollY * 0.05, 32)}px)`
               }} />
          <FinalCTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;