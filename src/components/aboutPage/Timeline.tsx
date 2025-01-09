'use client'

import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to transform digital experiences'
  },
  {
    year: '2021',
    title: 'First Major Client',
    description: 'Partnered with industry leaders'
  },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Grew to 20+ talented professionals'
  },
  {
    year: '2023',
    title: 'International Launch',
    description: 'Expanded services globally'
  },
  {
    year: '2024',
    title: 'Innovation Hub',
    description: 'Launched our technology innovation center'
  }
]

export function Timeline() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
          <p className="mt-4 text-slate-600">
            The story of our growth and evolution
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200" />
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2 mb-12 last:mb-0`}
            >
              <div className="flex items-center mb-4">
                <div className="absolute left-1/2 md:left-auto md:right-0 transform translate-x-px md:translate-x-1/2 w-3 h-3 bg-teal-500 rounded-full" />
                <div className="text-xl font-bold text-teal-500">{milestone.year}</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-slate-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
