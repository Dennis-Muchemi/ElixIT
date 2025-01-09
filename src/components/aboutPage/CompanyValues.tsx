'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Code, Leaf, Puzzle, PuzzleIcon } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation Excellence',
    description: 'Pushing boundaries with creative solutions'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Your success is our priority'
  },
  {
    icon: Code,
    title: 'Technical Mastery',
    description: 'Expertise in cutting-edge technologies'
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Creating lasting digital solutions'
  },
  {
    icon: PuzzleIcon,
    title: 'Collaborative Growth',
    description: 'Growing together with our clients'
  }
]

export function CompanyValues() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
          <p className="mt-4 text-slate-600">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}