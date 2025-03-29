"use client"

import { motion } from "framer-motion"
import { FaqsComponent } from "@/src/components/common/faqs-component"

interface ServiceFaqProps {
  service: {
    id: number
    name: string
  }
}

export function ServiceFaq({ service }: ServiceFaqProps) {
    console.log(service);
    


  const faqs = [
    {
      question: "ما هي مدة تنفيذ المشاريع؟",
      answer:
        "تختلف مدة تنفيذ المشاريع حسب حجم المشروع ومتطلباته، ولكن بشكل عام تتراوح المدة بين 6 أشهر إلى 18 شهراً للمشاريع السكنية، ويتم تحديد الجدول الزمني بدقة في بداية المشروع.",
    },
    {
      question: "هل تقدمون خدمات التصميم الداخلي؟",
      answer:
        "نعم، نقدم خدمات التصميم الداخلي الشاملة التي تشمل اختيار الألوان والمواد والأثاث والإضاءة وجميع عناصر التصميم الداخلي، مع مراعاة ذوق العميل واحتياجاته.",
    },
    {
      question: "هل تقدمون ضمانات على الأعمال المنفذة؟",
      answer:
        "نعم، نقدم ضمانات على جميع الأعمال المنفذة تتراوح بين سنة إلى خمس سنوات حسب نوع العمل، كما نقدم خدمات الصيانة الدورية بعد انتهاء فترة الضمان.",
    },
    {
      question: "ما هي المناطق التي تغطونها بخدماتكم؟",
      answer:
        "نقدم خدماتنا في جميع مناطق المملكة العربية السعودية، مع تركيز خاص على المدن الرئيسية مثل الرياض وجدة والدمام.",
    },
    {
      question: "كيف يمكنني الحصول على عرض سعر لمشروعي؟",
      answer:
        "يمكنك التواصل معنا عبر نموذج الاتصال في موقعنا الإلكتروني أو الاتصال بنا مباشرة على الرقم 800 123 4567، وسيقوم فريقنا بالتواصل معك لتحديد موعد لزيارة الموقع وتقديم عرض سعر مناسب.",
    },
    {
      question: "هل تقدمون خدمات الإشراف على المشاريع فقط؟",
      answer:
        "نعم، يمكننا تقديم خدمات الإشراف على المشاريع فقط إذا كان لديك مقاول خاص بك، حيث نقوم بالإشراف على جميع مراحل التنفيذ لضمان الالتزام بالمعايير والمواصفات المطلوبة.",
    },
  ]

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
        <FaqsComponent faqs={faqs} />
        </div>
      </div>
    </section>
  )
}

