"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, } from 'lucide-react'
import { useGetQuery } from "@/src/hooks/queries-actions"
import Project from "@/src/types/project"
import GridLoader from "../loaders/grid-loader"
import ProjectType from "@/src/types/project-type"




export function ProjectsSection() {
  const { data: projects, isLoading: is_projects_loading } = useGetQuery<Project[]>({
    url: 'projects',
    key: ['projects']
  })

  const { data: categories, isLoading: is_categories_loading } = useGetQuery<ProjectType[]>({
    url: 'projects',
    key: ['projects']
  })
  
  if(is_projects_loading || is_categories_loading) {
    return <GridLoader />
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 w-full h-full" 
          style={{ 
            backgroundColor: '#e5e5f7', 
            opacity: 0.8, 
            backgroundImage: 'radial-gradient(#000 1px, #e5e5f7 1px)', 
            backgroundSize: '20px 20px' 
          }}>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">أحدث مشاريعنا</h2>
            <p className="text-gray-600 max-w-2xl">
              نفخر بتقديم مجموعة متنوعة من المشاريع التي تعكس خبرتنا وتميزنا في مجال المقاولات والتطوير العقاري
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors"
            >
              <span>جميع المشاريع</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {projects?.data.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded overflow-hidden"
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-amber-500 text-black rounded-full text-xs font-medium">
                        {categories?.data.find(c => c.name === project.category_info)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors">{project.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
