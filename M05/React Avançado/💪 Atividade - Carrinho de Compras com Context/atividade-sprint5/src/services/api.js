import axios from "axios";

export const app = axios.create({
    baseURL: "https://fashion-store-api.onrender.com/",
    timeout: 8 * 1000,
})