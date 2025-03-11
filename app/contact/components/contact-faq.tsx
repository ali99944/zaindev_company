"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "ما هي مواعيد العمل لديكم؟",
    answer:
      "نعمل من الأحد إلى الخميس من الساعة 8:00 صباحاً حتى 5:00 مساءً، ويوم السبت من الساعة 9:00 صباحاً حتى 2:00 ظهراً. الجمعة إجازة رسمية.",
  },
  {
    question: "كيف يمكنني الحصول على عرض سعر لمشروعي؟",
    answer:
      "يمكنك التواصل معنا عبر نموذج الاتصال في موقعنا الإلكتروني أو الاتصال بنا مباشرة على الرقم 800 123 4567، وسيقوم فريقنا بالتواصل معك لتحديد موعد لزيارة الموقع وتقديم عرض سعر مناسب.",
  },
  {
    question: "هل تقدمون خدمات الصيانة بعد انتهاء المشروع؟",
    answer:
      "نعم، نقدم خدمات الصيانة لجميع مشاريعنا، ونوفر ضماناً على كافة الأعمال المنفذة لمدة تتراوح بين سنة إلى خمس سنوات حسب نوع المشروع والخدمة المقدمة.",
  },
  {
    question: "ما هي المناطق التي تغطونها بخدماتكم؟",
    answer:
      "نقدم خدماتنا في جميع مناطق المملكة العربية السعودية، مع تركيز خاص على المدن الرئيسية مثل الرياض وجدة والدمام.",
  },
  {
    question: "هل تقدمون خدمات التصميم الداخلي؟",
    answer:
      "نعم، لدينا فريق متخصص في التصميم الداخلي يقدم حلولاً مبتكرة وعصرية تناسب احتياجات العملاء وتعكس ذوقهم الشخصي.",
  },
  {
    question: "كم تستغرق مدة تنفيذ المشاريع السكنية؟",
    answer:
      "تختلف مدة تنفيذ المشاريع السكنية حسب حجم المشروع ومتطلباته، ولكن بشكل عام تتراوح المدة بين 6 أشهر إلى 18 شهراً للفلل السكنية، ويتم تحديد الجدول الزمني بدقة في بداية المشروع.",
  },
]

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
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
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-4 cursor-pointer text-right"
                >
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            لم تجد إجابة لسؤالك؟{" "}
            <a href="#contact-form" className="text-amber-500 font-medium hover:underline">
              تواصل معنا مباشرة
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

