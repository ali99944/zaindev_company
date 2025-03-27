import type { Metadata } from "next";
import { AboutHero } from "./components/about-hero";
import { AboutValues } from "./components/about-values";
import { AboutTeam } from "./components/about-team";
import { AboutStats } from "./components/about-stats";
import { AboutTestimonials } from "./components/about-testimonials";
import { AboutClients } from "./components/about-clients";
import { AboutCta } from "./components/about-cta";
import { AboutStory } from "./components/about-story";
import { getSeoData } from "@/src/server-actions/seo";
import { getPageData } from "@/src/server-actions/page-data";
import AboutUsData from "@/src/types/sections/about-us";

export const generateMetadata = async (): Promise<Metadata> => {
  const seo_data = await getSeoData('about-us')

  return {
    title: seo_data.page_name.ar,
    description: seo_data.page_description.ar,
    keywords: [
      seo_data.page_keywords.ar,
      seo_data.page_name.ar,
    ],
    openGraph: {
      title: seo_data.og_title,
      description: seo_data.og_description,
      images: seo_data.og_image,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo_data.twitter_title,
      description: seo_data.twitter_description,
      images: seo_data.twitter_image,
    },
    alternates: {
      canonical: seo_data.canonical_url,
    },
  }
}


export default async function Page() {
  const section_data = await getPageData<AboutUsData>('about_us')

  return (
    <>
      <AboutHero page_data={section_data} />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutClients />
      <AboutCta />
      <AboutTestimonials />
      <AboutTeam />
    </>
  )
}