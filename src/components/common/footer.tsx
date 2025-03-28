"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useGetQuery } from "@/src/hooks/queries-actions"
import ConnectedWebsite from "@/src/types/connected-website"
import PrivacyType from "@/src/types/privacy-type"


export function Footer() {
  const { data: connected_websites } = useGetQuery<ConnectedWebsite[]>({
    url: 'connected-websites',
    key: ['connected-websites']
  })

  const { data: privacies_types } = useGetQuery<PrivacyType[]>({
    url: 'privacy-types',
    key: ['privacy-types']
  })

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Main Footer */}
      <div className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Company Info */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <Image src="https://img.freepik.com/premium-vector/initial-letter-z-logo-design-vector-template_448617-543.jpg?ga=GA1.1.259795667.1741285641&semt=ais_hybrid" alt="Zain Development" width={40} height={40} className="w-10 h-10" />
                <span className="font-bold text-xl text-amber-500">زين التنموية</span>
              </Link>

              <p className="text-gray-400 leading-relaxed">
                شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية. نقدم التميز في خدمات المقاولات
                والصيانة والخدمات المتخصصة
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 ">روابط سريعة</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>من نحن</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>خدماتنا</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>مشاريعنا</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/store"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>المتجر</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>اتصل بنا</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultations"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>احصل علي استشارة</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6  ">اتصل بنا</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <Link
                    href="https://maps.google.com/?q=الرياض،+المملكة+العربية+السعودية"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors"
                  >
                    الرياض، المملكة العربية السعودية
                    <br />
                    طريق الملك فهد، برج المملكة، الطابق 20
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <Link
                    href="tel:8001234567"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors"
                  >
                    800 123 4567
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <Link
                    href="mailto:info@zaindev.com"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors"
                  >
                    info@zaindev.com
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6  ">مواقعنا الاخرى</h3>
              {
                connected_websites?.data.map((website) => (
                  <Link
                    key={website.id}
                    href={website.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 hover:underline transition-colors flex items-center gap-2"
                  >
                    {website.name}
                  </Link>
                ))
              }
            </div>

          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-800 py-8 relative z-10 bg-gray-950">
                    {/* Policies */}
                    <div className="flex items-center justify-center gap-6 text-sm mb-4 flex-wrap px-4" >
              {
                privacies_types?.data.map((p, index) => {
                  return (
                    <Link key={index} href={`/privacies/${p.id}`} className="text-gray-400 hover:text-amber-500 hover:underline transition-colors">
                      {p.name}
                    </Link>
                  )
                })
              }
            </div>
        <div className="container mx-auto px-4">
          <div className="flex justify-between gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} زين التنموية. جميع الحقوق محفوظة
              </p>
            </div>


            {/* Developer Credit */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs">
                تطوير وتصميم بواسطة{" "}
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:underline"
                >
                  شركة زين التنموية
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </footer>
  )
}

