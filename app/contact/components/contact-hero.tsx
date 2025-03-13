"use client"

import { BlueprintGrid } from "@/src/components/common/blueprint-grid-pattern"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <BlueprintGrid opacity={0.3} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 bg-amber-500 rounded-full mb-4">
            <span className="text-black text-sm font-medium">اتصل بنا</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            نحن هنا <span className="text-amber-500">لمساعدتك</span>
          </h1>

          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            فريقنا جاهز للإجابة على جميع استفساراتكم وتقديم المساعدة التي تحتاجونها. يمكنكم التواصل معنا عبر أي من وسائل
            الاتصال التالية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded p-4  text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mx-auto mb-4">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">اتصل بنا</h3>
            <p className="text-gray-600 mb-2">800 123 4567</p>
            <p className="text-gray-600">+966 50 000 0000</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-gray-200 rounded p-4  text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mx-auto mb-4">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">البريد الإلكتروني</h3>
            <p className="text-gray-600 mb-2">info@zaindev.com</p>
            <p className="text-gray-600">support@zaindev.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-gray-200 rounded p-4  text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mx-auto mb-4">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">العنوان</h3>
            <p className="text-gray-600 mb-2">الرياض، المملكة العربية السعودية</p>
            <p className="text-gray-600">طريق الملك فهد، برج المملكة، الطابق 20</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white border border-gray-200 rounded p-4  text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mx-auto mb-4">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold mb-2">ساعات العمل</h3>
            <p className="text-gray-600 mb-2">الأحد - الخميس: 8:00 ص - 5:00 م</p>
            <p className="text-gray-600">السبت: 9:00 ص - 2:00 م</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

