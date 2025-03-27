interface Project {
  id: number
  name: string
  description: string
  logo: string
  image: string
  status: number
  short: string
  icon: string
  location: string
  created_at: string
  updated_at: string
  details: {
    client: string
    completion_date: string
    technologies: string[]
  }

  project_images: ProjectImage[]
  project_type: string
  category_info: string

  seo_title: string | null
  seo_keywords: string | null
  seo_description: string | null

  client: string
}

export interface ProjectImage {
    id: number
    image: string
    alt: string
}

export interface ProjectCategory {
    id: number
}

export default Project