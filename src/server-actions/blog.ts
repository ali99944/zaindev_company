'use server'

import axios_client from "@/lib/axios_client"
import Blog from "../types/blog"
import ApiResponse from "../types/api-reponse"

export const getSingleBlog = async (id: number | string): Promise<Blog> => {
    const response = await axios_client.get(`/blogs/${id}`)
  const data = response.data as ApiResponse<Blog>
  const blog = data.data

  return blog
}

export const getRelatedBlogs = async (category: string | number | null): Promise<Blog[]> => {
    if(!category) return []


    const response = await axios_client.get(`/project-types/${category}`)
    const data = response.data as ApiResponse<{
        projects: Blog[]
    }>

    if(!data.success) return []

    const projects = data.data.projects

    return projects
}
