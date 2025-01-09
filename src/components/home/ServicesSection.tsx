'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Globe, ShoppingCart } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Transforming Ideas Into
            <span className="text-teal-600"> Digital Success</span>
          </h2>
          <p className="text-lg text-slate-600">
            We offer comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
}

const ServiceCard = ({ title, description, icon, features, index }: ServiceCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-lg bg-teal-50">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>
      
      <p className="text-slate-600 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li 
            key={i}
            className="flex items-center gap-2 text-slate-700"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const services = [
  {
    title: 'Web Development',
    description: 'Custom web solutions built with cutting-edge technologies.',
    icon: <Code className="w-6 h-6 text-teal-600" />,
    features: [
      'Custom Website Development',
      'Web Application Development',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that engage your users.',
    icon: <Palette className="w-6 h-6 text-teal-600" />,
    features: [
      'User Interface Design',
      'User Experience Design',
      'Prototyping',
      'Design Systems'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing to grow your online presence.',
    icon: <Globe className="w-6 h-6 text-teal-600" />,
    features: [
      'SEO Optimization',
      'Content Strategy',
      'Social Media Marketing',
      'Analytics & Reporting'
    ]
  },
  {
    title: 'E-commerce Solutions',
    description: 'End-to-end e-commerce development and optimization.',
    icon: <ShoppingCart className="w-6 h-6 text-teal-600" />,
    features: [
      'E-commerce Development',
      'Payment Integration',
      'Inventory Management',
      'Shopping Cart Optimization'
    ]
  }
];

export default ServicesSection; 