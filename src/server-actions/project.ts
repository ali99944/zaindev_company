'use server'

import axios_client from "@/lib/axios_client"
import ApiResponse from "../types/api-reponse"
import Project from "../types/project"

export const getSingleProject = async (id: number | string): Promise<Project> => {
    const response = await axios_client.get(`/projects/${id}`)
  const data = response.data as ApiResponse<Project>
  const project = data.data

  return project
}

export const getRelatedProjects = async (category: string | number | null): Promise<Project[]> => {
    if(!category) return []


    const response = await axios_client.get(`/project-types/${category}`)
    const data = response.data as ApiResponse<{
        projects: Project[]
    }>

    if(!data.success) return []

    const projects = data.data.projects

    return projects
}
