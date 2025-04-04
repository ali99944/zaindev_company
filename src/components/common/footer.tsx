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
  Loader2,
} from "lucide-react"
import { useGetQuery } from "@/src/hooks/queries-actions"
import ConnectedWebsite from "@/src/types/connected-website"
import PrivacyType from "@/src/types/privacy-type"
import { AppSettings } from "@/src/types/app-settings"
import { LinesLoader } from "./loaders"


export function Footer() {
  const { data: connected_websites } = useGetQuery<ConnectedWebsite[]>({
    url: 'connected-websites',
    key: ['connected-websites']
  })

  const { data: privacies_types } = useGetQuery<PrivacyType[]>({
    url: 'privacy-types',
    key: ['privacy-types']
  })

  const { data: app_settings, isLoading: is_app_settings_loading } = useGetQuery<AppSettings>({
    url: 'settings',
    key: ['settings'],
  })
  
  const settings = app_settings as unknown as AppSettings

  return (
    <footer className="bg-amber-500/20 text-black relative overflow-hidden">
      {/* Main Footer */}
      <div className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Company Info */}
            <div className="space-y-6">
              {
                is_app_settings_loading? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <Link href="/" className="flex items-center gap-3">
                    <Image src={settings?.logo} alt="Zain Development" width={40} height={40} className="w-10 h-10" />
                    <span className="font-bold text-xl text-amber-500">زين التنموية</span>
                  </Link>
                )
              }

              <p className="text-black leading-relaxed">
                شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية. نقدم التميز في خدمات المقاولات
                والصيانة والخدمات المتخصصة
              </p>

              {
                is_app_settings_loading ? (
                  <LinesLoader />
                ) : (
                  <div className="flex items-center gap-4 text-amber-500/90">
                <Link
                  href={settings.social_links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href={settings.social_links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href={settings.social_links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href={settings.social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
                )
              }
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 ">روابط سريعة</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-black  hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>من نحن</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-black  hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>خدماتنا</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-black  hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>مشاريعنا</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/store"
                    className="text-black  hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>المتجر</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black  hover:underline transition-colors flex items-center gap-2"
                  >
                    <span>اتصل بنا</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consultations"
                    className="text-black  hover:underline transition-colors flex items-center gap-2"
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
                  <MapPin className="w-5 h-5  mt-1 flex-shrink-0" />
                  {
                    is_app_settings_loading ? (
                      <LinesLoader />
                    ) : (
                      <Link
                    href={`https://maps.google.com/?q=${settings?.translations.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black  hover:underline transition-colors"
                  >
                    {settings?.translations.address}
                  </Link>
                    )
                  }
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5  flex-shrink-0" />
                  {
                    is_app_settings_loading ? (
                      <LinesLoader />
                    ) : (
                      <Link
                    href={`tel:${settings?.phone_number}`}
                    className="text-black  hover:underline transition-colors"
                  >
                    {settings?.phone_number}
                  </Link>
                    )
                  }
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5  flex-shrink-0" />
                  {
                    is_app_settings_loading ? (
                      <LinesLoader />
                    ) : (
                      <Link
                    href={`mailto:${settings?.contact_email}`}
                    className="text-black  hover:underline transition-colors"
                  >
                    {settings?.contact_email}
                  </Link>
                    )
                  }
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
                    className="text-black  hover:underline transition-colors flex items-center gap-2"
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
      <div className=" py-8 relative z-10 bg-amber-500/20">
                    {/* Policies */}
                    <div className="flex items-center justify-center gap-6 text-sm mb-4 flex-wrap px-4" >
              {
                privacies_types?.data.map((p, index) => {
                  return (
                    <Link key={index} href={`/privacies/${p.id}`} className="text-black  hover:underline transition-colors">
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
              <p className="text-black text-sm">
                &copy; {new Date().getFullYear()} زين التنموية. جميع الحقوق محفوظة
              </p>
            </div>


            {/* Developer Credit */}
            <div className="text-center md:text-left">
              <p className="text-black text-xs">
                تطوير وتصميم بواسطة{" "}
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:underline"
                >
                  شركة زين التنموية
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div> */}
    </footer>
  )
}

