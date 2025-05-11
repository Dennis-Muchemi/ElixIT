'use client';

import { useEffect, useRef } from 'react';

export const CalendlySection = () => {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  
  // Function to load the Calendly script if needed
  const loadCalendlyScript = () => {
    return new Promise<void>((resolve) => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      
      if (existingScript) {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  };
  
  // Function to initialize the Calendly widget
  const initializeCalendly = () => {
    if (!calendlyContainerRef.current) return;
    
    // Clear any existing content
    while (calendlyContainerRef.current.firstChild) {
      calendlyContainerRef.current.removeChild(calendlyContainerRef.current.firstChild);
    }
    
    // Create the widget container
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'calendly-inline-widget';
    widgetDiv.setAttribute('data-url', 'https://calendly.com/dennismuchemi401/30min?hide_gdpr_banner=1&primary_color=669da6');
    widgetDiv.setAttribute('data-resize', 'true');
    widgetDiv.style.minWidth = '320px';
    widgetDiv.style.width = '100%';
    widgetDiv.style.height = '700px';
    
    calendlyContainerRef.current.appendChild(widgetDiv);
    
    // Initialize Calendly if the global object exists
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/dennismuchemi401/30min?hide_gdpr_banner=1&primary_color=669da6',
        parentElement: widgetDiv,
        prefill: {},
        utm: {}
      });
    }
  };
  
  // Register visibility change listener to reinitialize when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        initializeCalendly();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  // Initialize Calendly on component mount and handle cleanup
  useEffect(() => {
    loadCalendlyScript().then(() => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initializeCalendly();
      }, 100);
    });
    
    // Cleanup function
    return () => {
      // Remove Calendly iframes
      const calendlyIFrames = document.querySelectorAll('iframe[src*="calendly.com"]');
      calendlyIFrames.forEach(iframe => {
        if (iframe.parentNode) {
          if ((iframe.parentNode as HTMLElement).classList.contains('calendly-inline-widget')) {
            if (iframe.parentNode.parentNode) {
              iframe.parentNode.parentNode.removeChild(iframe.parentNode);
            }
          } else {
            iframe.parentNode.removeChild(iframe);
          }
        }
      });
    };
  }, []);

  return (
    <section className="min-h-screen bg-slate-50 flex flex-col py-8">
      <div className="max-w-8xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Schedule a Consultation</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Book a free 30-minute consultation to discuss your project in detail.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto w-full">
        <div className="rounded-lg" ref={calendlyContainerRef}>
          {/* Loading indicator */}
          <div className="flex items-center justify-center h-96 text-slate-400">
            <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mr-3"></div>
            <span>Loading calendar...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define Calendly type to avoid TypeScript errors
declare global {
  interface Window {
    Calendly?: any;
  }
}