"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export function RefundPolicyContent() {
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
          تهدف سياسة الاسترجاع هذه إلى توضيح الإجراءات والشروط المتعلقة باسترجاع المنتجات وإلغاء الخدمات المقدمة من شركة
          زين التنموية. نحن نسعى جاهدين لضمان رضاكم التام عن منتجاتنا وخدماتنا، ونلتزم بتقديم سياسة استرجاع عادلة
          وشفافة.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">1. استرجاع المنتجات</h2>
        <p className="text-gray-600 mb-4">يمكنكم استرجاع المنتجات التي اشتريتموها من متجر زين وفقاً للشروط التالية:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li>
            <strong>فترة الاسترجاع:</strong> يجب تقديم طلب الاسترجاع خلال 14 يوماً من تاريخ استلام المنتج.
          </li>
          <li>
            <strong>حالة المنتج:</strong> يجب أن يكون المنتج في حالته الأصلية، غير مستخدم، مع جميع الملحقات والتغليف
            الأصلي.
          </li>
          <li>
            <strong>إثبات الشراء:</strong> يجب تقديم إيصال الشراء أو فاتورة الشراء أو أي دليل آخر على الشراء.
          </li>
          <li>
            <strong>المنتجات غير القابلة للاسترجاع:</strong> بعض المنتجات غير قابلة للاسترجاع لأسباب تتعلق بالصحة
            والسلامة أو لأسباب أخرى، مثل المنتجات المخصصة حسب الطلب.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">2. إجراءات الاسترجاع</h2>
        <p className="text-gray-600 mb-4">لاسترجاع منتج، يرجى اتباع الخطوات التالية:</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-8">
          <li>
            اتصلوا بخدمة العملاء على الرقم 800 123 4567 أو أرسلوا بريداً إلكترونياً إلى returns@zaindev.com لتقديم طلب
            الاسترجاع.
          </li>
          <li>سيزودكم فريق خدمة العملاء برقم تتبع للاسترجاع وتعليمات حول كيفية إعادة المنتج.</li>
          <li>قوموا بتغليف المنتج بشكل آمن مع جميع الملحقات والوثائق الأصلية.</li>
          <li>أرسلوا المنتج إلى العنوان المحدد مع إرفاق رقم تتبع الاسترجاع.</li>
          <li>بمجرد استلام المنتج وفحصه، سنقوم بمعالجة الاسترجاع وإبلاغكم بالنتيجة.</li>
        </ol>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">3. استرداد المبالغ</h2>
        <p className="text-gray-600 mb-4">
          في حالة الموافقة على طلب الاسترجاع، سيتم استرداد المبلغ وفقاً للشروط التالية:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li>
            <strong>طريقة الاسترداد:</strong> سيتم استرداد المبلغ بنفس طريقة الدفع الأصلية التي استخدمتموها عند الشراء.
          </li>
          <li>
            <strong>وقت الاسترداد:</strong> قد يستغرق استرداد المبلغ ما بين 7-14 يوم عمل، اعتماداً على طريقة الدفع والبنك
            الخاص بكم.
          </li>
          <li>
            <strong>رسوم الشحن:</strong> رسوم الشحن الأصلية غير قابلة للاسترداد، إلا في حالة استلام منتج معيب أو خاطئ.
          </li>
          <li>
            <strong>رسوم إعادة الشحن:</strong> أنتم مسؤولون عن تكاليف إعادة شحن المنتج، إلا في حالة استلام منتج معيب أو
            خاطئ.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">4. المنتجات المعيبة</h2>
        <p className="text-gray-600 mb-4">إذا استلمتم منتجاً معيباً أو تالفاً، يرجى اتباع الإجراءات التالية:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li>أبلغونا في أقرب وقت ممكن، ويفضل خلال 48 ساعة من استلام المنتج.</li>
          <li>قدموا صوراً للمنتج المعيب وأي تلف في التغليف.</li>
          <li>
            س��قوم بترتيب استبدال المنتج أو استرداد المبلغ بالكامل، بما في ذلك رسوم الشحن الأصلية ورسوم إعادة الشحن.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">5. إلغاء الخدمات</h2>
        <p className="text-gray-600 mb-4">فيما يتعلق بخدمات المقاولات والصيانة وغيرها من الخدمات التي نقدمها:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li>
            <strong>إلغاء قبل بدء الخدمة:</strong> إذا قمتم بإلغاء الخدمة قبل بدء العمل، قد يتم تطبيق رسوم إلغاء تصل إلى
            10% من قيمة العقد، اعتماداً على الوقت المستغرق في التخطيط والتحضير.
          </li>
          <li>
            <strong>إلغاء بعد بدء الخدمة:</strong> إذا قمتم بإلغاء الخدمة بعد بدء العمل، سيتم احتساب تكلفة العمل المنجز
            بالإضافة إلى رسوم إلغاء قد تصل إلى 20% من قيمة العمل المتبقي.
          </li>
          <li>
            <strong>جدولة مواعيد الخدمة:</strong> يجب إلغاء مواعيد الخدمة قبل 24 ساعة على الأقل من الموعد المحدد لتجنب
            رسوم الإلغاء.
          </li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">6. الضمان</h2>
        <p className="text-gray-600 mb-8">
          تأتي جميع منتجاتنا مع ضمان المصنّع القياسي. بالإضافة إلى ذلك، نقدم ضماناً على خدماتنا لمدة تتراوح بين 3 أشهر إلى
          سنتين، اعتماداً على نوع الخدمة. يرجى الرجوع إلى شروط الضمان المحددة المقدمة مع كل منتج أو خدمة.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">7. الاستثناءات</h2>
        <p className="text-gray-600 mb-4">لا تنطبق سياسة الاسترجاع هذه على الحالات التالية:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
          <li>المنتجات التي تم فتحها أو استخدامها، باستثناء المنتجات المعيبة.</li>
          <li>المنتجات المخصصة حسب الطلب.</li>
          <li>البرامج والتطبيقات الرقمية التي تم تنزيلها أو تفعيلها.</li>
          <li>الخدمات التي تم تنفيذها بالكامل.</li>
          <li>المنتجات والخدمات المشار إليها صراحةً على أنها غير قابلة للاسترجاع.</li>
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">8. التغييرات على سياسة الاسترجاع</h2>
        <p className="text-gray-600 mb-8">
          نحتفظ بالحق في تعديل سياسة الاسترجاع هذه في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ &quot;آخر
          تحديث&quot;. تطبق سياسة الاسترجاع السارية في وقت الشراء.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">9. اتصل بنا</h2>
        <p className="text-gray-600 mb-4">
          إذا كان لديكم أي أسئلة أو استفسارات حول سياسة الاسترجاع هذه، يرجى الاتصال بنا على:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="mb-2">
            <strong>شركة زين التنموية</strong>
          </p>
          <p className="mb-2">الرياض، المملكة العربية السعودية</p>
          <p className="mb-2">البريد الإلكتروني: returns@zaindev.com</p>
          <p>الهاتف: 800 123 4567</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="border-t border-gray-200 pt-8 mt-8">
          <p className="text-gray-500 text-sm">
            بالاستمرار في شراء منتجاتنا أو خدماتنا، فإنكم توافقون على شروط سياسة الاسترجاع هذه.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

