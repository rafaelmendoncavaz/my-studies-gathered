import axios from "axios";

export const app = axios.create({
  baseURL: "https://todolist-fake-api.onrender.com/api/",
  timeout: 10 * 1000,
})