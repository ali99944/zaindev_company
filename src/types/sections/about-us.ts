interface AboutUsData {
    id: number;
    key: string;
    image: string | null;
    logo: string;
    svg: string | null;
    details_page: number;
    discount_id: number | null;
    services_id: number | null;
    price: string | null;
    name: string;
    sub_name: string;
    short: string;
    description: string;
    seo_title: string;
    seo_keywords: string;
    seo_description: string;
    created_at: string;
    updated_at: string;
    images_list: string[];
    links_list: unknown[];
    sections_list: unknown[];
    tags_list: {
        id: number;
        icon_svg: string;
        name: string;
        description: string;
    }[];

}

export default AboutUsData