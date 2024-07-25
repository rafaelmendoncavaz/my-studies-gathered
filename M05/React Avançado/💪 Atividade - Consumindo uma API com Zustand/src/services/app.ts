import axios from "axios";

export const app = axios.create({
  baseURL: "https://blog-fake-api.onrender.com",
  timeout: 10 * 1000
})