'use client'

import React from 'react';
import { ArrowUpRight, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

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
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>

        {/* View All Projects Button with hover animation */}
        <div className="text-center mt-16">
          <Link 
            href="/projects"
            className="group relative inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 z-0 bg-teal-600 transition-all duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left" />
            <span className="relative z-10">View All Projects</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface Stat {
  value: string;
  label: string;
}

interface ProjectCardProps {
  id: string;
  projectId: string;
  title: string;
  category: string;
  image: string;
  description: string;
  stats: Stat[];
  index: number;
}

const ProjectCard = ({ id, projectId, title, category, image, description, stats, index }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: index * 200
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
      <Link href={`/projects/${projectId}`} className="block">
        <div className="relative h-[300px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="relative p-8 bg-white transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
            {category}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
          <p className="text-slate-600 mb-6">{description}</p>

          <div className="flex gap-6 mb-6">
            {stats.map((stat: Stat, statIndex: number) => (
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

          <div>
            <span 
              className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium group/link cursor-pointer"
            >
              View Case Study 
              <ArrowUpRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

const projects = [
  {
    id: "la-maison-dor",
    projectId: "1", 
    title: "La Maison D'Or Restaurant Website",
    category: "Food & Hospitality",
    image: "/La_Maison_D'Or_photos/image_1_a.jpg",
    description: "A sophisticated fine dining restaurant website featuring an elegant design system, interactive booking system, and immersive user experience.",
    stats: [
      { value: "--", label: "Performance" },
      { value: "--", label: "Bookings" },
      { value: "--", label: "Engagement" }
    ]
  },
  {
    id: "harmony-wellness",
    projectId: "2",  
    title: "Harmony Wellness Center Website",
    category: "Health & Wellness",
    image: "/Harmony_wellness_center_photos/image_2_c.jpg",
    description: "A dynamic wellness center website featuring an interactive class scheduling system, seamless user experience, and comprehensive content management capabilities.",
    stats: [
      { value: "--", label: "Bookings" },
      { value: "--", label: "Engagement" },
      { value: "--", label: "Performance" }
    ]
  },
  {
    id: "chic-style",
    projectId: "3",  
    title: "Chic & Style Boutique Website",
    category: "E-commerce",
    image: "/boutique_photos/image_1.jpg",
    description: "A luxury fashion e-commerce website featuring elegant animations, interactive product displays, and sophisticated user experience design.",
    stats: [
      { value: "--", label: "Engagement" },
      { value: "--", label: "Conversion" },
      { value: "--", label: "Performance" }
    ]
  },
  {
    id: "elite-home",
    projectId: "4",  
    title: "Elite Home Services Website",
    category: "Service Business",
    image: "/elite_home_serv_photos/image_19_b.jpg",
    description: "A modern, high-performance website for a professional home services company featuring dynamic animations, interactive service booking, and real-time quote calculation.",
    stats: [
      { value: "--", label: "Bookings" },
      { value: "--", label: "Conversion" },
      { value: "--", label: "Mobile" }
    ]
  }
];

export default FeaturedWorkSection;