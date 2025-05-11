'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Mail, Phone, Send, Upload, XCircle, Paperclip } from 'lucide-react'
import { ContactInfo } from '@/components/ContactPage/ContactInfo' // Assuming this component exists

const MAX_FILES = 3;
const MAX_FILE_SIZE_MB = 5; // Max size per file in MB
const MAX_TOTAL_SIZE_MB = 15; // Max total size for all files in MB

interface FormDataState {
  name: string
  email: string
  phone: string
  message: string
  projectType: string // Assuming you'll add a field for this
  files: File[]
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: '',
    files: [],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [fileErrors, setFileErrors] = useState<string[]>([])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSubmitStatus(null); // Clear previous submission status on new input
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileErrors([]); // Clear previous file errors
    setSubmitStatus(null);
    const selectedFiles = Array.from(e.target.files || []);
    let currentFiles = [...formData.files];
    let errors: string[] = [];
    let currentTotalSize = currentFiles.reduce((acc, file) => acc + file.size, 0);

    if (currentFiles.length + selectedFiles.length > MAX_FILES) {
      errors.push(`You can upload a maximum of ${MAX_FILES} files.`);
    } else {
      for (const file of selectedFiles) {
        if (currentFiles.length >= MAX_FILES) {
          errors.push(`Maximum of ${MAX_FILES} files reached. Some files were not added.`);
          break;
        }
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
          errors.push(`File "${file.name}" exceeds ${MAX_FILE_SIZE_MB}MB limit.`);
          continue;
        }
        if (currentTotalSize + file.size > MAX_TOTAL_SIZE_MB * 1024 * 1024) {
          errors.push(`Adding file "${file.name}" would exceed total size limit of ${MAX_TOTAL_SIZE_MB}MB.`);
          continue;
        }
        currentFiles.push(file);
        currentTotalSize += file.size;
      }
    }
    
    setFormData((prev) => ({ ...prev, files: currentFiles }));
    setFileErrors(errors);

    // Clear the input value to allow re-selecting the same file if removed
    e.target.value = '';
  }

  const removeFile = (fileName: string) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((file) => file.name !== fileName),
    }))
    setFileErrors([]); // Clear errors when a file is removed
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setFileErrors([]);
  
    // Basic client-side check (you had this logic already)
    if (formData.files.length > MAX_FILES) {
        setFileErrors([`Please upload a maximum of ${MAX_FILES} files.`]);
        setIsSubmitting(false);
        return;
    }
    // Add other client-side checks for file sizes if needed (though server/service will also check)
  
    const dataToSend = new FormData(); // Use FormData for file uploads
    dataToSend.append('name', formData.name);
    dataToSend.append('email', formData.email);
    dataToSend.append('phone', formData.phone);
    dataToSend.append('message', formData.message);
    dataToSend.append('projectType', formData.projectType);
    formData.files.forEach((file) => {
      dataToSend.append('files', file); // Formspree can handle fields named 'files' or just 'file'
    });
    // You can also add other hidden fields if Formspree needs them, like an email for notifications,
    // but usually, it uses the email you confirmed when setting up the form endpoint.
  
    try {
      // ***** THIS IS THE KEY CHANGE for Formspree *****
      const response = await fetch('https://formspree.io/f/mldbnaqz', { // <--- REPLACE WITH YOUR ACTUAL URL
        method: 'POST',
        body: dataToSend,
        headers: {
          'Accept': 'application/json', // Recommended by Formspree
        },
      });
  
      if (response.ok) {
        // const result = await response.json(); // Formspree might return details about the submission
        setSubmitStatus({ success: true, message: 'Message sent successfully! We\'ll be in touch.' });
        setFormData({ name: '', email: '', phone: '', message: '', projectType: '', files: [] }); // Clear form
        // Also clear displayed file names/errors if you have separate state for them not directly in formData.files
      } else {
        // Try to get error details from Formspree's response
        const errorData = await response.json();
        const errorMessage = errorData.errors ? errorData.errors.map((err: any) => err.message).join(', ') : 'Failed to send message.';
        throw new Error(errorMessage || `HTTP error! status: ${response.status}`);
      }
    } catch (error: any) {
      setSubmitStatus({ success: false, message: error.message || 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
            <p className="text-slate-600">Fill out the form and we'll get back to you within 24 hours.</p>
          </div>
          <div className="space-y-6">
            <ContactInfo icon={Mail} title="Email Us" content="hello@elixit.com" />
            <ContactInfo icon={Phone} title="Call Us" content="+1 (234) 567-890" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-2xl space-y-6">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Name <span className="text-rose-500">*</span></span>
            <input
              type="text" name="name" value={formData.name} onChange={handleInputChange} required
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10"
              placeholder="Your name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email <span className="text-rose-500">*</span></span>
            <input
              type="email" name="email" value={formData.email} onChange={handleInputChange} required
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10"
              placeholder="your@email.com"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Phone (Optional)</span>
            <input
              type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10"
              placeholder="Your phone number"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Project Type (Optional)</span>
            <select
              name="projectType" value={formData.projectType} onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10"
            >
              <option value="">Select a project type</option>
              <option value="web-design">Web Design</option>
              <option value="web-development">Web Development</option>
              <option value="seo">SEO</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Message <span className="text-rose-500">*</span></span>
            <textarea
              name="message" value={formData.message} onChange={handleInputChange} required rows={4}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-teal-500 focus:ring focus:ring-teal-500/10 resize-none"
              placeholder="Tell us about your project"
            />
          </label>

          <div>
            <span className="text-sm font-medium text-slate-700">Attachments (Up to {MAX_FILES} files, {MAX_FILE_SIZE_MB}MB each, {MAX_TOTAL_SIZE_MB}MB total)</span>
            <div className="mt-1">
              <input
                type="file" multiple className="hidden" id="file-upload" onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt,image/jpeg,image/png,application/zip" // Example file types
              />
              <label
                htmlFor="file-upload"
                className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
              >
                <Upload size={20} />
                <span>{formData.files.length < MAX_FILES ? 'Click to select or drop files' : `Maximum ${MAX_FILES} files selected`}</span>
              </label>
            </div>
            {fileErrors.length > 0 && (
              <div className="mt-2 space-y-1">
                {fileErrors.map((error, index) => (
                  <p key={index} className="text-sm text-rose-500">{error}</p>
                ))}
              </div>
            )}
            {formData.files.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-slate-700">Selected files:</p>
                {formData.files.map((file) => (
                  <div key={file.name} className="flex items-center justify-between text-sm text-slate-600 bg-slate-100 px-3 py-2 rounded">
                    <span className="truncate w-4/5 flex items-center"><Paperclip size={16} className="mr-2 flex-shrink-0" /> {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    <button type="button" onClick={() => removeFile(file.name)} className="text-rose-500 hover:text-rose-700">
                      <XCircle size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {submitStatus && (
            <p className={`text-sm ${submitStatus.success ? 'text-green-600' : 'text-rose-600'}`}>
              {submitStatus.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || formData.files.length > MAX_FILES || fileErrors.some(e => e.includes("exceeds") || e.includes("total size"))}
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}