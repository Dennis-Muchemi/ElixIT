import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">ElixIT</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/services" className="text-slate-300 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="/projects" className="text-slate-300 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="/about" className="text-slate-300 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="/blog" className="text-slate-300 hover:text-white transition-colors duration-300">
                Blog
              </a>
              <a href="/contact" className="text-slate-300 hover:text-white transition-colors duration-300">
                Contact
              </a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 transform hover:-translate-y-0.5">
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
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg">
              <a href="/services" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                Services
              </a>
              <a href="/projects" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                Projects
              </a>
              <a href="/about" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                About
              </a>
              <a href="/blog" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                Blog
              </a>
              <a href="/contact" className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;