"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Sample client logos
const clients = [
  {
    name: "شركة الإنشاءات السعودية",
    logo: "https://img.freepik.com/free-vector/indonesian-halal-logo-new-branding-2022_17005-1495.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
  {
    name: "مجموعة البناء المتكاملة",
    logo: "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
  {
    name: "شركة التطوير العقاري",
    logo: "https://img.freepik.com/free-vector/flat-design-vs-logo-design_23-2149482034.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
  {
    name: "مؤسسة الهندسة المعمارية",
    logo: "https://img.freepik.com/premium-vector/free-vector-blue-creative-financial-service-logo_883906-2282.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
  {
    name: "شركة المقاولات المتحدة",
    logo: "https://img.freepik.com/premium-vector/creative-logo-design-real-estate-company-vector-illustration_1253202-11231.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
  {
    name: "مجموعة الاستثمار العقاري",
    logo: "https://img.freepik.com/free-vector/global-corporation-logo_1043-184.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
  {
    name: "شركة التطوير العقاريds",
    logo: "https://img.freepik.com/free-vector/logo-with-blue-geometric-bars_1034-459.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
  {
    name: "مجموعة الهندسة المعمارية",
    logo: "https://img.freepik.com/free-vector/flat-design-ac-logo-design_23-2149482027.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
  },
]

export function AboutClients() {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-4 flex items-center justify-center h-32 border border-gray-100"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
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

