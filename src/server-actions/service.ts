'use server'

import axios_client from "@/lib/axios_client"
import ServiceCategory from "../types/service-category"
import ApiResponse from "../types/api-reponse"


export const getSingleServiceCategory = async (id: number | string): Promise<ServiceCategory> => {
    const response = await axios_client.get(`services-categories/${id}`)
  const data = response.data as ApiResponse<ServiceCategory>
  const service_category = data.data

  return service_category
}