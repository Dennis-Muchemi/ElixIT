'use client'

import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url('/elixIT_images/hero_2.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center" style={backgroundStyle}>
      {/* Dark overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Background Elements */}
      {mounted && (
        <>
          {/* Animated gradient backgrounds */}
          <div 
            className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl"
            style={{
              transform: `translate3d(${-scrollY * 0.1}px, ${-scrollY * 0.15}px, 0)`,
              opacity: 1 - (scrollY * 0.002)
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent-rose/10 to-transparent rounded-full blur-3xl"
            style={{
              transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.15}px, 0)`,
              opacity: 1 - (scrollY * 0.002)
            }}
          />

          {/* Animated dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.2,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  transform: `translate3d(0, ${-scrollY * (0.1 + Math.random() * 0.2)}px, 0)`
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full pl-12 pt-16">
        <div 
          className="max-w-4xl"
          style={{
            transform: `translate3d(0, ${scrollY * 0.2}px, 0)`,
            opacity: Math.max(0, 1 - (scrollY * 0.001)),
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <div className="animate-fade-in-up-1">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-teal-400 h-5 w-5" />
              <span className="text-slate-300 text-sm uppercase tracking-wider">
                Web Design & Development
              </span>
            </div>
          </div>
          
          <div className="animate-fade-in-up-2">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transforming Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
                Digital Excellence
              </span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up-3">
            <p className="text-xl text-slate-300 mb-12 max-w-2xl">
              We combine cutting-edge technology with human-centered design to create 
              digital experiences that drive engagement and deliver exceptional results.
            </p>
          </div>

          <div className="animate-fade-in-up-4">
            <button className="group bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;