import { MobileAppMockups } from "@/src/components/common/mobile-app-mockups";
import { MobileAppSection } from "@/src/components/common/mobile-app-section";
import { CtaSection } from "@/src/components/landing/cta-section";
import { getPageData } from "@/src/server-actions/page-data";
import { ZainDevelopmentApp } from "@/src/types/sections/future-projects-data";
export default async function MobileAppPage() {
  const zaindev_app_data = await getPageData<ZainDevelopmentApp>('zain_development_app')
  
  return (
    <main>
      <MobileAppSection zaindev_app_data={zaindev_app_data} />
      <MobileAppMockups />
      <CtaSection />
    </main>
  )
}

