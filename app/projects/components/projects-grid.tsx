"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Project from "@/src/types/project"
import { useGetQuery } from "@/src/hooks/queries-actions"
import ProjectType from "@/src/types/project-type"
import { Building2 } from "lucide-react"
import { LinesLoader } from "@/src/components/common/loaders"
import GridLoader from "@/src/components/loaders/grid-loader"

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string | number | null>(null)
  
  const { data: projects, isLoading: is_projects_loading } = useGetQuery<Project[]>({
    url: 'projects',
    key: ['projects']
  })
  
  const { data: project_types, isLoading: is_project_types_loading } = useGetQuery<ProjectType[]>({
    url: 'project-types',
    key: ['project-types']
  })

  const filteredProjects = useMemo(() => {
    return activeCategory == null ? projects?.data : projects?.data.filter(project => project.project_type == activeCategory) ?? []
  }, [projects, activeCategory])


  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Categories Filter */}
        {
          is_project_types_loading && (
            <LinesLoader lines={3} />
          )
        }
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-6 justify-center"
        >
          {project_types?.data.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.name ? "bg-amber-500 text-black" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Building2 />
              <span>{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {
            is_projects_loading && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 gap-4">
                <GridLoader />
              </div>
            )
          }
          <AnimatePresence mode="wait">
            {filteredProjects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded overflow-hidden"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-48 overflow-hidden">
                  <Image
                        src={project.image || '/placeholder.svg?height=300&width=400'}
                        alt={project.name}
                        fill
                        className="w-full h-full object-cover"
                      />
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{project.short ?? ''}</p>
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

