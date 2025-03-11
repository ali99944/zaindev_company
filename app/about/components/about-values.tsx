"use client"

import { motion } from "framer-motion"
import { Shield, Target, Users, Zap, Award, Lightbulb } from "lucide-react"

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا ونستخدم أفضل المواد والتقنيات",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "الالتزام",
    description: "نحرص على الالتزام بالمواعيد المحددة وتنفيذ المشاريع وفق الخطط الموضوعة",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "العمل الجماعي",
    description: "نؤمن بأهمية العمل الجماعي وروح الفريق لتحقيق أفضل النتائج",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "الابتكار",
    description: "نسعى دائماً لتقديم حلول مبتكرة وأفكار إبداعية تلبي احتياجات عملائنا",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "التميز",
    description: "نسعى للتميز في كل ما نقدمه من خدمات ومنتجات لنكون الخيار الأول لعملائنا",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "المسؤولية",
    description: "نتحمل مسؤولية أعمالنا ونلتزم بالمعايير الأخلاقية والمهنية في جميع تعاملاتنا",
  },
]

export function AboutValues() {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
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
          <h2 className="text-3xl font-bold mb-4">قيمنا ومبادئنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            تستند جميع أعمالنا وخدماتنا على مجموعة من القيم والمبادئ الراسخة التي تشكل هويتنا وتميزنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded p-4 transition-all duration-300 "
            >
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

