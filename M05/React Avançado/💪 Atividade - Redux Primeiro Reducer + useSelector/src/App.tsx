import { useDispatch, useSelector } from "react-redux"
import type { Action, State } from "./store/modules/fruits/reducer"
import type { RootState } from "./store/store"
import { useState } from "react"
import { addFruit, decrement, increment } from "./store/modules/fruits/actions"

function App() {
  const [fruit, setFruit] = useState<string>("")
  const dispatch = useDispatch()
  const fruits: State = useSelector((state: RootState) => state.fruits)
  const counter = useSelector((state: RootState) => state.counter)

  const handleAddFruit: () => Action = () => dispatch(addFruit(fruit))
  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())

  return (
    <div>
      <input type="text" onChange={(e) => setFruit(e.target.value)} />
      <button onClick={handleAddFruit}>
        Adicionar fruta
      </button>
      {
        fruits.map((fruit) => (<p key={fruit}>{fruit}</p>))
      }
      <div>
        Contador: {counter}
        <br />
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    </div>
  )
}

export default App