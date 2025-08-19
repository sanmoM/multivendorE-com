import { BASE_URL } from "@/config";

export const getData = async (url, options) => {
    const response = await fetch(BASE_URL + url, options);
    const data = await response.json();
    return data;
}