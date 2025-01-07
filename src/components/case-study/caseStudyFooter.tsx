"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyFooterProps {
  projectId: string;
}

export function CaseStudyFooter({ projectId }: CaseStudyFooterProps) {
  const nextProject = {
    id: '2',
    title: 'Analytics Dashboard',
    category: 'SaaS Platform',
    image: '/api/placeholder/800/400',
  };

  return (
    <section className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Next Project Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-sm text-slate-500">Next Project</span>
            <h3 className="text-2xl font-bold text-slate-900">{nextProject.title}</h3>
            <p className="text-slate-600">{nextProject.category}</p>
            <Link
              href={`/projects/${nextProject.id}`}
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
            >
              View Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          {/* Image Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden"
          >
            <img
              src={nextProject.image}
              alt={nextProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}