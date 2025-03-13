"use client"

import { BlueprintGrid } from "@/src/components/common/blueprint-grid-pattern"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <BlueprintGrid  opacity={0.4} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-500 rounded-full mb-6">
              <span className="text-black text-sm font-medium">من نحن</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-amber-500">زين التنموية</span>
              <br />
              <span>شريك النجاح لمشاريعك</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية. نقدم خدمات متميزة في مجال المقاولات والصيانة والخدمات المتخصصة منذ أكثر من 15 عاماً، ونفخر بكوننا الشريك الأمثل لتحقيق رؤيتكم وتنفيذ مشاريعكم بأعلى معايير الجودة.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">
                  15+
                </div>
                <span className="text-gray-700">سنوات من الخبرة</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">
                  500+
                </div>
                <span className="text-gray-700">مشروع منجز</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold">
                  50+
                </div>
                <span className="text-gray-700">شريك نجاح</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/20 rounded transform rotate-3"></div>
            <div className="relative rounded overflow-hidden shadow-lg">
              <Image
                src="https://img.freepik.com/free-photo/vertical-low-angle-shot-high-rise-skyscrapers-glass-facade-frankfurt-germany_181624-7114.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                alt="زين التنموية"
                width={600}
                height={450}
                className="w-full h-[450px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
