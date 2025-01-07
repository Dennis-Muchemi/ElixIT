import React from 'react';
import Footer from '@/components/layout/Footer';
import { FloatingCTA } from './FloatingCTA';
import { ProjectFilters } from './ProjectFilters';
import { ProjectGrid } from './ProjectGrid';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

interface ProjectsPageProps {
  initialProjects: Project[];
}

export function ProjectsPage({ initialProjects }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = React.useState('All');

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Fashion Store Redesign",
      description: "A complete overhaul of the online shopping experience for a luxury fashion brand.",
      image: "https://placehold.co/600x400",
      category: "E-commerce",
      technologies: ["React", "Node.js"],
    },
    {
        id: 2,
        title: "Analytics Dashboard",
        description: "A powerful yet intuitive dashboard for complex data visualization.",
        image: "https://placehold.co/600x400",
        category: "SaaS",
        technologies: ["Next.js", "TypeScript"]
      },
      {
        id: 3,
        title: "Fitness Tracking App",
        description: "A comprehensive fitness tracking app with social features and AI coaching.",
        image: "https://placehold.co/600x400",
        category: "Mobile",
        technologies: ["React Native", "Firebase"]
      },
      {
        id: 4,
        title: "E-commerce Platform",
        description: "A comprehensive e-commerce platform with secure payment processing and inventory management.",
        image: "https://placehold.co/600x400",
        category: "E-commerce",
        technologies: ["React", "Node.js"]
      },
      {
        id: 5,
        title: "Real-Time Chat Application",
        description: "A real-time chat application with secure authentication and real-time messaging.",
        image: "https://placehold.co/600x400",
        category: "Web",
        technologies: ["React", "Node.js"]
      },
      {
        id: 6,
        title: "Social Media Platform",
        description: "A social media platform with user-generated content and personalized feeds.",
        image: "https://placehold.co/600x400",
        category: "Web",
        technologies: ["React", "Node.js"]
      },
    // Add more projects...
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
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

      <FloatingCTA />

      <ProjectFilters 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <ProjectGrid projects={projects} />

      <Footer />
    </div>
  );
}