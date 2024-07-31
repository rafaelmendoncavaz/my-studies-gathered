import { useDispatch, useSelector } from "react-redux"
import type { Action, State } from "./store/modules/fruits/reducer"
import type { RootState } from "./store/store"
import { useState } from "react"
import { addFruit } from "./store/modules/fruits/actions"

function App() {
  const [fruit, setFruit] = useState<string>("")
  const dispatch = useDispatch()
  const fruits: State = useSelector((state: RootState) => state.fruits)

  const handleAddFruit: () => Action = () => dispatch(addFruit(fruit))

  return (
    <div>
      <input type="text" onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>
        Adicionar fruta
      </button>
      {
        fruits.map((fruit) => (<p key={fruit}>{fruit}</p>))
      }
    </div>
  )
}

export default App