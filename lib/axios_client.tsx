import { apiUrl } from "@/src/constants/app_constants";
import axios from "axios";

const axios_client = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export default axios_client