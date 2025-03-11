"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Building2, Target } from "lucide-react"

const features = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "خبرة واسعة",
    description: "أكثر من 15 عاماً من الخبرة في مجال المقاولات والتطوير",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "فريق محترف",
    description: "نخبة من المهندسين والفنيين المؤهلين لتنفيذ مشاريعكم",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "مشاريع متنوعة",
    description: "تنفيذ مئات المشاريع السكنية والتجارية بنجاح",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "جودة عالية",
    description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded transform -rotate-6"></div>
              <div className="relative rounded overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/portrait-business-partners-greeting-one-another-by-handshaking-way-office_1150-3028.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                  alt="About Zain Development"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">عن زين التنموية</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                شركة زين التنموية هي شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية. نحن نفخر بتقديم
                خدمات عالية الجودة وحلول مبتكرة لعملائنا، مع التركيز على الاستدامة والتميز في كل مشروع.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded shadow-none"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

