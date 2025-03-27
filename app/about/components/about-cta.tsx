"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Building2 } from "lucide-react"

export function AboutCta() {
  return (
    <section className="py-20 bg-amber-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-black"
          >
            هل أنت جاهز لبدء مشروعك القادم معنا؟
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/80 text-lg mb-8"
          >
            نحن هنا لمساعدتك في تحويل أفكارك إلى واقع ملموس. تواصل معنا اليوم لمناقشة مشروعك والحصول على استشارة مجانية.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-black hover:bg-gray-900 text-white px-8 py-2 rounded font-medium transition-colors"
            >
              تواصل معنا
            </Link>

            <Link
              href="/projects"
              className="bg-white hover:bg-gray-100 text-black px-8 py-2 rounded font-medium transition-colors flex items-center gap-2"
            >
              <span>استعرض مشاريعنا</span>
              <Building2 className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

