'use client'

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const ClientSuccessSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal-50 opacity-60 rounded-full blur-3xl"
          style={{
            transform: 'translate(25%, -25%) rotate(-5deg)',
            transition: 'transform 0.7s ease-out',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-rose-50 opacity-60 rounded-full blur-3xl"
          style={{
            transform: 'translate(-25%, 25%) rotate(5deg)',
            transition: 'transform 0.7s ease-out',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Stats Grid with fade-in and slide-up animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-700 hover:-translate-y-1 ${
                sectionInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-slate-900 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Section Header with fade-in animation */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-700 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
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
        <div 
          className={`max-w-4xl mx-auto mb-20 transform transition-all duration-700 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-teal-50 rounded-full opacity-50" />
            <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-16 h-16 bg-teal-50 rounded-full opacity-50" />

            {/* Testimonial Content */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <p className="text-lg md:text-xl text-slate-600 italic mb-8">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
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

              {/* Navigation Buttons */}
              <button 
                onClick={prevTestimonial}
                className="absolute top-1/2 -left-16 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-slate-600" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute top-1/2 -right-16 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-slate-600" />
              </button>
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
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center transform transition-all duration-700 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {clientLogos.map((logo, index) => (
            <div 
              key={index}
              className="group p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image 
                src={logo} 
                alt="Client Logo"
                className="w-full h-12 object-contain"
                width={200}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const stats = [
  { value: "--", label: "Client Satisfaction" },
  { value: "--", label: "Projects Delivered" },
  { value: "--", label: "Industry Awards" },
  { value: "--", label: "Years Experience" }
];

const testimonials = [
  {
    content: "ElixIT transformed our online presence completely. Their attention to detail and innovative solutions helped us achieve a 200% increase in user engagement.",
    name: "Sarah Johnson",
    position: "--",
    avatar: "/api/placeholder/100/100"
  },
  {
    content: "Working with ElixIT was a game-changer for our business. Their team's expertise and dedication to excellence delivered results beyond our expectations.",
    name: "Michael Chen",
    position: "--",
    avatar: "/api/placeholder/100/100"
  },
  {
    content: "The team at ElixIT doesn't just build websites, they create digital experiences that drive real business results. They're truly partners in our success.",
    name: "Emma Davis",
    position: "--",
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