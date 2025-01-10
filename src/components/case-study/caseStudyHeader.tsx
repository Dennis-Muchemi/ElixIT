import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/data/projectsData';

interface CaseStudyHeaderProps {
  project: Project;
}

export function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <section className="relative h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Back Navigation */}
      <div className="absolute top-8 left-8 z-20">
        <Link 
          href="/projects"
          className="flex items-center gap-2 text-white opacity-75 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Live Preview Button */}
      {project.fullCase.liveUrl && (
        <div className="absolute top-8 right-8 z-20">
          <a 
            href={project.fullCase.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg
              text-white hover:bg-white/20 transition-all duration-300"
          >
            View Live Site
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-3xl animate-[slideInUp_0.6s_ease-out]"
            style={{ animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-sm text-white/75 border border-white/20 rounded-full">
                {project.category}
              </span>
              <span className="px-3 py-1 text-sm text-white/75 border border-white/20 rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              {project.fullCase.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm text-white/75 bg-white/10 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
        <div 
          className="absolute right-0 top-0 w-1/2 h-full animate-[fadeIn_1s_ease-out]"
          style={{ 
            animationFillMode: 'both',
            background: 'radial-gradient(circle at 70% 30%, rgba(45, 212, 191, 0.15), transparent 60%)'
          }} 
        />
      </div>
    </section>
  );
}