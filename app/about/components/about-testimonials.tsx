"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronRight, ChevronLeft, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "عبدالله السعيد",
    position: "مدير شركة الأفق للاستثمار العقاري",
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    content:
      "تعاملنا مع شركة زين التنموية في العديد من المشاريع، ووجدنا فيهم الشريك المثالي الذي يلتزم بالجودة والمواعيد. أنصح بالتعامل معهم لكل من يبحث عن الاحترافية والإتقان.",
  },
  {
    id: 2,
    name: "سارة الجبر",
    position: "مالكة فيلا سكنية",
    image:
      "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    content:
      "قامت شركة زين التنموية ببناء فيلتي الخاصة، وكانت التجربة رائعة من البداية إلى النهاية. التزموا بكل التفاصيل التي طلبتها وكان التنفيذ بجودة عالية جداً.",
  },
  {
    id: 3,
    name: "فهد العنزي",
    position: "مدير عام مجموعة الخليج التجارية",
    image:
      "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg",
    content:
      "نفذت شركة زين التنموية مشروع مجمعنا التجاري بكفاءة عالية والتزام تام بالجدول الزمني والميزانية المحددة. فريق العمل محترف ومتعاون، وسنستمر بالتعامل معهم في مشاريعنا القادمة.",
  },
]

export function AboutTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">ماذا يقول عملاؤنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نفخر بثقة عملائنا وشركائنا في خدماتنا، وهذه بعض آرائهم حول تجربتهم معنا
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-amber-500 hover:bg-amber-500 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                        <div className="mr-auto">
                          <Quote className="w-10 h-10 text-amber-500/20" />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-amber-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

