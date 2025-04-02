"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from 'lucide-react'

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    role: "مالك مشروع سكني",
    image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    content: "استفدت كثيراً من الاستشارات التي قدمها فريق زين التنموية. ساعدوني على توفير الكثير من الوقت والمال في مشروع بناء منزلي الجديد.",
    rating: 5
  },
  {
    id: 2,
    name: "سارة عبدالله",
    role: "صاحبة مشروع تجاري",
    image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    content: "الاستشارات المقدمة كانت احترافية للغاية وساعدتني على تجنب الكثير من المشاكل المحتملة في مشروعي التجاري. أنصح بشدة بخدماتهم.",
    rating: 5
  },
  {
    id: 3,
    name: "خالد العمري",
    role: "مستثمر عقاري",
    image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    content: "تعاملت مع زين التنموية في عدة مشاريع استثمارية، وكانت استشاراتهم دقيقة ومفيدة للغاية. فريق محترف يستحق الثقة.",
    rating: 4
  }
]

export function ConsultationTestimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
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
          <h2 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نفخر بثقة عملائنا وآرائهم الإيجابية حول خدمات الاستشارات التي نقدمها
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover w-14 h-14"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
