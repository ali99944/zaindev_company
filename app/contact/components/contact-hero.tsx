"use client"

import GridLoader from "@/src/components/loaders/grid-loader"
import { useGetQuery } from "@/src/hooks/queries-actions"
import { AppSettings } from "@/src/types/app-settings"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactHero() {
  const { data: app_settings, isLoading: is_app_settings_loading } = useGetQuery<AppSettings>({
    url: 'settings',
    key: ['settings'],
  })

  const settings = app_settings as unknown as AppSettings

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0057b7" strokeWidth="0.5" />
              </pattern>
              <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#f59e0b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10"
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/30 to-amber-500/40 rounded-full backdrop-blur-sm mb-6 border border-amber-500/20"
          >
            <span className="text-black text-sm font-medium">تواصل معنا بكل سهولة</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-amber-500">تواصل</span> معنا
            <br />
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              نحن هنا لمساعدتك
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            يسعدنا التواصل معكم والإجابة على جميع استفساراتكم. يمكنكم الاتصال بنا مباشرة أو إرسال رسالة من خلال النموذج أدناه.
          </motion.p>

          {
            is_app_settings_loading ? (
              <GridLoader />
            ): (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-4 rounded  border border-gray-100 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">اتصل بنا</h3>
              <p className="text-gray-600 text-center">
                {settings?.phone_number}
                <br />
                {settings?.second_phone_number}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-4 rounded  border border-gray-100 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600 text-center">
                {settings?.contact_email}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-4 rounded  border border-gray-100 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">العنوان</h3>
              <p className="text-gray-600 text-center">
                {settings?.translations.address}
              </p>
            </motion.div>
          </div>
            )
          }
        </div>
      </div>
    </section>
  )
}
