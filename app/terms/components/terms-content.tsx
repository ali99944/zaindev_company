"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export function TermsContent() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="prose prose-lg max-w-none rtl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-500 mb-8 text-sm">
        <Calendar className="w-4 h-4" />
        <span>آخر تحديث: 15 مارس 2025</span>
      </motion.div>

      <motion.div variants={itemVariants}>
        <p className="text-gray-600 mb-8">
          مرحباً بكم في موقع شركة زين التنموية. يرجى قراءة الشروط والأحكام التالية بعناية قبل استخدام موقعنا الإلكتروني
          أو خدماتنا. باستخدامكم لموقعنا أو خدماتنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">1. قبول الشروط</h2>
        <p className="text-gray-600 mb-8">
          باستخدامكم لموقع شركة زين التنموية وخدماتها، فإنكم توافقون على الالتزام بهذه الشروط والأحكام وسياسة الخصوصية
          الخاصة بنا. إذا كنتم لا توافقون على هذه الشروط، يرجى عدم استخدام موقعنا أو خدماتنا.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">2. التغييرات على الشروط</h2>
        <p className="text-gray-600 mb-8">
          نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر التغييرات على هذه الصفحة مع تحديث تاريخ &quot;آخر
          تحديث&quot;. استمراركم في استخدام الموقع بعد نشر التغييرات يعني موافقتكم على الشروط المعدلة.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">3. استخدام الموقع</h2>
        <p className="text-gray-600 mb-4">
          أنتم توافقون على استخدام موقعنا فقط للأغراض المشروعة وبطريقة لا تنتهك حقوق أي طرف ثالث. يحظر عليكم:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li>استخدام الموقع بأي طريقة قد تسبب ضرراً للموقع أو تعطل إمكانية الوصول إليه.</li>
          <li>استخدام الموقع لأي غرض احتيالي أو غير قانوني.</li>
          <li>الوصول غير المصرح به إلى أنظمتنا أو شبكاتنا.</li>
          <li>جمع أو حصاد أي معلومات من الموقع بدون إذن.</li>
          <li>نشر أي محتوى غير قانوني أو ضار أو تهديدي أو مسيء أو تشهيري أو فاحش.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">4. الحسابات</h2>
        <p className="text-gray-600 mb-4">
          عند إنشاء حساب على موقعنا، يجب عليكم تقديم معلومات دقيقة وكاملة وحديثة. أنتم مسؤولون عن الحفاظ على سرية كلمة
          المرور الخاصة بكم وعن جميع الأنشطة التي تحدث تحت حسابكم.
        </p>
        <p className="text-gray-600 mb-8">
          نحتفظ بالحق في تعليق أو إنهاء حسابكم إذا كان هناك انتهاك لهذه الشروط والأحكام.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">5. الخدمات والمنتجات</h2>
        <p className="text-gray-600 mb-4">
          نقدم مجموعة متنوعة من الخدمات والمنتجات المتعلقة بالمقاولات والبناء والصيانة. نحن نسعى جاهدين لضمان دقة وصف
          خدماتنا ومنتجاتنا، ولكن لا نضمن أن جميع المعلومات دقيقة أو كاملة أو حديثة.
        </p>
        <p className="text-gray-600 mb-8">نحتفظ بالحق في تغيير أو إيقاف أي خدمة أو منتج في أي وقت بدون إشعار مسبق.</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">6. الطلبات والدفع</h2>
        <p className="text-gray-600 mb-4">
          عند تقديم طلب للحصول على خدماتنا أو منتجاتنا، فإنكم تقدمون عرضاً لشراء الخدمة أو المنتج. نحتفظ بالحق في قبول أو
          رفض طلبكم لأي سبب.
        </p>
        <p className="text-gray-600 mb-4">
          يجب دفع جميع الرسوم وفقاً لشروط الدفع المحددة في وقت الطلب. جميع الأسعار قابلة للتغيير بدون إشعار مسبق.
        </p>
        <p className="text-gray-600 mb-8">
          نحن نستخدم مزودي خدمات دفع خارجيين لمعالجة المدفوعات. استخدامكم لخدمات الدفع هذه يخضع لشروط وأحكام وسياسات
          الخصوصية الخاصة بهم.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">7. الملكية الفكرية</h2>
        <p className="text-gray-600 mb-4">
          جميع المحتويات الموجودة على موقعنا، بما في ذلك النصوص والرسومات والشعارات والصور ومقاطع الفيديو والبرامج
          وغيرها من المواد، هي ملك لشركة زين التنموية أو مرخصة لها، وهي محمية بموجب قوانين حقوق النشر والعلامات التجارية
          وغيرها من قوانين الملكية الفكرية.
        </p>
        <p className="text-gray-600 mb-8">
          لا يجوز لكم نسخ أو إعادة إنتاج أو توزيع أو نشر أو عرض علناً أو تعديل أي جزء من موقعنا بدون إذن كتابي مسبق منا.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">8. الروابط الخارجية</h2>
        <p className="text-gray-600 mb-8">
          قد يحتوي موقعنا على روابط لمواقع إلكترونية خارجية لا نتحكم فيها. نحن لسنا مسؤولين عن محتوى أو ممارسات الخصوصية
          لهذه المواقع. نوصي بقراءة سياسات الخصوصية والشروط والأحكام لأي موقع خارجي تزورونه.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">9. إخلاء المسؤولية</h2>
        <p className="text-gray-600 mb-4">
          يتم توفير موقعنا وخدماتنا &quot;كما هي&quot; و&quot;كما هي متاحة&quot; بدون أي ضمانات من أي نوع، صريحة أو ضمنية. نحن لا نضمن أن
          موقعنا سيكون متاحاً بشكل مستمر أو خالياً من الأخطاء.
        </p>
        <p className="text-gray-600 mb-8">
          لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناتجة عن استخدامكم
          لموقعنا أو خدماتنا.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">10. القانون الحاكم</h2>
        <p className="text-gray-600 mb-8">
          تخضع هذه الشروط والأحكام وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن هذه الشروط والأحكام
          سيخضع للاختصاص القضائي الحصري للمحاكم في المملكة العربية السعودية.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">11. اتصل بنا</h2>
        <p className="text-gray-600 mb-4">
          إذا كان لديكم أي أسئلة أو استفسارات حول هذه الشروط والأحكام، يرجى الاتصال بنا على:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="mb-2">
            <strong>شركة زين التنموية</strong>
          </p>
          <p className="mb-2">الرياض، المملكة العربية السعودية</p>
          <p className="mb-2">البريد الإلكتروني: info@zaindev.com</p>
          <p>الهاتف: 800 المملكة العربية السعودية</p>
          <p className="mb-2">البريد الإلكتروني: info@zaindev.com</p>
          <p>الهاتف: 800 123 4567</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-gray-500 text-sm">
            بالاستمرار في استخدام موقعنا وخدماتنا، فإنكم توافقون على هذه الشروط والأحكام.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

