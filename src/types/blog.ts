import BlogCategory from "./blog-category"
import BlogTag from "./blog-tag"
import BlogUser from "./blog-user"

interface Blog {
    id: number
    name: string
    description: string
    logo: string
    image: string
    status: number
    short: string
    seo_title: string | null
    seo_keywords: string | null
    seo_description: string | null
    updated_at: string
    publish_date: string
    reading_time: number
    user: BlogUser
    category: BlogCategory
    tags: Array<BlogTag>

    created_at: string
}

export default Blog