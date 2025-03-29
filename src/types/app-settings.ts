export interface AppSettings {
  favicon: string;
  logo: string;
  home_logo: string;
  contact_email: string;
  phone_number: string;
  second_phone_number: string | null;
  whatsapp: string;
  second_whatsapp: string | null;
  social_links: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
    snapchat: string;
    telegram: string | null;
    pinterest: string | null;
    reddit: string | null;
    github: string | null;
    behance: string | null;
    dribbble: string | null;
  };
  link: string;
  translations: {
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    site_name: string;
    site_tagline: string | null;
    site_description: string;
    contact_section_title: string | null;
    contact_section_subtitle: string | null;
    primary_cta_text: string | null;
    secondary_cta_text: string | null;
    address: string;
    terms_summary: string;
    homepage_title: string | null;
    homepage_subtitle: string | null;
    about_page_title: string | null;
    about_page_description: string | null;
  };
}
