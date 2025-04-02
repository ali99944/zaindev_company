"use client"

import CardLoader from "@/src/components/loaders/card-loader"
import { useGetQuery } from "@/src/hooks/queries-actions"
import Partner from "@/src/types/partner"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutClients() {
  const { data: partners, isLoading: is_partners_loading } = useGetQuery<Partner[]>({
    url: 'success-partners',
    key: ['success-partners']
  })

  if(is_partners_loading){
    return <CardLoader />
  }
  
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">عملاؤنا وشركاؤنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نفخر بثقة عملائنا وشركائنا الذين اختاروا زين التنموية لتنفيذ مشاريعهم
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {partners?.data.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 flex items-center justify-center h-32 border border-gray-100"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={120}
                className="max-h-32 object-contain"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-100 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">انضم إلى قائمة عملائنا المميزين</h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            نحن نسعى دائماً لبناء علاقات طويلة الأمد مع عملائنا وشركائنا، ونلتزم بتقديم أفضل الخدمات والحلول التي تلبي
            احتياجاتهم وتتجاوز توقعاتهم.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-2 rounded transition-colors"
          >
            <span>تواصل معنا</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

