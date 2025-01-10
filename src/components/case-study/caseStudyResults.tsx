import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projectsData';

interface CaseStudyResultsProps {
  project: Project;
  results: {
    stats: {
      [key: string]: {
        value: string;
        label: string;
      };
    };
    summary: string;
    keyAchievements: string[];
  };
}

export function CaseStudyResults({ project }: CaseStudyResultsProps) {
  const { results, testimonial } = project.fullCase;
  const statsArray = Object.entries(results.stats);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-slate-900 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Project Results
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statsArray.map(([key, stat], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-slate-600 text-center mb-8">
            {results.summary}
          </p>
          <div className="space-y-4">
            {results.keyAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-white p-4 rounded-lg"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-teal-500" />
                <span className="text-slate-700">{achievement}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        {testimonial && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-xl text-slate-600 italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <cite className="not-italic">
              <div className="font-semibold text-slate-900">{testimonial.author}</div>
              <div className="text-sm text-slate-600">
                {testimonial.position} at {testimonial.company}
              </div>
            </cite>
          </motion.div>
        )}
      </div>
    </section>
  );
}