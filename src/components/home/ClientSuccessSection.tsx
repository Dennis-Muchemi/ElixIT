import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Award } from 'lucide-react';

const ClientSuccessSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="text-teal-500 h-5 w-5" />
            <span className="text-slate-600 text-sm font-medium uppercase tracking-wider">Client Success</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-slate-600">
            Hear from our clients about their transformative journey with ElixIT.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-teal-50 rounded-full opacity-50" />
            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-16 h-16 bg-teal-50 rounded-full opacity-50" />

            {/* Testimonial Content */}
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>

              {/* Testimonial Slider */}
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <p className="text-lg md:text-xl text-slate-600 italic mb-8">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-bold text-slate-900">{testimonial.name}</div>
                          <div className="text-slate-600">{testimonial.position}</div>
                        </div>
                        <div className="ml-auto flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
                <button 
                  onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                  className="absolute -left-12 p-2 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-600" />
                </button>
                <button 
                  onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                  className="absolute -right-12 p-2 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-slate-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index 
                    ? 'bg-teal-500 w-4' 
                    : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <div 
              key={index}
              className="group p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <img src={logo} alt="Client Logo" className="w-full h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "250+", label: "Projects Delivered" },
  { value: "15+", label: "Industry Awards" },
  { value: "10+", label: "Years Experience" }
];

const testimonials = [
  {
    content: "ElixIT transformed our online presence completely. Their attention to detail and innovative solutions helped us achieve a 200% increase in user engagement.",
    name: "Sarah Johnson",
    position: "CEO at TechCorp",
    avatar: "/api/placeholder/100/100"
  },
  {
    content: "Working with ElixIT was a game-changer for our business. Their team's expertise and dedication to excellence delivered results beyond our expectations.",
    name: "Michael Chen",
    position: "Founder at InnovateLabs",
    avatar: "/api/placeholder/100/100"
  },
  {
    content: "The team at ElixIT doesn't just build websites, they create digital experiences that drive real business results. They're truly partners in our success.",
    name: "Emma Davis",
    position: "Marketing Director at GrowthX",
    avatar: "/api/placeholder/100/100"
  }
];

const clientLogos = [
  "/api/placeholder/200/100",
  "/api/placeholder/200/100",
  "/api/placeholder/200/100",
  "/api/placeholder/200/100",
  "/api/placeholder/200/100"
];

export default ClientSuccessSection;