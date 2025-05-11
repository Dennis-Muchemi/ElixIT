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
  const [debugMode, setDebugMode] = useState(false);

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

    // This ensures the page fits within the viewport width
    document.body.style.overflowX = 'hidden';

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflowX = '';
    };
  }, [handleScroll]);

  // Debug function to help identify the overflowing element
  const toggleDebugMode = () => {
    setDebugMode(!debugMode);
    
    if (!debugMode) {
      // Add outlines to all elements to see what's causing overflow
      const style = document.createElement('style');
      style.id = 'debug-overflow';
      style.innerHTML = `
        * {
          outline: 1px solid rgba(255, 0, 0, 0.2) !important;
        }
        .overflow-check {
          position: fixed;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px;
          border-radius: 5px;
          z-index: 9999;
          font-size: 12px;
        }
      `;
      document.head.appendChild(style);
      
      // Add a debugging overlay
      const div = document.createElement('div');
      div.className = 'overflow-check';
      div.id = 'overflow-check';
      div.innerHTML = 'Checking for overflow...';
      document.body.appendChild(div);
      
      // Check for elements wider than viewport
      setTimeout(() => {
        const viewportWidth = window.innerWidth;
        const elements = document.querySelectorAll('*');
        interface OverflowingElement {
          element: string;
          class: string;
          width: number;
          viewportWidth: number;
        }
        const overflowingElements: OverflowingElement[] = [];
        
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.width > viewportWidth) {
            overflowingElements.push({
              element: el.tagName,
              class: el.className,
              width: rect.width,
              viewportWidth
            });
          }
        });
        
        if (overflowingElements.length > 0) {
          console.log('Overflowing elements:', overflowingElements);
          const overflowCheck = document.getElementById('overflow-check');
          if (overflowCheck) {
            overflowCheck.innerHTML = `Found ${overflowingElements.length} overflowing elements.<br>Check console for details.`;
          }
        } else {
          const overflowCheck = document.getElementById('overflow-check');
          if (overflowCheck) {
            overflowCheck.innerHTML = 'No elements wider than viewport found.<br>Check for negative margins or position issues.';
          }
        }
      }, 1000);
    } else {
      // Remove debug styles
      const debugStyle = document.getElementById('debug-overflow');
      if (debugStyle) debugStyle.remove();
      
      const debugDiv = document.getElementById('overflow-check');
      if (debugDiv) debugDiv.remove();
    }
  };

  return (
    <div className="relative bg-slate-900 overflow-x-hidden">
      <NavigationBar />

      {/* Main content */}
      <main className="relative overflow-x-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section with gradient transition */}
        <div className="relative bg-white overflow-x-hidden">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900 to-transparent transform transition-transform"
               style={{
                 transform: `translateY(${Math.min(scrollY * 0.1, 32)}px)`
               }} />
          <ServicesSection />
        </div>

        {/* Featured Work Section with gradient transitions */}
        <div className="relative bg-slate-50 overflow-x-hidden">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent transform transition-transform"
               style={{
                 transform: `translateY(${Math.min(scrollY * 0.05, 32)}px)`
               }} />
          <FeaturedWorkSection />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Client Success Section */}
        <div className="relative bg-white overflow-x-hidden">
          <ClientSuccessSection />
        </div>

        {/* Final CTA Section with gradient transition */}
        <div className="relative bg-slate-900 overflow-x-hidden">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent transform transition-transform"
               style={{
                 transform: `translateY(${Math.min(scrollY * 0.05, 32)}px)`
               }} />
          <FinalCTASection />
        </div>
      </main>

      <Footer />
      
      {/* Debug button - only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <button 
          onClick={toggleDebugMode}
          className="fixed z-50 bottom-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-md text-sm"
        >
          {debugMode ? 'Disable Debug' : 'Debug Overflow'}
        </button>
      )}
    </div>
  );
};

export default HomePage;