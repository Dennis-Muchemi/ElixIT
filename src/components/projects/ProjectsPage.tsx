import React from 'react';
import Footer from '@/components/layout/Footer';
import { FloatingCTA } from './FloatingCTA';
import { ProjectFilters } from './ProjectFilters';
import { ProjectGrid } from './ProjectGrid';
import { projects } from '@/data/projectsData';
import NavigationBar from '../layout/NavigationBar';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [filteredProjects, setFilteredProjects] = React.useState(projects);

  React.useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.category === activeFilter
      ));
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-slate-50">
      <NavigationBar />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 
              animate-[fadeIn_0.6s_ease-out] [animation-fill-mode:both]">
              Our Work
            </h1>
            <p className="text-xl text-slate-300 
              animate-[fadeIn_0.6s_ease-out_0.2s] [animation-fill-mode:both]">
              Explore our portfolio of digital experiences that drive engagement and deliver results.
            </p>
          </div>
        </div>
      </section>

      <ProjectFilters 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <ProjectGrid projects={filteredProjects} />

      <Footer />
    </div>
  );
}