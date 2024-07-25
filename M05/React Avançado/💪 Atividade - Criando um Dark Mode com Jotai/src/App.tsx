import { useAtom } from "jotai"
import { Moon, Sun } from "lucide-react"
import { toggleDarkModeAtom } from "./atoms/toogle-mode"
import { DarkMain } from "./components/DarkMode"
import { WhiteMain } from "./components/WhiteMode"

function App() {

  const [darkMode, setDarkMode] = useAtom(toggleDarkModeAtom)

  return (
    <>
      {
        darkMode
          ? (
            <DarkMain>
              <h1 className="text-lg font-bold text-zinc-300">
                DarkMode Activated using Jotai and Styled Components
              </h1>
              <button
                className="h-10 w-24 border border-zinc-900 bg-lime-500 flex justify-center items-center text-zinc-950 rounded-lg"
                onClick={() => setDarkMode(!darkMode)}
                type="button"
              >
                {
                  darkMode
                    ? <Sun size={21} />
                    : <Moon size={21} />
                }
              </button>
            </DarkMain>
          )
          : (
            <WhiteMain>
              <h1 className="text-lg font-bold text-zinc-950">
                WhiteMode Activated using Jotai and Styled Components
              </h1>
              <button
                className="h-10 w-24 border border-zinc-900 bg-zinc-950 flex justify-center items-center text-lime-500 rounded-lg"
                onClick={() => setDarkMode(!darkMode)}
                type="button"
              >
                {
                  darkMode
                    ? <Sun size={21} />
                    : <Moon size={21} />
                }
              </button>
            </WhiteMain>
          )
      }

    </>
  )
}

export default App
