"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Sample partner logos - replace with actual partner logos
const partners = [
  { name: "شركة الإنشاءات السعودية", logo: "https://img.freepik.com/free-vector/indonesian-halal-logo-new-branding-2022_17005-1495.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
  { name: "مجموعة البناء المتكاملة", logo: "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
  { name: "شركة التطوير العقاري", logo: "https://img.freepik.com/free-vector/flat-design-vs-logo-design_23-2149482034.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
  { name: "مؤسسة الهندسة المعمارية", logo: "https://img.freepik.com/premium-vector/free-vector-blue-creative-financial-service-logo_883906-2282.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
  { name: "شركة المقاولات المتحدة", logo: "https://img.freepik.com/premium-vector/creative-logo-design-real-estate-company-vector-illustration_1253202-11231.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
  { name: "مجموعة الاستثمار العقاري", logo: "https://img.freepik.com/free-vector/global-corporation-logo_1043-184.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
  { name: "شركة التطوير العقاريds", logo: "https://img.freepik.com/free-vector/logo-with-blue-geometric-bars_1034-459.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
  { name: "مجموعة الهندسة المعمارية", logo: "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" },
]

export function PartnersSection() {
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
          {partners.map((partner, index) => (
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

