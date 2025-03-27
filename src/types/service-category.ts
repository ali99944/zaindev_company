export interface ServiceCategoryDiscount {
    id: number
    name: string
    code: string
    amount: number
    logo: string
}

interface ServiceCategory {
    id: number
    name: string
    short: string
    logo: string

    seo_title: string
    seo_description: string
    seo_keywords: string

    discount: ServiceCategoryDiscount
}

export default ServiceCategory