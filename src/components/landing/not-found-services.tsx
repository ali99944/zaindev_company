'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const NotFoundServices = () => {
  return (
    <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              لم تجد الخدمة التي تبحث عنها؟
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              تواصل معنا الآن وسنقدم لك حلولاً مخصصة تناسب احتياجاتك الخاصة
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 rounded transition-colors"
              >
                <span>تواصل معنا</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default NotFoundServices