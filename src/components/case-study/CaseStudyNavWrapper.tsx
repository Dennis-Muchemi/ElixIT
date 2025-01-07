'use client'

import { useState } from 'react';
import { CaseStudyNav } from '@/components/case-study/caseStudyNav';

export function CaseStudyNavWrapper() {
  const [activeSection, setActiveSection] = useState('overview');
  const [progress, setProgress] = useState(0);

  return (
    <CaseStudyNav
      activeSection={activeSection}
      onSectionChange={setActiveSection}
      progress={progress}
    />
  );
} 