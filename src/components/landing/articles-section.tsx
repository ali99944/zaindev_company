"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

// Sample articles data
const articles = [
  {
    id: 1,
    title: "أحدث اتجاهات التصميم الداخلي لعام 2025",
    excerpt: "تعرف على أحدث صيحات التصميم الداخلي التي ستسيطر على المشهد في عام 2025 وكيفية تطبيقها في منزلك",
    image: "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2095.jpg",
    category: "تصميم داخلي"
  },
  {
    id: 2,
    title: "كيفية اختيار مواد البناء المناسبة لمشروعك",
    excerpt: "دليل شامل لاختيار أفضل مواد البناء التي تناسب مشروعك من حيث الجودة والتكلفة والاستدامة",
    image: "https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_23-2149177174.jpg",
    category: "مواد بناء"
  },
  {
    id: 3,
    title: "تقنيات البناء الحديثة وتأثيرها على سرعة التنفيذ",
    excerpt: "استكشف أحدث التقنيات المستخدمة في مجال البناء وكيف تساهم في تسريع عملية التنفيذ وتقليل التكاليف",
    image: "https://img.freepik.com/free-photo/construction-site-with-machinery_23-2149482721.jpg",
    category: "تقنيات بناء"
  },
  {
    id: 4,
    title: "تصميم المطابخ الحديثة وتأثيرها على سرعة التنفيذ",
    excerpt: "استكشف أحدث التصميمات المستخدمة في مجال المطابخ وكيف تساهم في تسريع عملية التنفيذ وتقليل التكاليف",
    image: "https://img.freepik.com/free-photo/construction-site-with-machinery_23-2149482721.jpg",
    category: "تصميم داخلي"
  }
]

export function ArticlesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 w-full h-full" 
          style={{ 
            backgroundColor: '#e5e5f7', 
            opacity: 0.8, 
            backgroundImage: 'radial-gradient(#f59e0b 0.8px, #e5e5f7 0.8px)', 
            backgroundSize: '16px 16px' 
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
            <h2 className="text-3xl font-bold mb-4">آخر المقالات والأخبار</h2>
            <p className="text-gray-600 max-w-2xl">
              اطلع على أحدث المقالات والنصائح في مجال البناء والتصميم والديكور لمساعدتك في تنفيذ مشروعك بأفضل طريقة
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors"
            >
              <span>جميع المقالات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded overflow-hidden"
            >
              <Link href={`/blog/${article.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-black rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
