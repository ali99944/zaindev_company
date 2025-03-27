// import { getSeoData } from "@/src/server-actions/seo";
import { ContactFaq } from "./components/contact-faq";
import { ContactForm } from "./components/contact-form";
import { ContactHero } from "./components/contact-hero";
import { ContactInfo } from "./components/contact-info";
import { ContactOffices } from "./components/contact-offices";
// import { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   const seo = await getSeoData('contact-us')
  
//   return {
//     title: seo.page_name.ar,
//     description: seo.page_description.ar,
//     keywords: [
//       seo.page_name.ar, 
//       seo.page_name.en,
//       seo.page_description.ar,
//       seo.page_description.en,
//     ]
//   }
// }


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

