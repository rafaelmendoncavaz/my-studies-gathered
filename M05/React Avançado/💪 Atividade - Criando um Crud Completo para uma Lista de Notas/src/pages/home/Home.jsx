import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodoList } from "../../components/TodoList/TodoList";

export function Home() {

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}