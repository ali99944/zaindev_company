'use server'

import axios_client from "@/lib/axios_client"
import { ApiData } from "../hooks/queries-actions"

export const getPageData = async <T>(key: string): Promise<T> => {
    const response = await axios_client.get(`/full-data/${key}/key`)
    const data = response.data as ApiData<T>

    return data.data as T
}
