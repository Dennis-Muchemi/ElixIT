'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies.',
    features: [
      'Custom Web Applications',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'CMS Integration',
    ],
    image: '/images/web-dev.jpg', // You'll need to add these images
  },
  // Add other services...
]

export function ServiceDetails() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-24 last:mb-0"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
              <p className="text-slate-600">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}