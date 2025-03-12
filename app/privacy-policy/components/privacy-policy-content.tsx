"use client"

import { motion } from "framer-motion"
import { Calendar } from 'lucide-react'

export function PrivacyPolicyContent() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
          مرحباً بكم في موقع شركة زين التنموية. نحن نقدر ثقتكم ونلتزم بحماية خصوصيتكم. تصف سياسة الخصوصية هذه كيفية جمعنا واستخدامنا للمعلومات الشخصية التي تقدمونها لنا عند استخدام موقعنا الإلكتروني أو خدماتنا.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">1. المعلومات التي نجمعها</h2>
        <p className="text-gray-600 mb-4">
          قد نقوم بجمع أنواع مختلفة من المعلومات منكم أثناء استخدامكم لموقعنا الإلكتروني أو خدماتنا، بما في ذلك:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li><strong>المعلومات الشخصية:</strong> مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف والعنوان.</li>
          <li><strong>معلومات الدفع:</strong> مثل تفاصيل بطاقة الائتمان أو معلومات الحساب المصرفي (يتم معالجتها بشكل آمن من خلال مزودي خدمات الدفع المعتمدين).</li>
          <li><strong>معلومات الاستخدام:</strong> مثل كيفية استخدامكم لموقعنا وخدماتنا، والصفحات التي تزورونها، والوقت الذي تقضونه على موقعنا.</li>
          <li><strong>معلومات الجهاز:</strong> مثل نوع المتصفح ونظام التشغيل وعنوان IP.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">2. كيفية استخدام المعلومات</h2>
        <p className="text-gray-600 mb-4">
          نستخدم المعلومات التي نجمعها للأغراض التالية:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li>تقديم وتحسين خدماتنا.</li>
          <li>معالجة المعاملات وإرسال إشعارات متعلقة بها.</li>
          <li>الرد على استفساراتكم وطلباتكم.</li>
          <li>إرسال معلومات تسويقية عن خدماتنا وعروضنا (يمكنكم إلغاء الاشتراك في أي وقت).</li>
          <li>تحليل كيفية استخدام موقعنا وتحسين تجربة المستخدم.</li>
          <li>الامتثال للالتزامات القانونية.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">3. مشاركة المعلومات</h2>
        <p className="text-gray-600 mb-4">
          نحن لا نبيع أو نؤجر معلوماتكم الشخصية لأطراف ثالثة. ومع ذلك، قد نشارك معلوماتكم في الحالات التالية:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li><strong>مزودي الخدمات:</strong> قد نشارك معلوماتكم مع مزودي الخدمات الذين يساعدوننا في تشغيل موقعنا وتقديم خدماتنا، مثل مزودي خدمات الدفع ومزودي خدمات البريد الإلكتروني.</li>
          <li><strong>الامتثال القانوني:</strong> قد نكشف عن معلوماتكم إذا كان ذلك مطلوباً بموجب القانون أو في إطار إجراءات قانونية.</li>
          <li><strong>حماية الحقوق:</strong> قد نكشف عن معلوماتكم لحماية حقوقنا أو ممتلكاتنا أو سلامة مستخدمينا أو الجمهور.</li>
          <li><strong>نقل الأعمال:</strong> في حالة الاندماج أو الاستحواذ أو بيع الأصول، قد يتم نقل معلوماتكم إلى الشركة المشترية.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">4. ملفات تعريف الارتباط (Cookies)</h2>
        <p className="text-gray-600 mb-4">
          نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتحسين تجربة المستخدم وتحليل كيفية استخدام موقعنا. يمكنكم ضبط إعدادات المتصفح لرفض ملفات تعريف الارتباط، ولكن ذلك قد يؤثر على قدرتكم على استخدام بعض ميزات موقعنا.
        </p>
        <p className="text-gray-600 mb-8">
          نستخدم نوعين من ملفات تعريف الارتباط:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li><strong>ملفات تعريف الارتباط الضرورية:</strong> هذه ضرورية لتشغيل موقعنا وتمكينكم من استخدام ميزاته.</li>
          <li><strong>ملفات تعريف الارتباط التحليلية:</strong> نستخدمها لتحليل كيفية استخدامكم لموقعنا وتحسين أدائه.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">5. أمان البيانات</h2>
        <p className="text-gray-600 mb-8">
          نتخذ تدابير أمنية معقولة لحماية معلوماتكم الشخصية من الوصول غير المصرح به أو الإفصاح أو التغيير أو الإتلاف. ومع ذلك، لا يمكن ضمان أمان المعلومات المرسلة عبر الإنترنت بشكل كامل. لذلك، في حين أننا نسعى جاهدين لحماية معلوماتكم الشخصية، لا يمكننا ضمان أمانها بشكل مطلق.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">6. حقوقكم</h2>
        <p className="text-gray-600 mb-4">
          لديكم حقوق معينة فيما يتعلق بمعلوماتكم الشخصية، بما في ذلك:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li><strong>الوصول:</strong> يمكنكم طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنكم.</li>
          <li><strong>التصحيح:</strong> يمكنكم طلب تصحيح أي معلومات غير دقيقة أو غير كاملة.</li>
          <li><strong>الحذف:</strong> يمكنكم طلب حذف معلوماتكم الشخصية في ظروف معينة.</li>
          <li><strong>تقييد المعالجة:</strong> يمكنكم طلب تقييد معالجة معلوماتكم الشخصية في ظروف معينة.</li>
          <li><strong>نقل البيانات:</strong> يمكنكم طلب نقل معلوماتكم الشخصية إلى منظمة أخرى أو إليكم.</li>
          <li><strong>الاعتراض:</strong> يمكنكم الاعتراض على معالجة معلوماتكم الشخصية في ظروف معينة.</li>
        </ul>
        <p className="text-gray-600 mb-8">
          لممارسة أي من هذه الحقوق، يرجى التواصل معنا باستخدام معلومات الاتصال المذكورة أدناه.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">7. الأطفال</h2>
        <p className="text-gray-600 mb-8">
          موقعنا وخدماتنا غير موجهة للأطفال دون سن 16 عاماً. نحن لا نجمع عن علم معلومات شخصية من الأطفال دون سن 16 عاماً. إذا كنتم تعتقدون أن طفلاً قد قدم لنا معلومات شخصية، يرجى الاتصال بنا وسنتخذ الخطوات اللازمة لحذف هذه المعلومات.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">8. التغييرات على سياسة الخصوصية</h2>
        <p className="text-gray-600 mb-8">
          قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بنشر أي تغييرات على هذه الصفحة وتحديث تاريخ &quot;آخر تحديث&quot; في أعلى هذه السياسة. نشجعكم على مراجعة سياسة الخصوصية بانتظام للبقاء على اطلاع بأي تغييرات.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">9. اتصل بنا</h2>
        <p className="text-gray-600 mb-4">
          إذا كان لديكم أي أسئلة أو استفسارات حول سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالخصوصية، يرجى الاتصال بنا على:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="mb-2"><strong>شركة زين التنموية</strong></p>
          <p className="mb-2">الرياض، المملكة العربية السعودية</p>
          <p className="mb-2">البريد الإلكتروني: privacy@zaindev.com</p>
          <p>الهاتف: 800 123 4567</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-gray-500 text-sm">
            بالاستمرار في استخدام موقعنا وخدماتنا، فإنكم توافقون على شروط سياسة الخصوصية هذه.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
