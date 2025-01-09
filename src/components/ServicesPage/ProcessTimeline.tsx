'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals and requirements'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Creating a detailed project roadmap'
  },
  {
    number: '03',
    title: 'Development',
    description: 'Bringing your vision to life'
  },
  {
    number: '04',
    title: 'Testing',
    description: 'Ensuring quality and performance'
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploying your solution'
  }
]

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Our Process</h2>
          <p className="text-slate-600 mt-4">How we bring your ideas to life</p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mt-4">{step.title}</h3>
                <p className="text-slate-600 mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}