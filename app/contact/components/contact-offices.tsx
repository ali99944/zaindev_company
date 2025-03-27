"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

// Sample offices data
const offices = [
  {
    id: 1,
    city: "الرياض",
    address: "طريق الملك فهد، برج المملكة، الطابق 20",
    phone: "800 123 4567",
    email: "riyadh@zaindev.com",
    hours: "الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً",
  },
  {
    id: 2,
    city: "جدة",
    address: "طريق الأمير سلطان، برج الأندلس، الطابق 15",
    phone: "800 123 4568",
    email: "jeddah@zaindev.com",
    hours: "الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً",
  },
  {
    id: 3,
    city: "الدمام",
    address: "طريق الملك فيصل، برج الخليج، الطابق 10",
    phone: "800 123 4569",
    email: "dammam@zaindev.com",
    hours: "الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً",
  },
]

export function ContactOffices() {
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">مكاتبنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            تتواجد مكاتبنا في المدن الرئيسية بالمملكة العربية السعودية لنكون دائماً بالقرب منكم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded border border-gray-100 p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>مكتب {office.city}</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{office.address}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{office.phone}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{office.email}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{office.hours}</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={`https://maps.google.com/?q=${office.city}،+المملكة+العربية+السعودية`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 transition-colors"
                >
                  <span>الحصول على الاتجاهات</span>
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

