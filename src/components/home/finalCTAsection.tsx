import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-accent-rose/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Animated dots grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-4 h-4 rounded-full bg-white animate-float" style={{ top: '10%', left: '15%' }} />
          <div className="absolute w-3 h-3 rounded-full bg-teal-400 animate-float" style={{ top: '20%', right: '20%', animationDelay: '1s' }} />
          <div className="absolute w-2 h-2 rounded-full bg-accent-rose animate-float" style={{ bottom: '30%', left: '30%', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
          <Sparkles className="w-4 h-4 text-teal-400" />
          <span className="text-sm text-white/80 font-medium">Let's Create Something Amazing</span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
            Digital Presence?
          </span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-12">
          Join the ranks of successful businesses that have elevated their digital presence with our expertise. Let's start your transformation journey today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-0.5">
            Start Your Project
            <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300">
            Schedule a Call
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-3xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="flex flex-col items-center transform hover:-translate-y-1 transition-transform duration-300"
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

      {/* Bottom decoration */}
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

// Add the float animation to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default FinalCTASection;