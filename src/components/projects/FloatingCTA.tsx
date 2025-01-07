import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isMinimized, setIsMinimized] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
      setIsMinimized(currentScrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <button
      className={`
        fixed right-6 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        ${isMinimized ? 'bottom-6' : 'top-24'}
        ${isMinimized 
          ? 'w-12 h-12 rounded-full bg-teal-600 hover:bg-teal-700' 
          : 'px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-sm font-medium'}
        text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1
      `}
    >
      {isMinimized ? (
        <ArrowUpRight className="w-5 h-5 m-auto" />
      ) : (
        <span className="flex items-center">
          Start a Project
          <ArrowUpRight className="ml-2 w-4 h-4" />
        </span>
      )}
    </button>
  );
}