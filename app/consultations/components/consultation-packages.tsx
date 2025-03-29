"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, X } from "lucide-react"
import Link from "next/link"
import { useGetQuery } from "@/src/hooks/queries-actions"
import type ConsultationPackage from "@/src/types/consultation-package"
import GridLoader from "@/src/components/loaders/grid-loader"
import { ConsultationSubscriptionModal } from "./consultation-subscription-modal"

export function ConsultationPackages() {
  const [packageType, setPackageType] = useState<"monthly" | "annualy">("monthly")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<ConsultationPackage | null>(null)

  const { data: packages, isLoading: is_packages_loading } = useGetQuery<ConsultationPackage[]>({
    url: "consultation-packages",
    key: ["consultation-packages"],
  })


  const handlePackageSubscription = (pkg: ConsultationPackage) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }

  if (is_packages_loading) {
    return <GridLoader />
  }

  return (
    <section id="consultation-packages" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: "#e5e5f7",
            opacity: 0.8,
            backgroundImage: "radial-gradient(#005377 0.8px, #e5e5f7 0.8px)",
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
          <h2 className="text-3xl font-bold mb-4">باقات الاستشارات المتخصصة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            اختر الباقة التي تناسب احتياجاتك واستفد من خبرة فريقنا المتخصص في مجال البناء والتطوير العقاري
          </p>

          <div className="flex items-center justify-center mt-8">
            <div className="bg-white rounded-full p-1 border border-gray-200 inline-flex">
              <button
                onClick={() => setPackageType("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  packageType === "monthly"
                    ? "bg-amber-500 text-black"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                اشتراك شهري
              </button>
              <button
                onClick={() => setPackageType("annualy")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  packageType === "annualy"
                    ? "bg-amber-500 text-black"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                اشتراك سنوي
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages?.data.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded overflow-hidden "
            >
              <div className="p-4 border-b-2 border-gray-100 bg-white">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold text-amber-500">
                    {packageType === "monthly" ? pkg.price : pkg.year_price}
                  </span>
                  <span className="text-gray-600 mb-1">ريال / {packageType === "monthly" ? "شهرياً" : "سنوياً"}</span>
                </div>
                {/* <p className="text-gray-600 text-sm mb-6">
                  {pkg.id === 1 && "مناسبة للمشاريع الصغيرة والاستشارات البسيطة"}
                  {pkg.id === 2 && "مثالية للمشاريع المتوسطة التي تحتاج إلى متابعة دورية"}
                  {pkg.id === 3 && "الحل الأمثل للمشاريع الكبيرة التي تتطلب دعماً مستمراً"}
                </p> */}
              </div>

              <div className="p-6 bg-white">
                <h4 className="font-bold mb-4 text-gray-800">المميزات</h4>
                <ul className="space-y-4">
                  {pkg.packages_features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      {feature.value === "لا" ? (
                        <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div>
                        <span className="block font-medium text-gray-800">{feature.name}</span>
                        <span className="block text-sm text-gray-600">{feature.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePackageSubscription(pkg)}
                  className="block w-full mt-4 bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 rounded text-center transition-colors"
                >
                  اشترك الآن
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            هل تحتاج إلى باقة مخصصة تناسب احتياجاتك الخاصة؟ تواصل معنا لتصميم باقة استشارات مخصصة لمشروعك.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-amber-500 px-8 py-3 rounded font-medium transition-colors"
          >
            <span>طلب باقة مخصصة</span>
          </Link>
        </motion.div>
      </div>

      <ConsultationSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
        packageType={packageType}
      />
    </section>
  )
}

