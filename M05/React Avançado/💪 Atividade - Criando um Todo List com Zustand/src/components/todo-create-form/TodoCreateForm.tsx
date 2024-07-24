import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useTodoStore } from "../../provider/provider"

const priorities = ['high', 'medium', 'low']
const createTodoFormSchema = z.object({
  task: z.string()
    .nonempty('O nome da tarefa é obrigatório')
    .min(4, 'O campo deve conter no mínimo 4 caracteres'),
  priority: z.string()
    .refine(prio => priorities.includes(prio), {
      message: 'Selecione uma prioridade',
    }),
  description: z.string()
    .nonempty('É necessário uma descrição da tarefa')
    .min(8, 'A tarefa deve conter no mínimo 8 caracteres')
    .max(512, 'A tarefa deve conter no máximo 512 caracteres'),
})

type createTodoFormData = z.infer<typeof createTodoFormSchema>

export function TodoCreateForm() {

  const { addTodo } = useTodoStore(({ addTodo }) => ({ addTodo }))

  const { setValue, register, handleSubmit, formState: { errors } } = useForm<createTodoFormData>({
    resolver: zodResolver(createTodoFormSchema)
  })

  function createTask(data: createTodoFormData) {
    const todo = {
      id: Date.now(),
      ...data
    }
    addTodo(todo)
    setValue('task', '')
    setValue('priority', '')
    setValue('description', '')
  }

  return (
    <form
      onSubmit={handleSubmit(createTask)}
      className="flex flex-col gap-4 w-full max-w-2xl"
    >
      <div className="flex items-center justify-between gap-10">
        <div className="flex flex-col flex-1 gap-2">
          <label
            className="font-semibold text-base"
            htmlFor="task">
            Tarefa
          </label>
          <input
            className="h-10 rounded shadow-md bg-stone-900 px-4 outline-none border border-stone-600 focus:border-stone-300"
            type="text"
            placeholder="Digite o título da sua tarefa"
            {...register('task')}
          />
          {
            errors.task && <span className="text-red-600 text-sm">{errors.task?.message}</span>
          }
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="font-semibold text-base"
            htmlFor="priority"
          >
            Prioridade
          </label>
          <select
            className="h-10 rounded shadow-md bg-stone-900 px-4 outline-none border border-stone-600 focus:border-stone-300"
            {...register('priority')}
          >
            <option value="">Selecione uma prioridade</option>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
          {
            errors.priority && <span className="text-red-600 text-sm">{errors.priority?.message}</span>
          }
        </div>
      </div>

      <label
        className="font-semibold text-base"
        htmlFor="description"
      >
        Descrição
      </label>
      <div className="max-w-full">
        <textarea
          className="w-full rounded shadow-md bg-stone-900 px-4 py-2 outline-none border border-stone-600 focus:border-stone-300"
          placeholder="Descreva a sua tarefa..."
          {...register('description')}
        />
        {
          errors.description && <span className="text-red-600 text-sm">{errors.description?.message}</span>
        }
      </div>
      <button
        className="h-10 rounded shadow-md bg-sky-800 font-bold hover:bg-sky-400 transition-colors"
        type="submit"
      >
        Adicionar Tarefa
      </button>
    </form>
  )
}