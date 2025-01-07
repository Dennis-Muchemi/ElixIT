// src/components/case-study/CaseStudyPage.tsx
import React from 'react';
import { CaseStudyHeader } from '@/components/case-study/caseStudyHeader';
import { CaseStudyNavWrapper } from '@/components/case-study/CaseStudyNavWrapper';
import { CaseStudyContent } from '@/components/case-study/caseStudyContent';
import { CaseStudyGallery } from '@/components/case-study/caseStudyGallery';
import { CaseStudyProcess } from '@/components/case-study/caseStudyProcess';
import { CaseStudyResults } from '@/components/case-study/caseStudyResults';
import { CaseStudyFooter } from '@/components/case-study/caseStudyFooter';

interface CaseStudyPageProps {
  project: any; // Replace with your Project type
}

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHeader projectId={project.id} />
      <CaseStudyNavWrapper />
      <main>
        <CaseStudyContent projectId={project.id} />
        <CaseStudyGallery images={project.fullCase.gallery} />
        <CaseStudyProcess projectId={project.id} />
        <CaseStudyResults results={project.fullCase.results} />
      </main>
      <CaseStudyFooter projectId={project.id} />
    </div>
  );
}