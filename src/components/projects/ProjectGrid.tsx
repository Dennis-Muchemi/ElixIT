import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const getCardSize = (index: number): string => {
    if (index % 7 === 0) return 'lg:col-span-2 lg:row-span-2';
    if (index % 5 === 0) return 'lg:col-span-2';
    if (index % 3 === 0) return 'lg:row-span-2';
    return '';
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={getCardSize(index)}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-slate-300 
            rounded-lg text-sm font-medium text-slate-600 hover:border-teal-500 
            hover:text-teal-600 transition-all duration-300 hover:-translate-y-1">
            <Layers className="h-4 w-4 mr-2" />
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}