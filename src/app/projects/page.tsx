'use client';

import { ProjectsPage } from '@/components/projects/ProjectsPage';
import { projects } from '@/data/projectsData';

type Props = {
  initialProjects: typeof projects;
};

const TypedProjectsPage = ProjectsPage as React.ComponentType<Props>;

export default function Page() {
  return <TypedProjectsPage initialProjects={projects} />;
}