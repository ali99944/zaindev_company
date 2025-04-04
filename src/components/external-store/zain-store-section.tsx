"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Star, Zap, Shield, Tag, Package } from 'lucide-react'
import { LaptopFrame } from "../device-frames/laptop-frame"
import { StoreSection } from "@/src/types/sections/future-projects-data"

export function ZainStoreSection({ store_data } : { store_data: StoreSection}) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center px-4 py-2 bg-gray-900 rounded-full mb-6">
              <ShoppingBag className="w-4 h-4 text-amber-500 ml-2" />
              <span className="text-amber-500 text-sm font-medium">{store_data.sub_name}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {store_data.name}
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {store_data.description}
            </p>

            {/* Store Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {
                (store_data.tags_list as Array<{ icon_svg: string, name: string, description: string}>).map(tag => {
                  return <motion.div
                    key={tag.icon_svg}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                    <div className="w-5 h-5" dangerouslySetInnerHTML={{
                      __html: tag.icon_svg
                    }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{tag.name}</h3>
                    <p className="text-gray-600 text-sm">{tag.description}</p>
                  </div>
                </motion.div>
                })
              }
              {/* <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">أفضل الأسعار</h3>
                  <p className="text-gray-600 text-sm">منتجات عالية الجودة بأسعار تنافسية</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">توصيل سريع</h3>
                  <p className="text-gray-600 text-sm">توصيل سريع لجميع مناطق المملكة</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">ضمان الجودة</h3>
                  <p className="text-gray-600 text-sm">ضمان على جميع المنتجات لمدة عامين</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">دفع آمن</h3>
                  <p className="text-gray-600 text-sm">طرق دفع متعددة وآمنة</p>
                </div>
              </motion.div> */}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/store"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black py-2 px-6 rounded transition-colors"
              >
                <span>تسوق الآن</span>
                <ShoppingBag className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Store Mockup */}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="relative"
>
  <div className="relative z-10 mx-auto">
    <LaptopFrame>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-full w-full overflow-y-auto" style={{
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: '-ms-autohiding-scrollbar',
        scrollbarWidth: 'none'
      }}>
        {/* Modern App Header */}
        <div className="bg-white/80 backdrop-blur-sm p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl bg-black bg-clip-text text-transparent">
              متجر زين
            </h1>
            <motion.div 
              
              className="relative cursor-pointer"
            >
              <div className="p-2 bg-amber-500 rounded">
                <ShoppingBag className="w-4 h-4 text-black" />
              </div>
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center ">
                3
              </span>
            </motion.div>
          </div>
        </div>

        {/* Store Content */}
        <div className="p-4 space-y-8">
          {/* Hero Product Card */}
          <motion.div 
            className="relative group overflow-hidden rounded "
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"/>
            <Image
              src="https://img.freepik.com/free-vector/ventilation-conditioning-heating-illustration_1284-15015.jpg"
              alt="مكيف هواء حديث"
              width={600}
              height={300}
              className="w-full h-48 object-cover transform transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">مكيف سبليت انفرتر</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-amber-100 text-sm">4.9 (238 تقييم)</span>
                  </div>
                </div>
                <div className="bg-amber-400/90 backdrop-blur px-3 py-1 rounded-full ">
                  <span className="font-bold text-gray-900">1,999 ريال</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              ⚡ توصيل سريع
            </div>
          </motion.div>

          {/* Animated Categories Grid */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Zap, color: 'bg-blue-100', text: 'مكيفات' },
              { icon: Package, color: 'bg-green-100', text: 'أجهزة' },
              { icon: Shield, color: 'bg-purple-100', text: 'قطع غيار' },
              { icon: Tag, color: 'bg-pink-100', text: 'عروض' }
            ].map((item, index) => (
              <motion.div
                key={index}
                
                className="flex flex-col items-center cursor-pointer"
              >
                <div className={`${item.color} w-full aspect-square rounded flex items-center justify-center mb-2   transition-shadow`}>
                  <item.icon className="w-8 h-8 text-gray-800" />
                </div>
                <span className="text-xs font-medium text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Best Selling Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900 border-r-4 border-amber-500 pr-2">
              الأكثر مبيعاً
            </h3>
            
            {[
              {
                title: "مكيف سبليت 18000 وحدة",
                price: "1,499 ريال",
                image: "https://img.freepik.com/free-vector/realistic-air-conditioner-illustration_23-2149128076.jpg",
                rating: 4.8,
                badge: "🔥 الأكثر طلباً"
              },
              {
                title: "مكيف شباك 12000 وحدة",
                price: "899 ريال",
                image: "https://img.freepik.com/free-vector/realistic-conditioner-illustration_23-2149128075.jpg",
                rating: 4.5,
                badge: "🆕 وصول جديد"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded   transition-shadow p-3 flex gap-3 items-start relative"
              >
                <div className="w-20 h-20 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{product.title}</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="bg-amber-500 text-black px-4 py-1.5 rounded text-sm font-semibold "
                    >
                      أضف للسلة
                    </motion.button>
                    <span className="font-bold text-amber-600">{product.price}</span>
                  </div>
                </div>
                {product.badge && (
                  <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 rounded-full text-xs">
                    {product.badge}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </LaptopFrame>
  </div>

  {/* Animated Background Elements */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="w-full h-full bg-gradient-to-r from-amber-100/30 to-amber-200/20 blur-2xl"
    />
  </div>
</motion.div>
        </div>
      </div>
    </section>
  )
}
