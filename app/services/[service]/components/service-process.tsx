"use client"

import { motion } from "framer-motion"

interface ServiceProcessProps {
  service: {
    id: number
    name: string
  }
}

export function ServiceProcess({ service }: ServiceProcessProps) {
    console.log(service);
    
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">مراحل العمل</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نتبع منهجية عمل واضحة ومنظمة لضمان تنفيذ المشاريع بأعلى مستويات الجودة والكفاءة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xl mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

