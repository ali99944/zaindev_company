"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, Award, Shield } from 'lucide-react'
import { useGetQuery } from "@/src/hooks/queries-actions"
import HeroData from "@/src/types/sections/hero-data"
// import { StatCounter } from "@/components/stat-counter"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { data: heroData } = useGetQuery<HeroData>({
    url: 'full-data/home/key',
    key: ['full-data/home/key']
  })

  console.log(heroData);
  

  const constructionFeatures = [
    { icon: <Award className="w-5 h-5" />, text: "خبرة أكثر من 15 عام" },
    { icon: <Shield className="w-5 h-5" />, text: "ضمان الجودة في كل مشروع" },
    { icon: <Star className="w-5 h-5" />, text: "فريق من المهندسين المحترفين" }
  ]

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden py-12">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0057b7" strokeWidth="0.5" />
              </pattern>
              <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#f59e0b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-500/10"
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center"
      >
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:pr-12 order-2 lg:order-1 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500/30 to-amber-500/40 rounded-full backdrop-blur-sm mb-6 border border-amber-500/20"
            >
              <Star className="w-4 h-4 text-black ml-2" />
              <span className="text-black text-sm font-medium">الشريك الأمثل لمشاريع المستقبل</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl  mb-6">
                <motion.span 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="inline-block text-amber-500 mb-2"
                >
                  {heroData?.data.name}
                </motion.span>
                <br />
                <motion.span 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="inline-block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                >
                  {heroData?.data.sub_name}
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mr-0 lg:ml-auto"
              >
                {heroData?.data.description}
              </motion.p>
            </motion.div>

            {/* Features List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {constructionFeatures.map((feature, index) => (
                  <motion.div
                    key={`construction-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.1)" }}
                    className="flex items-center gap-2 bg-gradient-to-r from-amber-300/20 to-amber-400/10 backdrop-blur-md rounded-full px-4 py-2 border border-amber-600/20"
                  >
                    <span className="text-amber-500">{feature.icon}</span>
                    <span className="text-gray-800 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link href={"/projects"}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden group bg-amber-500 hover:bg-amber-600 text-black  py-1.5 px-6 rounded cursor-pointer transition-all duration-300 flex items-center"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-transparent w-full h-full"
                      animate={{ 
                        x: ["0%", "100%"], 
                        opacity: [0, 1, 0] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "loop" 
                      }}
                    />
                    <span className="relative z-10">مشاريعنا</span>
                  </motion.button>
                </Link>
                <Link href={"/contact"}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="relative overflow-hidden bg-gray-800 text-amber-500  py-1.5 px-6 rounded cursor-pointer border border-gray-700 transition-all duration-300"
                  >
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent w-full h-full"
                      animate={{ 
                        x: ["0%", "100%"], 
                        opacity: [0, 0.5, 0] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatType: "loop",
                        delay: 1
                      }}
                    />
                    <span className="relative z-10">تواصل معنا</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Tilted Image Card */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative"
            >
              <div className="relative">
                {/* Tilted Background */}
                <motion.div 
                  className="absolute -inset-4 bg-amber-500/20 rounded"
                  initial={{ rotate: 6 }}
                  whileHover={{ rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Main Image */}
                <motion.div 
                  className="relative h-full overflow-hidden rounded"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={heroData?.data.logo ?? ''}
                    alt="مشروع بناء حديث"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4"
            >
              <StatCounter value="15+" label="سنوات خبرة" delay={0} />
              <StatCounter value="500+" label="مشروع منجز" delay={0.1} />
              <StatCounter value="50+" label="شريك نجاح" delay={0.2} />
              <StatCounter value="100%" label="رضا العملاء" delay={0.3} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const StatCounter = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 1 }}
      className="flex flex-col items-center"
    >
      <span className="text-2xl md:text-3xl  text-amber-500">{value}</span>
      <span className="text-gray-600 text-sm">{label}</span>
    </motion.div>
  )
}