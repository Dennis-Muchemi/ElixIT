'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mary Nduta",
    role: "CEO",
    company: "Bryma Properties",
    image: "/common/woman_avatar.jpg",
    quote: "ElixIT transformed our online presence completely. I loved their services and the results were phenomenal."
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Client Testimonials</h2>
          <p className="mt-4 text-slate-600">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-12"
          >
            <div className="absolute top-8 right-8 text-teal-500">
              <Quote size={48} />
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <blockquote className="text-xl text-slate-700 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-slate-600">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-teal-600 font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-slate-700 hover:text-teal-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md text-slate-700 hover:text-teal-600 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}