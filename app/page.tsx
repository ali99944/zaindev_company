import { HeroSection } from "@/src/components/landing/hero-section";
import { AboutSection } from "@/src/components/landing/about-section";
import { BlogsSection } from "@/src/components/landing/blogs-section";
import { CtaSection } from "@/src/components/landing/cta-section";
import { PartnersSection } from "@/src/components/landing/partners-section";
import { PerfectPartnerSection } from "@/src/components/landing/perfect-partner-section";
import { ProjectsSection } from "@/src/components/landing/projects-section";
import { ServicesSection } from "@/src/components/landing/services-section";
import { ServiceCoverageMap } from "@/src/components/common/service-coverage-map";
import { MobileAppSection } from "@/src/components/common/mobile-app-section";
import { ZainStoreSection } from "@/src/components/external-store/zain-store-section";


export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServiceCoverageMap />
      <PerfectPartnerSection />
      <ZainStoreSection />
      <PartnersSection />
      <CtaSection />
      <MobileAppSection />
      <ProjectsSection />
      <BlogsSection />
    </div>
  )
}

