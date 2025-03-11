"use client"
import { Home, Settings, User, Wrench, Droplets, PenToolIcon as Tool, Thermometer, Paintbrush, Lightbulb, MoreHorizontal, Star, ShoppingBag } from 'lucide-react'

export function AppHomeMockup() {
  return (
    <div className="relative rounded-[32px] overflow-hidden">
        {/* Content */}
        <div className="relative z-10 h-full pb-16">
          
          
          {/* Featured Services Banner */}
          <div className="relative mb-4">
            <div className="bg-amber-400 rounded-tl-lg rounded-br-lg py-2 px-4 text-white/80">
              <h4 className="font-bold mb-2">
                <span className="text-red-600">خصم 15%</span> على خدمات الصيانة
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                احصل على خصم 15% عند طلب أي خدمة صيانة هذا الأسبوع
              </p>
            </div>
          </div>
          {/* Services Categories */}
          <div className="px-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-amber-600 text-xs">عرض الكل</a>
              <h3 className="font-bold">خدماتنا</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-1">
                  <Wrench className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-xs text-center">صيانة</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                  <Droplets className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-xs text-center">سباكة</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-1">
                  <Tool className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-xs text-center">كهرباء</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-1">
                  <Home className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-xs text-center">بناء</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-1">
                  <Thermometer className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-xs text-center">تكييف</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-1">
                  <Paintbrush className="w-6 h-6 text-indigo-500" />
                </div>
                <span className="text-xs text-center">دهان</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                </div>
                <span className="text-xs text-center">إضاءة</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-1">
                  <MoreHorizontal className="w-6 h-6 text-gray-500" />
                </div>
                <span className="text-xs text-center">المزيد</span>
              </div>
            </div>
          </div>
          
          {/* Popular Services */}
          <div className="px-4">
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-amber-500 text-xs">عرض الكل</a>
              <h3 className="font-bold">الأكثر طلباً</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-amber-500/10 rounded p-3  flex gap-3 items-center">
                <div className="w-12 h-12 rounded bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-amber-500" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs text-gray-600 mr-1">4.9</span>
                    </div>
                    <h4 className="font-bold text-sm">صيانة التكييف</h4>
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <button className="bg-amber-500 text-black py-1 px-3 rounded text-xs">
                      احجز الآن
                    </button>
                    <span className="font-bold text-amber-500 text-sm">150 ريال</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded p-3  flex gap-3 items-center">
                <div className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-blue-500" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs text-gray-600 mr-1">4.8</span>
                    </div>
                    <h4 className="font-bold text-sm">تسليك المجاري</h4>
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <button className="bg-amber-500 text-black py-1 px-3 rounded text-xs">
                      احجز الآن
                    </button>
                    <span className="font-bold text-amber-500 text-sm">200 ريال</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded p-3  flex gap-3 items-center">
                <div className="w-12 h-12 rounded bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Tool className="w-6 h-6 text-green-500" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-xs text-gray-600 mr-1">4.7</span>
                    </div>
                    <h4 className="font-bold text-sm">صيانة كهربائية</h4>
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <button className="bg-amber-500 text-black py-1 px-3 rounded text-xs">
                      احجز الآن
                    </button>
                    <span className="font-bold text-amber-500 text-sm">180 ريال</span>
                  </div>
                </div>
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
              <Wrench className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">الخدمات</span>
            </button>
            
            <button className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center -mt-5">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-amber-500 mt-1">الرئيسية</span>
            </button>
            
            <button className="flex flex-col items-center">
              <ShoppingBag className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">طلباتي</span>
            </button>
            
            <button className="flex flex-col items-center">
              <Settings className="w-6 h-6 text-gray-400" />
              <span className="text-xs text-gray-400">الإعدادات</span>
            </button>
          </div>
        </div>
    </div>
  )
}
