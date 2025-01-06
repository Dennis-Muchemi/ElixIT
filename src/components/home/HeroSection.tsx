'use client'

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20"> {/* Changed from min-h-screen to pt-20 */}
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-teal-400 h-5 w-5" />
            <span className="text-slate-300 text-sm uppercase tracking-wider">Web Design & Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transforming Ideas Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
              Digital Excellence
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl">
            We combine cutting-edge technology with human-centered design to create 
            digital experiences that drive engagement and deliver exceptional results.
          </p>

          <button className="group bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
            Get Started
            <ArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Decorative dots grid */}
        <div className="absolute top-12 right-0 grid grid-cols-3 gap-4 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-teal-400" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;