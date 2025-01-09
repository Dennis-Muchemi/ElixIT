'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Paintbrush, ShoppingBag, Database, BarChart, Smartphone } from 'lucide-react'

const categories = [
  { id: 'web', label: 'Web Development', icon: Code },
  { id: 'design', label: 'UI/UX Design', icon: Paintbrush },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'backend', label: 'Backend Services', icon: Database },
  { id: 'analytics', label: 'Analytics', icon: BarChart },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
]

export function ServiceCategories() {
  const [activeCategory, setActiveCategory] = useState('web')

  return (
    <section className="sticky top-0 bg-white border-b border-slate-200 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto py-4 scrollbar-hide">
          <div className="flex gap-4">
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                icon={category.icon}
                label={category.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Category Button component within ServiceCategories.tsx
function CategoryButton({ isActive, onClick, icon: Icon, label }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-6 py-3 rounded-lg whitespace-nowrap flex items-center gap-2 transition-colors
        ${isActive ? 'text-teal-600 bg-teal-50' : 'text-slate-600 hover:bg-slate-50'}`}
    >
      <Icon size={20} />
      {label}
      {isActive && (
        <motion.div
          layoutId="activePill"
          className="absolute inset-0 bg-teal-50 rounded-lg -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  )
}