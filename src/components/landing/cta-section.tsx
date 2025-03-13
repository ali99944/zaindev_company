"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

export function CtaSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600">

        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-lines" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10,10 L30,-30 M0,40 L40,0 M30,50 L70,10" stroke="#000" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto bg-white/60 rounded p-4 md:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">تواصل معنا</h2>
              <p className="text-gray-700 mb-8">
                نحن هنا للإجابة على جميع استفساراتكم وتقديم المساعدة التي تحتاجونها. يمكنكم التواصل معنا عبر النموذج أو من خلال وسائل الاتصال المباشرة.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">اتصل بنا</h3>
                    <p className="text-gray-700">800 123 4567</p>
                    <p className="text-gray-700">+966 50 000 0000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-700">info@zaindev.com</p>
                    <p className="text-gray-700">support@zaindev.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">العنوان</h3>
                    <p className="text-gray-700">الرياض، المملكة العربية السعودية</p>
                    <p className="text-gray-700">طريق الملك فهد، برج المملكة، الطابق 20</p>
                  </div>
                </div>
              </div>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gray-50 rounded p-4 md:p-4  border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">أرسل رسالة</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 text-green-700 rounded p-4 flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p>تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded border border-gray-300 "
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded border border-gray-300 "
                          placeholder="example@domain.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded border border-gray-300 "
                          placeholder="+966 50 000 0000"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded border border-gray-300 "
                        placeholder="اكتب رسالتك هنا..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-2 rounded transition-colors ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full"></span>
                          <span>جاري الإرسال...</span>
                        </>
                      ) : (
                        <>
                          <span>إرسال الرسالة</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
