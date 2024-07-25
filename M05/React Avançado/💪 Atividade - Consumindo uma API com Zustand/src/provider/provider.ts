import { create } from "zustand"
import { app } from "../services/app"

export interface News {
  id: number,
  title: string,
  content: string,
  category: string,
  author: string
}

interface NewsStore {
  newsList: News[],
  loading: boolean,
  error: string,
  loadAPI: () => void,
}

export const useNewsStore = create<NewsStore>((set) => ({
  newsList: [],
  loading: false,
  error: "",
  loadAPI: async () => {
    try {
      set({
        loading: true,
        error: ""
      })
      const { data } = await app.get("/news")
      set({
        newsList: data
      })
    } catch (error) {
      set({
        error: "Erro ao carregar a API"
      })
      console.error(error)
    } finally {
      set({
        loading: false,
      })
    }
  }
}))