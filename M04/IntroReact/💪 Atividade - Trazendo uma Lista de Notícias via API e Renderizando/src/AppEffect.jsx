import { useState, useEffect } from 'react'

function AppEffect() {
  const [newsArray, setNewsArray] = useState([])

  useEffect(() => {

    const loadNews = async () => {

      try {
        const api = await fetch("https://blog-fake-api.onrender.com/news");

        if (!api.ok) {
          throw new Error(`API request failed with status ${api.status}`);
        }
        
        const data = await api.json();
        setNewsArray(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setNewsArray([]);
      }
    };

    loadNews();

  }, []);

  return (
    <>
    <h1>
      Notícias renderizadas fazendo requisição de uma API utilizando o useEffect
    </h1>
      <ul>
        {
          newsArray.map(news => {
            return (
              <li key={news.id}>
                <h3>
                  Título: { news.title }
                </h3>
                <p>
                  Autor(es): { news.author }
                </p>
                <p>
                  Categoria: { news.category }
                </p>
                <p>
                  { news.content }
                </p>

              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default AppEffect
