'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gray-900/90 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center space-y-4">

        {/* Pulsing Circles */}
        <div className="flex justify-center gap-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-amber-500 rounded-full"
            />
          ))}
        </div>

        {/* Text with Fade Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold text-amber-500 mt-4">
            <span>
              <Loader2 className="w-8 h-8 inline-block animate-spin" />
            </span>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            جاري تحميل البيانات
          </p>
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="pattern-dots pattern-amber-500 pattern-size-4 pattern-opacity-20 w-full h-full" />
        </div>
      </div>
    </div>
  )
}