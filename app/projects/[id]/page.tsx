import { ProjectHero } from "./components/project-hero"
import { ProjectInfo } from "./components/project-info"
import { ProjectDescription } from "./components/project-description"
import { CtaSection } from "@/src/components/landing/cta-section"
import { ProjectGallery } from "./components/project-gallery"
import { RelatedProjects } from "./components/related-projects"
import Link from "next/link"
import { getRelatedProjects, getSingleProject } from "@/src/server-actions/project"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const project = await getSingleProject((await params).id)
  
  return {
    title: project.seo_title ?? project.name,
    description: project.seo_description || project.description,
    keywords: project.seo_keywords || [project.name, project.description, project.short]
  }
}


export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {

  const project = await getSingleProject((await params).id)

  const related_projects = await getRelatedProjects(project.project_type)
  
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
      <ProjectGallery images={project.project_images} />
      <RelatedProjects projects={related_projects} />
      <CtaSection />
    </main>
  )
}
