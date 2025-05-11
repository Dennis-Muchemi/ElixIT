'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link'
import GetStartedPopup from '@/app/GetStartedPopup/GetStartedPopup';

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Base styles that match server and client render
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    mounted && isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
  }`;

  const handleGetStarted = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">ElixIT</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="/services" className="text-slate-300 hover:text-white transition-colors duration-300">
                Services
              </Link>
              <Link href="/projects" className="text-slate-300 hover:text-white transition-colors duration-300">
                Projects
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-white transition-colors duration-300">
                About
              </Link>
              {/*}
              <Link href="/blog" className="text-slate-300 hover:text-white transition-colors duration-300">
                Blog
              </Link>
              {*/}
              <Link href="/contact" className="text-slate-300 hover:text-white transition-colors duration-300">
                Contact
              </Link>
              <button 
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={handleGetStarted}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mounted && (
            <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg">
                <Link href="/home" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                  Home
                </Link>
                <Link href="/services" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                  Services
                </Link>
                <Link href="/projects" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                  Projects
                </Link>
                <Link href="/about" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                  About
                </Link>
                {/*}
                <Link href="/blog" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                  Blog
                </Link>
                {*/}
                <Link href="/contact" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <button 
                    className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Get Started Popup */}
      <GetStartedPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default NavigationBar;