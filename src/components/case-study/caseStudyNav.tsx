import React from 'react';

interface CaseStudyNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  progress: number;
}

export function CaseStudyNav({ activeSection, onSectionChange, progress }: CaseStudyNavProps) {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'process', label: 'Process' },
    { id: 'results', label: 'Results' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-0.5 bg-teal-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-8 overflow-x-auto hide-scrollbar">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`relative py-2 text-sm font-medium whitespace-nowrap transition-colors
                ${activeSection === section.id ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}
            >
              {section.label}
              {activeSection === section.id && (
                <span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 
                    animate-[scaleX_0.3s_ease-out]"
                  style={{ transformOrigin: 'left', animationFillMode: 'both' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}