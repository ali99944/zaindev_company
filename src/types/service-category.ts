import { Discount, Service, ServiceCategoryBack, ServiceCategoryFaq } from "./service"

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
    created_at: string
    updated_at: string
    discount: Discount | null
    services: Service[]
    services_categories_faqs: ServiceCategoryFaq[]
    services_categories_backs: ServiceCategoryBack[]
    services_categories: ServiceCategory
}

export default ServiceCategory