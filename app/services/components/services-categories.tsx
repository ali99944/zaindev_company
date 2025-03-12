"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"

interface Category {
  id: string
  name: string
  count: number
}

interface ServicesCategoriesProps {
  categories: Category[]
}

export function ServicesCategories({ categories }: ServicesCategoriesProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  const [activeCategory, setActiveCategory] = useState(currentCategory)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)

    // Update URL with the selected category
    const params = new URLSearchParams(searchParams.toString())
    if (categoryId === "all") {
      params.delete("category")
    } else {
      params.set("category", categoryId)
    }

    router.push(`/services?${params.toString()}`)
  }

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-amber-500 text-black"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>{category.name}</span>
              <span
                className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs ${
                  activeCategory === category.id ? "bg-white text-black" : "bg-gray-200 text-gray-700"
                }`}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

