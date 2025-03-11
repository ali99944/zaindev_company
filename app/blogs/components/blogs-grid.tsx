"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Newspaper } from 'lucide-react'
import { getAllArticles, getArticlesByCategory } from "@/src/data/articles"

// Sample categories for filtering
const categories = [
  { id: "all", label: "جميع المقالات" },
  { id: "تصميم داخلي", label: "تصميم داخلي" },
  { id: "مواد بناء", label: "مواد بناء" },
  { id: "تقنيات بناء", label: "تقنيات بناء" },
  { id: "تطوير عقاري", label: "تطوير عقاري" },
  { id: "استدامة", label: "استدامة" },
]

export function BlogsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const allArticles = getAllArticles()
  const filteredArticles = activeCategory === "all" 
    ? allArticles 
    : getArticlesByCategory(activeCategory)

  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('ar-SA', options)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id ? "bg-amber-500 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded overflow-hidden transition-all duration-300"
              >
                <Link href={`/blog/${article.id}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.featured_image || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-amber-500 text-black rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publish_date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.reading_time} دقائق للقراءة</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src={article.author.image || "/placeholder.svg"}
                          alt={article.author.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium">{article.author.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filteredArticles.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 flex flex-col items-center">
            <div className="p-4 flex items-center justify-center rounded-full bg-gray-200">
              <Newspaper className="w-14 h-14 text-gray-500" />
            </div>
            <p className="text-gray-600 text-lg mt-4">لا توجد مقالات في هذه الفئة حالياً</p>
            <Link href="/" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">
              <span>العودة إلى الصفحة الرئيسية</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
