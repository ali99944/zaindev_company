"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, User } from 'lucide-react'
import { BlueprintGrid } from "@/src/components/common/blueprint-grid-pattern"
import Project from "@/src/types/project"
import ProjectType from "@/src/types/project-type"
import { useGetQuery } from "@/src/hooks/queries-actions"
import { LinesLoader } from "@/src/components/common/loaders"

export function ProjectHero({ project }: { project: Project }) {
  

  const { data: project_types, isLoading: is_project_types_loading } = useGetQuery<ProjectType[]>({
    url: 'project-types',
    key: ['project-types']
  })
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
        <BlueprintGrid opacity={0.3} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 rounded-full mb-6">
              {
                is_project_types_loading && (
                  <LinesLoader lines={3} />
                )
              }
              <span className="text-amber-500 text-sm font-medium">
                {project_types?.data.find(c => c.name === project.project_type)?.name || project.project_type}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.name}
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {project.short}
            </p>
            
            <div className="flex flex-wrap gap-6">
              {project.details.completion_date && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">سنة الإنجاز</span>
                    <p className="font-medium">{project.details.completion_date}</p>
                  </div>
                </div>
              )}
              
              {project.client && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">العميل</span>
                    <p className="font-medium">{project.client}</p>
                  </div>
                </div>
              )}
              
              {project.location && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">الموقع</span>
                    <p className="font-medium">{project.location}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-500/20 rounded transform rotate-3"></div>
            <div className="relative rounded overflow-hidden shadow-lg">
            <Image
                        src={project.image || '/placeholder.svg?height=300&width=400'}
                        alt={project.name}
                        fill
                        className="w-full h-full object-cover"
                      />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
