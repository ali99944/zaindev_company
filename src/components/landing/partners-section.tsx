"use client"

import { useGetQuery } from "@/src/hooks/queries-actions"
import Partner from "@/src/types/partner"
import { motion } from "framer-motion"
import Image from "next/image"
import { LinesLoader } from "../common/loaders"


export function PartnersSection() {
  const { data: partners, isLoading: is_partners_loading } = useGetQuery<Partner[]>({
    url: 'success-partners',
    key: ['success-partners']
  })

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-amber-500">شركاؤنا في النجاح</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نفتخر بالتعاون مع نخبة من الشركات والمؤسسات الرائدة في مجال البناء والتطوير العقاري
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {
            is_partners_loading && (
              <div className="col-span-2 md:col-span-3 lg:col-span-4">
                <LinesLoader lines={4} />
                <LinesLoader lines={4} className="mt-8" />
              </div>
            )
          }
          {partners?.data.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-2 shadow-none transition-shadow flex items-center justify-center group"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={100}
                className="grayscale-0 group-hover:grayscale transition-all duration-300 max-h-32 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

