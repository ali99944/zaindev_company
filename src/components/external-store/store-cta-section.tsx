"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowLeft } from "lucide-react"

export function StoreCTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#000" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 md:p-0 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-auto"
            >
              <Image
                src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34863.jpg"
                alt="متجر زين الإلكتروني"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-l"></div>

              <div className="absolute inset-0 flex items-center p-6 md:hidden">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">متجر زين الإلكتروني</h3>
                  <p className="mb-4 text-white/80">تسوق أفضل المنتجات بأفضل الأسعار</p>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10"
            >
              <div className="hidden md:block">
                <h3 className="text-2xl font-bold mb-2">متجر زين الإلكتروني</h3>
                <p className="text-gray-600 mb-6">تسوق أفضل المنتجات بأفضل الأسعار</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold">تشكيلة واسعة من المنتجات</h4>
                    <p className="text-gray-600 text-sm">مكيفات، أجهزة منزلية، قطع غيار وأكثر</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-percent"
                    >
                      <line x1="19" x2="5" y1="5" y2="19" />
                      <circle cx="6.5" cy="6.5" r="2.5" />
                      <circle cx="17.5" cy="17.5" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">عروض وخصومات مستمرة</h4>
                    <p className="text-gray-600 text-sm">استفد من العروض الحصرية والخصومات الموسمية</p>
                  </div>
                </div>
              </div>

              <Link
                href="/store"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <span>زيارة المتجر</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

