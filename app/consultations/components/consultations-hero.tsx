"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Lightbulb, Clock, CheckCircle } from 'lucide-react'

export function ConsultationsHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden pt-24 pb-16">
      {/* Creative Background */}
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
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/30 to-amber-500/40 rounded-full backdrop-blur-sm mb-6 border border-amber-500/20"
          >
            <Lightbulb className="w-4 h-4 text-black ml-2" />
            <span className="text-black text-sm font-medium">استشارات احترافية لمشاريعك</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-amber-500">استشارات</span> متخصصة
            <br />
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              لتحقيق رؤيتك بأفضل الطرق
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            نقدم استشارات احترافية في مجال البناء والتطوير العقاري لمساعدتك على اتخاذ القرارات الصحيحة
            وتنفيذ مشاريعك بأعلى معايير الجودة وأفضل التكاليف
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                href="#consultation-form"
                className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded font-medium transition-colors flex items-center gap-2"
              >
                <span>طلب استشارة مجانية</span>
                <CheckCircle className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="#consultation-packages"
                className="bg-gray-800 hover:bg-gray-900 text-amber-500 px-6 py-2 rounded font-medium transition-colors flex items-center gap-2"
              >
                <span>باقات الاستشارات</span>
                <Clock className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center"
          >
            <Link
              href="#consultation-form"
              className="flex flex-col items-center text-gray-500 hover:text-amber-500 transition-colors"
            >
              <span className="text-sm mb-2">اكتشف المزيد</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
