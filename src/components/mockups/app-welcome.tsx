"use client"
import Image from "next/image"

export function AppWelcomeMockup() {
  return (
    <div className="relative  rounded-[32px] overflow-hidden">
      
      {/* App Content */}
      <div className="relative w-full h-full bg-white pt-6">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#f59e0b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center h-full pb-8 pt-12">
          {/* Illustration */}
          <div className="relative w-full h-64 mt-8">
            <Image 
              src="https://img.freepik.com/free-vector/construction-concept-illustration_114360-1718.jpg" 
              alt="تطبيق زين التنموية" 
              fill
              className="object-contain"
            />
          </div>
          
          {/* Onboarding Text */}
          <div className="text-center px-4">
            <h2 className="text-xl font-bold mb-2">مرحباً بك في تطبيق زين التنموية</h2>
            <p className="text-gray-600 text-sm mb-8">
              استمتع بتجربة فريدة للوصول إلى جميع خدماتنا ومتابعة مشاريعك بكل سهولة
            </p>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-8 h-2 rounded-full bg-amber-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
