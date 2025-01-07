"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface CaseStudyGalleryProps {
  images: string[];
}

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, src: '/api/placeholder/800/600', alt: 'Homepage Design' },
    { id: 2, src: '/api/placeholder/800/600', alt: 'Product Page' },
    { id: 3, src: '/api/placeholder/800/600', alt: 'Checkout Flow' },
    { id: 4, src: '/api/placeholder/800/600', alt: 'Mobile View' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Project Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500
                    group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(image.id)}
                    className="p-3 bg-white rounded-full text-slate-900 transform scale-75
                      opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                  >
                    <ZoomIn className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{image.alt}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}