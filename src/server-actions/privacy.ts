'use server'

import axios_client from "@/lib/axios_client"
import ApiResponse from "../types/api-reponse"
import Privacy from "../types/privacy"

export const getSinglePrivacy = async (id: number | string): Promise<Privacy> => {
    const response = await axios_client.get(`/privacies/${id}`)
    const data = response.data as ApiResponse<Privacy>
    const privacy = data.data

    return privacy
}