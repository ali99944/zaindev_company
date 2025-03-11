import type { Metadata } from "next";
import { AboutHero } from "./components/about-hero";
import { AboutValues } from "./components/about-values";
import { AboutTeam } from "./components/about-team";
import { AboutAchievements } from "./components/about-achievments";
import { AboutTestimonials } from "./components/about-testimonials";

export const metadata: Metadata = {
  title: 'من نحن - مؤسسة سعودية رائدة في المقاولات والتكييف وإدارة المشاريع',
  description: 'مؤسسة سعودية تنموية مقرها *المنطقة الشرقية - الأحساء، متخصصة في **المقاولات، التكييف، أنظمة المراقبة، الديكور، الخدمات الكهربائية، السباكة، إدارة المشاريع، وخدمات الصيانة*. نقدم خدماتنا في جميع أنحاء المملكة بجودة عالية ومعايير احترافية',
  keywords: "مؤسسة سعودية, من نحن, المقاولات العامة, مشاريع التكييف, أنظمة المراقبة, التصميم والديكور, الخدمات الكهربائية, حلول السباكة, إدارة المشاريع, خدمات الصيانة, مؤسسة تنموية, المملكة العربية السعودية",
}


export default async function Page() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutTeam />
      <AboutAchievements />
      <AboutTestimonials />
    </>
  )
}