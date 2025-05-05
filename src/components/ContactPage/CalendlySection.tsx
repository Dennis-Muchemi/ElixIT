'use client';

import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

export const CalendlySection = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
      // Also cleanup any Calendly-related elements
      const elements = document.getElementsByClassName('calendly-inline-widget');
      while(elements.length > 0) {
        const element = elements[0];
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="h-screen bg-slate-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-6 text-center py-8">
        <h2 className="text-3xl font-bold mb-2">Schedule a Consultation</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Book a free 30-minute consultation to discuss your project in detail.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto flex-1 h-[calc(100vh-12rem)]">
          <div className="h-full rounded-lg">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/dennismuchemi401/30min?hide_gdpr_banner=1&primary_color=669da6"
              style={{ minWidth: '320px', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};