'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  title: string;
  description: string;
  duration: string;
}

interface ServiceProps {
  process: ProcessStep[];
}

export function ProcessTimeline({ service }: { service: ServiceProps }) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Development Process</h2>
          <p className="text-slate-600 mt-4">How we bring your ideas to life</p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mt-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 mt-2">{step.description}</p>
                <div className="mt-4 text-sm text-teal-600 font-medium">
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}