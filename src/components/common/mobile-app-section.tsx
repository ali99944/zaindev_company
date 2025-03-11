"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Bell, Calendar, CreditCard, FileText, MapPin, MessageSquare, Smartphone } from 'lucide-react'
import { DotPattern } from "./dot-pattern"
import { IPhoneFrame } from "../device-frames/iphone-frame"
import { AppServiceDetailsMockup } from "../mockups/app-service-details"

export function MobileAppSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
    <DotPattern dotColor="#274C77" spacing={20} opacity={0.07} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-black rounded-full mb-6">
              <Smartphone className="w-4 h-4 text-amber-500 ml-2" />
              <span className="text-amber-500 text-sm font-medium">تطبيق زين التنموية</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              كل خدماتنا بين يديك <span className="text-amber-500">في أي وقت ومكان</span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              حمّل تطبيق زين التنموية الآن واستمتع بتجربة سلسة للوصول إلى جميع خدماتنا ومتابعة مشاريعك وحجز المواعيد بكل سهولة من هاتفك المحمول.
            </p>

            {/* App Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">متابعة المشاريع</h3>
                  <p className="text-gray-600 text-sm">تابع تقدم مشاريعك وشاهد التحديثات أولاً بأول</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">حجز المواعيد</h3>
                  <p className="text-gray-600 text-sm">احجز موعداً مع فريقنا بضغطة زر واختر الوقت المناسب لك</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">إشعارات فورية</h3>
                  <p className="text-gray-600 text-sm">احصل على إشعارات فورية بكل ما يخص مشاريعك وطلباتك</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">دعم فوري</h3>
                  <p className="text-gray-600 text-sm">تواصل مع فريق الدعم مباشرة عبر المحادثة الفورية</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">تتبع الفنيين</h3>
                  <p className="text-gray-600 text-sm">تتبع وصول الفنيين إلى موقعك في الوقت الحقيقي</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">دفع إلكتروني</h3>
                  <p className="text-gray-600 text-sm">ادفع فواتيرك إلكترونياً بكل أمان وسهولة</p>
                </div>
              </motion.div>
            </div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#" className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors gap-x-2">
                <Image src="/images/zaindev-app/app-store.png" alt="App Store" width={24} height={24} />
                <div className="flex flex-col">
                  <span className="text-xs">متوفر على</span>
                  <span className="font-bold">App Store</span>
                </div>
              </Link>
              
              <Link href="#" className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors gap-x-2">
              <Image src="/images/zaindev-app/google-play.png" alt="App Store" width={24} height={24} />
                <div className="flex flex-col">
                  <span className="text-xs">متوفر على</span>
                  <span className="font-bold">Google Play</span>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 flex gap-4">
              <IPhoneFrame>
                <AppServiceDetailsMockup />
              </IPhoneFrame>
              
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
