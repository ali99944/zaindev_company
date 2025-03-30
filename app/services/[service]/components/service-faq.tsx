"use client"

import { motion } from "framer-motion"
import { Faq, FaqsComponent } from "@/src/components/common/faqs-component"
import ServiceCategory from "@/src/types/service-category";

interface ServiceFaqProps {
  service: ServiceCategory
}

export function ServiceFaq({ service }: ServiceFaqProps) {

  if(service.services_categories_faqs.length == 0) return null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            إليك إجابات على بعض الأسئلة الشائعة التي قد تدور في ذهنك. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا
            مباشرة.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
        <FaqsComponent faqs={service.services_categories_faqs as unknown as Faq[]} />
        </div>
      </div>
    </section>
  )
}

