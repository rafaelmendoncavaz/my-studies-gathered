import { useContext } from "react"
import { TodoContext } from "../../../context/TodoContext"

export function TodoCard({ todo }) {

  const { setEditTodo, deleteTodo } = useContext(TodoContext)

  return (
    <li>
      <h1>
        {todo.title}
      </h1>
      <p>
        {todo.content}
      </p>
      <button onClick={() => setEditTodo(todo)}>Editar</button>
      <button onClick={() => deleteTodo.mutate(todo.id)}>Excluir</button>
    </li>
  )
}