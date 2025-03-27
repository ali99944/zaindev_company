import { CtaSection } from "@/src/components/landing/cta-section"
import { ServicesGrid } from "./components/services-grid"
import { ServicesHero } from "./components/services-hero"
import { ServicesProcess } from "./components/services-process"


export default function ServicesPage() {

    return (
        <main className="min-h-screen bg-gray-50">
            <ServicesHero />
            <ServicesGrid  />
            <ServicesProcess />
            <CtaSection />
        </main>
    )
}

