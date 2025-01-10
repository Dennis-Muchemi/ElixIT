'use client';

import React from 'react';
import { CaseStudyHeader } from './caseStudyHeader';
import { CaseStudyNavWrapper } from './CaseStudyNavWrapper';
import { CaseStudyContent } from './caseStudyContent';
import { CaseStudyGallery } from './caseStudyGallery';
import { CaseStudyProcess } from './caseStudyProcess';
import { CaseStudyResults } from './caseStudyResults';
import { CaseStudyFooter } from './caseStudyFooter';
import { projects } from '@/data/projectsData';
import { notFound } from 'next/navigation';

// Update the Project interface to match your projectsData structure
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  client?: string;
  year: number;
  technologies: string[];
  fullCase: {
    overview: string;
    challenge: string;
    challengePoints: string[];
    solution: string;
    solutionPoints: string[];
    process: {
      title: string;
      duration: string;
      description: string;
    }[];
    results: {
      stats: {
        [key: string]: {
          value: string;
          label: string;
        };
      };
      summary: string;
      keyAchievements: string[];
    };
    testimonial?: {
      quote: string;
      author: string;
      position: string;
      company: string;
      image?: string;
    };
    gallery: {
      image: string;
      caption: string;
      alt: string;
    }[];
    timeline: string;
    teamSize: string;
    deliverables: string[];
    liveUrl?: string;
    nextSteps?: string[];
  };
}

interface CaseStudyPageProps {
  projectId: number;
}

export default function CaseStudyPage({ projectId }: CaseStudyPageProps) {
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }

  // Find the next project for the footer
  const currentIndex = projects.findIndex(p => p.id === projectId);
  const nextProject = projects[currentIndex + 1] || projects[0];

  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHeader project={project} />
      <CaseStudyNavWrapper />
      <main>
        <section id="overview" className="pt-20">
          <CaseStudyContent project={project} />
        </section>
        
        <section id="process" className="pt-20">
          <CaseStudyProcess project={project} />
        </section>
        
        <section id="gallery" className="pt-20">
          <CaseStudyGallery project={project} images={project.fullCase.gallery}/>
        </section>
        
        <section id="results" className="pt-20">
          <CaseStudyResults project={project} results={project.fullCase.results}/>
        </section>
      </main>
      <CaseStudyFooter nextProject={nextProject} />
    </div>
  );
}