"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectImage } from "@/src/types/project"

export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowRight") prevImage() // RTL layout
    if (e.key === "ArrowLeft") nextImage() // RTL layout
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">معرض الصور</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">مجموعة من الصور التي توضح تفاصيل المشروع ومراحل تنفيذه</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded">
                <Image
                  src={image.image || "/placeholder.svg"}
                  alt={image.alt || `صورة ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">عرض الصورة</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="max-w-5xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[currentImageIndex].image || "/placeholder.svg"}
                alt={images[currentImageIndex].alt || `صورة ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                <p>{images[currentImageIndex].alt || `صورة ${currentImageIndex + 1}`}</p>
                <p className="text-sm text-gray-300">
                  {currentImageIndex + 1} من {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

