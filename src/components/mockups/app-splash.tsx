"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AppSplashMockup() {
  return (
    <div className="relative w-[300px] h-[600px] rounded-[32px] overflow-hidden">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center justify-between px-4 z-20">
        <div className="text-white text-xs">9:41</div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-white opacity-80"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-80"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-80"></div>
        </div>
      </div>
      
      {/* App Content */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-amber-500/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-l from-amber-500/20 to-transparent rounded-full blur-2xl"></div>
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <Image 
              src="/logo.svg" 
              alt="زين التنموية" 
              width={120} 
              height={120}
              className="drop-shadow-xl"
            />
          </motion.div>
          
          {/* Title Animation */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-white mb-2 drop-shadow-md"
          >
            زين التنموية
          </motion.h1>
          
          {/* Subtitle Animation */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 text-sm"
          >
            نبني رؤية الغد اليوم
          </motion.p>
          
          {/* Loading Spinner Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute bottom-16"
          >
            <div className="w-10 h-10 border-t-4 border-r-4 border-white rounded-full animate-spin"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}