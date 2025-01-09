'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Upload } from 'lucide-react'
import { ContactInfo } from '@/components/ContactPage/ContactInfo'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  projectType: string
  files: File[]
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: '',
    files: []
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
            <p className="text-slate-600">Fill out the form and we'll get back to you within 24 hours.</p>
          </div>
          
          <div className="space-y-6">
            <ContactInfo
              icon={Mail}
              title="Email Us"
              content="hello@elixit.com"
            />
            <ContactInfo
              icon={Phone}
              title="Call Us"
              content="+1 (234) 567-890"
            />
            <ContactInfo
              icon={MapPin}
              title="Visit Us"
              content="123 Design Street, Creative City, CD 12345"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl space-y-6">
          {/* Form fields... */}
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Name <span className="text-rose-500">*</span></span>
              <input
                type="text"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10 transition-all"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email <span className="text-rose-500">*</span></span>
              <input
                type="email"
                required
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10 transition-all"
                placeholder="your@email.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Message <span className="text-rose-500">*</span></span>
              <textarea
                required
                rows={4}
                className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10 transition-all resize-none"
                placeholder="Tell us about your project"
              />
            </label>

            <div className="relative">
              <input
                type="file"
                multiple
                className="hidden"
                id="file-upload"
                onChange={(e) => {
                  const files = Array.from(e.target.files || [])
                  setFormData(prev => ({ ...prev, files }))
                }}
              />
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
              >
                <Upload size={20} />
                <span>Upload Files</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}