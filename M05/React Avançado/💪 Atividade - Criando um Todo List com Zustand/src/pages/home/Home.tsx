import { TodoCreateForm } from "../../components/todo-create-form/TodoCreateForm";
import { TodoList } from "../../components/todo-list/TodoList";

export function Home() {

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <h1 className="max-w-xl text-center text-2xl font-bold">
        Lista "Todo" utilizando <span className="text-sky-500">React Hook Form</span> com validação em <span className="text-sky-500">Zod</span>, gerenciamento de estados locais com <span className="text-sky-500">Zustand</span> e estilização com <span className="text-sky-500">TailwindCSS</span>
      </h1>
      <TodoCreateForm />
      <TodoList />
    </div>
  )
}