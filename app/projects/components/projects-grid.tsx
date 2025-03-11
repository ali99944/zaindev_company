"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Building2, Home, Building, Warehouse } from "lucide-react"
import { getProjectsByCategory, categories } from "@/src/data/projects"

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredProjects = getProjectsByCategory(activeCategory)

  const categoryIcons = {
    Building2: <Building2 className="w-4 h-4" />,
    Home: <Home className="w-4 h-4" />,
    Building: <Building className="w-4 h-4" />,
    Warehouse: <Warehouse className="w-4 h-4" />,
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-6 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id ? "bg-amber-500 text-black" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {categoryIcons[category.icon as keyof typeof categoryIcons]}
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
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
                    {project.images && project.images.length > 0 ? (
                      <Image
                        src={project.images[0].image || "/placeholder.svg"}
                        alt={project.images[0].alt || project.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
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
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{project.short}</p>
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

