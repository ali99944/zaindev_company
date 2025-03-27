'use server'

import axios_client from "@/lib/axios_client"
import ApiResponse from "../types/api-reponse"
import Seo from "../types/seo"

export const getSeoData = async (key: string): Promise<Seo> => {


    const response = await axios_client.get(`/page-seo/${key}/key`)
    const data = response.data as ApiResponse<Seo>
    const seo = data.data

    return seo
}
