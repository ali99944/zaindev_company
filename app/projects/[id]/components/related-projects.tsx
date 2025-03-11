"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { categories, Project } from "@/src/data/projects"

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">مشاريع مشابهة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">اكتشف المزيد من مشاريعنا المميزة في نفس المجال</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <Image
                      src={project.images[0].image || "/placeholder.svg"}
                      alt={project.images[0].alt || project.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium">
                      {categories.find((c) => c.id === project.category)?.label || project.project_type}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{project.short}</p>
                  <div className="flex items-center text-amber-500 text-sm font-medium">
                    <span>عرض التفاصيل</span>
                    <ArrowLeft className="w-4 h-4 mr-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <span>عرض جميع المشاريع</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

