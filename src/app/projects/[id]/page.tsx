// src/app/projects/[id]/page.tsx


import { CaseStudyPage } from '@/components/case-study/CaseStudyPage';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const project = projects.find(p => p.id === parseInt(params.id));
  
  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}