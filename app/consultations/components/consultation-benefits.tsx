"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, Clock, Zap, Target, Users } from 'lucide-react'
import Image from "next/image"

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "تحسين كفاءة المشروع",
    description: "نساعدك على تحسين كفاءة مشروعك من خلال تقديم حلول مبتكرة وفعالة من حيث التكلفة"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "تجنب المخاطر",
    description: "نحدد المخاطر المحتملة في مشروعك ونقدم استراتيجيات لتجنبها أو التخفيف من آثارها"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "توفير الوقت",
    description: "نساعدك على تسريع عملية اتخاذ القرار وتنفيذ المشروع بكفاءة أكبر"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "حلول مبتكرة",
    description: "نقدم حلولاً إبداعية ومبتكرة تميز مشروعك عن المنافسين"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "تحقيق الأهداف",
    description: "نساعدك على تحديد أهداف واضحة ووضع خطة عمل لتحقيقها"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "خبرة متخصصة",
    description: "نوفر خبرة متخصصة في مجالات متعددة من البناء والتطوير العقاري"
  }
]

export function ConsultationBenefits() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: "#e5e5f7",
            opacity: 0.8,
            backgroundImage: "radial-gradient(#000 1px, #e5e5f7 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded transform -rotate-3"></div>
              <div className="relative rounded overflow-hidden">
                <Image
                  src="https://img.freepik.com/free-photo/business-people-discussing-together-meeting_23-2148908922.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                  alt="استشارات زين التنموية"
                  width={600}
                  height={450}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-black font-bold">15+</span>
                    </div>
                    <div className="text-white">
                      <p className="text-sm opacity-80">أكثر من</p>
                      <p className="font-bold">عاماً من الخبرة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">فوائد الاستشارات المتخصصة</h2>
              <p className="text-gray-600 mb-8">
                تساعدك استشاراتنا المتخصصة على اتخاذ قرارات مدروسة وتنفيذ مشاريعك بكفاءة أكبر، مما يوفر عليك الوقت والجهد والتكاليف على المدى الطويل.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
