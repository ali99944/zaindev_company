import { CtaSection } from "@/src/components/landing/cta-section"
import { getArticleById, getRelatedArticles } from "@/src/data/articles"
import { ArticleAuthor } from "./components/article-author"
import { ArticleContent } from "./components/article-content"
import { ArticleHero } from "./components/article-hero"
import { RelatedArticles } from "./components/related-articles"

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const articleId = Number.parseInt((await params).id)
  const article = getArticleById(articleId)
  const relatedArticles = getRelatedArticles(articleId)

  if (!article) {
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
      <ArticleHero article={article} />
      <ArticleContent article={article} />
      <ArticleAuthor author={article.author} />
      <RelatedArticles articles={relatedArticles} />
      <CtaSection />
    </main>
  )
}

