// app/projects/[id]/page.tsx
import CaseStudyPage from '@/components/case-study/CaseStudyPage';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const projectId = parseInt(params.id);
  
  if (isNaN(projectId)) {
    notFound();
  }

  return <CaseStudyPage projectId={projectId} />;
}