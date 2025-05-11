'use client'

import { useState, useEffect, useRef } from 'react';
import { X, Send, Calendar, Mail, ArrowRight } from 'lucide-react';

interface GetStartedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define Calendly type to avoid TypeScript errors
declare global {
  interface Window {
    Calendly?: any;
  }
}

const GetStartedPopup: React.FC<GetStartedPopupProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'message' | 'appointment'>('message');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  // Use a ref to track when we should initialize Calendly
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const hasInitializedRef = useRef<boolean>(false);
  
  // Formspree form ID - replace with your actual form ID
  const FORM_ID = 'xrgwdoab'; // Replace with your actual Formspree form ID

  // Function to load the Calendly script if it doesn't exist
  const loadCalendlyScript = () => {
    return new Promise<void>((resolve) => {
      // Check if script already exists
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
    if (window.Calendly && calendlyContainerRef.current) {
      // Clear any existing content in the container
      while (calendlyContainerRef.current.firstChild) {
        calendlyContainerRef.current.removeChild(calendlyContainerRef.current.firstChild);
      }
      
      // Create a new div for Calendly to initialize in
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'calendly-inline-widget';
      widgetDiv.style.minWidth = '320px';
      widgetDiv.style.height = '100%';
      widgetDiv.setAttribute('data-url', 'https://calendly.com/dennismuchemi401/30min?hide_gdpr_banner=1&primary_color=669da6');
      
      calendlyContainerRef.current.appendChild(widgetDiv);
      
      // Initialize Calendly in the new div
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/dennismuchemi401/30min?hide_gdpr_banner=1&primary_color=669da6',
        parentElement: widgetDiv,
        prefill: {},
        utm: {}
      });
      
      hasInitializedRef.current = true;
    }
  };

  // Effect to handle Calendly initialization when tab changes or popup opens
  useEffect(() => {
    if (isOpen && activeTab === 'appointment') {
      loadCalendlyScript().then(() => {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          initializeCalendly();
        }, 100);
      });
    }
  }, [activeTab, isOpen]);
  
  // Reset success message when closing
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 300);
      
      // Reset the initialization flag when popup closes
      hasInitializedRef.current = false;
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to Formspree
      const response = await fetch(`https://formspree.io/f/mldbnaqz`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
      
      if (response.ok) {
        // Form submitted successfully
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
        
        // Close popup after showing success message
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        // Handle submission error
        console.error('Form submission failed');
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
      <div className="relative bg-slate-800 rounded-xl shadow-xl w-full max-w-md mx-4 overflow-hidden transform transition-all">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Get Started with ElixIT</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-700">
          <button
            className={`flex-1 py-3 font-medium transition-colors ${
              activeTab === 'message' 
                ? 'text-teal-500 border-b-2 border-teal-500' 
                : 'text-slate-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('message')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Mail size={18} />
              <span>Send Message</span>
            </div>
          </button>
          <button
            className={`flex-1 py-3 font-medium transition-colors ${
              activeTab === 'appointment' 
                ? 'text-teal-500 border-b-2 border-teal-500' 
                : 'text-slate-400 hover:text-white'
            }`}
            onClick={() => setActiveTab('appointment')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Calendar size={18} />
              <span>Book Appointment</span>
            </div>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {activeTab === 'message' && (
            <>
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600/20 mb-4">
                    <Send className="h-8 w-8 text-teal-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-300">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
          
          {activeTab === 'appointment' && (
            <div className="h-96" ref={calendlyContainerRef}>
              {/* Calendly will be initialized here */}
              <div className="flex items-center justify-center h-full text-slate-400">
                <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mr-3"></div>
                <span>Loading calendar...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStartedPopup;