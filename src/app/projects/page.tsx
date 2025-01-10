'use client';

import { ProjectsPage } from '@/components/projects/ProjectsPage';
import { projects } from '@/data/projectsData';

// Add this type definition right here in the same file
type Props = {
  initialProjects: typeof projects;
};

// Add the Props type to ProjectsPage
const TypedProjectsPage = ProjectsPage as React.ComponentType<Props>;

export default function Page() {
  return <TypedProjectsPage initialProjects={projects} />;
}