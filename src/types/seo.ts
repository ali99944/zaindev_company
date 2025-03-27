interface Seo {
    seo_key: string
    page_name: {
        en: string
        ar: string
    }

    page_description: {
        en: string
        ar: string
    }

    page_keywords: {
        en: string
        ar: string
    }

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