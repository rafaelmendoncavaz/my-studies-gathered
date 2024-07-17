/* eslint-disable react/prop-types */
import { FavoriteNews } from "./FavoriteNews"

// eslint-disable-next-line react/prop-types
export function FavoriteList({ newsArray, add, remove, isFavorite }) {

  return(
    <ul>
      {
        newsArray.map(news => {
          return (
            <div key={news.id}>

              <p>
                {
                 isFavorite.find(favNews => favNews.id === news.id) ? "Favorito" : "Não Favoritado"
                }
              </p>

              <FavoriteNews title={news.title} author={news.author} category={news.category} content={news.content} />

              <button onClick={() => add(news)}>
                Adicionar Favoritos
              </button>

              <button onClick={() => remove(news)}>
                Remover Favoritos
              </button>
              
            </div>
          )
        })
      }
    </ul>
  )
}