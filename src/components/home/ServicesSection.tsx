'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Layout, RefreshCw, Search, Wrench, Database } from 'lucide-react';
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
            <span className="text-teal-600"> Custom Websites</span>
          </h2>
          <p className="text-lg text-slate-600">
            Expert web development solutions tailored to your business needs.
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
    title: 'Custom Website Development',
    description: 'Hand-coded websites built from scratch for unique functionality and optimal performance.',
    icon: <Code className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/custom-web-development',
    features: [
      {
        text: 'Custom Functionality',
        link: '/services/custom-web-development'
      },
      {
        text: 'Performance Optimization',
        link: '/services/custom-web-development#performance'
      },
      {
        text: 'Responsive Design',
        link: '/services/custom-web-development#responsive'
      },
      {
        text: 'Technical Expertise',
        link: '/services/custom-web-development#expertise'
      }
    ]
  },
  {
    title: 'WordPress Development',
    description: 'Custom WordPress websites with powerful functionality and easy content management.',
    icon: <Layout className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/wordpress-development',
    features: [
      {
        text: 'Custom Theme Development',
        link: '/services/wordpress-development#themes'
      },
      {
        text: 'Plugin Integration',
        link: '/services/wordpress-development#plugins'
      },
      {
        text: 'WooCommerce Solutions',
        link: '/services/wordpress-development#woocommerce'
      },
      {
        text: 'Easy Content Management',
        link: '/services/wordpress-development#cms'
      }
    ]
  },
  {
    title: 'Website Redesign',
    description: 'Transform your outdated website into a modern, high-performing digital asset.',
    icon: <RefreshCw className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/website-redesign',
    features: [
      {
        text: 'Modern Design Implementation',
        link: '/services/website-redesign#design'
      },
      {
        text: 'User Experience Improvements',
        link: '/services/website-redesign#ux'
      },
      {
        text: 'Mobile Responsiveness',
        link: '/services/website-redesign#mobile'
      },
      {
        text: 'Performance Optimization',
        link: '/services/website-redesign#performance'
      }
    ]
  },
  {
    title: 'Additional Services',
    description: 'Comprehensive support for your website needs, from optimization to maintenance.',
    icon: <Wrench className="w-6 h-6 text-teal-600" />,
    titleLink: '/services/seo-optimization',
    features: [
      {
        text: 'SEO Optimization',
        link: '/services/seo-optimization'
      },
      {
        text: 'Website Maintenance',
        link: '/services/website-maintenance'
      },
      {
        text: 'Content Migration',
        link: '/services/content-migration'
      },
      {
        text: 'Technical Support',
        link: '/services/website-maintenance#support'
      }
    ]
  }
];

export default ServicesSection;