'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building large-scale React applications that perform well and are maintainable.",
    category: "Development",
    date: "Feb 15, 2024",
    readTime: "8 min read",
    image: "/images/blog-1.jpg"
  },
  // Add more blog posts...
]

export function BlogGrid() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-medium mb-4">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <button className="text-teal-600 hover:text-teal-700 transition-colors">
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}