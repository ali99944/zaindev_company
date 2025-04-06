"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader, CheckCircle } from "lucide-react"
import type ConsultationPackage from "@/src/types/consultation-package"
import { useMutationAction } from "@/src/hooks/queries-actions"

interface ConsultationSubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPackage: ConsultationPackage | null
  packageType: "monthly" | "annualy"
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  notes: string
}

export function ConsultationSubscriptionModal({
  isOpen,
  onClose,
  selectedPackage,
  packageType,
}: ConsultationSubscriptionModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب"
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب"
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "رقم الهاتف غير صالح"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const subscribePackageAction = useMutationAction({
    url: 'packages-request',
    method: 'post'
  })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    await subscribePackageAction.mutateAsync({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company_name: formData.company,
      notes: formData.notes,
      package_id: selectedPackage?.id,
    }, {
      onSuccess: () => {
        setIsSubmitting(false)
        setIsSuccess(true)

        setTimeout(() => {
          setFormData({ name: "", email: "", phone: "", company: "", notes: "" })
          setIsSuccess(false)
          onClose()
        }, 2000)
      },
      onError: (error) => {
        setIsSubmitting(false)
        setErrors({ ...errors, name: error.message })
      },
    })
  }

  if (!isOpen || !selectedPackage) return null

  const packagePrice = packageType === "monthly" ? selectedPackage.price : selectedPackage.year_price
  const packagePeriod = packageType === "monthly" ? "شهرياً" : "سنوياً"

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir="rtl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-md relative z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-b-gray-200">
              <h2 className="text-xl font-bold">الاشتراك في باقة {selectedPackage.name}</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">تم تسجيل اشتراكك بنجاح</h3>
                  <p className="text-gray-500 text-center">سنقوم بالتواصل معك قريباً لتأكيد اشتراكك في الباقة</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">الباقة:</span>
                      <span>{selectedPackage.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">السعر:</span>
                      <span className="text-amber-500 font-bold">
                        {packagePrice} ريال {packagePeriod}
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        الاسم
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        className={`w-full px-3 py-2 border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        البريد الإلكتروني
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@domain.com"
                        className={`w-full px-3 py-2 border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        رقم الهاتف
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="05xxxxxxxx"
                        className={`w-full px-3 py-2 border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent`}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        اسم الشركة (اختياري)
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="اسم شركتك أو مؤسستك"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                        ملاحظات إضافية
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="أي تفاصيل إضافية ترغب في إضافتها..."
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        إلغاء
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-600 transition-colors disabled:opacity-70 flex items-center justify-center min-w-[100px]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                            جاري الإرسال...
                          </>
                        ) : (
                          "تأكيد الاشتراك"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

