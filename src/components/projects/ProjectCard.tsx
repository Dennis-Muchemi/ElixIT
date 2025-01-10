import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

export default function ProjectCard({ project, className = '', index }: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-xl overflow-hidden shadow-sm 
        hover:shadow-md transition-all duration-500 h-fit ${className}
        animate-[fadeInUp_0.6s_ease-out] [animation-fill-mode:both]`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative aspect-video">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700
              group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/75 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4
              group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex flex-wrap gap-2">
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
            group-hover:text-teal-700 transition-all duration-300">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </div>
  );
}