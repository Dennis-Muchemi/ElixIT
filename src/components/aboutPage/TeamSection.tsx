'use client'

import { motion } from 'framer-motion'
import { LinkedinIcon, TwitterIcon, GithubIcon } from 'lucide-react'

const team = [
  {
    name: 'Jane Smith',
    role: 'Founder & CEO',
    image: '/images/team/jane.jpg', // You'll need to add these images
    bio: 'Passionate about creating exceptional digital experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  // Add more team members...
]

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900">Meet Our Team</h2>
          <p className="mt-4 text-slate-600">
            The talented people behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-slate-300">{member.role}</p>
                    <p className="text-sm text-slate-300 mt-2">{member.bio}</p>
                    <div className="flex gap-4 mt-4">
                      <a href={member.social.linkedin} className="text-white hover:text-teal-400 transition-colors">
                        <LinkedinIcon size={20} />
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-teal-400 transition-colors">
                        <TwitterIcon size={20} />
                      </a>
                      <a href={member.social.github} className="text-white hover:text-teal-400 transition-colors">
                        <GithubIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
