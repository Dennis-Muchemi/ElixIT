'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface Service {
  id: string | number;
  label: string;
  hero: {
    title: string;
    description: string;
  };
}

export function ServicesHero({ service }: { service: Service }) {
  return (
    <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl">
            {service.hero.title}
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              {' '}{service.label}
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            {service.hero.description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Get Started
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}