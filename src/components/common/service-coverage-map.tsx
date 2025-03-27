"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useGetQuery } from "@/src/hooks/queries-actions"
import City from "@/src/types/city"
import { LinesLoader } from "./loaders"


export function ServiceCoverageMap() {
  const { data: available_cities, isLoading: is_available_cities_loading } = useGetQuery<City[]>({
    url: 'cities-avaliable',
    key: ['cities-avaliable']
  })

  const { data: unavailable_cities, isLoading: is_unavailable_cities_loading } = useGetQuery<City[]>({
    url: 'cities-un-avaliable',
    key: ['cities-un-avaliable']
  })

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: "#e5e5f7",
            opacity: 0.8,
            backgroundImage: "radial-gradient(#f59e0b 0.8px, #e5e5f7 0.8px)",
            backgroundSize: "16px 16px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">تغطية خدماتنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نقدم خدماتنا في العديد من مدن المملكة العربية السعودية، ونعمل على التوسع لتغطية المزيد من المناطق لنكون
            دائماً بالقرب منكم
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/images/10194.jpg"
                  alt="خريطة المملكة العربية السعودية"
                  width={700}
                  height={500}
                  className="w-full h-full object-contain"
                />

              </div>
            </div>
          </motion.div>

          {/* City Lists */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>المدن المتوفر بها خدماتنا حالياً</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                  is_available_cities_loading && (
                    <div className="col-span-2 md:col-span-3 lg:col-span-4">
                      <LinesLoader lines={4} />
                    </div>
                  )
                }
                {available_cities?.data.map((city, index) => (
                  <motion.div
                    key={city.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 flex items-center gap-3"
                  >
                    <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="font-medium">{city.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <span>المدن القادمة قريباً</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                  is_unavailable_cities_loading  && (
                    <div className="col-span-2 md:col-span-3 lg:col-span-4">
                      <LinesLoader lines={4} />
                    </div>
                  )
                }
                {unavailable_cities?.data.map((city, index) => (
                  <motion.div
                    key={city.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-lg p-4 flex items-center gap-3"
                  >
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="font-medium text-gray-600">{city.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <p className="text-gray-600 mb-6">
                لا تجد مدينتك في القائمة؟ لا تقلق! نحن نعمل على توسيع نطاق خدماتنا لتغطية جميع مناطق المملكة. تواصل معنا
                لمعرفة كيف يمكننا مساعدتك.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-2 rounded transition-colors"
              >
                <span>تواصل معنا</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

