"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHistory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">قصة نجاحنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            منذ تأسيسها، حققت زين التنموية نجاحات متتالية وأصبحت من الشركات الرائدة في مجال المقاولات والتطوير في
            المملكة
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>

          {/* Timeline Items */}
          <div className="space-y-24 relative">
            {/* 2008 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right"
              >
                <h3 className="text-2xl font-bold text-amber-500 mb-3">2008</h3>
                <h4 className="text-xl font-bold mb-3">تأسيس الشركة</h4>
                <p className="text-gray-600">
                  تأسست شركة زين التنموية في مدينة الرياض بهدف تقديم خدمات متميزة في مجال المقاولات والصيانة، وبدأت
                  مسيرتها بفريق صغير من المهندسين المحترفين.
                </p>
              </motion.div>

              <div className="relative z-10 mx-auto md:mx-0">
                <div className="w-10 h-10 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pl-12 md:text-left"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="https://img.freepik.com/free-photo/construction-silhouette_1150-6936.jpg"
                    alt="تأسيس الشركة"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* 2013 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="https://img.freepik.com/free-photo/construction-site-with-machinery_23-2149482721.jpg"
                    alt="التوسع والنمو"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </motion.div>

              <div className="relative z-10 mx-auto md:mx-0 order-1 md:order-2">
                <div className="w-10 h-10 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pl-12 md:text-left order-3"
              >
                <h3 className="text-2xl font-bold text-amber-500 mb-3">2013</h3>
                <h4 className="text-xl font-bold mb-3">التوسع والنمو</h4>
                <p className="text-gray-600">
                  توسعت الشركة في أعمالها وافتتحت فروعاً جديدة في مدن المملكة الرئيسية، وزاد عدد موظفيها وتنوعت خدماتها
                  لتشمل مجالات أوسع في قطاع البناء والتطوير.
                </p>
              </motion.div>
            </div>

            {/* 2018 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right"
              >
                <h3 className="text-2xl font-bold text-amber-500 mb-3">2018</h3>
                <h4 className="text-xl font-bold mb-3">إطلاق متجر زين</h4>
                <p className="text-gray-600">
                  أطلقت الشركة متجر زين لتوفير مواد البناء والأجهزة المنزلية بأفضل الأسعار وأعلى جودة، مما عزز من تكامل
                  خدماتها وزاد من رضا العملاء.
                </p>
              </motion.div>

              <div className="relative z-10 mx-auto md:mx-0">
                <div className="w-10 h-10 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pl-12 md:text-left"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="https://img.freepik.com/free-photo/shopping-cart-with-wooden-house-model-coins-isolated-white-background_1150-17813.jpg"
                    alt="إطلاق متجر زين"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* 2023 */}
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-right md:order-1 order-2"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg"
                    alt="شراكات استراتيجية"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </motion.div>

              <div className="relative z-10 mx-auto md:mx-0 order-1 md:order-2">
                <div className="w-10 h-10 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 md:pl-12 md:text-left order-3"
              >
                <h3 className="text-2xl font-bold text-amber-500 mb-3">2023</h3>
                <h4 className="text-xl font-bold mb-3">شراكات استراتيجية</h4>
                <p className="text-gray-600">
                  عقدت الشركة شراكات استراتيجية مع كبرى الشركات العالمية والمحلية، مما عزز من قدرتها على تنفيذ مشاريع
                  ضخمة وتقديم خدمات متكاملة بأعلى معايير الجودة.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
