import { ContactFaq } from "./components/contact-faq";
import { ContactForm } from "./components/contact-form";
import { ContactHero } from "./components/contact-hero";
import { ContactMap } from "./components/contact-map";


export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactFaq />
    </main>
  )
}

