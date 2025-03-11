"use client"

import { BlueprintGrid } from "@/src/components/common/blueprint-grid-pattern"
import { motion } from "framer-motion"

export function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <BlueprintGrid opacity={1} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-500 text-black rounded-full mb-6">
            <span className=" text-sm font-medium">مشاريعنا</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            أعمالنا تتحدث <span className="text-amber-500">عن نفسها</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            نفخر بتقديم مجموعة متنوعة من المشاريع التي تعكس خبرتنا وتميزنا في مجال المقاولات والتطوير العقاري. اكتشف
            أبرز مشاريعنا المنجزة في مختلف القطاعات.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

