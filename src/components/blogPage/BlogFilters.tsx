'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  'All', 'Development', 'Design', 'Technology', 'Business', 'Tutorials'
]

export function BlogFilters() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <section className="sticky top-0 bg-white border-b border-slate-200 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-4 flex items-center justify-between">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-teal-50 text-teal-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <select className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:border-teal-500">
            <option value="latest">Latest</option>
            <option value="popular">Most Popular</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
    </section>
  )
}