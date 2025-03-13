"use client"

import ApiEndpoints from "@/src/constants/endpoints"
import { ApiData, useGetQuery } from "@/src/hooks/queries-actions"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import GridLoader from "../loaders/grid-loader"
import Service from "@/src/types/service"

const extraOtherService: Service = {
  id: 0,
  image: '',
  logo: '',
  infologo: '',
  status: 0,
  name: 'خدمات اخرى',
  short: '',
  description: 'تصفح جميع خدماتنا واطلب الخدمة التي تحتاجها بضغطة زر',
  svg: '',
  menu_svg: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#000000"> <path d="M6.834.33a2.25 2.25 0 012.332 0l5.25 3.182A2.25 2.25 0 0115.5 5.436V6A.75.75 0 0114 6v-.564a.75.75 0 00-.361-.642l-5.25-3.181a.75.75 0 00-.778 0l-5.25 3.181A.75.75 0 002 5.436v5.128a.75.75 0 00.361.642l4.028 2.44a.75.75 0 11-.778 1.283l-4.027-2.44A2.25 2.25 0 01.5 10.563V5.436a2.25 2.25 0 011.084-1.924L6.834.33z"></path> <path fill-rule="evenodd" d="M11.749 7.325l.001-.042v-.286a.75.75 0 00-1.5 0v.286l.001.042a3.73 3.73 0 00-1.318.546.76.76 0 00-.03-.03l-.201-.203a.75.75 0 00-1.06 1.06l.201.203.03.028c-.26.394-.45.84-.547 1.319a.878.878 0 00-.04-.001H7a.75.75 0 000 1.5h.286l.038-.001c.097.48.286.926.547 1.32a.71.71 0 00-.028.027l-.202.202a.75.75 0 001.06 1.06l.203-.202a.695.695 0 00.025-.026c.395.261.842.45 1.322.548l-.001.036v.286a.75.75 0 001.5 0v-.286-.036c.48-.097.926-.287 1.32-.548l.026.026.202.203a.75.75 0 001.06-1.061l-.201-.202a.667.667 0 00-.028-.026c.261-.395.45-.842.547-1.321H15a.75.75 0 000-1.5h-.286l-.04.002a3.734 3.734 0 00-.547-1.319l.03-.028.202-.202a.75.75 0 00-1.06-1.061l-.203.202-.029.03a3.73 3.73 0 00-1.318-.545zM11 8.75A2.247 2.247 0 008.75 11 2.247 2.247 0 0011 13.25 2.247 2.247 0 0013.25 11 2.247 2.247 0 0011 8.75z" clip-rule="evenodd"></path> </g> </g></svg>'
}

export function ServicesSection() {
  const { data, isLoading } = useGetQuery<ApiData<Service[]>>({
    url: ApiEndpoints.services,
    key: ['services'],
  })

  if(isLoading) {
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

      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...data?.data as Service[], extraOtherService].map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-white rounded p-4 transition-all duration-300 border border-gray-200 `}
            >

                <div>
                  <Link href={`/services/${service.id}`} className="flex items-center mb-2">
                  <div 
                    className="text-amber-500"
                    dangerouslySetInnerHTML={{
                      __html: service.menu_svg
                    }}
                  />
                    <h3 className="text-lg font-bold hover:text-amber-600 transition-colors cursor-pointer">{service.name}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
                </div>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex items-center justify-center gap-2 text-amber-500 hover:text-amber-600 transition-colors"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors"
            >
              <span>تصفح جميع خدماتنا الاخرى</span>
            </Link>
          </motion.div>

        {/* Decorative Image */}
        <div className="absolute left-0 bottom-0 w-96 h-96 opacity-10 pointer-events-none">
          <Image
            src="https://img.freepik.com/free-vector/house-maintenance-abstract-concept-vector-illustration_107173-24432.jpg"
            alt="Decorative"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
