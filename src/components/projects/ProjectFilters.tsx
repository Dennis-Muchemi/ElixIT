import React from 'react';
import { Filter, Search } from 'lucide-react';

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <section className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 overflow-x-auto">
            {['All', 'Web Design', 'Mobile Apps', 'Branding'].map((filter) => (
              <button
                key={filter}
                onClick={() => onFilterChange(filter)}
                className={`text-sm font-medium whitespace-nowrap ${
                  activeFilter === filter 
                    ? 'text-teal-600' 
                    : 'text-slate-600 hover:text-teal-600'
                } transition-colors`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-64 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg
                  text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>
            <button className="flex items-center text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
