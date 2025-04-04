interface Seo {
    seo_key: string
    page_name: string

    page_description: string

    page_keywords: string

    robots_meta: string
    canonical_url: string
    og_image: string
    og_title: string
    og_description: string
    twitter_image: string
    twitter_title: string
    twitter_description: string
    alternate_url: string
    meta_description_short: string
    thumbnail_image: string
    sitemap_priority: number
}

export default Seo