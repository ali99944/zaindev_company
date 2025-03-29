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
import { getSeoData } from "@/src/server-actions/seo";
import { Metadata } from "next";
import { getPageData } from "@/src/server-actions/page-data";
import ServiceCoverageData from "@/src/types/sections/service-coverage-data";
import AboutUsData from "@/src/types/sections/about-us";
import { FutureProject, StoreSection, ZainDevelopmentApp } from "@/src/types/sections/future-projects-data";


export const generateMetadata = async (): Promise<Metadata> => {
  const seo_data = await getSeoData('zain-development')

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


export default async function Home() {
  const coverage_data = await getPageData<ServiceCoverageData>('Our_Service_Coverage')
  const aboutus_data = await getPageData<AboutUsData>('about_us')
  const future_projects = await getPageData<FutureProject>('future_projects')
  const store_section = await getPageData<StoreSection>('store_section')
  const zaindev_app_data = await getPageData<ZainDevelopmentApp>('zain_development_app')
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <HeroSection />
      <ServicesSection />
      <AboutSection aboutus_data={aboutus_data} />
      <ServiceCoverageMap coverage_data={coverage_data} />
      <PerfectPartnerSection future_projects={future_projects} />
      <ZainStoreSection store_data={store_section} />
      <PartnersSection />
      <CtaSection />
      <MobileAppSection zaindev_app_data={zaindev_app_data} />
      <ProjectsSection />
      <BlogsSection />
    </div>
  )
}

