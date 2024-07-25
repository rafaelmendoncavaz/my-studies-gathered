import type { News } from "../../../provider/provider";

interface NewsCardProps {
  news: News
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function NewsCard({ news }: NewsCardProps) {

  return (
    <li className="flex flex-col px-5 py-2 rounded bg-zinc-900 space-y-2">
      <h1 className="text-2xl font-bold text-zinc-300">
        {news.title}
      </h1>
      <p className="text-sm font-semibold text-zinc-300">
        {capitalizeFirstLetter(news.category)} - <span className="italic">escrito por {news.author}</span>
      </p>
      <p className="font-semibold text-base text-zinc-300">
        {news.content}
      </p>
    </li>
  )
}