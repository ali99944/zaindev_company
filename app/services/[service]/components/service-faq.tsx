"use client"

import { Faq, FaqsComponent } from "@/src/components/common/faqs-component"
import ServiceCategory from "@/src/types/service-category";

interface ServiceFaqProps {
  service: ServiceCategory
}

export function ServiceFaq({ service }: ServiceFaqProps) {

  if(service.services_categories_faqs.length == 0) return null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto">
        <FaqsComponent faqs={service.services_categories_faqs as unknown as Faq[]} />
        </div>
      </div>
    </section>
  )
}

