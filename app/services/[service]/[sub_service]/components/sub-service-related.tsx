"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface RelatedSubService {
  id: number
  services_id: number
  logo: string | null
  name: string
  short: string
  price: string
}

interface SubServiceRelatedProps {
  relatedSubServices: RelatedSubService[]
}

export function SubServiceRelated({ relatedSubServices }: SubServiceRelatedProps) {
  if (!relatedSubServices || relatedSubServices.length === 0) return null

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">خدمات ذات صلة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">اكتشف المزيد من الخدمات المتعلقة التي قد تهمك</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedSubServices.map((subService, index) => (
            <motion.div
              key={subService.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded overflow-hidden transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={
                    subService.logo ||
                    "https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_23-2149177174.jpg"
                  }
                  alt={subService.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-md font-bold mb-2 transition-colors">
                  {subService.name}
                </h3>
                <p className="text-gray-600 line-clamp-2">{subService.short}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

