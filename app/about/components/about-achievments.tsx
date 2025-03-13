"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Trophy } from "lucide-react"

const achievements = [
  {
    number: 500,
    suffix: "+",
    title: "مشروع منجز",
  },
  {
    number: 15,
    suffix: "+",
    title: "سنوات خبرة",
  },
  {
    number: 50,
    suffix: "+",
    title: "شريك نجاح",
  },
  {
    number: 100,
    suffix: "%",
    title: "رضا العملاء",
  },
]

export function AboutAchievements() {
  return (
    <section className="py-20 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600">

        {/* Diagonal Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-lines" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M-10,10 L30,-30 M0,40 L40,0 M30,50 L70,10" stroke="#000" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-black">إنجازاتنا بالأرقام</h2>
          <p className="text-black/80 max-w-3xl mx-auto">
            نفخر بما حققناه من إنجازات على مدار السنوات الماضية، وهذه بعض الأرقام التي تعكس نجاحنا
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <CounterCard
              key={achievement.title}
              number={achievement.number}
              suffix={achievement.suffix}
              title={achievement.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CounterCard({
  number,
  suffix,
  title,
  delay,
}: {
  number: number
  suffix: string
  title: string
  delay: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // ms
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      const easeOutQuad = (t: number) => t * (2 - t)

      let frame = 0
      const counter = setInterval(() => {
        frame++
        const progress = easeOutQuad(frame / totalFrames)
        setCount(Math.floor(progress * number))

        if (frame === totalFrames) {
          clearInterval(counter)
        }
      }, frameDuration)

      return () => clearInterval(counter)
    }
  }, [isInView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded p-4 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
        <Trophy className="w-8 h-8 text-amber-500" />
      </div>
      <h3 className="text-3xl font-bold text-amber-500 mb-2">
        {isInView ? count : 0}
        {suffix}
      </h3>
      <p className="text-gray-600">{title}</p>
    </motion.div>
  )
}

