"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface SubServiceDetailsProps {
  service: {
    id: number
    name: string
  }
  subService: {
    id: number
    name: string
    description: string
    features: string[]
  }
}

export function SubServiceDetails({ service, subService }: SubServiceDetailsProps) {
    console.log(service, subService);
    
  // Split the description into paragraphs
  const paragraphs = subService.description.split("\n\n")

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">تفاصيل الخدمة</h2>

            <div className="prose prose-lg max-w-none">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6 text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">مميزات الخدمة</h3>

            <div className="bg-gray-50 rounded p-4">
              <div className="space-y-4">
                {subService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">معلومات إضافية</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">وقت التنفيذ</h4>
                  <p className="text-gray-600">يعتمد على حجم المشروع ومتطلباته</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">الضمان</h4>
                  <p className="text-gray-600">ضمان لمدة سنة على جميع الأعمال</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">طرق الدفع</h4>
                  <p className="text-gray-600">دفعات مرحلية حسب تقدم العمل</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold mb-2">المناطق المخدومة</h4>
                  <p className="text-gray-600">جميع مناطق المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

