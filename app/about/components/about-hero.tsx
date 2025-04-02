"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import AboutUsData from "@/src/types/sections/about-us"

export function AboutHero({ page_data }: { page_data: AboutUsData }) {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0057b7" strokeWidth="0.5" />
              </pattern>
              <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#f59e0b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:order-2"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/30 to-amber-500/40 rounded-full backdrop-blur-sm mb-6 border border-amber-500/20">
              <span className="text-black text-sm font-medium">{page_data.name}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-amber-500">{page_data.name}</span>
              <br />
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              شركة رائدة في مجال المقاولات والتطوير
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {page_data.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#about-story"
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-2 rounded font-medium transition-colors"
              >
                اقرأ قصتنا
              </Link>

              <Link
                href="/contact"
                className="bg-gray-800 hover:bg-gray-900 text-amber-500 px-8 py-2 rounded font-medium transition-colors"
              >
                تواصل معنا
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded transform -rotate-6"></div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                  alt="زين التنموية"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">15+ عاماً من الخبرة</h3>
                  <p className="text-white/80">نبني الثقة من خلال الالتزام بالجودة والمواعيد</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="#about-story"
            className="flex flex-col items-center text-gray-500 hover:text-amber-500 transition-colors"
          >
            <span className="text-sm mb-2">اكتشف المزيد</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

