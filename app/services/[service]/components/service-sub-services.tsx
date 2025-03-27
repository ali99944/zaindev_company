"use client"

import { formatRiyal } from "@/lib/format-riyal"
import { Service } from "@/src/types/service"
import ServiceCategory from "@/src/types/service-category"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ServiceSubServicesProps {
  service: ServiceCategory
  subServices: Service[]
}

export function ServiceSubServices({ service, subServices }: ServiceSubServicesProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">خدماتنا المتخصصة</h2>
            <p className="text-gray-600 max-w-2xl">
              نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال {service.name} لتلبية احتياجات عملائنا بأعلى معايير الجودة
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subServices.map((subService, index) => (
            <motion.div
              key={subService.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded overflow-hidden transition-all duration-300 group border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={
                    'https://img.freepik.com/free-vector/hand-drawn-our-services-infographic-template_23-2149889309.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid'
                  }
                  alt={subService.name}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link href={`/services/${service.id}/${subService.id}`}>
                      <h3 className="text-md font-bold mb-2 transition-colors">
                      {subService.name}
                      </h3>
                  </Link>

                  <p className="text-amber-500">{formatRiyal('0')}</p>
                </div>
                <p className="text-gray-600 line-clamp-2">{subService.short}</p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

