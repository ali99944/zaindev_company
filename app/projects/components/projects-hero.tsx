"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { BlueprintGrid } from "@/src/components/common/blueprint-grid-pattern"

export function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <BlueprintGrid opacity={0.3} />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right z-10"
          >
            <div className="inline-flex items-center px-5 py-2 bg-amber-500 text-black rounded-full mb-6">
              <span className="text-sm font-medium">مشاريعنا</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900">
              مشاريعنا <span className="text-amber-500">تتحدث عن نفسها</span>
            </h1>

            <p className="text-gray-600 text-lg mt-4">
              نفخر بتقديم مجموعة متنوعة من المشاريع التي تعكس خبرتنا وتميزنا في مجال المقاولات والتطوير العقاري. اكتشف أبرز إنجازاتنا.
            </p>

          </motion.div>

          {/* Right Side - Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/20 rounded-lg transform rotate-3"></div>
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://services.zaindev.com.sa/public/images/full-data/logos/b6c32b34-49b8-478e-ac7a-88fc9da69408_crop-architect-opening-blueprint_23-2147710985%20(1).avif"
                alt="مشروعنا"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50 rounded-b-lg">
                <h3 className="text-amber-500 text-lg font-bold">أبرز مشاريعنا</h3>
                <p className="text-sm text-gray-300">
                  استكشف مجموعة متنوعة من المشاريع التي نفخر بها في مختلف القطاعات.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
