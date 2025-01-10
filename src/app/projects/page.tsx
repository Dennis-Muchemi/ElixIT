// src/app/projects/page.tsx
'use client';

import { ProjectsPage } from '@/components/projects/ProjectsPage';
import { projects } from '@/data/projectsData';

export default function Page() {
  return <ProjectsPage initialProjects={projects} />;
}