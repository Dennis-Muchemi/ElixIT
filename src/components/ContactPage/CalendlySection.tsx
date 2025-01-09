'use client'

import { Calendar } from 'lucide-react'

export function CalendlySection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Schedule a Consultation</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Book a free 30-minute consultation to discuss your project in detail.
        </p>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="h-[600px] bg-slate-100 rounded-lg flex items-center justify-center">
            <Calendar size={48} className="text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  )
}