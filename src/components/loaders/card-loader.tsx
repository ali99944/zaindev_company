'use client'

import { motion } from 'framer-motion'

const CardLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-slate-800 rounded shadow-none overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="relative h-60 bg-gray-200 dark:bg-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_infinite]" />
      </div>

      <div className="p-4 space-y-3">
        {/* Title placeholder */}
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-1/2 animate-pulse" />

        {/* Price placeholder */}
        <div className="flex items-center gap-2">
          <div className="h-5 bg-gray-200 dark:bg-slate-700 rounded-full w-1/3 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-1/4 animate-pulse" />
        </div>

        {/* Rating placeholder */}
        <div className="flex items-center gap-1">
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-16 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-full w-20 animate-pulse" />
        </div>

        {/* Button placeholder */}
        <div className="h-10 bg-gray-200 dark:bg-slate-700 rounded-lg animate-pulse" />
      </div>
    </motion.div>
  )
}

export default CardLoader