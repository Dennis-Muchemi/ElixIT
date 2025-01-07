// src/components/projects/ProjectCard.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; // Add this import

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  className?: string;
  index: number;
}

export function ProjectCard({ project, className = '', index }: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-xl overflow-hidden shadow-sm 
        hover:shadow-md transition-all duration-500 ${className}
        animate-[fadeInUp_0.6s_ease-out] [animation-fill-mode:both]`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link 
        href={`/projects/${project.id}`}
        className="block" // Add this to make the entire card clickable
      >
        <div className="relative">
          <Image 
            src={project.image} 
            alt={project.title}
            className={`w-full object-cover transition-transform duration-700
              group-hover:scale-105
              ${className.includes('row-span-2') ? 'h-96' : 'h-64'}
            `}
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/75 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4
              group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center space-x-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-medium text-white 
                    bg-teal-500/20 rounded-full backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
          <p className="text-slate-500 text-sm mb-4">{project.description}</p>
          <span className="inline-flex items-center text-sm font-medium text-teal-600 
            hover:text-teal-700 transition-all duration-300 group-hover:translate-x-2">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </div>
      </Link>
    </div>
  );
}