import { CtaSection } from "@/src/components/landing/cta-section"
import { BlogsGrid } from "./components/blogs-grid"
import { BlogsHero } from "./components/blogs-hero"

export default function BlogPage() {
  return (
    <main>
      <BlogsHero />
      <BlogsGrid />
      <CtaSection />
    </main>
  )
}
