import { CtaSection } from "@/src/components/landing/cta-section"
import { ServiceFaq } from "./components/service-faq"
import { ServiceFeatures } from "./components/service-features"
import { ServiceHero } from "./components/service-hero"
import { ServiceProcess } from "./components/service-process"
import { ServiceSubServices } from "./components/service-sub-services"
import { ServiceTestimonials } from "./components/service-testimonials"
import { getSingleServiceCategory } from "@/src/server-actions/service"

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {

  const service = await getSingleServiceCategory((await params).service)

  return (
    <main className="min-h-screen bg-gray-50">
      <ServiceHero service={service} />
      <ServiceSubServices service={service} subServices={service.services} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <ServiceTestimonials />
      <ServiceFaq service={service} />
      <CtaSection />
    </main>
  )
}

