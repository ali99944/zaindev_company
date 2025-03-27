import { getSeoData } from "@/src/server-actions/seo";
import { ContactFaq } from "./components/contact-faq";
import { ContactForm } from "./components/contact-form";
import { ContactHero } from "./components/contact-hero";
import { ContactInfo } from "./components/contact-info";
import { ContactOffices } from "./components/contact-offices";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const seo_data = await getSeoData('contact-us')

  return {
    title: seo_data.page_name.ar,
    description: seo_data.page_description.ar,
    keywords: [
      seo_data.page_keywords.ar,
      seo_data.page_name.ar,
    ],
    openGraph: {
      title: seo_data.og_title,
      description: seo_data.og_description,
      images: seo_data.og_image,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo_data.twitter_title,
      description: seo_data.twitter_description,
      images: seo_data.twitter_image,
    },
    alternates: {
      canonical: seo_data.canonical_url,
    },
  }
}


export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactOffices />
      <ContactFaq />
    </main>
  )
}

