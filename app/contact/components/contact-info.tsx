"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, Calendar, CheckCircle } from 'lucide-react'
import CardLoader from "@/src/components/loaders/card-loader"
import { useGetQuery } from "@/src/hooks/queries-actions"
import { AppSettings } from "@/src/types/app-settings"

export function ContactInfo() {
  const { data: app_settings, isLoading: is_app_settings_loading } = useGetQuery<AppSettings>({
    url: 'settings',
    key: ['settings'],
  })

  const settings = app_settings as unknown as AppSettings

  if(is_app_settings_loading) {
    return <div className="p-4">
      <CardLoader />
    </div>
  }
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">نحن نقدر تواصلكم</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              في زين التنموية، نؤمن بأهمية التواصل المستمر مع عملائنا. فريقنا جاهز للإجابة على جميع استفساراتكم وتقديم المساعدة التي تحتاجونها في أي وقت.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">ساعات العمل</h3>
                  <p className="text-gray-600">
                    {settings.translations.terms_summary}
                  </p>
                  <p className="text-gray-600">الجمعة - السبت: مغلق</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">حجز موعد</h3>
                  <p className="text-gray-600">يمكنكم حجز موعد مسبق لزيارة مكاتبنا أو للاجتماع مع فريقنا عبر الاتصال بنا أو ملء نموذج التواصل.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-500" />
                <span>خدمة العملاء على مدار الساعة</span>
              </h3>
              <p className="text-gray-600">
                نقدم خدمة دعم فني على مدار الساعة للحالات الطارئة. يمكنكم التواصل معنا عبر الرقم الموحد {settings?.phone_number} في أي وقت.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded transform rotate-3"></div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://img.freepik.com/free-photo/telephone-laptop-flat-lay-with-workspace-yellow-background_140725-23283.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                  alt="فريق خدمة العملاء"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">فريق متخصص لخدمتكم</h3>
                  <p className="text-white/80">نفخر بفريقنا المتميز الذي يعمل بجد لتلبية احتياجاتكم وتقديم أفضل الحلول</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
