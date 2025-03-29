"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from 'lucide-react'
import { FutureProject } from "@/src/types/sections/future-projects-data"

const benefits = [
  "تنفيذ المشاريع بأعلى معايير الجودة",
  "فريق من المهندسين والفنيين المحترفين",
  "استخدام أحدث التقنيات والمعدات",
  "الالتزام بالمواعيد المحددة للتسليم",
  "أسعار تنافسية وخيارات تمويل مرنة",
  "خدمة ما بعد البيع وضمان على جميع الأعمال"
]

export function PerfectPartnerSection({ future_projects }: { future_projects: FutureProject }) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 w-full h-full" 
          style={{ 
            backgroundColor: '#e5e5f7', 
            opacity: 0.8, 
            backgroundImage: 'radial-gradient(#005377 0.8px, #e5e5f7 0.8px)', 
            backgroundSize: '20px 20px' 
          }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gray-900 rounded-full mb-6"
            >
              <span className="text-amber-500 text-sm font-medium">{future_projects.sub_name}</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {future_projects.name}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              {future_projects.short}
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="/projects"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-1.5 rounded transition-colors"
              >
                <span>استكشف مشاريعنا</span>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-black/5 rounded transform rotate-3"></div>
              <div className="relative rounded overflow-hidden shadow">
                <Image
                  src="https://img.freepik.com/premium-photo/business-handshake-city-double-exposure-with-team-deal-negotiation-success-company-urban-businesspeople-gesture-with-hands-partnership-developers-contract-agreement_590464-423898.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                  alt="مشاريع زين التنموية"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-black font-bold">500+</span>
                    </div>
                    <div className="text-white">
                      <p className="text-sm opacity-80">أكثر من</p>
                      <p className="font-bold">مشروع منجز</p>
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
