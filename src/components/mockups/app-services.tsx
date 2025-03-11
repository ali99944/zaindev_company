"use client"
import Image from "next/image"
import {  Calendar, Droplets, Home, Settings, Star, PenToolIcon as Tool, User, Wrench } from 'lucide-react'

export function AppServicesMockup() {
  return (
    <div className="relative  rounded-[32px] overflow-hidden">

      {/* App Content */}
      <div className="relative w-full h-full bg-gray-50 pt-6">
        {/* Content */}
        <div className="relative z-10 h-full pb-16">
          {/* Categories */}
          <div className="px-4 py-4">
            <h3 className="font-bold mb-4 text-right">الفئات</h3>

            <div className="flex gap-3 overflow-x-hidden pb-2 no-scrollbar">
              <div className="flex flex-col items-center min-w-[70px]">
                <div className="w-10 h-10 rounded bg-amber-500 flex items-center justify-center mb-1">
                  <Wrench className="w-6 h-6 text-black/10 font-normal" />
                </div>
                <span className="text-xs text-center">الصيانة</span>
              </div>

              <div className="flex flex-col items-center min-w-[70px]">
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-1">
                  <Droplets className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-xs text-center">السباكة</span>
              </div>

              <div className="flex flex-col items-center min-w-[70px]">
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-1">
                  <Tool className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-xs text-center">الكهرباء</span>
              </div>

              <div className="flex flex-col items-center min-w-[70px]">
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-1">
                  <Tool className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-xs text-center">التصميم</span>
              </div>

              <div className="flex flex-col items-center min-w-[70px]">
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-1">
                  <Home className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-xs text-center">البناء</span>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div className="px-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-amber-500 text-xs">
                عرض الكل
              </a>
              <h3 className="font-bold">الخدمات الأكثر طلباً</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded p-3 flex gap-3 items-center">


                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs text-gray-600 mr-1">4.9</span>
                    </div>
                    <h4 className="font-bold">صيانة التكييف</h4>
                  </div>

                  <p className="text-xs text-gray-600 mb-2 text-right">
                    صيانة وتنظيف وحدات التكييف بأيدي فنيين محترفين
                  </p>

                  <div className="flex justify-between items-center">
                    <button className="bg-amber-500 text-black py-1.5 px-3 rounded text-xs">
                      احجز الآن
                    </button>
                    <span className="font-bold text-amber-500 text-sm">150 ريال</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded p-3 flex gap-3 items-center">

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs text-gray-600 mr-1">4.8</span>
                    </div>
                    <h4 className="font-bold">تسليك المجاري</h4>
                  </div>

                  <p className="text-xs text-gray-600 mb-2 text-right">
                    حل مشاكل انسداد المجاري والصرف الصحي بأحدث التقنيات
                  </p>

                  <div className="flex justify-between items-center">
                    <button className="bg-amber-500 text-black py-1.5 px-3 rounded text-xs">
                      احجز الآن
                    </button>
                    <span className="font-bold text-amber-500 text-sm">200 ريال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Services */}
          <div className="px-4">
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-amber-500 text-xs">
                عرض الكل
              </a>
              <h3 className="font-bold">خدمات جديدة</h3>
            </div>

            <div className="bg-white rounded overflow-hidden mb-6">
              <div className="relative h-32">
                <Image
                  src="https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_23-2149177174.jpg"
                  alt="خدمة التصميم الداخلي"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-3 right-3 text-white">
                  <h4 className="font-bold mb-1">خدمة التصميم الداخلي</h4>
                  <p className="text-xs text-white/80">تصميم داخلي عصري يناسب ذوقك</p>
                </div>
              </div>

              <div className="p-3 flex justify-between items-center">
                <button className="bg-amber-500 text-black py-2 px-3 rounded text-xs">
                  استعلام
                </button>
                <span className="font-bold text-amber-500">يبدأ من 500 ريال</span>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center">
            <button className="flex flex-col items-center">
              <User className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">حسابي</span>
            </button>

            <button className="flex flex-col items-center">
              <Calendar className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">المواعيد</span>
            </button>

            <button className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center -mt-5">
                <Home className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-xs text-gray-400 mt-1">الرئيسية</span>
            </button>

            <button className="flex flex-col items-center">
              <Wrench className="w-6 h-6 text-amber-500" />
              <span className="text-xs text-amber-500">الخدمات</span>
            </button>

            <button className="flex flex-col items-center">
              <Settings className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">الإعدادات</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
