"use client"
import { Eye, Facebook, ChromeIcon as Google } from 'lucide-react'

export function AppLoginMockup() {
  return (
    <div className="relative  rounded-[32px] overflow-hidden ">


      {/* App Content */}
      <div className="relative w-full h-full bg-white pt-6">
        {/* Content */}
        <div className="relative z-10 h-full pb-8 pt-8 px-6">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">تسجيل الدخول</h1>
            <p className="text-gray-600 text-sm">أدخل بيانات حسابك للوصول إلى خدماتنا</p>
          </div>

          {/* Form */}
          <div className="space-y-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-right"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <a href="#" className="text-xs text-amber-500">
                  نسيت كلمة المرور؟
                </a>
                <label className="text-sm font-medium text-gray-700">كلمة المرور</label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-right"
                />
                <button className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-amber-500 text-black py-2 rounded-lg font-medium mb-6">تسجيل الدخول</button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-500 text-sm">أو</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 flex justify-center items-center gap-2 border border-gray-300 py-2 rounded-lg">
              <Google className="w-5 h-5 text-red-500" />
            </button>
            <button className="flex-1 flex justify-center items-center gap-2 border border-gray-300 py-2 rounded-lg">
              <Facebook className="w-5 h-5 text-blue-600" />
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              ليس لديك حساب؟{" "}
              <a href="#" className="text-amber-500 font-medium">
                إنشاء حساب
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
