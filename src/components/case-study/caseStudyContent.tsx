"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyContentProps {
  projectId: string;
}

export function CaseStudyContent({ projectId }: CaseStudyContentProps) {
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
              The existing e-commerce platform was struggling with poor performance,
              low conversion rates, and an outdated user interface that didn't reflect
              the brand's luxury positioning.
            </motion.p>
            <motion.ul 
              className="space-y-4 text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-teal-500" />
                <span className="ml-4">Slow page load times affecting SEO and user experience</span>
              </li>
              {/* Add more list items */}
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
              We developed a modern, high-performance e-commerce platform using Next.js
              and a headless CMS, focusing on user experience and conversion optimization.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Tech Stack */}
              <div className="p-6 bg-slate-50 rounded-xl">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'].map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-white rounded-full text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Timeline */}
              <div className="p-6 bg-slate-50 rounded-xl">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">Timeline</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Project Duration</span>
                    <span>4 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Size</span>
                    <span>6 people</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}