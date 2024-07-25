import { useNewsStore } from "../../provider/provider"
import { NewsCard } from "./news-card/NewsCard"

export function NewsList() {

  const { newsList, loading, error } = useNewsStore((store) => store)

  return (
    <ul className="flex flex-col gap-10 px-5 py-5 text-justify">
      {
        loading && <p className="self-center text-2xl text-zinc-300 font-bold">Carregando...</p>
      }
      {
        newsList.map(news => {
          return <NewsCard key={news.id} news={news} />
        })
      }
      {
        error && <p className="self-center text-2xl text-red-500 font-bold"> Ocorreu um erro</p>
      }
    </ul>
  )
}