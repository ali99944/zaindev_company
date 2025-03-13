"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Wrench, Building2, Zap, Paintbrush, Droplets, Thermometer, Sparkles } from "lucide-react"
import { BlueprintGrid } from "@/src/components/common/blueprint-grid-pattern"

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <BlueprintGrid opacity={0.3} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center px-4 py-2 bg-gray-900 rounded-full mb-6">
              <span className="text-amber-500 text-sm font-medium">خدماتنا المتميزة</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-amber-500">خدمات متكاملة</span>
              <br />
              <span>لجميع احتياجاتكم</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              نقدم مجموعة واسعة من الخدمات المتخصصة في مجالات المقاولات والصيانة والتصميم، بأعلى معايير الجودة
              والاحترافية، لتلبية جميع احتياجاتكم.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 ">
                <Building2 className="w-5 h-5 text-amber-500" />
                <span className="text-white/80 text-sm">المقاولات</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 ">
                <Wrench className="w-5 h-5 text-amber-500" />
                <span className="text-white/80 text-sm">الصيانة</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 ">
                <Paintbrush className="w-5 h-5 text-amber-500" />
                <span className="text-white/80 text-sm">التصميم</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 ">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="text-white/80 text-sm">الكهرباء</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 ">
                <Droplets className="w-5 h-5 text-amber-500" />
                <span className="text-white/80 text-sm">السباكة</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 ">
                <Thermometer className="w-5 h-5 text-amber-500" />
                <span className="text-white/80 text-sm">التكييف</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-900 rounded-full px-4 py-2 ">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-white/80 text-sm">التنظيف</span>
              </div>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-black py-1.5 px-6 rounded transition-colors">
              تواصل معنا
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/20 rounded transform rotate-3"></div>
            <div className="relative rounded overflow-hidden shadow-lg h-[450px]">
              <Image
                src="https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_23-2149177174.jpg"
                alt="خدمات زين التنموية"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">خدمات متكاملة</h3>
                      <p className="text-gray-600 text-sm">أكثر من 40 خدمة متخصصة لتلبية احتياجاتكم</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

