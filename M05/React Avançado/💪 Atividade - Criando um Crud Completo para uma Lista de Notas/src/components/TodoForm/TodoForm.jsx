import { useForm } from "react-hook-form"
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export function TodoForm() {

  const { createTodo, editTodo, updateTodo, useEffect } = useContext(TodoContext)

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (editTodo) {
      setValue("title", editTodo.title);
      setValue("content", editTodo.content);
    }
  }, [editTodo, setValue])

  const onSubmit = (formData) => {
    if (!editTodo) {
      createTodo.mutate(formData)
    } else {
      updateTodo.mutate(formData)
    }
    setValue("title", "")
    setValue("content", "")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Título" type="text" {...register("title", { required: true, maxLength: 52 })} />
      <textarea placeholder="Tarefa" {...register("content", { required: true, maxLength: 512 })} />
      <button type="submit">{editTodo ? "Editar" : "Adicionar"}</button>
    </form>
  )
}