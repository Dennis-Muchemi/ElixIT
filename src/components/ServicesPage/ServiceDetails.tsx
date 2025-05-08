'use client'

import { motion } from 'framer-motion'

interface ServiceDetailsProps {
  service: {
    overview: {
      title: string
      description: string
      keyPoints: string[]
    }
    hero: {
      title: string
      image: string
    }
    features: Array<{
      icon: React.ComponentType<{ className?: string }>
      title: string
      description: string
    }>
    technologies: Array<{
      name: string
      icon: string
    }>
  }
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              {service.overview.title}
            </h2>
            <p className="text-slate-600">
              {service.overview.description}
            </p>
            <ul className="space-y-4">
              {service.overview.keyPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  {point}
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
                src={service.hero.image}
                alt={service.hero.title}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {service.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-100 h-20 object-contain mb-1"
                />
                <span className="text-slate-600 text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}