import axios from "axios";
import { apiUrl } from "../constants/app_constants";
import Cookie from "js-cookie";

export const useAxios = (
  contentType?: "aplication/json" | "multipart/form-data"
) => {
  const token = "";

  return axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": contentType as string,
      accept: "application/json",
      locale: Cookie.get("locale") || "ar",
      authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};
