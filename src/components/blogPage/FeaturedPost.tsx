'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function FeaturedPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-slate-900 mb-8"
        >
          Featured Articles
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative aspect-[16/9] overflow-hidden rounded-2xl"
          >
            <img
              src="/images/featured-1.jpg"
              alt="Featured Post"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/20" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-medium mb-4">
                Development
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                The Future of Web Development: What's Next in 2025
              </h3>
              <p className="text-slate-300 mb-4 line-clamp-2">
                Explore the upcoming trends and technologies shaping the future of web development.
              </p>
              <button className="flex items-center gap-2 text-white hover:text-teal-400 transition-colors">
                Read More <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.article>

          {/* Add second featured post with similar structure */}
        </div>
      </div>
    </section>
  )
}   