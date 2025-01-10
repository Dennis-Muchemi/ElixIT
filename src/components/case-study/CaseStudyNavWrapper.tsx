import React, { useState, useEffect } from 'react';
import { CaseStudyNav } from './caseStudyNav';

export function CaseStudyNavWrapper() {
  const [activeSection, setActiveSection] = useState('overview');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = 64; // Height of the navigation bar

    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollProgress = (window.scrollY / documentHeight) * 100;
      setProgress(Math.min(Math.max(scrollProgress, 0), 100));
    };

    const handleScroll = () => {
      let currentSection = '';
      const scrollPosition = window.scrollY + navHeight + 100; // Adding offset

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection && currentSection) {
        setActiveSection(currentSection);
      }

      calculateProgress();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleSectionChange = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64;
      const top = section.offsetTop - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <CaseStudyNav
      activeSection={activeSection}
      onSectionChange={handleSectionChange}
      progress={progress}
    />
  );
}