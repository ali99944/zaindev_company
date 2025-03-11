"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { IPhoneFrame } from "../device-frames/iphone-frame"
import { AppWelcomeMockup } from "../mockups/app-welcome"
import { AppLoginMockup } from "../mockups/app-login"
import { AppRegisterMockup } from "../mockups/app-register"
import { AppHomeMockup } from "../mockups/app-home"
import { AppServicesMockup } from "../mockups/app-services"

// Define the mockup screens
const mockups = [
  {
    id: "welcome",
    title: "شاشة الترحيب",
    description: "تجربة ترحيبية سلسة تعرف المستخدم على مميزات التطبيق",
    mockup: <AppWelcomeMockup />
  },
  {
    id: "login",
    title: "تسجيل الدخول",
    description: "واجهة بسيطة وآمنة لتسجيل الدخول إلى حسابك",
    mockup: <AppLoginMockup />
  },
  {
    id: "register",
    title: "إنشاء حساب",
    description: "إنشاء حساب جديد بخطوات سهلة وسريعة",
    mockup: <AppRegisterMockup />
  },
  {
    id: "home",
    title: "الصفحة الرئيسية",
    description: "واجهة رئيسية سهلة الاستخدام تعرض جميع الخدمات والمعلومات المهمة",
    mockup: <AppHomeMockup />
  },
  {
    id: "services",
    title: "الخدمات",
    description: "تصفح جميع خدماتنا واطلب الخدمة التي تحتاجها بضغطة زر",
    mockup: <AppServicesMockup />
  },
]

export function MobileAppMockups() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextMockup = () => {
    setActiveIndex((prev) => (prev + 1) % mockups.length)
  }

  const prevMockup = () => {
    setActiveIndex((prev) => (prev - 1 + mockups.length) % mockups.length)
  }

  const goToMockup = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">تصميم عصري وتجربة استخدام مميزة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            تم تصميم تطبيق زين التنموية بعناية فائقة لتوفير تجربة استخدام سلسة وممتعة تمكنك من الوصول إلى جميع خدماتنا
            بسهولة
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={prevMockup}
              className="w-12 h-12 rounded-full bg-black  flex items-center justify-center text-amber-500 hover:bg-gray-600 hover:text-amber-600 transition-colors"
              aria-label="السابق"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={nextMockup}
              className="w-12 h-12 rounded-full bg-black  flex items-center justify-center text-amber-500 hover:bg-gray-600 hover:text-amber-600 transition-colors"
              aria-label="التالي"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Mockup Display */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Mockup Image */}
            <div className="md:w-1/2 relative">
              <div className="relative mx-auto max-w-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <IPhoneFrame>
                      {mockups[activeIndex].mockup}
                    </IPhoneFrame>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mockup Description */}
            <div className="md:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{mockups[activeIndex].title}</h3>
                  <p className="text-gray-600 mb-8 text-lg">{mockups[activeIndex].description}</p>

                  {/* Features specific to each screen */}
                  {activeIndex === 0 && (
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs">
                          1
                        </div>
                        <span>تجربة ترحيبية سلسة وجذابة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs">
                          2
                        </div>
                        <span>تعرف على مميزات التطبيق بطريقة تفاعلية</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs">
                          3
                        </div>
                        <span>سهولة التنقل والوصول إلى شاشة تسجيل الدخول</span>
                      </li>
                    </ul>
                  )}

                  {activeIndex === 1 && (
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          1
                        </div>
                        <span>تسجيل دخول آمن وسريع</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          2
                        </div>
                        <span>إمكانية تسجيل الدخول باستخدام البصمة أو Face ID</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          3
                        </div>
                        <span>استعادة كلمة المرور بسهولة</span>
                      </li>
                    </ul>
                  )}

                  {activeIndex === 2 && (
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          1
                        </div>
                        <span>إنشاء حساب جديد بخطوات بسيطة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          2
                        </div>
                        <span>التحقق من رقم الهاتف لضمان الأمان</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          3
                        </div>
                        <span>إمكانية التسجيل باستخدام حسابات التواصل الاجتماعي</span>
                      </li>
                    </ul>
                  )}

                  {activeIndex === 3 && (
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          1
                        </div>
                        <span>واجهة رئيسية سهلة الاستخدام</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          2
                        </div>
                        <span>عرض الخدمات الأكثر استخداماً</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          3
                        </div>
                        <span>متابعة حالة المشاريع والطلبات الحالية</span>
                      </li>
                    </ul>
                  )}

                  {activeIndex === 4 && (
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          1
                        </div>
                        <span>عرض جميع الخدمات بتصنيفات واضحة</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          2
                        </div>
                        <span>تفاصيل كاملة لكل خدمة مع الأسعار</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                          3
                        </div>
                        <span>طلب الخدمة وتحديد الموعد المناسب بسهولة</span>
                      </li>
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mockup Navigation Dots */}
          <div className="flex justify-center mt-12 gap-2">
            {mockups.map((mockup, index) => (
              <button
                key={mockup.id}
                onClick={() => goToMockup(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-amber-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={mockup.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

