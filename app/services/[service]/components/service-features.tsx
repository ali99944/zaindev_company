"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Clock, Shield, Users, Zap } from "lucide-react"

interface ServiceFeaturesProps {
  service: {
    id: number
    name: string
  }
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "جودة عالية",
      description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا ونستخدم أفضل المواد والتقنيات",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "التزام بالمواعيد",
      description: "نحرص على تسليم المشاريع في الوقت المحدد دون تأخير مع الحفاظ على الجودة",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "خبرة واسعة",
      description: "أكثر من 15 عاماً من الخبرة في مجال المقاولات والتطوير العقاري",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "فريق محترف",
      description: "نخبة من المهندسين والفنيين المؤهلين لتنفيذ مشاريعكم بأعلى مستويات الاحترافية",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "حلول مبتكرة",
      description: "نقدم حلولاً إبداعية تناسب متطلبات كل مشروع وتلبي تطلعات عملائنا",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "ضمان شامل",
      description: "نقدم ضماناً شاملاً على جميع أعمالنا لضمان راحة بالك وثقتك بنا",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">لماذا تختار {service.name}؟</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نسعى دائمًا لتقديم أفضل الخدمات وتحقيق رضا عملائنا من خلال الالتزام بمعايير الجودة والاحترافية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded p-4 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

