import { CtaSection } from "@/src/components/landing/cta-section";
import { ProjectsGrid } from "./components/projects-grid";
import { ProjectsHero } from "./components/projects-hero";
// import { getSeoData } from "@/src/server-actions/seo";
// import { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   const seo = await getSeoData('projects-page')
  
//   return {
//     title: seo.page_name.ar,
//     description: seo.page_description.ar,
//     keywords: [
//       seo.page_name.ar,
//       seo.page_name.en,
//       seo.page_description.ar,
//       seo.page_description.en
//     ]
//   }
// }


export default async function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
      <CtaSection />
    </main>
  )
}

