'use client'

import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Crafting Digital 
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent"> Excellence</span>
          </h1>
          <p className="text-xl text-slate-300">
            At ElixIT, we believe in transforming businesses through innovative digital solutions. 
            Our journey started with a simple mission: to make exceptional web design accessible to all.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/team-collaboration.jpg" // You'll need to add this image
              alt="Team Collaboration"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}