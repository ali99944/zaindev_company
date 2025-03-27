"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutStory() {
  return (
    <section id="about-story" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">قصتنا</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              تأسست شركة زين التنموية في عام 2008 على يد مجموعة من المهندسين والمطورين ذوي الخبرة والرؤية المستقبلية.
              بدأنا كشركة صغيرة متخصصة في المقاولات السكنية، وسرعان ما توسعنا لنصبح واحدة من الشركات الرائدة في مجال
              المقاولات والتطوير العقاري في المملكة العربية السعودية.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              على مدار 15 عاماً، قمنا بتنفيذ مئات المشاريع الناجحة في مختلف أنحاء المملكة، من المشاريع السكنية الصغيرة
              إلى المجمعات التجارية الكبرى والمشاريع الصناعية المتخصصة. نفخر بأننا ساهمنا في تشكيل المشهد العمراني في
              العديد من المدن السعودية.
            </p>

            <p className="text-gray-600 leading-relaxed">
              اليوم، تضم زين التنموية فريقاً من أكثر من 200 موظف من المهندسين والفنيين والإداريين المحترفين، ونعمل جاهدين
              لتحقيق رؤية المملكة 2030 من خلال تقديم مشاريع مستدامة وعالية الجودة تلبي احتياجات المجتمع وتسهم في تنمية
              الاقتصاد الوطني.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded overflow-hidden ">
                  <Image
                    src="https://img.freepik.com/free-photo/construction-site-with-cranes-building_23-2149381879.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                    alt="بدايات زين التنموية"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded overflow-hidden ">
                  <Image
                    src="https://img.freepik.com/free-photo/construction-site-with-machinery_23-2149482721.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                    alt="مشاريع زين التنموية"
                    width={300}
                    height={200}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded overflow-hidden ">
                  <Image
                    src="https://img.freepik.com/free-photo/business-people-discussing-together-meeting_23-2148908922.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                    alt="فريق زين التنموية"
                    width={300}
                    height={200}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded overflow-hidden ">
                  <Image
                    src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid"
                    alt="شراكات زين التنموية"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

