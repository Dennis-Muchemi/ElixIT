"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyProcessProps {
  projectId: string;
}

export function CaseStudyProcess({ projectId }: CaseStudyProcessProps) {
  const steps = [
    {
      title: 'Discovery',
      description: 'Understanding business goals, user needs, and technical requirements',
      duration: '2 weeks',
    },
    {
      title: 'Design',
      description: 'Creating wireframes, visual designs, and interactive prototypes',
      duration: '4 weeks',
    },
    {
      title: 'Development',
      description: 'Building the platform with a focus on performance and scalability',
      duration: '8 weeks',
    },
    {
      title: 'Testing & Launch',
      description: 'Rigorous testing and staged rollout to ensure smooth transition',
      duration: '2 weeks',
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-1/2 px-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-2">{step.description}</p>
                  <span className="text-sm text-teal-600 font-medium">
                    {step.duration}
                  </span>
                </div>

                {/* Timeline point */}
                <div className="w-4 h-4 rounded-full bg-teal-500 relative z-10">
                  <div className="absolute inset-0 rounded-full bg-teal-100 animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}