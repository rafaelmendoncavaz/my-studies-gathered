import { useTodoStore } from "../../provider/provider";
import { TodoCard } from "./todo-card/TodoCard";

export function TodoList() {

  const { todoList } = useTodoStore(({ todoList }) => ({ todoList }))

  return (
    <ul className="flex flex-col gap-4 w-full max-w-5xl">
      {
        todoList.map((todo, index) => {
          return <TodoCard key={index} todo={todo} />
        })
      }
    </ul>
  )
}