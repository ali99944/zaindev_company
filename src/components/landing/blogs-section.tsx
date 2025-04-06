"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Blog from "@/src/types/blog"
import { useGetQuery } from "@/src/hooks/queries-actions"
import ApiEndpoints from "@/src/constants/endpoints"
import CardLoader from "../loaders/card-loader"

export function BlogsSection() {
  const { data: blogs, isLoading: is_blogs_loading } = useGetQuery<Blog[]>({
    url: ApiEndpoints.articles.all,
    key: ['blogs'],
  })


  if(is_blogs_loading){
    return <CardLoader />
  }

  
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
        <div className="flex items-center justify-center text-center mb-12">
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
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogs?.data.slice(0,4).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded overflow-hidden"
            >
              <Link href={`/blogs/${blog.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-black rounded-full text-xs font-medium">
                      {blog.category.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors">{blog.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{blog.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mt-8"
          >
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-2 bg-amber-500 rounded px-4 py-2 text-black hover:bg-amber-600 transition-colors"
            >
              <span>جميع المقالات</span>
            </Link>
          </motion.div>
      </div>
    </section>
  )
}
