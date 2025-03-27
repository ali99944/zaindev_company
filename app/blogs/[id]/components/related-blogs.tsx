"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Blog from "@/src/types/blog"
import moment from "moment"

export function RelatedBlogs({ blogs }: { blogs: Blog[] }) {
  if (!blogs || blogs.length === 0) return null


  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">مقالات ذات صلة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">اقرأ المزيد من المقالات المتعلقة بهذا الموضوع</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 rounded overflow-hidden"
            >
              <Link href={`/blog/${blog.id}`} className="block">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium">
                      {blog.category.name}
                    </span>
                  </div>
                </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{moment(blog.created_at).format('YYYY-MM-DD')}</span>
                  </div>

                    <h3 className="text-xl font-bold mb-3 transition-colors line-clamp-2">
                        {blog.name}
                    </h3>

                  <p className="text-gray-600 line-clamp-2">{blog.description}</p>
                </div>
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
            href="/blog"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-2 rounded transition-colors"
          >
            <span>عرض جميع المقالات</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

