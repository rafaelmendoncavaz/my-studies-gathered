/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { FavoriteList } from './components/FavoriteNews/FavoriteList';

function AppFavorite() {
  const localFavorites = localStorage.getItem("@FAVORITENEWS") 

  const [newsArray, setNewsArray] = useState([])
  const [favoriteNews, setFavoriteNews] = useState(localFavorites ? JSON.parse(localFavorites) : [])

  useEffect(() => {

    const loadNews = async () => {

      try {
        const api = await fetch("https://blog-fake-api.onrender.com/news");

        if (!api.ok) {
          throw new Error(`API request failed! status: ${api.status}`);
        }
        const data = await api.json();
        setNewsArray(data);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    loadNews();

  }, []);

  const addFavoriteNews = (news) => {

    if (!favoriteNews.find(favNews => favNews.id === news.id)) {

      setFavoriteNews([...favoriteNews, news]); 

    }

  }

  const removeFavoriteNews = (news) => {

    setFavoriteNews(favoriteNews.filter(item => item.id !== news.id));

  }

  useEffect(() => {

    localStorage.setItem("@FAVORITENEWS", JSON.stringify(favoriteNews));

  }, [favoriteNews])

  return (
    <>
    <h1>
      Notícias renderizadas fazendo requisição de uma API utilizando o useEffect e salvando notícias favoritas no localStorage
    </h1>
      <FavoriteList newsArray={newsArray} add={addFavoriteNews} remove={removeFavoriteNews} isFavorite={favoriteNews} />
    </>
  )
}

export default AppFavorite
