import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TodoCard } from "./TodoCard/TodoCard"

export function TodoList() {

  const { todoList } = useContext(TodoContext)

  return (
    <ul>
      {
        todoList?.map(todo => (
          <TodoCard key={todo.id} todo={todo} />
        ))
      }
    </ul>
  )
}