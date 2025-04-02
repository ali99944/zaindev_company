"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Team members data
const teamMembers = [
  {
    name: "علي البحراني",
    position: "مدير المؤسسة",
    image:
      "https://scontent.fatz1-1.fna.fbcdn.net/v/t39.30808-6/462093055_10226332171080340_5448047990060080745_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=unGgxtnYXaAQ7kNvgEjTCBN&_nc_oc=Adld3x8od2Y-LjUzEIJC9aBO1qHwK2zoajyRy4adqedlulmDGLDEydTgfKxNgBTaJhw&_nc_zt=23&_nc_ht=scontent.fatz1-1.fna&_nc_gid=6uJVhY-CkFHBGNHCKDqrKg&oh=00_AYGCnSrYNN9n8bmtQpsArg3XHtHEcYC9p_lwt3sanEETnA&oe=67F2C37B",
    bio: "يمتلك أكثر من 20 عاماً من الخبرة في مجال المقاولات والتطوير العقاري. قاد العديد من المشاريع الكبرى في المملكة.",
  },
  {
    name: "د. نفيسة السيد",
    position: "الرئيس التنفيذي",
    image:
      "https://img.freepik.com/free-photo/woman-with-sign-face-with-question-mark_1134-555.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid",
    bio: "مهندسة معمارية بخبرة 15 عاماً، متخصصة في إدارة المشاريع الكبرى وتطوير العمليات التشغيلية.",
  },
  // {
  //   name: "م. خالد السعيد",
  //   position: "مدير المشاريع",
  //   image:
  //     "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg",
  //   bio: "مهندس مدني بخبرة 12 عاماً في إدارة المشاريع السكنية والتجارية. حاصل على شهادة PMP في إدارة المشاريع.",
  // },
  // {
  //   name: "م. نورة القحطاني",
  //   position: "مدير التصميم",
  //   image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
  //   bio: "مهندسة معمارية بخبرة 10 سنوات في التصميم المعماري والداخلي. حاصلة على العديد من الجوائز في مجال التصميم.",
  // },
]

export function AboutTeam() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: "#e5e5f7",
            opacity: 0.8,
            backgroundImage: "radial-gradient(#000 1px, #e5e5f7 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">فريقنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            يضم فريقنا نخبة من المهندسين والمتخصصين ذوي الخبرة والكفاءة العالية في مختلف المجالات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded overflow-hidden border border-gray-100"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                {/* <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-black transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-black transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-amber-500 hover:text-black transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            نحن فخورون بفريقنا المتميز الذي يعمل بجد وإخلاص لتحقيق رؤيتنا وتقديم أفضل الخدمات لعملائنا.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-2 rounded transition-colors"
          >
            <span>انضم إلى فريقنا</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

