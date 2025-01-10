'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { serviceCategories } from '@/data/ServicesData'

export function ServiceCategories({ activeServiceId }: { activeServiceId: string }) {
  return (
    <section className="sticky top-0 bg-white border-b border-slate-200 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto py-4 scrollbar-hide">
          <div className="flex gap-4">
            {serviceCategories.map((category) => (
              <Link 
                key={category.id}
                href={`/services/${category.id}`}
                className="relative"
              >
                <CategoryButton
                  isActive={activeServiceId === category.id}
                  icon={category.icon}
                  label={category.label}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoryButton({ isActive, icon: Icon, label }: { isActive: boolean; icon: React.ElementType; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-lg whitespace-nowrap flex items-center gap-2 transition-colors
        ${isActive ? 'text-teal-600 bg-teal-50' : 'text-slate-600 hover:bg-slate-50'}`}
    >
      <Icon size={20} />
      {label}
      {isActive && (
        <motion.div
          layoutId="activePill"
          className="absolute inset-0 bg-teal-50 rounded-lg -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.div>
  )
}