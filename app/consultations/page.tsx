import { ConsultationBenefits } from "./components/consultation-benefits";
import { ConsultationFaq } from "./components/consultation-faqs";
import { ConsultationForm } from "./components/consultation-form";
import { ConsultationPackages } from "./components/consultation-packages";
import { ConsultationTestimonials } from "./components/consultation-testimonials";
import { ConsultationsHero } from "./components/consultations-hero";

export default function ConsultationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <ConsultationsHero />
      <ConsultationForm />
      <ConsultationBenefits />
      <ConsultationPackages />
      <ConsultationTestimonials />
      <ConsultationFaq />
    </div>
  )
}
