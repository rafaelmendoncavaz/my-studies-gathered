import { useEffect } from "react"
import { NewsList } from "./components/news-list/NewsList"
import { useNewsStore } from "./provider/provider"

function App() {

  const { loadAPI } = useNewsStore((store) => store)

  useEffect(() => {
    loadAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="">
      <h1 className="mt-0 mx-auto text-center font-bold text-4xl w-1/2">
        <span className="font-serif italic">News App</span> <br />
        using <span className="text-green-500">React TS</span> with <span className="text-green-500">Axios</span>, <span className="text-green-500">Zustand</span> as States Manager and styled with <span className="text-green-500">TailwindCSS</span>
      </h1>
      <NewsList />
    </div>
  )
}

export default App
