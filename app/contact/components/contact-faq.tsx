"use client"

import { FaqsComponent } from "@/src/components/common/faqs-component"

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
  return <FaqsComponent faqs={faqs} />
}

