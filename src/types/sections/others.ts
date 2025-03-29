interface Tag {
    id: number
    icon_svg: string | null
    name: string
    description: string
}

interface Link {
    id: number
    icon_svg: string | null
    logo: string | null
    link: string
    name: string
}

export interface SectionList {
    id: number
    svg: string | null
    image: string | null
    logo: string | null
    name: string
    short: string
    description: string
}

export interface SectionItem {
    id: number
    key: string
    image: string | null
    logo: string
    svg: string | null
    details_page: number
    discount_id: number | null
    services_id: number | null
    price: number | null
    name: string
    sub_name: string
    short: string
    description: string
    seo_title: string | null
    seo_keywords: string | null
    seo_description: string | null
    created_at: string
    updated_at: string
    images_list: unknown // Could be more specific if we know the structure
    links_list: Link[]
    sections_list: SectionList[] // Could be more specific if we know the structure
    tags_list: Tag[]
}

export interface BaseSectionItem {
    id: number;
    key: string;
    image: string | null;
    logo: string;
    svg: string | null;
    details_page: number;
    discount_id: number | null;
    services_id: number | null;
    price: number | null;
    name: string;
    sub_name: string;
    short: string;
    description: string;
    seo_title: string | null;
    seo_keywords: string | null;
    seo_description: string | null;
    created_at: string;
    updated_at: string;
    images_list: unknown[];
    links_list: Link[];
    sections_list: unknown[];
    tags_list: Tag[];
  }