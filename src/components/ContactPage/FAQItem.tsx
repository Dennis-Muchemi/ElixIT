'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <h3 className="font-medium text-slate-900">{question}</h3>
        <div className={`mt-2 text-slate-600 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
          <p className="pt-2">{answer}</p>
        </div>
      </div>
    </div>
  )
}