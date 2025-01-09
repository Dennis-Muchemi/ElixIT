'use client'

import React from 'react';
import { ArrowUpRight, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FeaturedWorkSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with animation */}
        <div 
          className={`max-w-3xl mb-20 transform transition-all duration-1000 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-teal-500 h-5 w-5" />
            <span className="text-slate-600 text-sm font-medium uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Crafting Success Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600"> Digital Innovation</span>
          </h2>
          <p className="text-lg text-slate-600">
            Explore our portfolio of transformative digital solutions that have helped businesses thrive in the digital age.
          </p>
        </div>

        {/* Project Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* View All Projects Button with hover animation */}
        <div className="text-center mt-16">
          <button 
            className="group relative inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg overflow-hidden"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 w-0 bg-teal-600 transition-all duration-[750ms] ease-out group-hover:w-full" />
            
            {/* Button content */}
            <span className="relative">View All Projects</span>
            <ArrowUpRight className="relative w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  index: number;
}

const ProjectCard = ({ title, category, image, description, stats, index }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 200 // Stagger the animations
  });

  return (
    <div 
      ref={ref}
      className={`group relative bg-slate-50 rounded-2xl overflow-hidden transform transition-all duration-700 hover:shadow-2xl ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Project Image with parallax effect */}
      <div className="relative h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="relative p-8 bg-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
        {/* Category Tag */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
          {category}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>

        {/* Project Stats with sequential fade-in */}
        <div className="flex gap-6 mb-6">
          {stats.map((stat, statIndex) => (
            <div 
              key={statIndex}
              className="group/stat"
              style={{ 
                animationDelay: `${(index * 200) + (statIndex * 100)}ms` 
              }}
            >
              <div className="text-2xl font-bold text-slate-900 group-hover/stat:text-teal-500 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* View Project Link with animated arrow */}
        <a 
          href="#" 
          className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium group/link"
        >
          View Project 
          <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "E-commerce Revolution",
    category: "E-commerce",
    image: "https://placehold.co/800x600",
    description: "A complete digital transformation for a leading retail brand, resulting in 200% increase in online sales.",
    stats: [
      { value: "200%", label: "Growth" },
      { value: "1.2M", label: "Users" },
      { value: "35%", label: "Conversion" }
    ]
  },
  {
    title: "FinTech Innovation",
    category: "Web Application",
    image: "https://placehold.co/800x600",
    description: "Modern banking platform with advanced security features and seamless user experience.",
    stats: [
      { value: "500K", label: "Users" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.9", label: "Rating" }
    ]
  },
  {
    title: "Healthcare Platform",
    category: "Mobile App",
    image: "https://placehold.co/800x600",
    description: "Revolutionary healthcare management system connecting patients with healthcare providers.",
    stats: [
      { value: "1M+", label: "Users" },
      { value: "45%", label: "Efficiency" },
      { value: "4.8", label: "Rating" }
    ]
  },
  {
    title: "Educational Tech",
    category: "Web Platform",
    image: "https://placehold.co/800x600",
    description: "Interactive learning platform making education accessible to millions worldwide.",
    stats: [
      { value: "2M+", label: "Students" },
      { value: "150+", label: "Courses" },
      { value: "98%", label: "Satisfaction" }
    ]
  }
];

export default FeaturedWorkSection;