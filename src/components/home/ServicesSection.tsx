'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, ShoppingCart, Cpu } from 'lucide-react';
import Link from 'next/link';

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
  features: Array<{
    text: string;
    link: string;
  }>;
  titleLink: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, features, titleLink, index }: ServiceCardProps) => {
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
        <Link href={titleLink} className="group">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
            {title}
          </h3>
        </Link>
      </div>
      
      <p className="text-slate-600 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li 
            key={i}
            className="flex items-center gap-2 text-slate-700"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <Link 
              href={feature.link}
              className="hover:text-teal-600 transition-colors"
            >
              {feature.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const services = [
  {
    title: 'Web Design & Development',
    description: 'Custom websites and applications that combine stunning design with powerful functionality.',
    icon: <Code className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/web-development',
    features: [
      {
        text: 'Custom Website & App Development',
        link: '/services/web-development'
      },
      {
        text: 'Responsive UI/UX Design',
        link: '/services/ui-ux-design'
      },
      {
        text: 'CMS Integration',
        link: '/services/web-development#cms'
      },
      {
        text: 'Performance Optimization',
        link: '/services/technical-services#performance'
      }
    ]
  },
  {
    title: 'Brand & Digital Strategy',
    description: 'Comprehensive branding and digital solutions to establish your market presence.',
    icon: <Globe className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/branding',
    features: [
      {
        text: 'Brand Identity Development',
        link: '/services/branding'
      },
      {
        text: 'Digital Strategy',
        link: '/services/branding#strategy'
      },
      {
        text: 'Content Strategy',
        link: '/services/content-creation'
      },
      {
        text: 'Marketing Collateral',
        link: '/services/branding#collateral'
      }
    ]
  },
  {
    title: 'Technical Services',
    description: 'Expert technical solutions to keep your digital presence secure and efficient.',
    icon: <Cpu className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/technical-services',
    features: [
      {
        text: 'Hosting & Domain Management',
        link: '/services/technical-services#hosting'
      },
      {
        text: 'Security Implementation',
        link: '/services/technical-services#security'
      },
      {
        text: 'Performance Optimization',
        link: '/services/technical-services#performance'
      },
      {
        text: 'Technical Maintenance',
        link: '/services/technical-services#maintenance'
      }
    ]
  },
  {
    title: 'Digital Solutions',
    description: 'Integrated digital solutions including e-commerce and content management.',
    icon: <ShoppingCart className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/ecommerce',
    features: [
      {
        text: 'E-commerce Development',
        link: '/services/ecommerce'
      },
      {
        text: 'Content Management Systems',
        link: '/services/web-development#cms'
      },
      {
        text: 'Digital Marketing Integration',
        link: '/services/digital-marketing'
      },
      {
        text: 'Analytics & Reporting',
        link: '/services/analytics'
      }
    ]
  }
];

export default ServicesSection;