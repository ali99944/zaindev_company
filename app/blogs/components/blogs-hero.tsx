"use client"

import { BlueprintGrid } from "@/src/components/common/blueprint-grid-pattern"
import { motion } from "framer-motion"

export function BlogsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <BlueprintGrid opacity={0.4} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 rounded-full mb-6">
            <span className="text-amber-500 text-sm font-medium">المدونة</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            آخر <span className="text-amber-500">المقالات والأخبار</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            اطلع على أحدث المقالات والنصائح في مجال البناء والتصميم والديكور لمساعدتك في تنفيذ مشروعك بأفضل طريقة
          </p>
        </motion.div>
      </div>
    </section>
  )
}
