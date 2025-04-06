"use client"

import { useGetQuery } from "@/src/hooks/queries-actions"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import GridLoader from "../loaders/grid-loader"
import { Search } from "lucide-react"
import type ServiceCategory from "@/src/types/service-category"

type OtherServiceType = {
  status: number
  name: string
  description: string
}

const extraOtherService: OtherServiceType = {
  status: 0,
  name: "خدمات اخرى",
  description: "تصفح جميع خدماتنا واطلب الخدمة التي تحتاجها بضغطة زر",
}

export function ServicesSection() {
  const { data: service_categories, isLoading } = useGetQuery<ServiceCategory[]>({
    url: "services-categories",
    key: ["services-categories"],
  })

  if (isLoading) {
    return <GridLoader />
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="0.5" />
            </pattern>
            <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#f59e0b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      <div className="px-4 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              خدماتنا
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl"
            >
              نقدم مجموعة متكاملة من الخدمات المنزلية عالية الجودة لتلبية جميع احتياجاتكم
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {service_categories?.data.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded overflow-hidden transition-all duration-300"
            >
              <Link href={`/services/${service.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg?height=200&width=400"}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Service info overlay */}
                  <div className="absolute bottom-0 right-0 p-3 w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                        <Image
                          src={service.logo || "/placeholder.svg"}
                          alt={service.name}
                          width={20}
                          height={20}
                          className="text-amber-500"
                        />
                      </div>
                      <h3 className="text-md font-bold text-white group-hover:text-amber-300 transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div
            key={extraOtherService.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (service_categories?.data.length ?? 0) * 0.1 }}
            className="group relative bg-white rounded overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Link href="/services" className="block">
              <div className="relative h-48 overflow-hidden bg-amber-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Search className="w-16 h-16 text-amber-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Service info overlay */}
                <div className="absolute bottom-0 right-0 p-3 w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                      <Search className="w-4 h-4 text-amber-500" />
                    </div>
                    <h3 className="text-md font-bold text-white group-hover:text-amber-300 transition-colors">
                      {extraOtherService.name}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex items-center justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-black bg-amber-500 hover:bg-amber-600 transition-colors px-6 py-2 rounded font-medium"
          >
            <span>تصفح جميع خدماتنا الاخرى</span>
          </Link>
        </motion.div>

        {/* Decorative Image */}
        <div className="absolute left-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none">
          <Image
            src="https://img.freepik.com/free-vector/house-maintenance-abstract-concept-vector-illustration_107173-24432.jpg"
            alt="Decorative"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

