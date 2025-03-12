"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Building2 } from "lucide-react"
import { DotPattern } from "@/src/components/common/dot-pattern"

interface SubServiceHeroProps {
  service: {
    id: number
    name: string
  }
  subService: {
    id: number
    name: string
    short: string
    price: string
    original_price: string
    discount: string | null
    logo: string | null
  }
}

export function SubServiceHero({ service, subService }: SubServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <DotPattern dotColor="#f59e0b" spacing={20} opacity={0.07} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 mb-6">
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors"
              >
                <span>{service.name}</span>
              </Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-600">{subService.name}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-amber-500">{subService.name}</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{subService.short}</p>

            <button className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-black py-1.5 px-6 rounded transition-colors">
              طلب الخدمة
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/20 rounded transform rotate-3"></div>
            <div className="relative rounded overflow-hidden  h-[450px]">
              <Image
                src={
                  subService.logo ||
                  "https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                }
                alt={subService.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{subService.name}</h3>
                      <p className="text-gray-600 text-sm">خدمة متميزة من {service.name}</p>
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

