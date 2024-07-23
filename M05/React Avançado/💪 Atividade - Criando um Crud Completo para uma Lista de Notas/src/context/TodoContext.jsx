import { createContext, useEffect, useState } from "react";
import { app } from "../services/app"
import { useQuery, useMutation } from "@tanstack/react-query";

export const TodoContext = createContext({})

export function TodoProvider({ children }) {

  const [editTodo, setEditTodo] = useState(null)

  const { data: todoList } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      const { data } = await app.get("/todos")
      return data
    }
  })

  const revalidate = () => {
    client.invalidateQueries({
      queryKey: ["todo"]
    })
  }

  const createTodoFn = async (formData) => {
    const newTodo = { ...formData }
    return await app.post("/todos", newTodo)
  }

  const updateTodoFn = async (formData) => {
    const id = editTodo.id
    return await app.patch(`todos/${id}`, formData)
  }

  const deleteTodoFn = async (id) => {
    return await app.delete(`/todos/${id}`)
  }

  const createTodo = useMutation({
    mutationFn: createTodoFn,
    onSuccess: revalidate
  })

  const updateTodo = useMutation({
    mutationFn: updateTodoFn,
    onSuccess() {
      setEditTodo(null)
      revalidate()
    }
  })

  const deleteTodo = useMutation({
    mutationFn: deleteTodoFn,
    onSuccess: revalidate
  })

  return (
    <TodoContext.Provider value={
      {
        todoList,
        createTodo,
        deleteTodo,
        editTodo,
        setEditTodo,
        updateTodo,
        useEffect
      }
    }>
      {children}
    </TodoContext.Provider>
  )
}