import { MobileAppMockups } from "@/src/components/common/mobile-app-mockups";
import { MobileAppSection } from "@/src/components/common/mobile-app-section";
import { CtaSection } from "@/src/components/landing/cta-section";
export default function MobileAppPage() {
  return (
    <main>
      <MobileAppSection />
      <MobileAppMockups />
      <CtaSection />
    </main>
  )
}

