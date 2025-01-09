'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-8 rounded-2xl space-y-6"
          >
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600">
              To transform businesses through innovative digital experiences that combine 
              cutting-edge technology with human-centered design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 rounded-2xl space-y-6"
          >
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
              <Eye size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600">
              To be the most trusted partner for businesses seeking to establish 
              or elevate their digital presence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}