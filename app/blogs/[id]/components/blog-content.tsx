"use client"

import Blog from "@/src/types/blog"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react"
import { useState } from "react"
import Markdown from 'react-markdown'


export function BlogContent({ blog }: { blog: Blog }) {
  const [copied, setCopied] = useState(false)

  // Function to copy article URL to clipboard
  const copyToClipboard = () => {
    const url = location.href
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }


  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Social Sharing Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-16 flex md:flex-col items-center gap-4 md:sticky md:top-32 h-fit"
            >
              <button
                onClick={() =>
                  open(`https://www.facebook.com/sharer/sharer.php?u=${location.href}`, "_blank")
                }
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </button>

              <button
                onClick={() =>
                  open(
                    `https://twitter.com/intent/tweet?url=${location.href}&text=${blog.name}`,
                    "_blank",
                  )
                }
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-sky-100 flex items-center justify-center transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5 text-sky-500" />
              </button>

              <button
                onClick={() =>
                  open(
                    `https://www.linkedin.com/shareArticle?mini=true&url=${location.href}&title=${blog.name}`,
                    "_blank",
                  )
                }
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-700" />
              </button>

              <button
                onClick={copyToClipboard}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-amber-100 flex items-center justify-center transition-colors relative"
                aria-label="Copy link"
              >
                <Link2 className="w-5 h-5 text-amber-500" />
                {copied && (
                  <span className="absolute -top-10 right-0 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    تم نسخ الرابط!
                  </span>
                )}
              </button>
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <Markdown>
                {blog.description}
              </Markdown>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

