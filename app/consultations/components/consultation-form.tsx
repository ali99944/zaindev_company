"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Users, FileText, MessageSquare } from 'lucide-react'
import Image from "next/image"
import { CustomDropdown } from "@/src/components/common/dropdown"
import { useMutationAction } from "@/src/hooks/queries-actions"

export function ConsultationForm() {
  const [formState, setFormState] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    subject: "",
    description: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const submitConsultationAction = useMutationAction({
    url: 'consultation',
    method: 'post'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await submitConsultationAction.mutateAsync(formState, {
        onSuccess() {
            setIsSubmitted(true)
            setIsSubmitting(false)

            setFormState({
                client_name: "",
                client_email: "",
                client_phone: "",
                subject: "",
                description: "",
            })
            

            setTimeout(() => {
                setIsSubmitted(false)
            }, 5000)
        },

        onError() {
            setIsSubmitting(false)
            alert("فشل ارسال الاستشارة")
        }
    })
  }

  return (
    <section id="consultation-form" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: "#e5e5f7",
            opacity: 0.8,
            backgroundImage: "radial-gradient(#f59e0b 0.8px, #e5e5f7 0.8px)",
            backgroundSize: "16px 16px",
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded p-4 border border-gray-100"
          >
            <h2 className="text-3xl font-bold mb-2">طلب استشارة مجانية</h2>
            <p className="text-gray-600 mb-6">
              املأ النموذج التالي وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن
            </p>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-700 rounded p-6 flex flex-col items-center gap-4 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">تم إرسال طلبك بنجاح!</h3>
                <p>
                  شكراً لك على التواصل معنا. سيقوم فريقنا بمراجعة طلبك والرد عليك في أقرب وقت ممكن.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="client_name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="client_name"
                    name="client_name"
                    value={formState.client_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded border border-gray-300  transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client_email" className="block text-sm font-medium text-gray-700 mb-1">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="client_email"
                      name="client_email"
                      value={formState.client_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded border border-gray-300   transition-colors"
                      placeholder="example@domain.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="client_phone" className="block text-sm font-medium text-gray-700 mb-1">
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="client_phone"
                      name="client_phone"
                      value={formState.client_phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded border border-gray-300   transition-colors placeholder:text-right text-right"
                      placeholder="+966 50 000 0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    موضوع الاستشارة <span className="text-red-500">*</span>
                  </label>

                  <CustomDropdown
                    options={[
                        { value: "house_building", label: "بناء منزل"},
                        { value: "painting", label: "ترميم و تجديد"},
                        { value: "interior_design", label: "تصميم داخلي"},
                        { value: "commercial_project", label: "مشروع تجاري"},
                        { value: "engineering_consultation", label: "استشارة هندسية"},
                        { value: "other", label: "اخرى"},
                    ]}
                    value={formState.subject}
                    placeholder="اختر موضوع الاستشارة"
                    onChange={(val) => setFormState({ ...formState, subject: val })}
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    تفاصيل الاستشارة <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded border border-gray-300   transition-colors"
                    placeholder="اشرح بالتفصيل ما هي الاستشارة التي تحتاجها..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 rounded transition-colors ${
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
                      <span>إرسال طلب الاستشارة</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">لماذا تختار استشاراتنا؟</h2>
              <p className="text-gray-600 mb-6">
                نقدم استشارات متخصصة في مجال البناء والتطوير العقاري بخبرة تزيد عن 15 عاماً، مما يضمن لك الحصول على أفضل النصائح والتوجيهات لمشروعك.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded border border-gray-100 "
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">فريق من الخبراء</h3>
                <p className="text-gray-600">
                  يضم فريقنا نخبة من المهندسين والاستشاريين ذوي الخبرة الواسعة في مختلف مجالات البناء والتطوير.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded border border-gray-100 "
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">حلول مخصصة</h3>
                <p className="text-gray-600">
                  نقدم حلولاً مخصصة تناسب احتياجاتك ومتطلباتك الخاصة، مع مراعاة الميزانية والجدول الزمني.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded border border-gray-100 "
              >
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">دعم مستمر</h3>
                <p className="text-gray-600">
                  نوفر دعماً مستمراً طوال فترة المشروع، مع إمكانية التواصل المباشر مع فريق الاستشاريين.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative overflow-hidden rounded h-[200px]"
              >
                <Image
                  src="https://img.freepik.com/free-photo/business-partners-shaking-hands-agreement_53876-25164.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                  alt="استشارات زين التنموية"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">شركاء نجاحك</h3>
                    <p className="text-sm">نعمل معك كشركاء لتحقيق رؤيتك وأهدافك</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
