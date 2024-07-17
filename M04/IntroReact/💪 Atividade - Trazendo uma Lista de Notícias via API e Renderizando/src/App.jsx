import { useState } from 'react'

function App() {
  const [newsArray, setNewsArray] = useState([])

  const fetchNews = async () => {

    try {
      await fetch("https://blog-fake-api.onrender.com/news")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setNewsArray(data)
        console.log(data)
      })

    } catch (error) {
      console.error('Error:', error)
    }
    
  }

  return (
    <>
      <button onClick={fetchNews}>
        Buscar notícias
      </button>
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

export default App
