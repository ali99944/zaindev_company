import { getProjectById, getRelatedProjects } from "@/src/data/projects"
import { ProjectHero } from "./components/project-hero"
import { ProjectInfo } from "./components/project-info"
import { ProjectDescription } from "./components/project-description"
import { CtaSection } from "@/src/components/landing/cta-section"
import { ProjectGallery } from "./components/project-gallery"
import { RelatedProjects } from "./components/related-projects"
import Link from "next/link"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const projectId = parseInt((await params).id)
  const project = getProjectById(projectId)
  const relatedProjects = getRelatedProjects(projectId)
  
  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">المشروع غير موجود</h1>
          <p className="text-gray-600 mb-6">عذراً، لم نتمكن من العثور على المشروع المطلوب</p>
          <Link href="/projects" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 rounded-lg transition-colors">
            العودة إلى المشاريع
          </Link>
        </div>
      </main>
    )
  }
  
  return (
    <main>
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectDescription project={project} />
      <ProjectGallery images={project.images} />
      <RelatedProjects projects={relatedProjects} />
      <CtaSection />
    </main>
  )
}
