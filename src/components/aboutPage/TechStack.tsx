'use client'

import { motion } from 'framer-motion'

const technologies = [
  {
    category: 'Frontend',
    techs: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' }
    ]
  },
  {
    category: 'Backend',
    techs: [
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' }
    ]
  },
  {
    category: 'Tools & Services',
    techs: [
      { name: 'AWS', icon: '/icons/aws.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' }
    ]
  }
]

export function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Our Tech Stack</h2>
          <p className="mt-4 text-slate-600">
            We use cutting-edge technologies to build modern, scalable solutions
          </p>
        </motion.div>

        <div className="space-y-16">
          {technologies.map((category, categoryIndex) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="text-xl font-semibold text-slate-900 mb-8"
              >
                {category.category}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (techIndex * 0.1) }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-slate-900 font-medium">{tech.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}