import { Trash2 } from "lucide-react";
import { useTodoStore, type Todos } from "../../../provider/provider";

interface TodoCardProps {
  todo: Todos
}

export function TodoCard({ todo }: TodoCardProps) {

  const { deleteTodo } = useTodoStore(({ deleteTodo }) => ({ deleteTodo }))

  return (
    <li
      tabIndex={0}
      className="flex flex-col px-4 py-2 bg-stone-900 border border-stone-600 rounded hover:border-stone-300 focus:border-sky-700 cursor-pointer"
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">
            {todo.task}
          </h1>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-stone-300 hover:text-sky-700"
          >
            <Trash2 size={21} />
          </button>
          <div className={
            `rounded-full w-4 h-4 
            ${todo.priority === "low" && "bg-green-500"} 
            ${todo.priority === "medium" && "bg-yellow-500"} 
            ${todo.priority === "high" && "bg-red-500"}`} />
        </div>
      </div>

      <p className="font-semibold">
        {todo.description}
      </p>
    </li>
  )
}