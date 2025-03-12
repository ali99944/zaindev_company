"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "التواصل والاستشارة",
      description: "نبدأ بالتواصل معك لفهم احتياجاتك ومتطلباتك وتقديم الاستشارة المناسبة",
    },
    {
      number: "02",
      title: "الدراسة والتخطيط",
      description: "نقوم بدراسة المشروع وتخطيط مراحل التنفيذ وتحديد الميزانية والجدول الزمني",
    },
    {
      number: "03",
      title: "التصميم",
      description: "نقدم تصاميم مبتكرة تلبي احتياجاتك وتطلعاتك مع مراعاة الجوانب الفنية والجمالية",
    },
    {
      number: "04",
      title: "التنفيذ",
      description: "نقوم بتنفيذ المشروع وفق الخطة الموضوعة مع الالتزام بأعلى معايير الجودة",
    },
    {
      number: "05",
      title: "المتابعة والإشراف",
      description: "نتابع سير العمل ونشرف على جميع مراحل التنفيذ لضمان الالتزام بالخطة والجودة",
    },
    {
      number: "06",
      title: "التسليم والضمان",
      description: "نسلم المشروع في الموعد المحدد مع تقديم ضمان شامل على جميع الأعمال المنفذة",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">منهجية العمل</h2>
            <p className="text-gray-600 mb-8">
              نتبع منهجية عمل واضحة ومنظمة لضمان تنفيذ المشاريع بأعلى مستويات الجودة والكفاءة، وتحقيق رضا عملائنا.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/20 rounded-xl transform -rotate-3"></div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg"
                alt="منهجية العمل"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

