"use client"

import { motion } from "framer-motion"
import { Building, Users, Award, CheckCircle } from "lucide-react"

// Stats data
const stats = [
  {
    icon: <Building className="w-8 h-8" />,
    value: "500+",
    label: "مشروع منجز",
    description: "أكثر من 500 مشروع ناجح في مختلف أنحاء المملكة",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "200+",
    label: "موظف محترف",
    description: "فريق من المهندسين والفنيين والإداريين المحترفين",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "15+",
    label: "عاماً من الخبرة",
    description: "خبرة واسعة في مجال المقاولات والتطوير العقاري",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    value: "50+",
    label: "شريك نجاح",
    description: "شراكات استراتيجية مع كبرى الشركات والمؤسسات",
  },
]

export function AboutStats() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نفخر بما حققناه على مدار السنوات الماضية من إنجازات ونجاحات في مختلف المشاريع
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-amber-500 mb-2">{stat.value}</h3>
              <p className="text-xl font-bold mb-2">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-amber-400 to-amber-500 rounded text-black text-center"
        >
          <h3 className="text-2xl font-bold mb-4">نسعى دائماً للتميز والريادة</h3>
          <p className="max-w-3xl mx-auto">
            نحن ملتزمون بتقديم أفضل الخدمات والحلول لعملائنا، والمساهمة في تطوير قطاع المقاولات والتطوير العقاري في
            المملكة العربية السعودية.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

