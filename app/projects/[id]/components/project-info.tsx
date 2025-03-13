"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Project } from "@/src/data/projects"

export function ProjectInfo({ project }: { project: Project }) {
  // Project features - these would typically come from the project data
  // For now, we'll use some sample features
  const features = [
    "تصميم عصري يجمع بين الأصالة والحداثة",
    "استخدام أفضل مواد البناء وأحدث التقنيات",
    "تنفيذ المشروع وفق أعلى معايير الجودة",
    "الالتزام بالجدول الزمني المحدد للمشروع",
    "فريق عمل متكامل من المهندسين والفنيين",
    "متابعة مستمرة وإشراف هندسي دقيق",
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">نبذة عن المشروع</h2>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {project.client && (
              <div className="bg-white rounded p-4">
                <h3 className="text-xl font-bold mb-3">عن العميل</h3>
                <div className="flex items-center gap-4">
                  {project.infologo ? (
                    <Image
                      src={'https://img.freepik.com/free-vector/indonesian-halal-logo-new-branding-2022_17005-1495.jpg?ga=GA1.1.259795667.1741285641&semt=ais_authors_boost'}
                      alt={project.client}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-amber-100 rounded-lg flex items-center justify-center text-amber-500 font-bold text-xl">
                      {project.client.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold">{project.client}</h4>
                    <p className="text-gray-600 text-sm">{project.location}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {project.images && project.images.length > 1 ? (
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1, 5).map((image, index) => (
                  <div key={image.id} className="relative overflow-hidden rounded">
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.alt || `${project.name} - صورة ${index + 2}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative overflow-hidden rounded">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

