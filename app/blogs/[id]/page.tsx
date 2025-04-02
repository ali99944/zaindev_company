import { CtaSection } from "@/src/components/landing/cta-section"
// import { BlogAuthor } from "./components/blog-author"
import { BlogContent } from "./components/blog-content"
import { BlogHero } from "./components/blog-hero"
import { getSingleBlog } from "@/src/server-actions/blog"
import { Metadata } from "next"
import { RelatedBlogs } from "./components/related-blogs"


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const blog = await getSingleBlog((await params).id)
  
  return {
    title: blog.seo_title ?? blog.name,
    description: blog.seo_description || blog.description,
    keywords: blog.seo_keywords || [blog.name, blog.description, blog.short]
  }
}


export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const blog = await getSingleBlog((await params).id)

  if (!blog) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
          <p className="text-gray-600 mb-6">عذراً، لم نتمكن من العثور على المقال المطلوب</p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-3 rounded-lg transition-colors"
          >
            العودة إلى المدونة
          </a>
        </div>
      </main>
    )
  }

  return (
    <main>
      <BlogHero blog={blog} />
      <BlogContent blog={blog} />
      {/* <BlogAuthor blog={blog} /> */}
      <RelatedBlogs blogs={[]} />
      <CtaSection />
    </main>
  )
}

