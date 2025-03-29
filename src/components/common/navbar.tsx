"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Loader2 } from 'lucide-react'
import { AppSettings } from "@/src/types/app-settings"
import { useGetQuery } from "@/src/hooks/queries-actions"
import { LinesLoader } from "./loaders"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    const { data: app_settings, isLoading: is_app_settings_loading } = useGetQuery<AppSettings>({
      url: 'settings',
      key: ['settings'],
    })
    
    const settings = app_settings as unknown as AppSettings

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {
              is_app_settings_loading ? (
                <Loader2 className="w-4 h-4 transition-all duration-300 animate-spin" />
              ) : (
                <Link href="/" className="flex items-center gap-2">
              <Image
                src={settings?.logo}
                alt="Zain Development"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className={`font-bold text-xl text-black`}>
                زين التنموية
              </span>
            </Link>
              )
            }

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link 
                href="/services" 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                خدماتنا
              </Link>
              <Link 
                href="/projects" 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                مشاريعنا
              </Link>
              <Link 
                href="/about" 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                من نحن
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                اتصل بنا
              </Link>
              <Link 
                href="/consultations" 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                الاستشارات
              </Link>
              <Link 
                href="/zaindev-app" 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                تطبيقنا
              </Link>
              <Link 
                href="/blogs" 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${
                  isScrolled ? "text-gray-700" : "text-black"
                }`}
              >
                مدونتنا
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              {
                is_app_settings_loading ? (
                  <LinesLoader />
                ) : (
                  <Link 
                href={`tel:${settings?.phone_number}`} 
                className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{settings?.phone_number}</span>
              </Link>
                )
              }
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-50 lg:hidden bg-white"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {
                    is_app_settings_loading ? (
                      <Loader2 className="w-4 h-4 transition-all duration-300 animate-spin" />
                    ) : (
                      <Image
                    src={settings?.logo}
                    alt="Zain Development"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                    )
                  }
                  <span className="font-bold text-xl text-black">
                    زين التنموية
                  </span>
                </Link>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-4">
                  <Link 
                    href="/services" 
                    className="text-lg font-medium text-gray-700 hover:text-amber-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    خدماتنا
                  </Link>
                  <Link 
                    href="/projects" 
                    className="text-lg font-medium text-gray-700 hover:text-amber-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    مشاريعنا
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-lg font-medium text-gray-700 hover:text-amber-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    من نحن
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium text-gray-700 hover:text-amber-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    اتصل بنا
                  </Link>
                  <Link 
                    href="/consultations" 
                    className="text-lg font-medium text-gray-700 hover:text-amber-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    الاستشارات
                  </Link>
                  <Link 
                    href="/zaindev-app" 
                    className="text-lg font-medium text-gray-700 hover:text-amber-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    تطبيقنا
                  </Link>
                  <Link 
                    href="/blogs" 
                    className="text-lg font-medium text-gray-700 hover:text-amber-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    مدونتنا
                  </Link>
                </div>
              </div>
              <div className="p-4 border-t">
                <Link 
                  href="tel:+966500000000" 
                  className="flex items-center justify-center gap-2 bg-amber-500 text-black px-4 py-3 rounded-lg hover:bg-amber-600 transition-colors w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-base font-medium">800 123 4567</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

