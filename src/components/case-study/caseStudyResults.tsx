"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, ShoppingCart } from 'lucide-react';

interface CaseStudyResultsProps {
  results: {
    // Add the expected shape of your results data
  };
}

export function CaseStudyResults({ results }: CaseStudyResultsProps) {
  const resultsData = [
    {
      icon: TrendingUp,
      metric: '156%',
      label: 'Increase in conversion rate',
    },
    {
      icon: Users,
      metric: '2.3M',
      label: 'Monthly active users',
    },
    {
      icon: Clock,
      metric: '74%',
      label: 'Faster page load time',
    },
    {
      icon: ShoppingCart,
      metric: '3.2x',
      label: 'Increase in sales',
    },
  ];

  const testimonial = {
    quote: "The new platform has transformed our online presence and significantly improved our bottom line. The attention to detail and focus on user experience has made all the difference.",
    author: "Sarah Johnson",
    position: "CEO, Fashion Brand",
  };

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

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resultsData.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <result.icon className="w-8 h-8 text-teal-500 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {result.metric}
              </div>
              <div className="text-sm text-slate-600">{result.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
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
            <div className="text-sm text-slate-600">{testimonial.position}</div>
          </cite>
        </motion.div>
      </div>
    </section>
  );
}