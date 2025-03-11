import { CtaSection } from "@/src/components/landing/cta-section";
import { ProjectsGrid } from "./components/projects-grid";
import { ProjectsHero } from "./components/projects-hero";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
      <CtaSection />
    </main>
  )
}

