'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

export function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-24">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Insights & Innovations in
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent"> Web Development</span>
          </h1>
          <p className="text-xl text-slate-300">
            Discover the latest trends, techniques, and thought leadership in web development and design.
          </p>

          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors">
              <Search size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}