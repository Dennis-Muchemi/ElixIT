import React from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
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
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        // First card spans 2 columns on large screens
                        const isFirstCard = index === 0;
                        const cardClassName = `h-full ${isFirstCard ? 'lg:col-span-2' : ''}`;
                        
                        return (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                className={cardClassName}
                                index={index}
                            />
                        );
                    })}
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