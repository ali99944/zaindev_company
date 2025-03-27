"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import Link from "next/link"
import Blog from "@/src/types/blog"

export function BlogHero({ blog }: { blog: Blog }) {

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br">
        {/* Decorative Elements */}
        {/* <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#000" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div> */}
        
        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-lines" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10,-10 L40,40 M0,-40 L40,0 M30,-50 L70,-14" stroke="#000" strokeWidth="1" />
                <path d="M-10,10 L30,-30 M0,40 L40,0 M30,50 L70,10" stroke="#000" strokeWidth="1" />

              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 rounded-full mb-6">
              <span className="text-amber-500 text-sm font-medium">{blog.category.name}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blog.name}</h1>

            <p className="text-gray-600 text-lg mb-8">{blog.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={blog.user.logo || "/placeholder.svg"}
                  alt={blog.user.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-medium text-gray-800">{blog.user.name}</span>
                <span className="text-xs">{blog.user.position}</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>xxxxxxxxxxxxxxxx</span>
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>{0} دقائق للقراءة</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded overflow-hidden shadow-lg mb-8"
          >
            <Image
              src={blog.image || "/placeholder.svg"}
              alt={blog.name}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {blog.tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.name}`}
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs font-medium transition-colors"
              >
                <Tag className="w-3 h-3" />
                <span>{tag.name}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

