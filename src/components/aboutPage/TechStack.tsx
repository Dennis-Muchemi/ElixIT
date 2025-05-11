'use client'

import { motion } from 'framer-motion'

const technologies = [
  {
    category: 'Frontend',
    techs: [
      { name: 'React', icon: '/common/react_3.png' },
      { name: 'Next.js', icon: '/common/next_1.png' },
      { name: 'TypeScript', icon: '/common/typescript.jpg' },
      { name: 'Tailwind CSS', icon: '/common/tailwind_css.png' }
    ]
  },
  {
    category: 'Backend',
    techs: [
      { name: 'Node.js', icon: '/common/node.svg' },
      { name: 'Python', icon: '/common/python.webp' },
      { name: 'PostgreSQL', icon: '/common/postgresql-logo.png' },
      { name: 'MongoDB', icon: '/common/mongoDB.webp' }
    ]
  },
  {
    category: 'Tools & Services',
    techs: [
      { name: 'AWS', icon: '/common/aws.png' },
      { name: 'Docker', icon: '/common/docker_2.webp' },
      { name: 'Git', icon: '/common/git.png' },
      { name: 'Figma', icon: '/common/figma.png' }
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