"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Service {
  id: number
  image: string
  logo: string
  svg: string
  name: string
  short: string
  category: string
  subServicesCount: number
}

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  // Filter services based on the selected category
  const filteredServices =
    currentCategory === "all" ? services : services.filter((service) => service.category === currentCategory)

  // Function to safely render SVG from string
  const renderSVG = (svgString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: svgString }} />
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">خدماتنا المتميزة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات المتخصصة لتلبية احتياجاتكم بأعلى معايير الجودة والاحترافية
          </p>
        </motion.div>

        {filteredServices.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد خدمات في هذه الفئة حالياً</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded overflow-hidden transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      service.image ||
                      "https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_23-2149177174.jpg"
                    }
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <div className="w-10 h-10 flex items-center justify-center">{renderSVG(service.svg)}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-amber-100 text-black text-xs font-medium px-2 py-1 rounded-full">
                      {service.subServicesCount} خدمات فرعية
                    </div>
                    <Link href={`/services/${service.id}`}>
                        <h3 className="text-md font-bold transition-colors text-right">
                        {service.name}
                        </h3>
                    </Link>
                  </div>

                  <p className="text-gray-600  line-clamp-2 text-right">{service.short}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

