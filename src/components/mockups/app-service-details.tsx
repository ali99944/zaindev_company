"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react"
import { useState } from "react"

export function AppServiceDetailsMockup() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <div className="relative  h-[600px] rounded-[32px] overflow-hidden">


      {/* App Content */}
      <div className="relative w-full h-full bg-gray-50 pt-6">
        {/* Content */}
        <div className="relative z-10 h-full pb-20 overflow-y-auto" style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
        }}>
          {/* Header Image */}
          <div className="relative h-48 w-full">
            <Image
              src="https://img.freepik.com/free-photo/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3617.jpg"
              alt="صيانة التكييف"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            <div className="absolute bottom-4 right-4 text-white">
              <h1 className="text-xl font-bold mb-1">صيانة التكييف</h1>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs text-white/80 mr-1">4.9 (120 تقييم)</span>
              </div>
            </div>
          </div>

          {/* Price and Time */}
          <div className="flex justify-between items-center p-4 bg-white border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">60 دقيقة</span>
            </div>
            <div className="font-bold text-md text-red-600">150 ريال</div>
          </div>

          {/* Description */}
          <div className="p-4 bg-white mb-4">
            <h2 className="font-bold text-lg mb-3">وصف الخدمة</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              خدمة صيانة وتنظيف وحدات التكييف بأيدي فنيين محترفين. تشمل الخدمة فحص شامل للوحدة، تنظيف الفلاتر، فحص غاز
              التبريد، وضمان عمل الجهاز بكفاءة عالية.
            </p>
          </div>

          {/* What's Included */}
          <div className="p-4 bg-white mb-4">
            <h2 className="font-bold text-lg mb-3">ماذا تشمل الخدمة</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">فحص شامل لوحدة التكييف</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">تنظيف الفلاتر واستبدالها إذا لزم الأمر</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">فحص مستوى غاز التبريد وإعادة شحنه</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">تنظيف وحدة التكييف الداخلية والخارجية</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">ضمان لمدة 30 يوم على الخدمة</p>
              </div>
            </div>
          </div>

          {/* Technician */}
          <div className="p-4 bg-white mb-4">
            <h2 className="font-bold text-lg mb-3">الفني</h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg"
                  alt="محمد أحمد"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">محمد أحمد</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-xs text-gray-600">4.9</span>
                </div>
              </div>
              <div className="mr-auto bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-xs text-gray-600">5 سنوات خبرة</span>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center mb-3">
              <a href="#" className="text-amber-500 text-xs">
                عرض الكل
              </a>
              <h2 className="font-bold text-lg">التقييمات</h2>
            </div>

            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">أحمد محمد</span>
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                        alt="أحمد محمد"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-right">
                  خدمة ممتازة وفني محترف. قام بتنظيف المكيف بشكل كامل وشرح لي كيفية الحفاظ عليه.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">سارة علي</span>
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg"
                        alt="سارة علي"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-right">
                  الخدمة جيدة والفني وصل في الموعد المحدد. أعطي 4 نجوم لأن السعر مرتفع قليلاً.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <button
            className="w-full bg-amber-500 text-black py-2 rounded-lg font-medium"
            onClick={() => setShowConfirmation(true)}
          >
            احجز الخدمة
          </button>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-4 m-4 w-[250px]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-center mb-2">تأكيد الحجز</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                هل تريد تأكيد حجز خدمة صيانة التكييف بمبلغ 150 ريال؟
              </p>

              <div className="flex gap-3">
                <button
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium text-sm"
                  onClick={() => setShowConfirmation(false)}
                >
                  إلغاء
                </button>
                <button
                  className="flex-1 bg-amber-500 text-black py-2 rounded-lg font-medium text-sm"
                  onClick={() => setShowConfirmation(false)}
                >
                  تأكيد
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

