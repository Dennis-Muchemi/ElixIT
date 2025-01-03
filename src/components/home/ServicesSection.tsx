import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,148,136,0.1),rgba(13,148,136,0))]" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[linear-gradient(135deg,rgba(139,92,246,0.05),rgba(244,63,94,0.05))]" />
        {/* Additional decorative elements */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[linear-gradient(135deg,rgba(13,148,136,0.05),rgba(13,148,136,0))]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default HeroSection;