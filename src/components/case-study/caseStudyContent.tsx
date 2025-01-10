import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projectsData';

interface CaseStudyContentProps {
  project: Project;
}

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Challenge Section */}
          <div className="space-y-6">
            <motion.h2 
              className="text-3xl font-bold text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Challenge
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.fullCase.challenge}
            </motion.p>
            <motion.ul 
              className="space-y-4 text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.fullCase.challengePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-teal-500" />
                  <span className="ml-4">{point}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Solution Section */}
          <div className="space-y-6">
            <motion.h2 
              className="text-3xl font-bold text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Solution
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.fullCase.solution}
            </motion.p>
            <motion.ul 
              className="space-y-4 text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {project.fullCase.solutionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-teal-500" />
                  <span className="ml-4">{point}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}