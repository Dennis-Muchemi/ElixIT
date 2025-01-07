// src/app/projects/page.tsx
'use client';

import { ProjectsPage } from '@/components/projects/ProjectsPage';
import { projects } from '@/data/projects';

export default function Page() {
  return <ProjectsPage initialProjects={projects} />;
}