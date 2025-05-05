'use client'

import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FinalCTASection = () => {
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Add background image style
  const backgroundStyle = {
    backgroundImage: `url('/elixIT_images/hero_4.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      ref={ref} 
      className="relative py-24 overflow-hidden"
      style={backgroundStyle}
    >
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-black/40">
        {mounted && (
          <>
            {/* Animated gradient orbs */}
            <div 
              className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl"
              style={{
                transform: `translate3d(0, calc(var(--scroll-y, 0) * -0.1px), 0)`,
                willChange: 'transform'
              }}
            />
            <div 
              className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-accent-rose/10 to-transparent rounded-full blur-3xl"
              style={{
                transform: `translate3d(0, calc(var(--scroll-y, 0) * -0.05px), 0)`,
                willChange: 'transform'
              }}
            />

            {/* Animated floating dots */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-float opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  transform: `translate3d(0, calc(var(--scroll-y, 0) * -${0.05 + Math.random() * 0.1}px), 0)`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Content - Kept exactly the same */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8 transform transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Sparkles className="w-4 h-4 text-teal-400" />
          <span className="text-sm text-white/80 font-medium">
            Let's Create Something Amazing
          </span>
        </div>

        <h2 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Ready to Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
            Digital Presence?
          </span>
        </h2>

        <p 
          className={`max-w-2xl mx-auto text-lg text-slate-300 mb-12 transform transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Join the ranks of successful businesses that have elevated their digital 
          presence with our expertise. Let's start your transformation journey today.
        </p>

        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group relative inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-lg overflow-hidden">
            <div className="absolute inset-0 w-0 bg-teal-600 transition-all duration-[750ms] ease-out group-hover:w-full" />
            <span className="relative">Start Your Project</span>
            <ArrowRight className="relative w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300">
            Schedule a Call
          </button>
        </div>

        <div 
          className={`mt-16 transform transition-all duration-700 delay-400 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-3xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="flex flex-col items-center transform hover:-translate-y-1 transition-transform duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {indicator.value}
                </div>
                <div className="text-sm text-slate-400">
                  {indicator.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent" />
    </section>
  );
};

const trustIndicators = [
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Satisfaction" },
  { value: "14 Day", label: "Delivery" },
  { value: "No Lock-in", label: "Contracts" }
];

export default FinalCTASection;