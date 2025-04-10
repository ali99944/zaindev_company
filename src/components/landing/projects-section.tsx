"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useGetQuery } from "@/src/hooks/queries-actions"
import Project from "@/src/types/project"
import GridLoader from "../loaders/grid-loader"

export function ProjectsSection() {
  const { data: projects, isLoading: is_projects_loading } = useGetQuery<Project[]>({
    url: 'projects',
    key: ['projects']
  })
  
  if(is_projects_loading) {
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
        <div className="flex items-center justify-center text-center mb-12">
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
          
          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                    <div className="absolute top-2 right-2">
                      <span className="inline-block px-3 py-1 bg-amber-500 text-black rounded-full text-xs font-medium">
                        {project.project_type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="px-4 mt-4">
                    <h3 className="text-md font-bold mb-2 group-hover:text-amber-500 transition-colors">{project.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mt-8"
          >
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 bg-amber-500 rounded px-4 py-2 text-black hover:bg-amber-600 transition-colors"
            >
              <span>جميع المشاريع</span>
            </Link>
          </motion.div>
      </div>
    </section>
  )
}
