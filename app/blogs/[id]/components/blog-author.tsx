"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Blog from "@/src/types/blog"
import { Linkedin, Mail, Twitter } from "lucide-react"

export function BlogAuthor({ blog }: { blog: Blog }) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded overflow-hidden"
        >
          <div className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={blog.image || "/placeholder.svg"}
                alt={blog.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-2">{blog.name}</h3>
              <p className="text-amber-500 font-medium mb-4">{blog.user.position}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{'blog.user.bio'}</p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                {(
                  <a
                  href={`mailto:${'alitarek99944@gmail.com'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-sky-100 flex items-center justify-center transition-colors"
                    aria-label={`${blog.name} على تويتر`}
                  >
                    <Twitter className="w-5 h-5 text-sky-500" />
                  </a>
                )}

                {(
                  <a
                  href={`mailto:${'alitarek99944@gmail.com'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                    aria-label={`${blog.name} على لينكد إن`}
                  >
                    <Linkedin className="w-5 h-5 text-blue-700" />
                  </a>
                )}

                {(
                  <a
                    href={`mailto:${'alitarek99944@gmail.com'}`}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-100 flex items-center justify-center transition-colors"
                    aria-label={`راسل ${blog.name}`}
                  >
                    <Mail className="w-5 h-5 text-amber-500" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

